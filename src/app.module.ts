import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WarningModule } from './warning/warning.module';

const MONGO_USERNAME = 'johnatanSO';
const MONGO_PASSWORD = 'pW67rJ9mzs4o9MoU';
const mongoURL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@gestor-escolar-cluster.c2i24so.mongodb.net/`;

@Module({
  imports: [MongooseModule.forRoot(mongoURL), WarningModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
