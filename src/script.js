// Here goes all the Code that provides the Login Form with Functionality
// Please do not use JQuery. Regular Vanilla JavaScript is perfect!!
const googleLogin = () => {
  const message = document.getElementById('signGoogleMessage');
  message.style.display='block';

  setTimeout(() => {
    console.log('No display now!');
    window.location.replace('https://www.google.com/');
    message.style.display='none';
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

const resetForm = () => {
  const form = document.getElementById('login-form');
  form.reset();
};
const preventSbm = () => {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

const userLogin = () => {
  const mail = document.getElementById('email');
  const password = document.getElementById('password');
  const mailMessage = document.getElementById('emailMessage');
  const pwdMessage = document.getElementById('passwordMessage');
  let ver, pass;

  if (!mail.value) {
    mailMessage.innerHTML = 'Please, fill out your email';
    mailMessage.style.display = 'block';
    mail.className += ' messageBox';
    resetForm();
  }
  else {
    ver = emailVerify(mail.value);
    if(!ver) {
      mailMessage.innerHTML = 'Please, enter a valid email';
      mailMessage.style.display = 'block';
      mail.className += ' messageBox';
      preventSbm();
      resetForm();
    } else {
      mailMessage.innerHTML = '';
      mail.className -= ' messageBox';
    }
  }

  if (!password.value) {
    pwdMessage.innerHTML = 'Please enter your password';
    pwdMessage.style.display = 'block';
    password.className += ' messageBox';
    preventSbm();
  } else {
    pass = checkPassword(password.value);
    if (!pass) {
      pwdMessage.innerHTML = 'Use at least 4 characters for the password';
      pwdMessage.style.display = 'block';
      password.innerHTML = '';
      password.className += ' messageBox';
      preventSbm();
    } else {
      pwdMessage.innerHTML = '';
      password.className -= ' messageBox';
    }
  }
};

const signGoogle = document.getElementsByClassName('button');
signGoogle[0].addEventListener('click', googleLogin);

const loginButton = document.getElementById('submit');
loginButton.addEventListener('click', userLogin);
