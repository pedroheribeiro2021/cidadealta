import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { BadgeService } from 'src/services/badge.service';
import { CreateBadgeDto } from 'src/dtos/create-badge.dto';
import { RedeemBadgeDto } from 'src/dtos/redeem-badge.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('badges')
@Controller('badges')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @ApiOperation({ summary: 'Listar todos os emblemas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de emblemas retornada com sucesso.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Número da página',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Número de itens por página',
    example: 10,
  })
  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.badgeService.findAll(page, limit);
  }

  @ApiOperation({ summary: 'Criar um novo emblema' })
  @ApiResponse({ status: 201, description: 'Emblema criado com sucesso.' })
  @ApiBody({ type: CreateBadgeDto, description: 'Dados do novo emblema' })
  @Post()
  async create(@Body() createBadgeDto: CreateBadgeDto) {
    return this.badgeService.create(createBadgeDto);
  }

  @ApiOperation({ summary: 'Resgatar um emblema pelo slug' })
  @ApiParam({ name: 'slug', description: 'Slug do emblema' })
  @ApiBody({
    type: RedeemBadgeDto,
    description: 'Dados necessários para resgatar o emblema',
  })
  @ApiResponse({ status: 200, description: 'Emblema resgatado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Emblema não encontrado.' })
  @Post(':slug/redeem')
  async redeemBadge(
    @Param('slug') slug: string,
    @Body() redeemBadgeDto: RedeemBadgeDto,
  ) {
    return this.badgeService.redeem(slug, redeemBadgeDto);
  }
}
