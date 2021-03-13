import { Contato } from './contato';

export interface Empresa {
    razaoSocial?: string;
    fantasia?: string;
    cnpj?: string;
    segmentos?: string[];
    contatos?: Contato[];
}
