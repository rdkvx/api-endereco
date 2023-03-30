import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Endereco {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 9 })
    cep: string;

    @Column({ length: 100 })
    logradouro: string;

    @Column({ length: 100 })
    complemento: string;

    @Column({ length: 100 })
    bairro: string;

    @Column({ length: 100 })
    localidade: string;

    @Column({ length: 2 })
    uf: string;

    @Column({ length: 100 })
    ibge: string;

    @Column({ length: 100 })
    gia: string;

    @Column({ length: 2 })
    ddd: string;

    @Column({ length: 100 })
    siafi: string;

    constructor(endereco?: Partial<Endereco>){
        this.id = endereco?.id;
        this.cep = endereco?.cep;
        this.logradouro = endereco?.logradouro;
        this.complemento = endereco?.complemento;
        this.bairro = endereco?.bairro;
        this.localidade = endereco?.localidade;
        this.uf = endereco?.uf;
        this.ibge = endereco?.ibge;
        this.gia = endereco?.gia;
        this.ddd = endereco?.ddd;
        this.siafi = endereco?.siafi;
    }
}