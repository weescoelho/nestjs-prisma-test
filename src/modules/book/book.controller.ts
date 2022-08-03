import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BookCreateService } from './services/bookCreate.service';
import { BookListService } from './services/bookList.service';
import { BookUpdateService } from './services/bookUpdate.service';

@Controller('book')
export class BookController {
  constructor(
    private readonly bookCreateService: BookCreateService,
    private readonly bookListService: BookListService,
    private readonly bookUpdateService: BookUpdateService,
  ) {}

  @Post()
  async create(@Body() data: BookDTO) {
    return await this.bookCreateService.create(data);
  }

  @Get()
  async findAll() {
    return await this.bookListService.execute();
  }

  //Query param - Multi param
  @Put(':id/:id2')
  async update(@Param('id2') teste) {
    console.log('teste', teste);
    return 'Teste';
    //return await this.bookUpdateService.execute(id, data);
  }
}
