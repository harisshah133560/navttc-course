//  sir code

//     let btn = document.getElementById("Signup");
// let signupdiv = document.getElementById("signupdiv");
// let getname = localStorage.getItem("name");
// let success = document.getElementById("success");
// btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     localStorage.setItem("name", name)
//     window.location.reload();
//     // window.location.href = "index.html"

// });

// console.log(getname);
// success.innerText = getname ? `Hello, ${getname} you are successfully signed up!` : "Please Sign up!"

// signupdiv.style.display = getname ? "none" : "block";
// function logout() {
//     localStorage.removeItem("name");
//     window.location.reload();
// }
// document.writeln(getname);

// acccess code
// let input_emil = document.getElementById("email");
// let input_password = document.getElementById("password");
// let btn = document.getElementById("Signup");
// let signupdiv = document.getElementById("signupdiv");
// let success = document.getElementById("success");

// // signup btn functionality that can store data in local storage
// // and reload the page
// // it means that using setItem method we can store data in local storage
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   localStorage.setItem("email", email);
//   localStorage.setItem("password", password);
//   window.location.reload();
// });
// // now i want to show the message that user is successfully signed up
// let getemail = localStorage.getItem("email");
// let getpassword = localStorage.getItem("password");
// success.innerText =
//   getemail && getpassword
//     ? `Hello, ${getemail} you are successfully signed up!`
//     : "Please Sign up!";
// // now i want to hide the signup form when user is signed up
// signupdiv.style.display = getemail && getpassword ? "none" : "block";
// // now i want to create a logout function that can remove the data from local storage
// function logout() {
//   localStorage.removeItem("email");
//   localStorage.removeItem("password");
//   window.location.reload();
// }
// now i want to show the email and password of the user
// document.writeln(getemail);
// document.writeln(getpassword);
// now i want to show the email and password of the user in the console
// console.log(getemail);
// console.log(getpassword);

// chatgpt code of login form
// Access elements
    const input_email = document.getElementById("email");
    const input_password = document.getElementById("password");
    const btn = document.getElementById("Signup");
    const signupdiv = document.getElementById("signupdiv");
    const success = document.getElementById("success");
    const signoutBtn = document.getElementById("signout");
    // Signup button functionality
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const email = input_email.value
      const password = input_password.value
      if (!email || !password) {
        success.innerText = "Please fill in both fields.";
        success.classList.replace("text-green-600", "text-red-500");
        return;
      }
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      window.location.reload();
    });
    // Show success message and hide/show UI accordingly
    const getemail = localStorage.getItem("email");
    const getpassword = localStorage.getItem("password");
    if (getemail && getpassword) {
      success.innerText = `✅ Hello, ${getemail}! You have successfully signed up.`;
      signupdiv.style.display = "none";
      signoutBtn.classList.remove("hidden");
    } else {
      success.innerText = "Please Sign up!";
      signoutBtn.classList.add("hidden");
    }
    // Logout function
    function logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.reload();
    }

