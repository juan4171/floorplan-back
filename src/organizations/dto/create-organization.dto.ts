import { IsString, IsArray, IsDefined, ValidateNested } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { Type } from 'class-transformer';
import { CreateFormaDto } from './create-forma.dto';

export class CreateOrganizationDto {
    @IsString()
    @IsDefined()
    name: string;
    
    @IsString()
    @IsDefined()
    direccion: string;

    @IsString()
    @IsDefined()
    contacto: string;

    @IsDefined()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateUserDto)
    users: CreateUserDto[];

    /* @IsDefined()
    @ValidateNested()
    @Type(() => CreateFormaDto)
    forma: CreateFormaDto; */
}
