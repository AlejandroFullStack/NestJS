import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { createTareaDto } from './dto/create-tarea.dto';
import { Tarea } from './interfaces/tarea';

@Injectable()
export class TareasService {

    constructor(@InjectModel('Tarea') private tareaModel: Model<Tarea>){}

    async getTareas(){
        return await this.tareaModel.find();
    }

    async getTareaId(id: string){
        return await this.tareaModel.findById(id);
    }

    async createdTarea( tarea: createTareaDto){
        const newTarea = new this.tareaModel(tarea);
        return  await newTarea.save();
    }

    async deleteTarea (tareaId: string){
        return await this.tareaModel.findByIdAndRemove(tareaId);
    }

    async updateTarea ( tareaId: string, tarea: createTareaDto){
        return await  this.tareaModel.findById(tareaId).updateOne(tarea);
    }
}
