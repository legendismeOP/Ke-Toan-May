import { Module } from '@nestjs/common';
import { TempphieunhaphanghoaController } from './tempphieunhaphanghoa.controller';
import { TempphieunhaphanghoaService } from './tempphieunhaphanghoa.service';

@Module({
  controllers: [TempphieunhaphanghoaController],
  providers: [TempphieunhaphanghoaService]
})
export class TempphieunhaphanghoaModule {}
