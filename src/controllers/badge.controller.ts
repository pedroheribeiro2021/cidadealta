import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';
import { BadgeService } from 'src/services/badge.service';
import { CreateBadgeDto } from 'src/dtos/create-badge.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('badges')
@Controller('badges')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @ApiOperation({ summary: 'Listar todos os emblemas' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Número da página',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limite de emblemas por página',
    example: 10,
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filtro pelo nome do emblema',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de emblemas retornada com sucesso.',
  })
  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('name') name?: string,
  ) {
    return this.badgeService.findAll(page, limit, name);
  }

  @ApiOperation({ summary: 'Criar um novo emblema' })
  @ApiResponse({ status: 201, description: 'Emblema criado com sucesso.' })
  @Post()
  async create(@Body() createBadgeDto: CreateBadgeDto) {
    return this.badgeService.create(createBadgeDto);
  }

  @ApiOperation({ summary: 'Resgatar um emblema pelo slug' })
  @ApiParam({ name: 'slug', description: 'Slug do emblema' })
  @ApiResponse({ status: 200, description: 'Emblema resgatado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Emblema não encontrado.' })
  @Post(':slug/redeem')
  async redeemBadge(
    @Param('slug') slug: string,
    @Body('userId') userId: number,
  ) {
    return this.badgeService.redeem(slug, userId);
  }
}
