
let sidenav = document.querySelector(".sidenav")


function shownav() {
  sidenav.style.display = "block"
}
function closenav() {
  sidenav.style.display = "none"
}

// course 
let curriculumdiv = document.getElementById("curriculum-div")
let overviewdiv = document.getElementById("overview-div")
let overview = document.getElementById("overview")
let Curriculum = document.getElementById("Curriculum")

function btnoverview() {
  overviewdiv.style.display = "block"
  curriculumdiv.style.display = "none"
  overview.style.backgroundColor = "#ee9c03"
  overview.style.border = "1px solid white";
  Curriculum.style.backgroundColor = "white"
  Curriculum.style.border = "1px solid grey";
}
function btncurriculumdiv() {
  overviewdiv.style.display = "none"
  curriculumdiv.style.display = "block"
  Curriculum.style.backgroundColor = "#ee9c03"
  Curriculum.style.border = "1px solid white";
  overview.style.backgroundColor = "white"
  overview.style.border = "1px solid grey";
}

//form validation 
function validateform() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;
  let messege = document.getElementById("messege").value;

// name validation 

  if (name == "") {
    alert("Name is required");
    return false;
  }

  const namePattern = /^[A-Za-z ]+$/; //regex 

  if (!namePattern.test(name)) {
    alert("Name should contain only letters.");
    return false;
  }

  // email validation 

  if (email == "") {
    alert("Email is required");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (!emailPattern.test(email)) {
    alert("Enter a valid email");
    return false;
  }

  // if (!email.includes("@")) {
  //   alert("enter a valid email");
  //   return false;
  // }

   // phone validation 
  
  if (phone == "") {
    alert("Phone Number is required");
    return false;
  }

  const phonePattern = /^[0-9]{10}$/;  
  if (!phonePattern.test(phone)) {
    alert("Phone number should contain exactly 10 digits.");
    return false;
  }

  // if (phone.length != 10) {
  //   alert("number must be 10 digits");
  //   return false;
  // }


     // course validation 
  if (course == "") {
  alert("Please select a course.");
  return false;
}

 // messege validation 
if (messege == "") {
  alert("Please enter your message.");
  return false;
}

  // Data to send
  var templateParams = {
    name: name,
    email: email,
    phone: phone,
    course: course,
    messege: messege
  };

  // Send email using EmailJS
  emailjs.send(
    'service_1k7bst9',
    'template_wjvgjsk',
    templateParams
  )
    .then(function (response) {
      document.querySelector("form").reset();

      document.getElementById("success").style.display = "flex";

    })
    .catch(function (error) {
      alert("Failed to send email.");

      console.log(error);
    })

  // Prevent default form submission
  return false;
}


// Close Popup

function closemsg() {
  document.getElementById("success").style.display = "none";
}