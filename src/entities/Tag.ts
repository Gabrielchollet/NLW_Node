import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid"

@Entity("tags")
class Tag {
  /* Quem será responsável por inserir o ID será o construtor */
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    /* Verifica se o id não está preenchido */
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Tag }