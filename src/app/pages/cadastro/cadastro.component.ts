import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmarSenhaValidator } from 'src/app/validators/confirmar-senha-validator';
import { SenhaValidator } from 'src/app/validators/senha-validator';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    public form: FormGroup;
    public loading: Boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router,
    ) {
        this.form = this.formBuilder.group({
            nome: [null, Validators.required],
            email: [null, Validators.compose([
                Validators.required,
                Validators.email
            ])],
            senha: [null, Validators.compose([
                Validators.required, SenhaValidator
            ])],
            confirmarSenha: [null]
        });

        this.confirmarSenha.setValidators(ConfirmarSenhaValidator.validar(this.senha));
    }

    ngOnInit() {
    }


    public get senha() {
        return this.form.get('senha');
    }

    public get nome() {
        return this.form.get('nome');
    }

    public get email() {
        return this.form.get('email');
    }

    public get confirmarSenha() {
        return this.form.get('confirmarSenha');
    }

    public cadastrar() {
        const usuario = this.form.value;
        // TODO: Adicionar a propriedade confirmarSenha na API
        delete usuario.corfirmarSenha;
        this.loading = true;
        this.auth.cadastrar(usuario).subscribe(() => {
            this.loading = false;
            this.router.navigateByUrl('login');
        }, () => {
            this.loading = false;
            alert('Ocorreu algum erro ao cadastrar');
        });
    }

}
