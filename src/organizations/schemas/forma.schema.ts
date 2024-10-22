import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Forma extends Document {
    @Prop({
        required: true,
        trim: true,
        maxlength: 1
    })
    letra: string;

    @Prop({
        required: true
    })
    numero: number;

    @Prop({
        required: true
    })
    año: number;

    @Prop({
        required: true,
        trim: true
    })
    partida: string;
}

export const FormaSchema = SchemaFactory.createForClass(Forma);