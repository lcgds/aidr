import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exibir = 'form';

  title = 'App05';

  trocarVisibilidade(page :string) {
    this.exibir = page;
  }
}
