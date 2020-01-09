import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {accounType} from '../../../../core/enums/accountType.enums';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  user = true;
  normal: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required, Validators.minLength(6)]]
  });
  commerciant: FormGroup = this.fb.group({
    name: ['', Validators.required],
    taxId: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required, Validators.minLength(6)]]
  });

  submitted = false;
  loading = false;
  error = '';
  valueSubmmited: any;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  get fn() {
    return this.normal.controls;
  }

  get fc() {
    return this.commerciant.controls;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
     if (params.get('type') === 'commerciant') {
       this.user = false;
     }
    });
  }

  onChangeView() {
    this.user = !this.user;
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.valueSubmmited = {};
    if (this.user && this.normal.invalid) {
      return;
    } else if ( this.user === false && this.commerciant.invalid ) {
      return;
    }

    this.loading = true;
    if (this.user) {
        this.valueSubmmited = this.normal.value;
        this.valueSubmmited.accountType = accounType.PERSONAL;
        delete this.valueSubmmited.confirm;
    } else {
      this.valueSubmmited = this.commerciant.value;
      this.valueSubmmited.accountType =  accounType.BUSINESS;
      delete this.valueSubmmited.confirm;
    }

    this.authenticationService.registerUser( this.valueSubmmited )
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/confirm'], { queryParams: { name: this.valueSubmmited.name }});
          },
          error => {
            this.error = error;
            this.loading = false;
          });
  }
}
