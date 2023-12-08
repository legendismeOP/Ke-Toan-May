import { Controller, Get } from '@nestjs/common';
import { TempphieunhaphanghoachitietService } from './tempphieunhaphanghoachitiet.service';
@Controller('tempphieunhaphanghoachitiet')
export class TempphieunhaphanghoachitietController {
    constructor (private TempphieunhaphanghoachitietService: TempphieunhaphanghoachitietService){}
    @Get('getall')
    getAllctgs(){
        return this.TempphieunhaphanghoachitietService.getAllData()
    }
}
