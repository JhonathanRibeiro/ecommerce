import { ColunaConfig } from './coluna-config';

export interface PesquisaConfig {
    colunas: ColunaConfig[];
    pathApi: string;
    registros?: any[];
}