import axios from "axios";
let url = "http://127.0.0.1:8000/api/user/";
let urlModuleRol = "http://127.0.0.1:8000/api/rol-module";
let urlModule = "http://127.0.0.1:8000/api/module";
let urlProgram = "http://127.0.0.1:8000/api/program";

class User{
    async getUserData(){
       const dataUser = axios.get(url).then((response)=>{
            return response.data;
        });
        return dataUser;
    }
    async getModuleRol(){
        const data = axios.get(urlModuleRol).then((response)=>{
            return response.data;
        })
        return data;

    }
    async getModule(){
        const data = axios.get(urlModule).then((response)=>{
            return response.data;
        })
        return data;
    }
    async getProgram(){
        const data = axios.get(urlProgram).then((response)=>{
            return response.data;
        })
        return data;
    }
}
export default new User();
