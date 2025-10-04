fetch('users.json')
    .then(response => response.json())
    .then(text => {
        console.log(text)
      const users = text;
      const template = document.getElementById('details');
      const parent = template.parentNode;

      // Clear the original to avoid blank placeholders
      template.style.display = 'none';

      users.forEach(user => {
        // Clone the existing structure
        const userDiv = template.cloneNode(true);
        userDiv.style.display = 'block'; // make visible

        // Fill in the fields
        userDiv.querySelector('#name').textContent = user.name;
        userDiv.querySelector('#email').textContent = user.email;
        userDiv.querySelector('#phone').textContent = user.phone;

        // Optional: add a class so your CSS can target each
        userDiv.classList.add('user-card');

        // Append to the page
        parent.appendChild(userDiv);
      });
    })
    .catch(err => console.error('Error:', err));