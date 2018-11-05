(function(){
  
  'use strict';

  const name    = document.getElementById('name');
  const subject = document.getElementById('subject');
  const email   = document.getElementById('email');
  const message = document.getElementById('message');

  const allFields = document.querySelectorAll('.field-form');

  const btnSubmitContact = document.getElementById('btnSubmitContact');

  btnSubmitContact.addEventListener('click', (e) => {
    validateForm(e);
  });

  Array.from(allFields).forEach((item) => {
    item.addEventListener('change', (e) => {
      validateForm(e);
    });
  });

  function validateForm(e) {
    
    e.preventDefault();

    let emailValidation = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    if(name.value.length <= 2 || name.value == '') {
    
      document.getElementById('error-name').classList.remove('hidden');
    }
    else {
  
      document.getElementById('error-name').classList.add('hidden');
    }    

    if(subject.value.length <= 2 || subject.value == '') {
    
      document.getElementById('error-subject').classList.remove('hidden');
    }
    else {
  
      document.getElementById('error-subject').classList.add('hidden');
    }  


    if(!(emailValidation.test(email.value)) || email.value == '') {
    
      document.getElementById('error-email').classList.remove('hidden');
    }
    else {
  
      document.getElementById('error-email').classList.add('hidden');
    }  
  

    if(message.value.length <= 10 || message.value == '') {
    
      document.getElementById('error-message').classList.remove('hidden');
    }
    else {
  
      document.getElementById('error-message').classList.add('hidden');
    }  
  }
})();