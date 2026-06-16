import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({
        example: '20245138@esen.edu.sv',
        description: 'Correo del usuario'
    })
    email: string;

    @ApiProperty({
        example: '12345Ar',
        description: 'Contraseña del usuario'
    })
    password: string;
}