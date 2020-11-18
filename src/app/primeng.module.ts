import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

const primeModule = [ToastModule, MessagesModule, MessageModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, primeModule],
  exports: [primeModule],
})
export class PrimengModule {}
