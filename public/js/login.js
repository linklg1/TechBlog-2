console.log('we are logging in');

async function loginFormHandler(event) {
  event.preventDefault();

const username=document.querySelector("#email-login").value;
const email = document.querySelector("#email-login").value;
const password = document.querySelector("#password-login").value;

console.log('email'+ email);
console.log('pwd'+ password);

let handleError=function(err){
  console.warn(err);
  return new Response(JSON.stringify({
    code:400, 
    message: 'network error!'
  }));
};

try {
  const user = await axios.post("/api/user", {username:username, password:password})
  console.log(user);
  
} catch (error) {
  console.log(error);
}
// if (username && password) {
//   let response = await fetch('/api/user/login', {
//     method: "POST",
//     body: JSON.stringify({
//       username: username,
//       password: password
//     }),

//     headers: { "Content-Type": "application/json" }
//   }).catch(handleError);

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
  
// }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
