import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../icons/index';
import { TlTag } from './tag';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
  ],
  declarations: [
    TlTag,
  ],
  exports: [
    TlTag,
  ]
})
export class TagModule {}
