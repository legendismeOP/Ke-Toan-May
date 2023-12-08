import { Module } from '@nestjs/common';
import { DanhmuckhachhangService } from './danhmuckhachhang.service';
import { DanhmuckhachhangController } from './danhmuckhachhang.controller';

@Module({
  providers: [DanhmuckhachhangService],
  controllers: [DanhmuckhachhangController],
  exports: [DanhmuckhachhangService]
})
export class DanhmuckhachhangModule {}
