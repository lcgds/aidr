import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App06';

  subject = '';
  point = '';

  alterSubject(newSubject: string): void {
    this.subject = newSubject;
  }

}
