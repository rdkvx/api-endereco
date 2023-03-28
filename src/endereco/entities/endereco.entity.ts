import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
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
}