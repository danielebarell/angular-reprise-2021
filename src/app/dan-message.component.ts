import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'dan-message',
  template: `
  <input type="checkbox" id="showMessage" (change)="isMessageShown =!isMessageShown" checked><label for="showMessage">Show Message</label>
  <div *ngIf="isMessageShown else blankMessage">
  <mark [style.backgroundColor] = "markColor">{{message}}</mark>
  <button (click)="outputMessage()">
    Output
  </button>
  </div>
  <ng-template #blankMessage>
    <div>message hidden</div>
  </ng-template>
  <hr>
  <input type="text" #messageInput><button (click)="outputMessageFromService()">Send</button>`,
})
export class DanMessage implements OnInit, OnChanges {
  markColor = 'orange';
  isMessageShown = true;
  @Input() message: string;
  constructor(public messageService: MessageService) {
    console.log(
      'constructing message component, message service ? ',
      this.messageService
    );
  }
  @Output()
  outputMessageEmitter = new EventEmitter();
  @ViewChild('messageInput') messageInput4Service;
  outputMessageFromService() {
    console.log(
      'outputMessageFromService, this.messageInput4Service',
      this.messageInput4Service
    );
    this.messageService.message = this.messageInput4Service.nativeElement.value;
  }
  outputMessage() {
    console.log('outputMessage');
    this.outputMessageEmitter.emit(this.message);
  }
  ngOnInit() {
    console.log('ngOnInit message');
    this.message = 'input message';
  }
  ngOnChanges(changes) {
    console.log('changing...', changes.message);
  }
}
