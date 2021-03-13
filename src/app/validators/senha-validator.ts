import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const SenhaValidator: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    if (control.value === '123') {
        return { invalido: 'A senha não pode ser 123' };
    }
    return null;
};
