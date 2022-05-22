import {Component, OnInit} from '@angular/core';
import {courseLang} from "../../setting/lang/course.lang";

@Component({
  selector: 'porta-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  lang = courseLang;
  constructor() { }

  ngOnInit(): void {
  }

}
