import {Component, OnInit} from '@angular/core';
import {UnitsAdminService} from '../../core/services/unitsAdmin.service';
import {UnitsService} from '../../../../core/services/units.service';
import {UnitsModels} from '../../../../core/models/units.models';
import {NotificationsService} from '../../core/services/notifications.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  units: UnitsModels[];
  settings: any;

  constructor(
    private unitAdminService: UnitsAdminService,
    private unitService: UnitsService,
    private notification: NotificationsService
  ) {

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
        code: {
          title: 'Código',
          type: 'text',
        },
        description: {
          title: 'Descripción',
          type: 'text',
        }
      }
    };
    this.getAllUnits();
  }

  onDeleteConfirm(event) {
  }

  onSaveConfirm(event) {
    if (event.newData.values !== event.data.values) {
      event.newData.values = event.newData.values.split(',');
    }
    this.unitAdminService.save(event.newData).subscribe(res => {
      this.getAllUnits();
      event.confirm.resolve(event.newData);
      this.notification.showNotificationTR_Success('Información', 'Elemento actualizado satisfactoriamente');
    });
  }

  onCreateConfirm(event) {
    this.unitAdminService.save(event.newData).subscribe(res => {
      this.getAllUnits();
      event.confirm.resolve(event.newData);
      this.notification.showNotificationTR_Success('Información', 'Elemento creado satisfactoriamente');
    });
  }

  getAllUnits() {
    this.unitService.getAll().subscribe(res => {
      this.units = res;
    });
  }

}
