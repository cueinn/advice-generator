const url = "https://api.adviceslip.com/advice"

function getAdvice() {
  axios.get(url)
  .then( response => response.data.slip )
  .then( data => {
    adviceId.textContent = data.id
    adviceText.textContent = data.advice
  })
  .catch(err => console.error(err))
}
getAdvice()

btnRefresh.addEventListener('click', getAdvice)