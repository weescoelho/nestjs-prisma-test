import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { BookDTO } from '../book.dto';

@Injectable()
export class BookUpdateService {
  constructor(private prisma: PrismaService) {}
  async execute(id: string, data: BookDTO): Promise<BookDTO> {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }
}
