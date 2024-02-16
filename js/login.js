document.querySelector('#submit-btn').addEventListener('click', () => {
  const userEmail = document.querySelector('#user-email');
  const emailValue = userEmail.value;
  const passFild = document.querySelector('#user-password');
  const passValue = passFild.value;
  if (emailValue === 'abiazabran@gmail.com' && passValue === 'aaaaa') {
    window.location.href = 'dashbord.html';
  } else {
    // console.log('invalid user');
    alert('Your password or email address is incorrect please enter your right password or e mail');
  }
});
