let users = [];

fetch('users.json')
  .then(response => response.text())
  .then(text => {
    users = JSON.parse(text);
    displayUsers(users);
  })
  .catch(err => console.error('Error:', err));

function displayUsers(userList) {
  const template = document.getElementById('existingUser');
  const parent = template.parentNode;
  template.style.display = 'none';

  document.querySelectorAll('.user-card').forEach(el => el.remove());

  userList.forEach(user => {
    const userBlock = template.cloneNode(true);
    userBlock.style.display = 'block';
    userBlock.id = '';
    userBlock.classList.add('user-card');

    const li1 = document.createElement('li');
    li1.textContent = `Name: ${user.name}`;
    const li2 = document.createElement('li');
    li2.textContent = `Email: ${user.email}`;
    const li3 = document.createElement('li');
    li3.textContent = `Address: ${user.address}`;
    const li4 = document.createElement('li');
    li4.textContent = `Phone: ${user.phone}`;

    userBlock.appendChild(li1);
    userBlock.appendChild(li2);
    userBlock.appendChild(li3);
    userBlock.appendChild(li4);

    parent.appendChild(userBlock);
  });
}

document.getElementById('addUser').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !email || !address || !phone) {
    alert('Please fill all fields');
    return;
  }

  const newUser = { name, email, address, phone };
  users.push(newUser);
  displayUsers(users);

  document.getElementById('newUser').reset();
});
