import * as axios from 'axios'
import {API_PATH} from "../context/types";

const instance = axios.create({
    baseURL: API_PATH,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const apiAddTodo =  async (title) =>{
         return  await instance.post('/todos.json',{
             title
         })
}
export const apiGetAllTodo = async () =>{
    return await instance.get('/todos.json');

}
export const apiDelete = async (index) =>{
    return await instance.delete(`/todos/${index}.json`);
}
