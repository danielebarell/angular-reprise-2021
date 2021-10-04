import { Injectable } from '@angular/core';
@Injectable()
export class MessageService {
  constructor() {
    console.log('Message Service constructing...');
  }
  private __message = 'Service Message';
  public set message(msg) {
    console.log('message service: ', msg);
    this.__message = msg;
  }
  public get message(): string {
    return this.__message;
  }
}
