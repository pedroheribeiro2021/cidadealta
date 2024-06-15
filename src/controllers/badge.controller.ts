import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BadgeService } from '../services/badge.service';
import { CreateBadgeDto } from '../dtos/create-badge.dto';
import { RedeemBadgeDto } from '../dtos/redeem-badge.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
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
  @Get()
  async findAll() {
    return this.badgeService.findAll();
  }

  @ApiOperation({ summary: 'Criar um novo emblema' })
  @ApiResponse({ status: 201, description: 'Emblema criado com sucesso.' })
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
