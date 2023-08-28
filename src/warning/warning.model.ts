import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const WarningSchema = new mongoose.Schema({
  code: { type: String, default: null },
  uniqueId: { type: String, default: uuidv4() },
  title: { type: String, default: null, required: true },
  description: { type: String, default: null },
  idStudent: { type: String, default: null },
  date: { type: Date, default: new Date() },
});

export interface Warning {
  code: string;
  uniqueId: string;
  title: string;
  description: string;
  idStudent: string;
  date: Date;
}

export interface NewWarning {
  code?: string;
  title: string;
  description: string;
  idStudent: string;
}
