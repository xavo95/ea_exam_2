import {Component} from '@angular/core';

import {AddstudentPage} from '../addstudent/addstudent';
import {AddstudentintoasubjectPage} from '../addstudentintoasubject/addstudentintoasubject';
import {SearchPage} from '../search/search';
import {SubjectlistPage} from '../subjectlist/subjectlist';
import {StatisticsPage} from "../statistics/statistics";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  addStudentTab = AddstudentPage;
  addStudentToSubjectTab = AddstudentintoasubjectPage;
  searchTab = SearchPage;
  subjectListTab = SubjectlistPage;
  statisticsTab = StatisticsPage;

  constructor() {

  }
}
