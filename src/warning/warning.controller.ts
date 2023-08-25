import { Controller, Get, Param, Res, Body, Post } from '@nestjs/common';
import { WarningService } from './warning.service';
import { Response } from 'express';

@Controller('warnings')
export class WarningController {
  constructor(private warningService: WarningService) {}

  @Get('/:idStudent')
  async get(@Param() params: any, @Res() res: Response): Promise<Response> {
    try {
      const { idStudent } = params;
      const warnings = await this.warningService.list(idStudent);

      return res.status(200).json({
        success: false,
        title: 'Busca de advertências concluída com sucesso',
        items: warnings,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        title: 'Erro ao buscar advertências',
        message: err.message,
        error: err,
      });
    }
  }

  @Post()
  async create(@Body() body, @Res() res: Response): Promise<Response> {
    try {
      const { idStudent, title, description } = body;
      const newWarning = await this.warningService.create({
        idStudent,
        title,
        description,
      });
      return res.status(201).json({
        success: true,
        title: 'Advertência cadastrada com sucesso',
        item: newWarning,
      });
    } catch (err) {
      return res.status(401).json({
        success: false,
        title: 'Erro ao tentar cadastrar advertência',
        message: err.message,
        error: err,
      });
    }
  }
}
