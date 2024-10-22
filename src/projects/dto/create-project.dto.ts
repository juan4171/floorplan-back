import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsObject, IsMongoId, IsDefined } from 'class-validator';

export class CreateProjectDto {
    @IsMongoId()
    @IsNotEmpty()
    @IsDefined()
    organization: string;
    
    @IsString()
    @IsDefined()
    name?: string;

    @IsObject()
    @IsDefined()
    campos_dinamicos?: Record<string, any>;  // Definición flexible
}