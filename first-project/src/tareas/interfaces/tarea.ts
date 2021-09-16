import { Document } from "mongoose";

export interface Tarea extends Document{
    id?: number,
    title: string,
    descripttion: string,
    done: boolean
}