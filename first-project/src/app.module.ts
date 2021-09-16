import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TareasController } from './tareas/tareas.controller';
import { TareasService } from './tareas/tareas.service';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [TareasModule,MongooseModule.forRoot('mongodb://localhost/nest-tutorial',{
    useNewUrlParser:true
})],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
