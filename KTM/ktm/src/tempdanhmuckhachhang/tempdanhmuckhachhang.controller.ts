import { Controller, Get } from '@nestjs/common';
import { TempdanhmuckhachhangService } from './tempdanhmuckhachhang.service';
@Controller('tempdanhmuckhachhang')
export class TempdanhmuckhachhangController {
    constructor (private TempdanhmuckhachhangService: TempdanhmuckhachhangService){}
    @Get('getall')
    getAllctgs(){
        return this.TempdanhmuckhachhangService.getAllData()
    }
}
