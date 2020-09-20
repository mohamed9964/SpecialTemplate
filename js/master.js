// Check If There's Local Storage Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    document.documentElement.style.setProperty(
        "--main-color",
        localStorage.getItem("color_option")
    );

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".color-list li").forEach((element) => {
        element.classList.remove("active");

        // Add Active Class On Element with data-color === Local Storage Item
        if (element.dataset.color === mainColors) {
            // Add Active Class
            element.classList.add("active");
        }
    });
}

// Random Background Option
let backgroundOption = true;

// Variable TO Control The Interval
let backgroundInterval;

// Check If There's Local Storage Rondom Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Backgroun Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

    // Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach((element) => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === "true") {

        backgroundOption = true;

        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {

        backgroundOption = false;

        document.querySelector(".random-backgrounds .no").classList.add("active");

    }




}

// Click On Toggel Settings Gear
document.querySelector(".toggel-settings .fa-gear").onclick = function() {
    //Toggel Class Fa-spin For Rotation On Self
    this.classList.toggle("fa-spin");

    //Toggel Class Open On Main Setting Box
    document.querySelector(".setting-box").classList.toggle("open");
};

// Switch Colors
const colorsli = document.querySelectorAll(".color-list li");

// Loop On All List Items
colorsli.forEach((li) => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {
        // Set Color On Root
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handelActive(e);

    });
});
// Switch Random Background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On Span
randomBackEl.forEach((span) => {
    // Click On Every Span
    span.addEventListener("click", (e) => {

        handelActive(e);

        if (e.target.dataset.background === "yes") {
            backgroundOption = true;

            randomizeImags();

            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);
        }
    });
});

// Select Landing Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Imgs
let imgsArray = ["01.jfif", "02.jfif", "03.jfif", "04.jfif", "05.jfif"];

// Function To Randomize Imgs
function randomizeImags() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            //Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            //Change Background Image Url
            landingPage.style.backgroundImage =
                'url("imgs/' + imgsArray[randomNumber] + '")';
        }, 10000);
    }
}
randomizeImags();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function() {
    // Skills offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowScrollTop) {
        let allSkills = document.querySelectorAll(
            ".skill-box .skill-progress span"
        );
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.progress;
        });
    }
};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {

    img.addEventListener("click", (e) => {
        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class TO Overlay
        overlay.className = "popup-overlay";

        //Append Overlay TO The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The POpup Box
        popupBox.className = "popup-box";

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement('h3');

            // Create Text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        }


        // Create The Image
        let popupImage = document.createElement('img');

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append THe Popup box
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("x");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = "close-button";

        // Add Close Button TO POpup Box
        popupBox.appendChild(closeButton);
    });

});

// Close Popup
document.addEventListener("click", (e) => {

    if (e.target.className == "close-button") {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector('.popup-overlay').remove();
    }

});

// Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullet');


// Select All Links
const allLinks = document.querySelectorAll('.links a');


function scrollTopSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'

            });

        });

    });
}
scrollTopSomewhere(allLinks);
scrollTopSomewhere(allBullets);

// Handel Active State
function handelActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem('bullets_option');

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove('active');

    });

    if (bulletLocalItem === "block") {

        bulletsContainer.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add('active');

    } else {

        bulletsContainer.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add('active');

    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === "block") {

            bulletsContainer.style.display = "block";

            localStorage.setItem("bullets_option", "block");

        } else {

            bulletsContainer.style.display = "none";

            localStorage.setItem("bullets_option", "none");

        }

        handelActive(e);

    });

});

// Reset Button
document.querySelector(".reset-options").onclick = function() {

    // localStorage.clear();

    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();

}

// Toggel Menu
let toggelBtn = document.querySelector('.toggel-menu');
let tlinks = document.querySelector('.links');

toggelBtn.onclick = function(e) {

    // Stop propagation
    e.stopPropagation();

    //Toggel Class 'menu-active' on Button
    this.classList.toggle('menu-active');

    //Toggel Class "open" on links
    tlinks.classList.toggle('open');
};

// Click Anywhere Outside Menu A nd toggel Button
document.addEventListener("click", (e) => {

    if (e.target !== toggelBtn && e.target !== tlinks) {

        //Check If Menu Is Open
        if (tlinks.classList.contains('open')) {

            //Toggel Class 'menu-active' on Button
            toggelBtn.classList.toggle('menu-active');

            //Toggel Class "open" on links
            tlinks.classList.toggle('open');

        }

    }

});

// Stop Propagation On Menu
tlinks.onclick = function(e) {
    e.stopPropagation();
}