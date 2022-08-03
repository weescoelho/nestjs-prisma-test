import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { BookDTO } from '../book.dto';

@Injectable()
export class BookListService {
  constructor(private prisma: PrismaService){}
  async execute(){
    return this.prisma.book.findMany()
  }
}