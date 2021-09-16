import { Body, Controller, Delete, Get , Param, Post, Put} from '@nestjs/common';
import { TasksService } from '../service/tasks.service';
@Controller('api/tasks')
export class TasksController {

    constructor(
        private tasksService: TasksService
    ) {}

    @Get()
    getAll(){
        return this.tasksService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.tasksService.findOne(id);
    }

    @Post()
    createTask(@Body() body:any){
        return this.tasksService.create(body);
    }

    @Put(':id')
    updateTask(@Body() body:any, @Param('id') id: number ){
        return this.tasksService.update(id,body);
    }

    @Delete(':id')
    deleteTaskId(@Param('id') id: number){
        return this.tasksService.delete(id);
    }


}
