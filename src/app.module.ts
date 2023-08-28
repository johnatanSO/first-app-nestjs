import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WarningModule } from './warning/warning.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { WarningController } from './warning/warning.controller';
import { WarningService } from './warning/warning.service';

const MONGO_USERNAME = 'johnatanSO';
const MONGO_PASSWORD = 'pW67rJ9mzs4o9MoU';
const mongoURL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@gestor-escolar-cluster.c2i24so.mongodb.net/`;

@Module({
  imports: [MongooseModule.forRoot(mongoURL), WarningModule, UserModule],
  controllers: [UserController, WarningController],
  providers: [UserService, WarningService],
})
export class AppModule {}
