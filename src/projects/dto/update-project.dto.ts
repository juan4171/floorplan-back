import { IsString, IsOptional, IsObject} from 'class-validator';

export class UpdateProjectDto {

    @IsString()
    @IsOptional()
    name?: string;

    @IsObject()
    @IsOptional()
    campos_dinamicos?: Record<string, any>;
}