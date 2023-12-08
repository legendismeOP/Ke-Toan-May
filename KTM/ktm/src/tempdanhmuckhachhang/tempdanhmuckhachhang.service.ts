import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TempdanhmuckhachhangService {
    constructor (private prismaService:PrismaService ){
    }
    getAllData(){
        return this.prismaService.tTempDanhMucKhachHang.findMany({
        })
    }
}
