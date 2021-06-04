// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')
const hearts = document.querySelectorAll('.like-glyph')

modal.className = 'hidden'


for (const heart of hearts) {
  heart.addEventListener('click', (e) => {

    mimicServerCall() 
      .then( () => {
        if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART
        e.target.className = 'activated-heart'
        } else {
          e.target.innerText = EMPTY_HEART
          e.target.className = ''
        }
      })    
      .catch(error => {
        modal.className = ''
        modalMessage.innerText = error
        setTimeout( () => {
          modal.className = 'hidden'
        }, 3000)
    })
  })
}
  


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}