import { IsOptional, IsString } from "class-validator"
import { IsFloat } from "../../chungtughiso/dto/decorator.dto"

export class UpdatePhieuXuatChiTietDTO {

    @IsString()
    @IsOptional()
    cMaHang?: string

    @IsString()
    @IsOptional()
    cDonViTinh?: string

    @IsFloat()
    @IsOptional()
    nSoLuong?: number

    @IsFloat()
    @IsOptional()
    nDonGiaVon?: number

    @IsFloat()
    @IsOptional()
    nThanhTienGiaVon?: number

    @IsFloat()
    @IsOptional()
    nDonGiaBan?: number

    @IsFloat()
    @IsOptional()
    nThanhTienGiaBan?: number

    @IsString()
    @IsOptional()
    cMaChungTuNhap?: string
}