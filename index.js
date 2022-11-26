// template_s3chdi9
// service_z5p7oc6
// V7-iWutk9C71Xqloz

function contact(event) {
  event.preventDefault()
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += ' modal__overlay--visible'

  emailjs
    .sendForm(
      'service_z5p7oc6',
      'template_s3chdi9',
      event.target,
      'V7-iWutk9C71Xqloz'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible")
    success.classList += " modal__overlay--visible"
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible")
    alert(
      "The email service is temporarily unavailable. Please contact me directly on Pratv7@outlook.com"
    )
  })    
}

function toggleModal() {
  
}