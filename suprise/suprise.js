const images = [
    {
        src: "../Tomi1.jpg",
        text: "Most Beautiful woman i know 🤍"
    },
    {
        src: "../Tomi2.jpg",
        text: "Growing, learning, becoming stronger"
    },
    {
        src: "../Tomi3.jpg",
        text: "And I’m so proud of the woman you are today ❤️"
    },
    {
        src: "../Tomi4.jpg",
        text: "Best Sister ever ❤️"
    },
    {
        src: "../Tomi6.jpg",
        text: "Best Sister ever ❤️"
    },
    {
        src: "../Tomi5.jpg",
        text: "Birthdays look good on you—enjoy every moment.”"
    },
    {
        src: "../Tomi7.jpg",
        text: "Cheers to you and all the good things ahead"
    },
    {
        src: "../Tomi8.jpg",
        text: "Cheers to you and all the good things ahead"
    },
    {
        src: "../Tomi9.png",
        text: "Here’s to another year of growth, laughter, and success."
    },



];

let index = 0;
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

function showNextImage() {
    slide.style.opacity = 0;

    setTimeout(() => {
        slide.src = images[index].src;
        caption.innerText = images[index].text;
        slide.style.opacity = 1;

        index = (index + 1) % images.length;
    }, 1000);
}

// First image
showNextImage();

// Change image every 4 seconds
setInterval(showNextImage, 4000);
