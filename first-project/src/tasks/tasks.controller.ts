import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {

    /* Ruta = tasks*/
    @Get()
    getTasks(): string {
        return 'Retrieving Task';        
    }
    /* Ruta = tasks/test */
    @Get('/test')
    getTaskTest(): string {
        return 'Retrieving Task Test'        
    }

     /* Ruta = tasks/testjson    entrega un objeto en formato JSON*/
     @Get('/testjson')
     getTaskTestjson(): { hello: string} {
         return   {'hello': 'world'}    
     }
 


    /*@Body task: recibe un DTO */
    @Post()
    createTask(@Body() task: createTaskDto): string{
        console.log(task.title)
        console.log(task.description) 
        console.log(task.done)
        return 'Created task'
    }

    
    /* Parametro id  */
    @Delete(':id')
    deleteTask(@Param('id') id): string{
        console.log(id)
        return 'Delete task with id: ' + id
    }

    /* Update Id con body */
    @Put(':id')
    updateTask(@Body() task:createTaskDto, @Param('id') id ): string{
        console.log(task)
        console.log(id)
        return 'Update task'
    }

}
