import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

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
    console.log(res);
  };
}

export default LoginStore;
