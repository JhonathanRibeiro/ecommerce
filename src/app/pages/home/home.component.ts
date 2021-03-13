import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

    public inputSearch: string;
    public token: string = this.auth.token;
    public isAuthenticated = false;
    public produtos: any[];

    constructor(
        private auth: AuthService,
        private service: ProdutoService,
    ) { }

    ngOnInit() {
        this.isAuthenticated = this.token != null;
    }

    public onKeydown(event): any {
        if (event.key === "Enter") {
            return this.service.search(this.inputSearch).subscribe(produtos => {

                this.produtos = produtos;
            });
        }
    }
}
