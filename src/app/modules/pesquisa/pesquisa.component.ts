import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColunaConfig } from './models/coluna-config';
import { PesquisaConfig } from './models/pesquisa-config';
import { Api } from 'src/app/services/api';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-pesquisa',
    templateUrl: 'pesquisa.component.html',
    providers: [PesquisaComponent],
    styleUrls: ['pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {

    @Input() public api: Api<any>;

    public registroId = null;

    public displayedColumns = [];

    public colunas: ColunaConfig[];

    public dataSource = [];

    readonly apiURL: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient
    ) {
        this.apiURL = environment.api;

        const config: PesquisaConfig = this.route.snapshot.data as any;
        this.displayedColumns = [...config.colunas.map(col => col.nome), 'action'];
        this.colunas = config.colunas;
        this.dataSource = config.registros;
    }

    ngOnInit() {
    }

    public editar(value: any) {
        this.router.navigate([value.id], { relativeTo: this.route.parent });
    }

    public deletar(value) {
        this.http.delete(`${this.apiURL}/api/produto/${value.id}`)
            .subscribe(() => {
                alert(`Produto ${value.id} - ${value.nome} excluído com sucesso.`);
                location.reload();
                console.log('Produto excluído com sucesso.');
            }, erro => {if (erro.status == 404) {console.log('Não foi possível excluir o produto.'); }});
    }

    public cadastrar() {
        this.router.navigate(['novo'], { relativeTo: this.route.parent });
    }
}