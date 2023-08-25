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
    console.log('idStudent: ', idStudent);
    const warnings = await this.warningModel.find({ idStudent });

    console.log('warnings', warnings);
    return warnings;
  }

  async create(warningData: NewWarning) {
    console.log('warningData ', warningData);
  }
}
