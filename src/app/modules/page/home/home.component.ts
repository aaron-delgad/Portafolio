import {Component, OnInit} from '@angular/core';
import {homeLang} from "../../../setting/lang/home.lang";

@Component({
  selector: 'porta-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lang = homeLang;
  constructor() { }

  ngOnInit(): void {
  }

}
