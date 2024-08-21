
  function evaluatepass()
  {
    const pass1=document.getElementById("user");
    let pass1value=pass1.value;
    const user1=document.getElementById("pass");
    let user1value= user1.value;
    if(pass1value===""||user1value==="")
    {
        window.alert("Kindly enter credentials");
    }
    else if(pass1value=="prudhvi"&&user1value=="veera")
    {
        window.location.href="learn.html";
    }
    else{
        window.alert("Wrong Credentials");
    }
    
  }
  
  {
    
    
  }