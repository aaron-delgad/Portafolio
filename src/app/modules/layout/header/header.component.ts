import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'porta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private  readonly router: Router) { }

  ngOnInit(): void {

  }

  goCourse(): void {
    this.router.navigate(['course']);
  }

  goHome(): void{
    this.router.navigate(['home']);
  }

  goProject(): void {
    this.router.navigate(['project']);
  }
}
