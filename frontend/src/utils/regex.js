const emailIsValid = /\S+@\S+\.\S+/;
const firstPartPassword = /[a-z]/;
const secondPartPassword = /\d+/;
const lastPartPassword = /.[!,@,$,#,&,%,*,(,),_,+,=,~]/;

export {
  emailIsValid,
  firstPartPassword,
  secondPartPassword,
  lastPartPassword,
};

