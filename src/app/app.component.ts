import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  teste: string = "Teste";
  
  idade: String = "Idade: "
  valueIdade: number = 38;

  temperatura: String = "Temperatura";
  valueTemperatura: number = 32.12;
}
