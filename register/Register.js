function register(e) {
    const users = JSON.parse(window.localStorage.getItem('users')) || []
    e.preventDefault()
    const username = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const tel = e.target[3].value;
    const password = e.target[4].value;

    const user = {
        username,
        lastname,
        email,
        tel,
        password
    }

  window.localStorage.setItem('users', JSON.stringify([...users, user]))
  alert('user created')
}