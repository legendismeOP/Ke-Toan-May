import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient{
    
    constructor(){
        
        super({
            datasources: {
                db: {
                    url:"sqlserver://localhost:1433;database=DLKT;user=sa;password=Vinhtu123456@;trustServerCertificate=true"
                }
            }
        })  
    }
}
