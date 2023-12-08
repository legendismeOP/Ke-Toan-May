import { Controller, Get } from '@nestjs/common';
import { DanhmucchungtuService } from './danhmucchungtu.service';

@Controller('danhmucchungtu')
export class DanhmucchungtuController {
    constructor (private DanhmucchungtuService: DanhmucchungtuService){}
    @Get('')
    getAll(){
        return this.DanhmucchungtuService.getAllData()
    }
}
