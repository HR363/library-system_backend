import { Injectable } from '@nestjs/common';
import { Member } from './interfaces/member.interface';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MembersService {
  private members: Member[] = [];
  private id = 1;

  findAll(): Member[] {
    return this.members;
  }

  findOne(id: number): Member | undefined {
    return this.members.find((m) => m.id === id);
  }

  create(dto: CreateMemberDto): Member {
    const member: Member = {
      id: this.id++,
      name: dto.name,
      email: dto.email,
      joinDate: new Date().toISOString().split('T')[0],
    };
    this.members.push(member);
    return member;
  }

  update(id: number, dto: CreateMemberDto): Member | null {
    const index = this.members.findIndex((m) => m.id === id);
    if (index === -1) return null;
    this.members[index] = {
      ...this.members[index],
      name: dto.name,
      email: dto.email,
    };
    return this.members[index];
  }

  remove(id: number): boolean {
    const index = this.members.findIndex((m) => m.id === id);
    if (index === -1) return false;
    this.members.splice(index, 1);
    return true;
  }
}
