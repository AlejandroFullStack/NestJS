import { Schema } from "mongoose";

export const tareaSchema = new Schema({

    title:String,
    description:String,
    done: Boolean

})