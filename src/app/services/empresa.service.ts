import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../modules/cadastros/empresa/models/empresa';
import { Api } from './api';

@Injectable()
export class EmpresaService extends Api<Empresa> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'empresa');
  }
}
