import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // @Input -- props decorator
  @Input('childColor') childColorProps: string = '';

  // like in React state
  // const [nameChangeForChildComponent, nameChange] = useState('');
  @Input('childName') childName = '';
  @Output() childNameChange = new EventEmitter<string>()


  changeName(){
    this.childNameChange.emit('The name declared in child component')
  }
}
