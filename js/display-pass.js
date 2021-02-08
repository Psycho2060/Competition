 const pass_field = document.getElementById("passwords");
const show_btn = document.getElementsByClassName("fa-eye");
const hide_btn =document.getElementsByClassName("fa-eye-slash")
show_btn.addEventListener("click", function(){
  if(pass_field.type === "password"){
    pass_field.type = "text";

  }else{
    pass_field.type = "password";

  }
}); 