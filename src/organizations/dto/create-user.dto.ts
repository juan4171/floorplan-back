import { IsString, IsNotEmpty, IsDefined } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    email: string;
}