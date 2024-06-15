import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'usuario', description: 'Nome de usuário' })
  username: string;

  @ApiProperty({ example: 'senha', description: 'Senha do usuário' })
  password: string;
}
