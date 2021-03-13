import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PesquisaService {

    constructor(
        private http: HttpClient
    ) { }
}