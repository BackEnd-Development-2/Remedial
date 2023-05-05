const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  fetch('https://64549e1cf803f345762cc566.mockapi.io/Users', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Form submitted successfully');
      form.reset();
      window.location.href = "PaymentNotifOffline.html";
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => console.error(error));
});
