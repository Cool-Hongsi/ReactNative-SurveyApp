export const validation_Email = (emailString) => {
  var re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(emailString)){
    return true;
  } else {
    return false;
  }
};

export const check_empty = (data) => {
  if(data !== ''){
    return true;
  } else {
    return false;
  }
};