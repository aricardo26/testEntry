import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemSelectedEvent, Ng2TreeSettings, NodeEvent, NodeMenuItemAction, TreeModel} from 'ng2-tree';
import {CategoriesModels} from '../../../../core/models/categories.models';
import {CategoriesAdminService} from '../../core/services/categoriesAdmin.service';
import {CategoriesService} from '../../../../core/services/categories.service';
import {NotificationsService} from '../../core/services/notifications.service';
import {FiltersService} from '../../../../core/services/filters.service';
import {FiltersModels} from '../../../../core/models/filters.models';
import _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  loading = false;
  categoriesloading = false;
  submitted = false;

  categories: CategoriesModels[];
  filters: FiltersModels[];
  filtersSelected: any;
  categorySelected: string = null;
  titleEditorCard = 'Agregar';
  edit = false;

  public settings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: false
  };

  public categoriesTree: TreeModel = {
    value: 'Categorias',
    settings: {
      menuItems: [
        {action: NodeMenuItemAction.Rename, name: 'Renombrar', cssClass: 'fas fa-signature'},
        // {action: NodeMenuItemAction.Remove, name: 'Eliminar', cssClass: 'far fa-trash-alt'},
        {action: NodeMenuItemAction.Custom, name: 'Editar', cssClass: 'far fa-edit'}
      ],
      isCollapsedOnInit: false
    },
    children: []
  };

  @ViewChild('categoriesTree1', {static: false}) public categoriesTree1;

  constructor(private categoriesAdminService: CategoriesAdminService,
              private categoriesService: CategoriesService,
              private notification: NotificationsService,
              private filtersService: FiltersService,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.getAllCategories();
    this.getAllFilters();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.categoryForm.controls;
  }

  getAllCategories() {
    this.categoriesloading = false;
    this.categoriesService.getAll().subscribe(res => {
      this.categories = res;
      this.categoriesTree.children = this.getCategoriesTreeMap(this.categories);
      this.categoriesloading = true;
    });
  }

  getAllFilters() {
    this.filtersService.getAll().subscribe(res => {
      this.filters = res;
    });
  }

  createChildrenId(category: CategoriesModels) {
    const cantChildren = (category.categories.length + 1).toString().padStart(2, '0');
    return category.id + cantChildren;
  }

  editFromPanel() {
    const children = {
      name: this.f.name.value,
      filters: this.getObjectFiltersSelected()
    };
    const category = this.saveChangedCategory([this.getObjectCategorySelected(this.categories)], children, '', 'editChildren')[0];
    this.saveCategory(category, true);
  }

  saveFromPanel() {
    let category = null;
    if (this.categorySelected) {
      const children = {
        name: this.f.name.value,
        filters: this.getObjectFiltersSelected(),
        categories: []
      };
      category = this.saveChangedCategory([this.getObjectCategorySelected(this.categories)], children, '', 'addChildren')[0];
    } else {
      category = {
        name: this.f.name.value,
        filters: this.getObjectFiltersSelected(),
        categories: []
      };
    }
    this.saveCategory(category, true);
  }

  saveCategory(category: any, fromForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.categoryForm.invalid && fromForm) {
      return;
    }
    this.loading = true;
    this.categoriesAdminService.save(category).subscribe(res => {
      this.getAllCategories();
      let message = '';
      if (this.edit) {
        message = 'Elemento editado satisfactoriamente';
      } else {
        message = 'Elemento creado satisfactoriamente';
      }
      this.notification.showNotificationTR_Success('Información', message);
      this.reset();
    }, error => {
      this.loading = false;
    });
  }

  saveChangedCategory(categories: any, children, newName, action) {
    const scope = this;
    return _.map(categories, o => {
      if (o.id === scope.categorySelected) {
        switch (action) {
          case 'rename':
            return {
              ...o,
              name: newName
            };
          case 'addChildren':
            children.id = scope.createChildrenId(o);
            return {
              ...o,
              children: o.categories.push(children)
            };
          case 'editChildren':
            return {
              ...o,
              name: children.name,
              filters: children.filters
            };
        }
      } else {
        return {
          ...o,
          categories: scope.saveChangedCategory(o.categories, children, newName, action)
        };
      }
    });
  }

  getCategoriesTreeMap(treeChildren: CategoriesModels[]) {
    const scope = this;
    return _.map(treeChildren, o => {
      if (o.categories.length > 0) {
        return {
          children: scope.getCategoriesTreeMap(o.categories),
          filters: o.filters,
          value: o.name,
          id: o.id
        };
      } else {
        return {
          filters: o.filters,
          value: o.name,
          id: o.id
        };
      }
    });
  }

  getObjectCategorySelected(categories: CategoriesModels[]) {
    const scope = this;
    return _.find(categories, o => {
      if (scope.categorySelected.includes(o.id)) {
        return o;
      } else {
        if (o.categories.length > 0) {
          scope.getObjectCategorySelected(o.categories);
        }
      }
    });
  }

  getObjectFiltersSelected() {
    const scope = this;
    if (this.filtersSelected && scope.filtersSelected.length > 0) {
      return _.filter(this.filters, o => {
        if (scope.filtersSelected.includes(o.id)) {
          return o;
        }
      });
    } else {
      return [];
    }
  }

  reset() {
    this.categoryForm.reset();
    this.filtersSelected = [null];
    this.unselectTree();
    this.editOrAdd(false);
  }

  resetTreeSelect() {
    this.unselectTree();
  }

  unselectTree() {
    this.handleActionOnFFS(this.categorySelected, 'unselect');
    this.categorySelected = null;
  }

  handleActionOnFFS(id: number | string, action: string) {
    const treeController = this.categoriesTree1.getControllerByNodeId(id);
    if (treeController && typeof treeController[action] === 'function') {
      treeController[action]();
    } else {
      console.log('There isn`t a controller for a node with id - ' + id);
    }
  }

  public onNodeRemoved(e: NodeEvent): void {
    console.log('Removed');
    if (e.node.isLeaf()) {

    } else {
      this.categoriesTree.children = this.getCategoriesTreeMap(this.categories);
    }
  }

  public onNodeMoved(e: NodeEvent): void {
    console.log('Moved');
  }

  public onNodeRenamed(e: NodeEvent): void {
    console.log('Renamed');
    this.categorySelected = String(e.node.id);
    const category = this.saveChangedCategory([this.getObjectCategorySelected(this.categories)], null, e.node.value, 'rename')[0];
    this.saveCategory(category, false);
  }

  public onNodeSelected(e: NodeEvent): void {
    console.log('Selected');
    this.categorySelected = String(e.node.id);
  }

  public onNodeUnselected(e: NodeEvent): void {
    this.categorySelected = null;
  }

  public onMenuItemSelected(e: MenuItemSelectedEvent) {
    console.log(`You selected ${e.selectedItem} menu item`);
    switch (e.selectedItem) {
      case 'Editar':
        this.f.name.setValue(e.node.value);
        this.filtersSelected = _.map(e.node.node.filters, 'id');
        this.categorySelected = String(e.node.id);
        this.editOrAdd(true);
        break;
    }
  }

  editOrAdd(edit) {
    if (edit) {
      this.edit = true;
      this.titleEditorCard = 'Editar';
    } else {
      this.edit = false;
      this.titleEditorCard = 'Agregar';
    }

  }

  onNodeCreated(e: any) {
    // todo implementar estos metodos despues
  }
  onNodeExpanded(e: any) {
    // todo implementar estos metodos despues
  }
  onNodeCollapsed(e: any) {
    // todo implementar estos metodos despues
  }
}
