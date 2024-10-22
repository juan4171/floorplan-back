import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Forma, FormaSchema } from "./forma.schema";
import { User, UserSchema } from "./user.schema";
import { Types, Document } from "mongoose";

@Schema({
    timestamps: true
})

export class Organization extends Document {
    @Prop({
        required: false,
        trim: true
    })
    name: string;
    
    @Prop({
        required: false,
        trim: true
    })
    direccion: string;

    @Prop({
        required: false,
        trim: true
    })
    contacto: string;
    
    @Prop({
        type: [UserSchema],
        required: true,
    })
    users: Types.Array<User>;

    @Prop({
        type: FormaSchema,
        required: true,
    })
    forma: Forma;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);