import { Module } from '@nestjs/common';
import { WarningService } from './warning.service';
import { WarningController } from './warning.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WarningSchema } from './model/warning.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Warning', schema: WarningSchema }]),
  ],
  providers: [WarningService],
  controllers: [WarningController],
})
export class WarningModule {}
