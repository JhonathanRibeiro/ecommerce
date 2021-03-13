import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatTableModule } from '@angular/material';

import { PesquisaComponent } from './pesquisa.component';


@NgModule({
    declarations: [PesquisaComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
    ],
    exports: [],
    providers: [],
})
export class PesquisaModule { }


