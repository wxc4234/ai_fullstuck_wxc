import { makeAutoObservable } from "mobx";
import { http,setToken } from "@/utils";

class LoginStore {
  token = "";
  constructor() {
    makeAutoObservable(this);
  }

  login = async ({ username, password }) => {
    const res = await http.post("/authorizations", {
      mobile: username,
      code: password,
    });
    this.token = res.data.token;
    // console.log(this.token);
    setToken(res.data.token);
  };
}

export default LoginStore;
