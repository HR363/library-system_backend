import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private id = 1;

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  create(dto: CreateBookDto): Book {
    const book: Book = {
      id: this.id++,
      ...dto,
    };
    this.books.push(book);
    return book;
  }

  update(id: number, dto: CreateBookDto): Book | null {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return null;
    this.books[index] = { id, ...dto };
    return this.books[index];
  }

  remove(id: number): boolean {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return false;
    this.books.splice(index, 1);
    return true;
  }
}
