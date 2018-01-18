import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'addstudent.html'
})
export class AddstudentPage {
  private apiUrl = 'http://localhost:3000';
  private apiUrl2 = 'http://localhost:3000/student';
  st: any;
  student: {
    name,
    surnames,
    country,
    age,
    phones,
    gender
  };

  telfs: {
    work,
    home
  };

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.student = {
      'name': '',
      'surnames': '',
      'country': '',
      'age': '',
      'phones': '',
      'gender': ''
    };
    this.telfs = {
      'work': '',
      'home': ''
    };
  }

  onSubmit() {
    // Mostramos el objeto student
    console.log(this.student);
    this.postStudent();
  }

  postStudent() {
    this.postDataRequest().subscribe();
  }

  postDataRequest() {
    this.student.phones = ['work: ' + this.telfs.work, 'home: ' + this.telfs.home];

    console.log(this.student.phones);
    return this.http.post(this.apiUrl2, this.student);
  }

  requestStudents() {
    return this.http.get(this.apiUrl + '/students').map((res: Response) => res);
  }

  getStudents() {
    this.requestStudents().subscribe(st => {
      console.log(st);
      this.st = st;
    })
  }
}
