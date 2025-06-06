import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { MembersModule } from './members/members.module';

@Module({
  imports: [BooksModule, AuthorsModule, MembersModule],
})
export class AppModule {}
