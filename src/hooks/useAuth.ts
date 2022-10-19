import axios from "axios";
import {useCallback, useState} from "react"
import {useHistory} from "react-router-dom";
import {User} from "../types/api/user";
import {useMessage} from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const {showMessage} = useMessage();

  //Loading
  const [loading, setLoding] = useState(false);

  const login = useCallback((id:string) => {
    
    setLoding(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if(res.data){
      showMessage({title: "logged in", status:"success"})
        history.push("/home")
    } else {
      showMessage({title: "This ID isn't exist", status:"error"})
    }
    }).catch(() =>showMessage({title: "Can't login", status:"error"})).finally(() => setLoding(false))
  }, []);
  return { login , loading };
}
