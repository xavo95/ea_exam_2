import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'search.html'
})
export class SearchPage {
  private apiUrl = 'http://localhost:3000';
  private apiUrl2 = 'http://localhost:3000/subject';
  sub: any;
  subject: {
    name,
    students,
    studies,
    quadrimestre
  };

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.subject = {
      'name': '',
      'students': '',
      'studies': '',
      'quadrimestre': ''
    };
  }

  onsubmit() {
    this.searchSubject();
  }

  onsubmit2() {
    this.searchSubject2();
  }

  onsubmit3() {
    this.searchSubject3();
  }

  searchSubject() {
    console.log(this.subject.name);
    this.http.get(this.apiUrl + '/subjectname/' + this.subject.name).map((res: Response) => res).subscribe(sudetalle => {
      console.log(sudetalle);
      this.sub = sudetalle;
      console.log(this.subject);
    });
  }

  searchSubject2() {
    console.log(this.subject.name);
    this.http.get(this.apiUrl + '/subjectstudies/' + this.subject.studies).map((res: Response) => res).subscribe(sudetalle => {
      console.log(sudetalle);
      this.sub = sudetalle;
      console.log(this.subject);
      console.log(this.sub);
    });
  }

  searchSubject3() {
    console.log(this.subject.name);
    this.http.get(this.apiUrl + '/subjectquadrimestre/' + this.subject.quadrimestre).map((res: Response) => res).subscribe(sudetalle => {
      console.log(sudetalle);
      this.sub = sudetalle;
      console.log(this.subject);
    });
  }

}
