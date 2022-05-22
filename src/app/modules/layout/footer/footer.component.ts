import { Component, OnInit } from '@angular/core';
import {FooterLang} from "../../../setting/lang/footer.lang";

@Component({
  selector: 'porta-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lang = FooterLang;
  constructor() { }

  ngOnInit(): void {
  }

}
