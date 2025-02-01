import { IsString, IsNotEmpty, IsDefined, IsBoolean } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    email: string;

    @IsBoolean()
    @IsDefined()
    isAdmin: boolean;
}