import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { of } from 'rxjs';

type ValidateFnCallback<T> = (self: FormControl, target: FormControl) => T;

const watchControl = <T extends ValidatorFn = ValidatorFn>(
  targetControlName: string,
  validate: ValidateFnCallback<ReturnType<T>>,
) => {
  let target: FormControl | null= null;
  return (control: FormControl) => {
    const form = control.root as FormGroup;
    let temp: FormControl;
    if (
      !form ||
      !form.controls ||
      !(temp = form.get(targetControlName) as FormControl)
    ) {
      return of(null);
    }

    if (target !== temp) {
      target = temp;
      target.valueChanges.subscribe(() =>
        control.updateValueAndValidity({ onlySelf: true }),
      );
    }
    return validate(control, target);
  };
};

const EMAIL_REGEX_WITH_DOMAIN = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const MOBILE_TEN_DIGIT = /^(\+)?(84|0)(1|2|3|5|7|8|9)[0-9]{8}$/;

export class CoreValidators {
  static isEmail(control: AbstractControl): ValidationErrors | null {
    
    if (control?.value == null || control?.value == '') {
      return null;
    }

    return EMAIL_REGEX_WITH_DOMAIN.test(control.value)
      ? null
      : { isEmail: true };
  }

  static isMobile(control: AbstractControl): ValidationErrors | null {
    if (control?.value == null) {
      return null;
    }

    return MOBILE_TEN_DIGIT.test(control.value) ? null : { isMobile: true };
  }

  static isEmailOrMobile(control: AbstractControl): ValidationErrors | null {
    if (control?.value == null) {
      return null;
    }

    const errors = control.value.includes('@')
      ? CoreValidators.isEmail(control)
      : CoreValidators.isMobile(control);
    return errors === null ? null : { isEmailOrMobile: true };
  }
}
export function convertPhoneNumber(phoneNumber: string)
{
  let arrPhone = phoneNumber.split('');
  if(arrPhone[0] == "+")
  {
    arrPhone.shift();
  }
  let phoneString = arrPhone.join('');
  if(phoneString.startsWith("84"))
  {
    var param = phoneString.replace("84","0");
  }
  else
  {
    param = phoneString;
  } 
  return param;
}
