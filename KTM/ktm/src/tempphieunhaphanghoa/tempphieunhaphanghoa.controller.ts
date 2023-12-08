import { Controller, Get } from '@nestjs/common';
import { TempphieunhaphanghoaService } from './tempphieunhaphanghoa.service';
@Controller('tempphieunhaphanghoa')
export class TempphieunhaphanghoaController {
    constructor (private TempphieunhaphanghoaService: TempphieunhaphanghoaService){}
    @Get('getall')
    getAllctgs(){
        return this.TempphieunhaphanghoaService.getAllData()
    }
}
