import axios from "axios";
let url = "http://127.0.0.1:8000/api/user/";

class User{
    async getUserData(){
       const data = axios.get(url).then((response)=>{
            return response.data;
        });
        return data;
    }
}
export default new User();
