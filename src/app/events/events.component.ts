import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  color = ''

  changeColor(currentColor: string) {
    this.color = currentColor
  }

  checkCurrentValue(event: any){
    console.log(event)
  }
}
