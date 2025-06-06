import { Injectable } from '@nestjs/common';
import { Author } from './interfaces/author.interface';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [];
  private id = 1;

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: number): Author | null {
    const author = this.authors.find((author) => author.id === id);
    return author ?? null;
  }

  create(createAuthorDto: CreateAuthorDto): Author {
    const author: Author = {
      id: this.id++,
      ...createAuthorDto,
    };
    this.authors.push(author);
    return author;
  }

  update(id: number, updateDto: CreateAuthorDto): Author | null {
    const index = this.authors.findIndex((a) => a.id === id);
    if (index === -1) return null;
    this.authors[index] = { id, ...updateDto };
    return this.authors[index];
  }

  remove(id: number): boolean {
    const index = this.authors.findIndex((a) => a.id === id);
    if (index === -1) return false;
    this.authors.splice(index, 1);
    return true;
  }
}
