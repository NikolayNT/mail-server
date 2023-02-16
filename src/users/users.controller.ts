import {Body, Controller, Post, Get } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { User } from './users.model';

@ApiTags( 'Пользователи')
@Controller('users')
export class UsersController {
  
  constructor(private usersService: UsersService) {}
  
  @ApiOperation( {summary: 'Регистрация'})
  @ApiResponse( {status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
  
  @ApiOperation( {summary: 'Вывод всех пользователей'})
  @ApiResponse( {status: 200, type: [User]})
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

}
