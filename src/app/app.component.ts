import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'porta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private  readonly router: Router) {
  }
  goCourse(): void {
    alert('holla');
    this.router.navigate(['/course']);
  }

  goHome(): void{
    alert('hola');
    this.router.navigate(['/home']);
  }

  goProject(): void {
    this.router.navigate(['project']);
  }
}
