function CheckValidate() {
    //Name
    let name = document.getElementById(`name`);
    if(name.value.trim().length==0){
        alert(`Please input your name`);
        name.focus();
    }

    //Phone
    let mobile = document.getElementById(`mobile`)
    if (mobile.value == "") {
        alert("Please enter your 10 digits mobile no.");
        mobile.focus();
   }
    //Email
    var email = document.getElementById("email")
    if (email.value == "") {
        alert("Please enter your valid email Id");
        email.focus();
    }

    //Age
    let age = document.getElementById(`age`);
    if(age.value.length==0){
        alert(`Please input your age`);
    }

    //Textarea
    let textarea = document.getElementById(`textarea`);
    if(textarea.value.trim().length==0){
        alert(`Please raise your opinion - When did you first know you wanted to be a zoo-keeper?`);
    }

}  

let btn1 = document.getElementById(`btn1`);
btn1.onclick = CheckValidate;


