import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceDto {
    @ApiProperty({
        example: 'Diseño de páginas web',
        description: 'Title of the service'
    })
    title: string;

    @ApiProperty({
        example: 'Web',
        description: 'Category'
    })
    category: string;

    @ApiProperty({
        example: 'Diseño de páginas reactivas con Next.js y React',
        description: 'Description of the service'
    })
    description: string;

    @ApiProperty({
        example: 999.99,
        description: 'Service`s price'
    })
    price: number;
}