import mongoose from 'mongoose';

export const WarningSchema = new mongoose.Schema({
  code: { type: String, default: null },
  uniqueId: { type: String, default: Math.random() * 879865489 },
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
