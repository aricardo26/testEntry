import {Component, OnInit} from '@angular/core';
import {FiltersModels} from '../../../../core/models/filters.models';
import {FiltersAdminService} from '../../core/services/filtersAdmin.service';
import {FiltersService} from '../../../../core/services/filters.service';
import {FilterTypeRendererComponent} from './filter-type-renderer/filter-type-renderer.component';
import {FilterValuesRendererComponent} from './filter-values-renderer/filter-values-renderer.component';
import _ from 'lodash';
import {filtersType} from '../../../../core/enums/filtersType.enums';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SimpleDialogComponent} from '../../shared/simple-dialog/simple-dialog.component';
import {NotificationsService} from '../../core/services/notifications.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: FiltersModels[];
  settings: any;

  constructor(
    private filtersAdminService: FiltersAdminService,
    private filterService: FiltersService,
    public modalService: NgbModal,
    private notification: NotificationsService) {
  }

  ngOnInit() {
    this.settings = {
      delete: {
        confirmDelete: true,
      },
      edit: {
        confirmSave: true,
      },
      add: {
        confirmCreate: true,
        addButtonContent: '<i class="ion-ios-plus-outline">Agregar</i>',
        createButtonContent: '<i class="ion-checkmark">Crear</i>',
        cancelButtonContent: '<i class="ion-close">Cancelar</i>',
      },
      columns: {
        name: {
          title: 'Nombre'
        },
        filterType: {
          title: 'Tipo de Filtro',
          type: 'custom',
          renderComponent: FilterTypeRendererComponent,
          editor: {
            type: 'list',
            config: {
              list: this.formatFiltersEnums()
            }
          },
          filter: {
            type: 'list',
            config: {
              selectText: 'Seleccione',
              list: this.formatFiltersEnums()
            }
          }
        },
        values: {
          title: 'Valores',
          type: 'custom',
          renderComponent: FilterValuesRendererComponent,
        },
        isUsed: {
          title: 'En uso',
          editable: false,
          addable: false,
          editor: {
            type: 'checkbox'
          },
          filter: {
            type: 'checkbox',
            config: {
              resetText: 'Limpiar',
              true: 'true',
              false: 'false',
            }
          }
        }
      }
    };
    this.getAllFilters();
  }


  onDeleteConfirm(event) {
    const modalRef = this.modalService.open(SimpleDialogComponent);
    modalRef.componentInstance.body = 'Está seguro de eliminar este contenido';
    modalRef.result.then((userResponse) => {
      if (userResponse) {
        this.filtersAdminService.delete(event.data.id).subscribe(res => {
          this.getAllFilters();
          event.confirm.resolve(event.newData);
          this.notification.showNotificationTR_Success('Información', 'Elemento eliminado satisfactoriamente');
        });
      } else {
        event.confirm.reject();
      }
    });
  }

  onSaveConfirm(event) {
    if (event.newData.values !== event.data.values) {
      event.newData.values = event.newData.values.split(',');
    }
    this.filtersAdminService.save(event.newData).subscribe(res => {
      this.getAllFilters();
      event.confirm.resolve(event.newData);
      this.notification.showNotificationTR_Success('Información', 'Elemento actualizado satisfactoriamente');
    });
  }

  onCreateConfirm(event) {
    event.newData.isUsed = false;
    event.newData.priority = 0;
    event.newData.values = event.newData.values.split(',');
    this.filtersAdminService.save(event.newData).subscribe(res => {
      this.getAllFilters();
      event.confirm.resolve(event.newData);
      this.notification.showNotificationTR_Success('Información', 'Elemento creado satisfactoriamente');
    });
  }

  getAllFilters() {
    this.filterService.getAll().subscribe(res => {
      this.filters = res;
    });
  }

  formatFiltersEnums() {
    return _.map(filtersType, (title, value) => ({value, title}));
  }

}
