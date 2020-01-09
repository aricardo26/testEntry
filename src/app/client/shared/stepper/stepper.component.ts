import {Directionality} from '@angular/cdk/bidi';
import {ChangeDetectorRef, Component} from '@angular/core';
import {CdkStepper} from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper {

  constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef) {
    super(dir, changeDetectorRef);
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
