import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'addstudentintoasubject.html'
})
export class AddstudentintoasubjectPage {
  private apiUrl = 'http://localhost:3000';
  private apiUrl2 = 'http://localhost:3000/student';
  studentsubject: {
    studentid,
    subjectid
  };
  su: any;

  onSubmit() {
    this.updateSubject();
  }

  constructor(public navCtrl: NavController, private http: HttpClient) {
    console.log('Hello user');
    this.getSubjects();
    this.studentsubject = {
      'studentid': '',
      'subjectid': ''
    };
  }

  updateSubject() {
    this.http.put(this.apiUrl + '/subject/' + this.studentsubject.subjectid, this.studentsubject).subscribe();
    console.log(this.studentsubject);
  }

  getSubjects() {
    this.http.get(this.apiUrl + '/subjects').map((res: Response) => res).subscribe(su => {
      console.log(su);
      this.su = su;
    });
  }

}
