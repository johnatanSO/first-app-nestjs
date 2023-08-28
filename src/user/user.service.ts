import { Injectable } from '@nestjs/common';
import { NewUser, User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  userModel: Model<User>;
  constructor(@InjectModel('User') userModel: Model<User>) {
    this.userModel = userModel;
  }

  async list(): Promise<User[]> {
    return await this.userModel.find();
  }

  async create({ idStudent, title, description }: NewUser) {
    const warningsAmount = await this.userModel.countDocuments({
      idStudent,
    });
    const code = (Number(warningsAmount) + 1).toString();
    const newWarning = await new this.userModel({
      code,
      title,
      description,
      idStudent,
    }).save();

    return newWarning;
  }
}
