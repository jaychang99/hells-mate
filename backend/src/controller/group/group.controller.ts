import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { createGroupDto, groupIdDto } from '../dto/group.dto';
import { User } from 'src/database/entities';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('group')
@ApiTags('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiOperation({
    summary: '팀장이 그룹을 생성하는 api',
  })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createGroup(@Req() req: any, @Body() data: createGroupDto) {
    //req.user
    const result = await this.groupService.createGroup(req.user.id, data);
    return {
      code: 200,
      message: '그룹이 정상적으로 등록 되었습니다. ',
      data: result,
    };
  }

  @ApiOperation({
    summary: '그룹 정보 조회 with Group_Id',
  })
  @UseGuards(JwtAuthGuard)
  @Get('info/:id')
  async getGroup(@Req() req: any, @Param('id') id: number) {
    //req.user
    const result = await this.groupService.getGroupById(id);
    return {
      code: 200,
      message: '그룹 조회 설공 ',
      data: result,
    };
  }

  @ApiOperation({
    summary: '참여한 그룹리스트 조회 api',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/mygroups')
  async getJoinedGroupList(@Req() req: any) {
    const result = await this.groupService.getJoinedGroupList(req.user.id);
    return {
      code: 200,
      message: '그룹 리스트 조회 설공',
      data: result,
    };
  }

  // @ApiOperation({
  //   summary: '해당 그룹의 참여도 통계 불러오기',
  // })
  // // url 뭐로할지 고민이에요 아무거나 해주세요
  // @Get(':groupId/측정')
  // async select참여도(@Req() req: any, @Param('groupId') groupId: number) {
  //   const result = await this.groupService.select참여도(groupId);
  //   return {
  //     code: 200,
  //     message: '참여도 통계 보기',
  //     data: result,
  //   };
  // }
}