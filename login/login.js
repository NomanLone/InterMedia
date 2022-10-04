
function login(e) {
  e.preventDefault()
  const users = JSON.parse(window.localStorage.getItem('users')) || []
  const username = e.target[0].value;
  const password = e.target[1].value;
  const user = users.find(user => user.username === username)
  console.log(users);
  if (user && username === user.username && password == user.password) {
    alert('success')
  } else {
    alert('wrong password')
  }
}



