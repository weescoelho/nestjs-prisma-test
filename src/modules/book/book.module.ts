import { Module } from '@nestjs/common';
import { BookCreateService } from './services/bookCreate.service';
import { BookController } from './book.controller';
import { PrismaService } from 'src/database/PrismaService';
import { BookListService } from './services/bookList.service';
import { BookUpdateService } from './services/bookUpdate.service';

@Module({
  controllers: [BookController],
  providers: [
    BookCreateService,
    PrismaService,
    BookListService,
    BookUpdateService,
  ],
})
export class BookModule {}
