import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Api } from './api';
import { Produto } from '../modules/cadastros/produtos/models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService extends Api<Produto> {

  @Input() public api: Api<Produto>;

  constructor(public http: HttpClient) {
    super(http, 'produto');
  }

  public produto(): Observable<any> {
    return this.http.get(environment.api + '/api/produto/')
      .pipe(map((res: any[]) => res));
  }

  public search(value): Observable<any> {
    return this.http.get(environment.api + `/api/produto/pesquisar?value=${value}`)
      .pipe(map((res: any[]) => res));
  }

}
