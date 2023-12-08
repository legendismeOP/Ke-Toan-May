import { Module } from '@nestjs/common';
import { DanhmucchungtuService } from './danhmucchungtu.service';
import { DanhmucchungtuController } from './danhmucchungtu.controller';

@Module({
  providers: [DanhmucchungtuService],
  controllers: [DanhmucchungtuController],
  exports: [DanhmucchungtuService]
})
export class DanhmucchungtuModule {}
