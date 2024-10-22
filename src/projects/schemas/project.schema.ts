import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";

@Schema({
    timestamps: true
})

export class Project extends Document{
    @Prop({
        type: Types.ObjectId,
        ref: 'Organization', 
        required: true
    })
    organization: Types.ObjectId;
    
    @Prop({
        required: false,
        trim: true
    })
    name: string;
    
    @Prop({
        type: Object,
        required: false,
    })
    campos_dinamicos?: Record<string, any>; 
}

export const ProjectSchema = SchemaFactory.createForClass(Project);