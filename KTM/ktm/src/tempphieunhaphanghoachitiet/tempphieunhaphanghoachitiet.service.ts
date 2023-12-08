import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TempphieunhaphanghoachitietService {
    constructor (private prismaService:PrismaService ){
    }
    getAllData(){
        return this.prismaService.tTempPhieuNhapHangHoaChiTiet.findMany({
        })
    }
}
