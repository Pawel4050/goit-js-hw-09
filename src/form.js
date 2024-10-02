const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const saveToLocalStorage = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener('input', saveToLocalStorage);
const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
};

window.addEventListener('load', loadFromLocalStorage);

const handleSubmit = event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email && message) {
    console.log({ email, message });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert('Please fill out both fields!');
  }
};

form.addEventListener('submit', handleSubmit);
