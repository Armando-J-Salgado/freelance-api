import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedFakeUsers20260616000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "user" ("email", "name", "password")
      VALUES
        ('20245138@esen.edu.sv', 'Armando Salgado', '12345Ar'),
        ('arjsalgado@gmail.com', 'Juan Pérez', '67890Al'),
        ('example@test.com', 'María Duarte', '123abc')
      ON CONFLICT ("email") DO NOTHING
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user"
      WHERE "email" IN (
        '20245138@esen.edu.sv',
        'arjsalgado@gmail.com',
        'example@test.com'
      )
    `);
  }
}