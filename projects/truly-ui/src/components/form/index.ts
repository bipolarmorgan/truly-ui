/*
 MIT License

 Copyright (c) 2018 Temainfo Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the 'Software'), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DialogService } from '../dialog/dialog.service';
import { FormSubmitDirective } from './directives/form-submit.directive';

import { InputModule } from '../input/index';
import { DropDownListModule } from '../dropdownlist/index';
import { MiscModule } from '../misc/index';
import { ButtonModule } from '../button/index';
import { ModalModule } from '../modal/index';
import {TlSmartForm} from './modes/smart/form';
import {TlModalForm} from './modes/modal/form';
import {TlInlineForm} from './modes/inline/form';
import { SubmitButtonDirective } from './directives/submit-button.directive';
import { FormResultDirective } from './directives/form-result.directive';

@NgModule( {
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    DropDownListModule,
    MiscModule,
    ModalModule
  ],
  declarations: [
    TlSmartForm,
    TlModalForm,
    TlInlineForm,
    FormSubmitDirective,
    FormResultDirective,
    SubmitButtonDirective,
  ],
  exports: [
    TlSmartForm,
    TlModalForm,
    TlInlineForm,
    FormSubmitDirective,
    FormResultDirective,
    SubmitButtonDirective
  ],
  providers: [
    DialogService,
  ],
} )
export class FormModule {
}
