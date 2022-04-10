const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const firstPartPassword = /[a-z]/;
const secondPartPassword = /\d+/;
const lastPartPassword = /.[!,@,$,#,&,%,*,(,),_,+,=,~]/;
const passwordIsValid =
  /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

export {
  emailIsValid,
  firstPartPassword,
  secondPartPassword,
  lastPartPassword,
  passwordIsValid,
};
