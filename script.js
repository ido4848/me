document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Here you can integrate with an email service or backend API to handle the form submission
    } else {
      alert('Please fill in all fields before submitting.');
    }
  });
  