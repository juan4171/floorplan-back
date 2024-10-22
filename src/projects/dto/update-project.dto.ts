import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsObject, IsMongoId, IsDefined } from 'class-validator';
import { CreateProjectDto } from './create-project.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateProjectDto {

    @IsString()
    @IsOptional()
    name?: string;

    @IsObject()
    @IsOptional()
    campos_dinamicos?: Record<string, any>;
}