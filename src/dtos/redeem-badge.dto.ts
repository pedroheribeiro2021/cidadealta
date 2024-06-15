import { ApiProperty } from '@nestjs/swagger';

export class RedeemBadgeDto {
  @ApiProperty({ description: 'ID do usuário que está resgatando o emblema' })
  userId: number;
}
