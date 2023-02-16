import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [TasksModule, MongooseModule.forRoot("mongodb+srv://usuario:2000131819@cluster0.jqolbpy.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}