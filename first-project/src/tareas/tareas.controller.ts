import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createTareaDto } from './dto/create-tarea.dto';
import { Tarea } from './interfaces/tarea';
import { TareasService } from './tareas.service';

@Controller('tareas')
export class TareasController {

    constructor(private tareaService: TareasService) {}

    @Get()
    getTareas(): Promise<Tarea[]> {
        return this.tareaService.getTareas();
    }

    @Get(':tareaId')
    getTareaId(@Param('tareaId') tareaId:string){
        return this.tareaService.getTareaId(tareaId);
    }

    @Post()
    createTarea(@Body() tarea: createTareaDto): Promise<Tarea> {
        return this.tareaService.createdTarea(tarea);
    }
    @Delete(':tareaId')
    deleteTarea(@Param('tareaId') tareaId:string): Promise<Tarea>{
        return this.tareaService.deleteTarea(tareaId);
    }

    @Put(':tareaId')
    updateTarea(@Body() tarea: createTareaDto,@Param('tareaId') tareaId:string){
        return this.tareaService.updateTarea(tareaId,tarea);
    }

}
