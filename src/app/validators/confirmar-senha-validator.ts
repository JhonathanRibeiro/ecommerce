import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ConfirmarSenhaValidator {
    static validar(senha: AbstractControl): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (senha.value !== control.value) {
                return { naoConfere: 'As senhas não conferem!' };
            }
            return null;
        };
    }
}
