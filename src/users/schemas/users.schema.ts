import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, HydratedDocument } from 'mongoose';

export type usersDocument = HydratedDocument<Users>;

@Schema({ timestamps: true })
export class Users {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: false, default: '' })
  countryCode: string;

  @Prop({ required: false, default: '' })
  phoneNumber: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false, default: '' })
  image: string;

  @Prop({ enum: ['admin', 'user'], default: 'user', required: false })
  role: string;

  @Prop({ required: false, default: 0 })
  otp: number;

  @Prop({ required: false, default: '' })
  fcmToken: string;

  @Prop({ enum: ['android', 'ios'], default: 'android', required: false })
  deviceType: string;

  @Prop({ required: false, default: '' })
  deviceId: string;

  @Prop({ default: true })
  isNotificationOn: boolean;

  @Prop({
    enum: ['verified', 'pending', 'deactivated'],
    default: 'pending',
    required: false,
  })
  status: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;

  @Prop()
  deletedAt?: Date;

  @Prop({ default: false })
  deleted: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
