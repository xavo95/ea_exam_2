import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'subjectlist.html'
})
export class SubjectlistPage {
  private apiUrl = 'http://localhost:3000';
  private apiUrl2 = 'http://localhost:3000/subject';

  su: any;
  stdetalle: any;
  sudetalle: any;
  subject: {
    name,
    students,
    studies,
    quadrimestre
  };
  student1: any;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    console.log('Hello user');
    this.getSubjects();
    this.subject = {
      'name': '',
      'students': '',
      'studies': '',
      'quadrimestre': ''
    };
    this.sudetalle = {
      '_id': '',
      'name': '',
      'students': '',
      'studies': '',
      'quadrimestre': ''
    };
    this.stdetalle = {
      '_id': '',
      'name': '',
      'surnames': '',
      'country': '',
      'phones': '',
      'age': '',
      'gender': ''
    };
  }

  getSubjects() {
    this.http.get(this.apiUrl + '/subjects').map((res: Response) => res).subscribe(su => {
      console.log(su);
      this.su = su;
    });
  }

  clicking(str) {
    console.log(str);
    this.http.get(this.apiUrl + '/subject/' + str).map((res: Response) => res).subscribe(sudetalle => {
      this.sudetalle = sudetalle;
      console.log(this.sudetalle);
      this.student1 = this.sudetalle.students[0];
    });
  }

  clicking2(str) {
    console.log(str);
    this.http.get(this.apiUrl + '/student/' + str).map((res: Response) => res).subscribe(stdetalle => {
      this.stdetalle = stdetalle;
    });
  }

  onsubmit() {
    this.postSubject();
  }

  postDataRequest() {
    return this.http.post(this.apiUrl2, this.subject);
  }

  postSubject() {
    this.postDataRequest().subscribe();
  }
}
