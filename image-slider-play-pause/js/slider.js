var slideIndex = 1
var playPause = true
var timerVar
var scrubberVar
var intervalDuration = 1000
var i = 0
const presentationSize = document.getElementsByClassName("mySlides").length
const playPauseButtonIcon = document.getElementById("play-pause-icon")




// Function to create and append slides
function createSlides() {
  const container = document.querySelector(".slideshow-container")

  for (let year = 2002; year <= 2023; year++) {
    const slide = document.createElement("div")
    slide.className = "mySlides fade"

    const image = document.createElement("img")
    image.alt = year.toString()
    image.src = `https://res.cloudinary.com/csisideaslab/image/upload/v1711375443/Shorthand/Surviving%20Scarcity/groundwater-timelapse-pics/April-${year}.jpg`
    image.style.width = "100%"

    slide.appendChild(image)
    container.appendChild(slide)
  }
}
// Call the function to create slides
createSlides()

showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timerVar)
  clearInterval(scrubberVar)
  showSlides((slideIndex += n))
}

function playPauseHandler() {
  playPause = !playPause
  if (playPause) {
    playPauseButtonIcon.className = "fa fa-pause"
    showSlides(slideIndex)
  } else {
    playPauseButtonIcon.className = "fa fa-play"
    clearTimeout(timerVar)
    clearInterval(scrubberVar)
    document.getElementById("myBar").style.width = "0%"
  }
}

function autoplay() {
  showSlides((slideIndex += 1))
}

function moveScrubber(barFill) {
  if (barFill == 0) {
    clearInterval(scrubberVar)
    barFill = 1
    var elem = document.getElementById("myBar")
    var width = 1
    var progBarInterval = intervalDuration / 100
    scrubberVar = setInterval(frame, progBarInterval)
    function frame() {
      if (width >= 100 || !playPause) {
        elem.style.width = "0%"
        clearInterval(scrubberVar)
      } else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("mySlides")
  var slideNumber = document.getElementById("slide-number")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  slideNumber.innerHTML = slideIndex + " / " + presentationSize
  slides[slideIndex - 1].style.display = "block"

  if (playPause) {
    timerVar = setTimeout(autoplay, intervalDuration)
    moveScrubber(0)
  }
}
