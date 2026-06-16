import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedFakeServices20260616000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "service" ("title", "category", "description", "price", "providerId")
      SELECT
        seed."title",
        seed."category",
        seed."description",
        seed."price",
        "user"."id"
      FROM (
        VALUES
          (
            'Diseño de logo profesional',
            'Diseño',
            'Creo un logo profesional y memorable para marcas nuevas o en proceso de rebranding. Incluye dos propuestas iniciales, revisiones y entrega de archivos listos para web e impresión.',
            450,
            '20245138@esen.edu.sv'
          ),
          (
            'Desarrollo de páginas web',
            'Desarrollo',
            'Diseño y desarrollo sitios web responsivos para negocios, portafolios y landing pages. Trabajo con una estructura limpia, SEO básico y optimización para móviles.',
            1800,
            'arjsalgado@gmail.com'
          ),
          (
            'Redacción de artículos SEO',
            'Redacción',
            'Escribo artículos optimizados para buscadores con enfoque comercial y tono natural. Entrego contenido original, bien estructurado y adaptado al público objetivo.',
            320,
            'example@test.com'
          ),
          (
            'Gestión de campañas en redes sociales',
            'Marketing',
            'Planifico y ejecuto campañas orgánicas o pagadas en redes sociales para aumentar alcance, interacción y conversiones. Incluye ideas de contenido, copys y seguimiento de métricas.',
            950,
            '20245138@esen.edu.sv'
          ),
          (
            'Diseño de identidad visual para marca',
            'Diseño',
            'Desarrollo una identidad visual coherente con paleta de color, tipografías, uso de logo y piezas base para que tu marca se vea consistente en todos los canales.',
            1250,
            'arjsalgado@gmail.com'
          ),
          (
            'Corrección y edición de textos profesionales',
            'Redacción',
            'Reviso ortografía, gramática, estilo y claridad para documentos, perfiles corporativos, blogs o materiales comerciales. Mantengo tu tono y mejoro la legibilidad del texto.',
            180,
            'example@test.com'
          ),
          (
            'Estrategia de marketing digital para negocios',
            'Marketing',
            'Diseño una estrategia digital con objetivos, canales recomendados, perfil de cliente ideal y acciones concretas para atraer clientes y mejorar presencia online.',
            2400,
            '20245138@esen.edu.sv'
          ),
          (
            'Maquetación de landing page de conversión',
            'Desarrollo',
            'Construyo una landing page orientada a captar leads o ventas, con estructura persuasiva, llamados a la acción claros y diseño adaptado a tu marca.',
            2200,
            'arjsalgado@gmail.com'
          )
      ) AS seed("title", "category", "description", "price", "email")
      INNER JOIN "user" ON "user"."email" = seed."email"
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "service"
      WHERE "title" IN (
        'Diseño de logo profesional',
        'Desarrollo de páginas web',
        'Redacción de artículos SEO',
        'Gestión de campañas en redes sociales',
        'Diseño de identidad visual para marca',
        'Corrección y edición de textos profesionales',
        'Estrategia de marketing digital para negocios',
        'Maquetación de landing page de conversión'
      )
    `);
  }
}