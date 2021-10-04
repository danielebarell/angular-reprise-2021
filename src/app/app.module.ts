import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DanComponent } from './dan.component';
import { DanMessage } from './dan-message.component';
import { MessageService } from './services/message.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DanComponent, DanMessage],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
