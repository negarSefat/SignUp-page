'use strict';

//Create DOM elements
const root = document.getElementById('root');

const container = document.createElement('div');
container.classList.add('container');
root.append(container);

const formContainer = document.createElement('div');
formContainer.classList.add('form__container');

container.appendChild(formContainer);

//-----------Picture-----------------
const formPhoto = document.createElement('div');
formPhoto.classList.add('form__photo');

formContainer.appendChild(formPhoto);

const formImage = document.createElement('img');
formImage.setAttribute('src', './pic.png');
formImage.setAttribute('alt', 'main-photo');

const imageText = document.createElement('p');
imageText.textContent = 'Welcome, We are glad to see you again!';
imageText.classList.add('form__photo-text');
formPhoto.appendChild(formImage);
formPhoto.appendChild(imageText);

//-----------Form--------------------
const form = document.createElement('form');
form.classList.add('form');
formContainer.appendChild(form);

//-----------Form title--------------
const formTitle = document.createElement('span');
formTitle.textContent = 'Sign Up';
formTitle.classList.add('form__title');
form.appendChild(formTitle);

//-----------Form body--------------
const formBody = document.createElement('div');
formBody.classList.add('form__Body');
form.appendChild(formBody);

const formBody_items = document.createElement('div');
formBody_items.classList.add('form__Body-item');
formBody.appendChild(formBody_items);

const firstLabel = document.createElement('label');
firstLabel.textContent = 'First Name';
firstLabel.classList.add('label');
formBody_items.appendChild(firstLabel);

const firstInput = document.createElement('input');
firstInput.classList.add('input1');
firstInput.setAttribute('type', 'text');
firstInput.setAttribute('placeholder', 'Enter Your first name');
formBody_items.appendChild(firstInput);

const secondLabel = document.createElement('label');
secondLabel.textContent = 'Last Name';
secondLabel.classList.add('label');
formBody_items.appendChild(secondLabel);

const secondInput = document.createElement('input');
secondInput.classList.add('input2');
secondInput.setAttribute('type', 'text');
secondInput.setAttribute('placeholder', 'Enter Your last name');
formBody_items.appendChild(secondInput);

const thirdLabel = document.createElement('label');
thirdLabel.textContent = 'Email Address';
thirdLabel.classList.add('label');
formBody_items.appendChild(thirdLabel);

const thirdInput = document.createElement('input');
thirdInput.classList.add('input3');
thirdInput.setAttribute('type', 'text');
thirdInput.setAttribute('placeholder', 'Email Address');
formBody_items.appendChild(thirdInput);

const forthLabel = document.createElement('label');
forthLabel.textContent = 'Password';
forthLabel.classList.add('label');
formBody_items.appendChild(forthLabel);

const forthInput = document.createElement('input');
forthInput.classList.add('input4');
forthInput.setAttribute('type', 'password');
forthInput.setAttribute('placeholder', 'Re enter Password');
formBody_items.appendChild(forthInput);

//---------form footer text -------------
const formText = document.createElement('div');
formText.classList.add('form__text');
form.append(formText);

const formText_content1 = document.createElement('span');
formText_content1.textContent = 'Already have an account?';
formText.appendChild(formText_content1);

const formText_content2 = document.createElement('span');
formText_content2.textContent = 'Sign Up';
formText.appendChild(formText_content2);

//---------form button ------------
const formButton = document.createElement('button');
formButton.textContent = 'Sign Up';
formButton.classList.add('form-button');
form.appendChild(formButton);

//----API----

// 1.solution1

// formButton.addEventListener('click', function (e) {
//   e.preventDefault();

//   const firstNameInput = document.querySelector('.input1').value;
//   const lastNameInput = document.querySelector('.input2').value;
//   const emailInput = document.querySelector('.input3').value;
//   const passInput = document.querySelector('.input4').value;

//   fetch('https://dummyjson.com/users/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       firstName: firstNameInput,
//       lastName: lastNameInput,
//       email: emailInput,
//       password: passInput,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error('something went wrong❌'));
// });

// 2.solution2

formButton.addEventListener('click', function (e) {
  e.preventDefault();
  const firstNameInput = document.querySelector('.input1').value;
  const lastNameInput = document.querySelector('.input2').value;
  const emailInput = document.querySelector('.input3').value;
  const passInput = document.querySelector('.input4').value;

  async function fetchApi() {
    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstNameInput,
          lastName: lastNameInput,
          email: emailInput,
          password: passInput,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch {
      (err) => console.error('something went wrong❌');
    }
  }
  fetchApi();
});
