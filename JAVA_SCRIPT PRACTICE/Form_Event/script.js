let form=document.getElementById("myForm");

form.addEventListener("submit",(e) =>{
  //this is for the stoping the automatic action like page refresh like this things
    e.preventDefault();

  let name=document.getElementById("name").value.trim();
  let email=document.getElementById("email").value.trim();
  let password=document.getElementById("password").value.trim();
  let city=document.getElementById("city").value.trim();

  if (name === "") {
        alert("Please fill Name");
    }
  else if(email=== ""){
    alert("eneter the mail");
  }
  else if(password===""){
    alert("enter the password");
  }
  else if(city===""){
    alert("enter city");
  }

  else{
    alert("Successfull")
  }
     
});