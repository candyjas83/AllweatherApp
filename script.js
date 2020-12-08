const button = document.querySelector('.input__button')
const inputValue = document.querySelector('.input__box')
const name = document.querySelector('.name')
const desc = document.querySelector('.desc')
const temp = document.querySelector('.temp')
const image = document.querySelector('.temp__card-icon')

/* Function to fetch the api by querying the city and getting the name, temp, and desc */
button.addEventListener('click', function () {
  fetch('http://api.weatherstack.com/current?access_key=b20948a3fc199f9209138e410f36d236&query=' + inputValue.value)
    .then(response => response.json())
    .then(data => {
      const nameValue = data.location.name
      const tempValue = data.current.temperature
      const descValue = data.current.weather_descriptions[0]

      /* Toggles the output to the HTML */
      name.innerHTML = nameValue
      temp.innerHTML = parseFloat((tempValue * 9 / 5) + 32) /* convert celcius to farenheit */
      desc.innerHTML = descValue
      toggleImage(descValue)
    })

    .catch(err => alert(err))
})

/* Function to change icons based on the weather description */
function toggleImage (value) {
  if (value === 'Sunny') {
    image.setAttribute('src', '../img/SVG/sun.svg')
  } else if (value === 'Cloudy' || value === 'Overcast' || value === 'Partly cloudy') {
    image.setAttribute('src', '../img/SVG/cloud-sun.svg')
  } else if (value === 'Rain' || value === 'Light Rain') {
    image.setAttribute('src', '../img/SVG/cloud-rain.svg')
  } else if (value === 'Snow') {
    image.setAttribute('src', '../img/SVG/cloud-snowflakes.svg')
  }
  /* Make hidden icon display */
  document.querySelector('.temp__card-icon').style.display = 'block'
}
