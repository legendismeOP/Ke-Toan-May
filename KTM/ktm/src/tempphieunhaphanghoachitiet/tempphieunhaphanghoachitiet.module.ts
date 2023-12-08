import { Module } from '@nestjs/common';
import { TempphieunhaphanghoachitietController } from './tempphieunhaphanghoachitiet.controller';
import { TempphieunhaphanghoachitietService } from './tempphieunhaphanghoachitiet.service';

@Module({
  controllers: [TempphieunhaphanghoachitietController],
  providers: [TempphieunhaphanghoachitietService]
})
export class TempphieunhaphanghoachitietModule {}
