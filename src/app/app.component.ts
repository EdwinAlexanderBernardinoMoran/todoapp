import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Character {
  name: string;
  age: number;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';

  welcome:string = 'Welcome Angular 17!';

  // Quiere decir que sera un array de string
  tasks:string[] = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]

  name:string = "Edwin Alexander";
  habilitado: boolean = true;

  person:Character = {
    name: "Edwin",
    age: 21,
    avatar: 'https://nimapinfotech.com/wp-content/uploads/2023/01/como-comecar-com-angular.png'
  }
}
