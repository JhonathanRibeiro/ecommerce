import { Api } from './../../../services/api';
import { Empresa } from './../../cadastros/empresa/models/empresa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable() export class EmpresaService extends Api<Empresa> {

    constructor(
        public http: HttpClient
    ) {
        super(http, 'empresa');
    }
}