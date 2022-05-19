import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'porta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = [
    {code: 'home', value:'Acerca'},
    {code: 'course', value:'Certificados'},
    {code: 'project', value:'Proyectos'}];
  constructor(private  readonly router: Router) {
  }

  ngOnInit(): void {  }

  navegate(value: string): void {
    this.router.navigate([`/${value}`]);
  }

}
