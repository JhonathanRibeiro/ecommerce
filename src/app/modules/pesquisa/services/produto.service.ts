import { Api } from './../../../services/api';
import { Produto } from './../../cadastros/produtos/models/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable() export class ProdutoService extends Api<Produto> {

    constructor(
        public http: HttpClient
    ) {
        super(http, 'produto');
    }
}