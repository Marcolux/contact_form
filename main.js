var emailjs
emailjs.init('o69p_GM3kd5oX3hnI')
const messageSent = document.querySelector('#messageSent') 
const inputText = document.querySelectorAll('.inputText')

document.getElementById('myForm')?.addEventListener('submit', function(event) {
    event.preventDefault() 
    emailjs.sendForm('service_77m4c35', 'template_bxw793c', this)

    .then(function(response) {
        messageSent.classList.remove('hide')
        inputText.forEach(text => text.value= '')
        console.log('SUCCESS!', response.status, response.text)
        setTimeout(()=>{ messageSent.classList.add('hide') }, 5000)
    }, function(error) {
        console.log('FAILED...', error)
        alert("Failed to send email.")
    })
})