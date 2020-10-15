import { ITaskDocument, taskQueries } from "../../../db";
import { TaskNotFound } from "../UsecaseErrors";
import { GetTaskRequest } from "./request";


class GetTaskUseCase{

    async execute(data:GetTaskRequest):Promise<ITaskDocument|TaskNotFound>{
         const result = await taskQueries.getTask(data.id);
        if(result == undefined){
            return new TaskNotFound();
        }else{
            return result;
        }
         
    }

}

export const getTaskUsecase = new GetTaskUseCase();
