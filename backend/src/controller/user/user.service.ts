import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Connection, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private connection: Connection,

    private jwtService: JwtService,

    @InjectRepository(User)
    private creditCardRepository: Repository<User>,
  ) { }

  async test(user: any) {
    console.log(user);
    return true;
  }

  async validateUser(email: string, password: string) {
    return true;
  }

  async getAccessToken(user: any) {
    const payload = {
      idx: user.idx,
      email: user.email,
      username: user.username,
      nickname: user.nickname,
    };
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
    });
  }

  async login(user: any) {
    const accessToken = await this.getAccessToken(user);

    return {
      result: true,
      code: null,
      data: {
        idx: user.id,
        nickname: user.nickname,
        accessToken: accessToken,
      },
    };
  }
}