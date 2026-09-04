document.querySelector("#register-spinner").style.display = "none";
// get the form 
const form = document.querySelector("#register-form");

form.addEventListener("submit", async function(event){
    event.preventDefault();

    // start the spinner
    document.querySelector("#register-spinner").style.display = "";

    let firstname = form.firstname.value.trim();
    let lastname = form.lastname.value.trim();
    let email = form.email.value.trim();
    let password = form.password.value.trim();

    let bio = form.bio.value.trim();

    if(firstname.length == 0){
        document.querySelector("#firstnameHelp").innerHTML = "<div class='alert alert-danger p-1'><small>You did not enter firstname</small></div>"
    }

    if(lastname.length == 0){
        document.querySelector("#lastnameHelp").innerHTML = "<div class='alert alert-danger p-1'><small>You did not enter lastname</small></div>"
    }


    // send your request to the backend
    let result = await axios.post("http://localhost:3000/register", {
        firstname,
        lastname,
        email,
        password,
        bio
    });


    // console.log(result);

    let data = result.data;

    console.log(data)

    if(data.code == "success"){
        alert(data.message);

        //end the spinner
        document.querySelector("#register-spinner").style.display = "none";
    }


})