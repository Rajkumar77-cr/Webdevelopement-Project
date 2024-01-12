function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'Rksam' && password === '12345') {
      alert('Login successful!');
      window.location.href = '/upload';
    } else {
      alert('Invalid username or password');
    }
  }
  