import axios from "axios";
import {useCallback, useState} from "react"
import {useHistory} from "react-router-dom";
import {User} from "../types/api/user";
import {useLoginUser} from "./useLoginUser";
import {useMessage} from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const {showMessage} = useMessage();
  const {setLoginUser} = useLoginUser();

  //Loading
  const [loading, setLoding] = useState(false);

  const login = useCallback((id:string) => {
    
    setLoding(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if(res.data){
      const isAdmin = res.data.id === 10 ? true : false;
      setLoginUser({...res.data, isAdmin})
      showMessage({title: "logged in", status:"success"})
        history.push("/home")
    } else {
      showMessage({title: "This ID isn't exist", status:"error"})
      setLoding(false)
    }
    })
    .catch(() => {
      showMessage({title: "Can't login", status:"error"})
      setLoding(false)
    })
  }, [history, showMessage, setLoginUser]);
  return { login , loading };
}
