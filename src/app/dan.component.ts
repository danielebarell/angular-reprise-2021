import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
@Component({
  selector: 'dan-component',
  template: `<h3>Hello!</h3>
  <dan-message [message]="messageSent" (outputMessage)="outputMessageHandler"></dan-message>
  <div>
  <label>Received from service:</label>
  <output>{{messageService.message || ''}}</output>
  </div>`,
})
export class DanComponent implements OnInit {
  messageSent = 'Ciao Fabio!';
  constructor(public messageService: MessageService) {
    console.log('constructing dan component');
  }
  ngOnInit() {
    console.log('ngOnInit DanComponent');
  }
  outputMessageHandler(event) {
    console.log('event: ', event);
  }
}
