import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeaderLang} from "../../../../setting/lang/header.lang";

@Component({
  selector: 'porta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lang = HeaderLang;

  constructor(private  readonly router: Router) {
  }

  ngOnInit(): void {  }

  navegate(value: string): void {
    this.router.navigate([`/${value}`]);
  }

}
