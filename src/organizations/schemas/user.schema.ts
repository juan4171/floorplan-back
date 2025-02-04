import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
    @Prop({
        required: true,
        trim: true
    })
    name: string;

    @Prop({
        required: true,
        trim: true
    })
    email: string;

    @Prop({
        required: true,
        default: false
    })
    isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);