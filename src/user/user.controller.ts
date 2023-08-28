import { Controller, Get, Param, Res, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:idStudent')
  async get(@Param() params: any, @Res() res: Response): Promise<Response> {
    try {
      const users = await this.userService.list();

      return res.status(200).json({
        success: false,
        title: 'Busca de advertências concluída com sucesso',
        items: users,
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
      const newUser = await this.userService.create({
        idStudent,
        title,
        description,
      });
      return res.status(201).json({
        success: true,
        title: 'Advertência cadastrada com sucesso',
        item: newUser,
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
