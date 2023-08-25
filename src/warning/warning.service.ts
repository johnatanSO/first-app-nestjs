import { Injectable } from '@nestjs/common';
import { NewWarning, Warning } from './model/warning.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WarningService {
  warningModel: Model<Warning>;
  constructor(@InjectModel('Warning') warningModel: Model<Warning>) {
    this.warningModel = warningModel;
  }

  async list(idStudent: string): Promise<Warning[]> {
    return await this.warningModel.find({ idStudent });
  }

  async create({ idStudent, title, description }: NewWarning) {
    const warningsAmount = await this.warningModel.countDocuments({
      idStudent,
    });
    const code = (Number(warningsAmount) + 1).toString();
    const newWarning = await new this.warningModel({
      code,
      title,
      description,
      idStudent,
    }).save();

    return newWarning;
  }
}
