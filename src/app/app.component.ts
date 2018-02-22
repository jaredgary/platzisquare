import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  listo = false;
  nombre = '';

  constructor() {
    setTimeout(() => {
      this.listo = true;
    }, 3000);
  }

  doSomething () {
    alert('Hacer algo');
  }
}
