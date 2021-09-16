import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTasks1631789875758 implements MigrationInterface {
    name = 'changeTasks1631789875758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."task" ADD "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "public"."task" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."task" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "public"."task" DROP COLUMN "creation_at"`);
    }

}
