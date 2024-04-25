import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentName: string = 'Hello World'

  color = 'red'
  title = 'h1 red color';

  user = {
    name: 'Ilya',
    age: 25
  }

  subtitle = 'something'

  setNewNameFromChildComponent(newName: string){
    this.parentName = newName
  }
}
