import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { tareaSchema } from './schemas/tarea.schemas';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
/*
@Module({
    imports:[TareasModule,MongooseModule.forRoot('mongodb://localhost/nest-tutorial',{
        useNewUrlParser:true
    })],
    controllers:[TareasController],
    providers:[TareasService],
})
*/
@Module({
    imports:[MongooseModule.forFeature([{name:'Tarea',schema:tareaSchema}])],
    controllers:[TareasController],
    providers:[TareasService],
})
export class TareasModule {

}
