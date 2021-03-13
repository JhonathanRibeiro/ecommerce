import { PesquisaConfig } from 'src/app/modules/pesquisa/models/pesquisa-config';

export const PESQUISA_EMPRESA_CONFIG: PesquisaConfig = {
    colunas: [
        {
            label: 'Código',
            nome: 'id'
        },
        {
            label: 'Razão social',
            nome: 'razaoSocial'
        },
        {
            label: 'Fantasia',
            nome: 'fantasia'
        },
    ],
    pathApi: 'empresa'
};
