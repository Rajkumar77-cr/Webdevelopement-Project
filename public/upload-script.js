function uploadImage() {
    const formData = new FormData();
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please select an image to upload.');
      return;
    }
  
    formData.append('image', file);
  
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(message => {
      alert(message);
      
    })
    .catch(error => console.error('Error:', error));
  }
  