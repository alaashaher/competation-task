import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-app';
  constructor(
    private router: Router
  ) { }
  gotoFrom() {
    this.router.navigate(['FormComponent']);
  }
  gotoResult() {
    this.router.navigate(['ResultComponent']);
  }
}
