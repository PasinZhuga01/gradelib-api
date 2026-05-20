import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersAndInstitutions1779321600000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                first_name VARCHAR(100) NOT NULL,
                last_name VARCHAR(100) NOT NULL,
                created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
            );
        `);

        await queryRunner.query(`
            CREATE TABLE institutions (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                director_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
                name VARCHAR(255) NOT NULL,
                created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE institutions`);
        await queryRunner.query(`DROP TABLE users`);
    }

}