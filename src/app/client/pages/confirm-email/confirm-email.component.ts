import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  logged;
  name = '';
  token = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name');
      this.token = params.get('token');
      if (this.name !== null && this.token === null) {
        this.logged = false;
      } else if (this.name !== null && this.token !== null && this.token.length === 36) {
        this.authenticationService.confirmEmail(this.token)
          .pipe(first())
          .subscribe(
            data => {
              this.logged = true;
            },
            error => {
              this.error = error;
            });
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
