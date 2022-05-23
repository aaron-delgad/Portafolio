import { Component, OnInit } from '@angular/core';
import {NoFoundLang} from "../../../setting/lang/no-found.lang";

@Component({
  selector: 'porta-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss']
})
export class NoFoundComponent implements OnInit {
  lang = NoFoundLang;
  constructor() { }

  ngOnInit(): void {
  }

}
