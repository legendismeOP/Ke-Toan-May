import { Module } from '@nestjs/common';
import { TempdanhmuckhachhangController } from './tempdanhmuckhachhang.controller';
import { TempdanhmuckhachhangService } from './tempdanhmuckhachhang.service';

@Module({
  controllers: [TempdanhmuckhachhangController],
  providers: [TempdanhmuckhachhangService]
})
export class TempdanhmuckhachhangModule {}
