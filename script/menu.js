const menuBtn = document.getElementById('menu-close-btn');
const menuSection = document.querySelector('section.mobile-menu');
const closeButton = document.getElementById('close-btn');
const menuItems = document.getElementsByClassName('menu-item');

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    menuSection.classList.remove('visible');
  });
}

menuBtn.addEventListener('click', () => {
  menuSection.classList.add('visible');
  menuBtn.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  menuSection.classList.remove('visible');
  menuBtn.style.display = 'block';
});

// *******************************Cient Validation Start here.*******************************
const contact = document.getElementById('form');

const isUpperCaseEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return true;
  }
  return false;
};

contact.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const errorMsg = document.querySelector('.errorsDisplay');
  const validEmail = !isUpperCaseEmail(email);

  if (validEmail) {
    errorMsg.style.display = 'none';
    contact.submit();
  } else {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Please write email in small letters';
  }
});
