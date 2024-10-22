import { IsString, IsNotEmpty, IsInt, IsDefined, Max, MaxLength, Min } from 'class-validator';

export class CreateFormaDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @MaxLength(1)
    letra: string;

    @IsInt()
    @IsNotEmpty()
    @IsDefined()
    numero: number;

    @IsInt()
    @IsNotEmpty()
    @IsDefined()
    @Max(2999)
    @Min(1810)
    año: number;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    partida: string;
}