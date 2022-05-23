import {Component, OnInit} from '@angular/core';
import {homeLang} from "../../../setting/lang/home.lang";
import {ContactConst} from "../../../setting/constants/contact.const";

@Component({
  selector: 'porta-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lang = homeLang;
  langContact = ContactConst;

  constructor() {
  }

  ngOnInit(): void {
  }

}
