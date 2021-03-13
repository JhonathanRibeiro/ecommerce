import { SpinnerInterceptor } from './components/spinner/spinner.interceptor';
import { ProdutoService } from './modules/pesquisa/services/produto.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormularioModule } from './modules/formulario/formulario.module';
import { HttpInterceptadorService } from './services/http-interceptador.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './components/spinner/spinner.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CadastroComponent,
    HomeComponent,
    ProdutoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormularioModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptadorService, multi: true, deps: [AuthService],},
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true, deps: [SpinnerService]},
      ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
