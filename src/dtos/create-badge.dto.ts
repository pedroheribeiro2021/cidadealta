import { ApiProperty } from '@nestjs/swagger';

export class CreateBadgeDto {
  @ApiProperty({ example: 'slug-unique', description: 'Slug do emblema' })
  slug: string;

  @ApiProperty({ example: 'Nome do Emblema', description: 'Nome do emblema' })
  name: string;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'URL da imagem do emblema',
  })
  image: string;
}
