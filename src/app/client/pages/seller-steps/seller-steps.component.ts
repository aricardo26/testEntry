import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-seller-steps',
  templateUrl: './seller-steps.component.html',
  styleUrls: ['./seller-steps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SellerStepsComponent implements OnInit {

  step1: FormGroup;
  step2: FormGroup = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    phone: ['']
  });
  step3: FormGroup = this.fb.group({
    account: ['', Validators.required, Validators.minLength(16), Validators.maxLength(16)],
    owner: ['', Validators.required],
    date: ['', Validators.required],
    code: ['', Validators.required],
    bank: ['', Validators.required],
    titular: ['', Validators.required],
    numero_cuenta: ['', Validators.required, Validators.minLength(16), Validators.maxLength(16)],
    cbu: ['', Validators.required],
  });
  step4: FormGroup = this.fb.group({
    tributo: ['', Validators.required],
    customRadioInline1: ['false', Validators.required],
    file1: ['', Validators.required],
    file2: ['', Validators.required],
    from: ['', Validators.required],
    to: ['', Validators.required],
    ingresos: ['', Validators.required],
    ingresos_brutos: ['', Validators.required],
  });

  name = '';
  taxId = '';
  iva = true;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name');
      this.taxId = params.get('taxId');
    });
  }

  get step1Completed() {
    return true;
  }

  get step2Completed() {
    return !this.step2.invalid;
  }

  get step3Completed() {
    return !this.step3.invalid;
  }

  get step4Completed() {
    return !this.step4.invalid;
  }

  get st2() {
    return this.step2.controls;
  }

  get st3() {
    return this.step3.controls;
  }

  get st4() {
    return this.step4.controls;
  }
}
