import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  amount: number;

  @Prop({required:true,minlength:10,maxlength:10,unique:true})
  phone: string;

  @Prop({default:true})
  isVisible: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
