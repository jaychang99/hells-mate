import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { KakaoApi } from '@/api'

@Controller('user')
export class UserController {
  constructor(private readonly groupService: UserService) {}

  @Post()
  async create(@Body() createAuthDto: unknown) {
     await KakaoApi.login()
  }

  @Post()
}
