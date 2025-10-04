let users = [];

fetch('users.json')
  .then(response => response.text())
  .then(text => {
    users = JSON.parse(text);
    document.getElementById('search').addEventListener('click', function () {
  const searchValue = document.getElementById('searchbar').value.trim().toLowerCase();
  const template = document.getElementById('details');
  const parent = template.parentNode;

  const oldResults = document.querySelectorAll('.user-card, .no-result');
  oldResults.forEach(el => el.remove());

  const foundUser = users.find(user => user.name.toLowerCase() === searchValue);

  if (foundUser) {
    const userDiv = template.cloneNode(true);
    userDiv.style.display = 'block';
    userDiv.classList.add('user-card');

    userDiv.querySelector('#name').textContent = foundUser.name;
    userDiv.querySelector('#email').textContent = foundUser.email;
    userDiv.querySelector('#phone').textContent = foundUser.phone;

    parent.appendChild(userDiv);
  } else {
    const noResult = document.createElement('p');
    noResult.textContent = 'No user found with that name.';
    noResult.classList.add('no-result');
    parent.appendChild(noResult);
  }
});

  })
  .catch(err => console.error('Error:', err));

