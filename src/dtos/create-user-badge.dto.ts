import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Nome de usuário', example: 'john_doe' })
  username: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'senha123' })
  password: string;
}
