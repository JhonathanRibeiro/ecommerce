import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensagemErro: string = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    senha: new FormControl(),
  });

  ngOnInit() {
  }

  public login() {
    this.auth.logar(this.form.value).subscribe((resposta: any) => {
      this.auth.token = resposta.data.token;
      this.mensagemErro = null;
      this.router.navigateByUrl('admin');
    }, error => {
      console.log(error);
      this.mensagemErro = 'Login ou senha inválidos';
    });
  }

  public cadastrar(): void {
    this.router.navigateByUrl('cadastro');
  }

}
