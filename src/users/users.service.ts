import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/users.schema';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly usersSchema: Model<User>) {}

  create(createUserDto: Users): Promise<User> {
    return this.usersSchema.create(createUserDto);
  }

  findAll(query = {}): Promise<Users[]> {
    return this.usersSchema.find(query);
  }

  findOneById(id: number): Promise<Users> {
    return this.usersSchema.findById(id);
  }

  findOneByQuery(query: any): Promise<Users> {
    return this.usersSchema.findOne(query);
  }

  update(query: any, update: any): Promise<Users> {
    return this.usersSchema.findOneAndUpdate(query, update);
  }

  remove(query: any): Promise<Users> {
    return this.usersSchema.findOneAndUpdate(query, {
      $set: {
        deleted: true,
        deletedAt: new Date(),
      },
    });
  }
}
