/*
 MIT License

 Copyright (c) 2019 Temainfo Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { LOCALE_I18N } from '../../i18n/i18n.service';
import { PasswordRule } from './passwordrule.interface';

export function PasswordValidator( passwordRule: PasswordRule ): ValidatorFn {
  return ( control: AbstractControl ) => {

    const digits = '^(?=.*[0-9]).*$';
    const uppercase = '^(?=.*[A-Z]).*$';
    const special = '^(?=.*[!@#$%^&*]).*$';
    const lowercase = '^(?=.*[a-z]).*$';

    let regex: RegExp;

    if ( passwordRule['digits'] ) {
      regex = new RegExp( digits );
      if (!regex.test(control.value)) {
        return { invalidPasswordRuleDigits: LOCALE_I18N.Validators.invalidPasswordRuleDigits };
      }
    }

    if ( passwordRule['uppercase'] ) {
      regex = new RegExp( uppercase );
      if (!regex.test(control.value)) {
        return { invalidPasswordRuleUppercase: LOCALE_I18N.Validators.invalidPasswordRuleUppercase };
      }
    }

    if ( passwordRule['special'] ) {
      regex = new RegExp( special );
      if (!regex.test(control.value)) {
        return { invalidPasswordRuleSpecial: LOCALE_I18N.Validators.invalidPasswordRuleSpecial };
      }
    }

    if ( passwordRule['lowercase'] ) {
      regex = new RegExp( lowercase );
      if (!regex.test(control.value)) {
        return { invalidPasswordRuleLowerCase: LOCALE_I18N.Validators.invalidPasswordRuleLowerCase };
      }
    }

    return null;

  };
}
