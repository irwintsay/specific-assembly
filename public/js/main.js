document.addEventListener('DOMContentLoaded', () => {
  // Friendly welcome message
  console.log('Welcome to Specific Assembly!');
  console.log('We\'re looking for talented developers like you!!');
  
  // Nav and Title effect
  const nav = document.querySelector('nav');
  const title = document.querySelector('nav h2');

  document.addEventListener('scroll', () => {
    if(window.scrollY > 60) {
      nav.classList.add('black-bg');
      title.classList.remove('invisible');
    } else {
      nav.classList.remove('black-bg');
      title.classList.add('invisible');
    }
  });

});