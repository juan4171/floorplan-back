import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationDto } from './create-organization.dto';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from './create-user.dto';
import { CreateFormaDto } from './create-forma.dto';

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    direccion?: string;

    @IsString()
    @IsOptional()
    contacto?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateUserDto)
    @IsOptional()
    users?: CreateUserDto[];

    @ValidateNested()
    @Type(() => CreateFormaDto)
    @IsOptional()
    forma?: CreateFormaDto;
}
