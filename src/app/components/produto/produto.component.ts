import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-produto',
    templateUrl: 'produto.component.html',
})

export class ProdutoComponent implements OnInit {

    @Input() public produtos: any[];

    public token: string = this.auth.token;
    public isAuthenticated = false;

    constructor(
        private service: ProdutoService,
        private auth: AuthService,
    ) { }

    ngOnInit() {
        this.listarProdutos();
    }

    public listarProdutos() {
        this.isAuthenticated = this.token != null;

        if (this.isAuthenticated) {
            this.service.produto().subscribe(produto => {
                this.produtos = produto.data;
            }, err => {
                alert('Não foi possível listar os produtos.');
                console.log('Erro ao listar produtos', err);
            });
        }
    }
}