import {Component, OnInit} from '@angular/core';
import {ProjectLang} from "../../../setting/lang/project.lang";

@Component({
  selector: 'porta-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  lang = ProjectLang;
  constructor() {
  }

  ngOnInit(): void {
  }

}
