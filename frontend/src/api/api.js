import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:8080",
});

export const teste = async () => {
  try {
    const user = await Axios.post("/login", {
      email: "mddsfdfsf@gmail.com",
      password: "Md32cdfdsfds$",
    });

    console.log(user.headers["x-access-token"]);
    // console.log("funfou");
  } catch (e) {
    console.error(e);
  }
};
