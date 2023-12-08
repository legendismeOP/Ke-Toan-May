import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class DanhmucchungtuService {
    constructor (private prismaService:PrismaService ){
    }
    async getAllData(){
        return await this.prismaService.tDanhMucChungTu.findMany({
        })
    }
}
