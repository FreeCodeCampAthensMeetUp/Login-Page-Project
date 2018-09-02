// Here goes all the Code that provides the Login Form with Functionality
// Please do not use JQuery. Regular Vanilla JavaScript is perfect!!
const googleLogin = () => {
  setTimeout(() => {
    alert('Redirecting you to google.com');
    window.location.replace('https://www.google.com/');
  }, 1000);
};
const emailVerify = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
};
const checkPassword = (password) => {
  if (password.length < 4) {
    return false;
  } else {
      return true;
  }
};
const userLogin = () => {
  const mail = document.getElementById('email');
  // console.log(mail.value);
  if (!mail.value) {
    alert('Please, fill out your email');
  } else {
    const ver = emailVerify(mail.value);
    if(!ver) {
      alert('Please, enter a valid email');
    } else {
      const password = document.getElementById('password');
      if (!password.value) {
        alert('Please enter your password');
      } else {
        const pass = checkPassword(password.value);
        if (!pass) {
          alert('Use at least 4 characters for the password');
        } else {
          alert('Welcome user!');
        }
      }
    }
  }
};

const div = document.getElementsByClassName('button');
// console.log(div[0]);
div[0].addEventListener('click', googleLogin);

const buttonElement = document.getElementById('submit');
// console.log(buttonElement);
buttonElement.addEventListener('click', userLogin);
