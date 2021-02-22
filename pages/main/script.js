function show(firstI, arr) {
    let arrayToShow = [];

    if (firstI === arr.length - 1) {
        arrayToShow.push(arr[firstI], arr[0], arr[1]);
    } else if (firstI === arr.length - 2) {
        arrayToShow.push(arr[firstI], arr[firstI + 1], arr[0]);
    } else {
        arrayToShow.push(arr[firstI], arr[firstI + 1], arr[firstI + 2]);
    }
    return arrayToShow;
}

const findItemsToShow = (firstSlide, items1) => {

    let itemsToShow = show(firstSlide, items1);
    let arr = Array.prototype.slice.call(items1);
    //console.log(itemsToShow.map(x => arr.indexOf(x)));

    return itemsToShow;
};

var windowWidth = 0;
var slidesToShow = 3;
var data = [];

function updateWindowSize() {
    if (document.body && document.body.offsetWidth) {
        windowWidth = document.body.offsetWidth;
    }
    if (document.compatMode == 'CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth) {
        windowWidth = document.documentElement.offsetWidth;
    }
    if (window.innerWidth) {
        windowWidth = window.innerWidth;
    }
}

// create One Sliders HTML code function
function createOneSlider(obj) {
    let sliderOuterDiv = document.createElement("div");
    sliderOuterDiv.setAttribute('data-name', obj.name);
    sliderOuterDiv.classList.add('our-friends_slider_item');

    let sliderInnerDiv = document.createElement("div");
    sliderInnerDiv.classList.add('our-friends_slider_item_content');

    let sliderImageDiv = document.createElement("div");
    sliderImageDiv.classList.add('slider_item_image');

    //img
    let sliderImg = document.createElement("img");
    sliderImg.setAttribute('src', obj.img);
    sliderImg.setAttribute('alt', obj.description);
    sliderImageDiv.appendChild(sliderImg);

    //text
    let sliderTextDiv = document.createElement("div");
    sliderTextDiv.classList.add('slider_item_title');

    let sliderH4 = document.createElement("h4");
    let sliderH4Text = document.createTextNode(obj.name);
    sliderH4.appendChild(sliderH4Text);
    sliderTextDiv.appendChild(sliderH4);

    let buttonDiv = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.textContent = "Learn more";
    buttonDiv.append(button);

    sliderInnerDiv.append(sliderImageDiv, sliderTextDiv, buttonDiv);

    sliderOuterDiv.appendChild(sliderInnerDiv);

    sliderOuterDiv.addEventListener('click', () => {
        showPetDetails(obj);
        //console.log(obj);
        const body = document.querySelector('body');
        const sliderSection = document.querySelector('.our-friends');

        body.classList.add('shadow');
        body.classList.add('hidden');
        sliderSection.style.zIndex = "-1";
    })

    return sliderOuterDiv;
}

function createModalTemplate(obj) {
    let modalOuterDiv = document.createElement("div");
    modalOuterDiv.classList.add('modal');

    let modalInnerDiv = document.createElement("div");
    modalInnerDiv.classList.add('modal-body');
    modalOuterDiv.appendChild(modalInnerDiv);

    let modalInnerImgDiv = document.createElement("div");
    modalInnerImgDiv.classList.add('modal-body_image');


    let modalInnerImg = document.createElement("img");
    modalInnerImg.setAttribute('src', obj.img);
    modalInnerImg.setAttribute('alt', obj.description);
    modalInnerImgDiv.appendChild(modalInnerImg);

    let modalInnerContent = document.createElement("div");
    modalInnerContent.classList.add('modal-body_content');

    //h3
    let modalH3 = document.createElement("h3");
    modalH3.classList.add('modal-body_content_title');
    let modalH3Text = document.createTextNode(obj.name);
    modalH3.appendChild(modalH3Text);

    //h4
    let modalH4 = document.createElement("h4");
    modalH4.classList.add('modal-body_content_subtitle');
    let modalH4Text = document.createTextNode(obj.breed);
    modalH4.appendChild(modalH4Text);

    //p
    let modalP = document.createElement("p");
    modalP.classList.add('modal-body_content_text');
    let modalPText = document.createTextNode(obj.description);
    modalP.appendChild(modalPText);

    //ul
    let modalUl = document.createElement("ul");
    modalUl.classList.add('modal-body_content_list');

    //li 1
    let modalLi1 = document.createElement("li");
    modalLi1.classList.add('modal-body_content_list_item');

    //li 1 p
    let modalLi1P = document.createElement("p");
    modalLi1P.innerHTML = "<span>Age:</span> " + obj.age;
    modalLi1.appendChild(modalLi1P);

    //li 2
    let modalLi2 = document.createElement("li");
    modalLi2.classList.add('modal-body_content_list_item');

    //li 2 p
    let modalLi2P = document.createElement("p");
    modalLi2P.innerHTML = "<span>Inoculations:</span> " + obj.inoculations;
    modalLi2.appendChild(modalLi2P);

    //li 3
    let modalLi3 = document.createElement("li");
    modalLi3.classList.add('modal-body_content_list_item');

    //li 3 p
    let modalLi3P = document.createElement("p");
    modalLi3P.innerHTML = "<span>Diseases:</span> " + obj.diseases;
    modalLi3.appendChild(modalLi3P);

    //li 4
    let modalLi4 = document.createElement("li");
    modalLi4.classList.add('modal-body_content_list_item');

    //li 4 p
    let modalLi4P = document.createElement("p");
    modalLi4P.innerHTML = "<span>Inoculations:</span> " + obj.parasites;
    modalLi4.appendChild(modalLi4P);


    modalUl.append(modalLi1, modalLi2, modalLi3, modalLi4);

    modalInnerContent.append(modalH3, modalH4, modalP, modalUl);

    modalInnerDiv.append(modalInnerImgDiv, modalInnerContent);

    modalOuterDiv.appendChild(modalInnerDiv);

    return modalOuterDiv;
}


function showPetDetails(obj) {
    let popupDom = createModalTemplate(obj);

    const BtnClosePopup = document.querySelector('.close-popup');
    //let overlay = document.querySelector('.overlay');
    //console.log(BtnClosePopup);
    //add display
    BtnClosePopup.style.display = 'block';
    //insert
    const body = document.querySelector('body');
    body.appendChild(popupDom);


    BtnClosePopup.addEventListener('click', (e) => {
        //console.log(e);
        const body = document.querySelector('body');
        const sliderSection = document.querySelector('.our-friends');

        body.classList.remove('shadow');
        sliderSection.style.zIndex = "1";
        closePopup(popupDom);
        //console.log(popupDom);
    })

    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', (e) => {
        const body = document.querySelector('body');

        body.classList.remove('shadow');
        closePopup(popupDom);
    });

    return popupDom;
}

function closePopup(modalDom) {
    const BtnClosePopup = document.querySelector('.close-popup');
    //const body = document.querySelector('body');

    modalDom.remove();
    //console.log(modalDom);

    BtnClosePopup.style.display = 'none';
}


function initSlider(data) {
    const track = document.querySelector('.our-friends_slider');

    while (track.firstChild)
        track.removeChild(track.firstChild);

    track.appendChild(createOneSlider(data[0]));

    if (slidesToShow >= 2 && data.length >= 2) {
        track.appendChild(createOneSlider(data[1]));
    }
    if (slidesToShow == 3 && data.length >= 3) {
        track.appendChild(createOneSlider(data[2]));
    }
}

//function to get quantity of slider items
window.onresize = function onWindowResize() {
    updateWindowSize();
    slidesToShow = 1;

    if (windowWidth >= 768) {
        slidesToShow = 2;
    }
    if (windowWidth >= 1280) {
        slidesToShow = 3;
    }
    initSlider(data);
}

window.onload = async function() {
    //burger variables
    const burger = document.querySelector('.burger-menu');
    const burgerLink = document.querySelector('.burger-menu a');
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');

    data = await getJSON("../../assets/pets.json");

    //slider variables
    const track = document.querySelector('.our-friends_slider');
    let btnPrev = document.querySelector('.our-friends_arrow-left');
    let btnNext = document.querySelector('.our-friends_arrow-right');
    //const itemsCount = items.length;
    //const itemWidth = items[0].clientWidth; //container.clientWidth / slidesToShow;
    //const movePosition = slidesToScroll * itemWidth;

    //slider
    initSlider(data);

    // next button - slider
    btnNext.addEventListener('click', () => {
        while (track.firstChild)
            track.removeChild(track.firstChild);
        let nextItems = getNextRandomItems(data, slidesToShow);
        nextItems.forEach(x => track.append(x));
    });

    // prev button - slider
    btnPrev.addEventListener('click', () => {
        while (track.firstChild)
            track.removeChild(track.firstChild);
        let nextItems = getNextRandomItems(data, slidesToShow);
        nextItems.forEach(x => track.append(x));

    });

    let toggleNavBar = function(e) {
        e.stopPropagation();

        burgerLink.classList.toggle('toggle');

        navbar.classList.toggle('show');
        body.classList.toggle('shadow');
        body.classList.toggle('hidden');
    }

    let overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', toggleNavBar);

    burger.addEventListener('click', toggleNavBar);

    //function to get random items for slider
    function getNextRandomItems(data1, itemsToShow1) {
        var totalItems = data1.length;
        let randomNumbers = [];
        while (randomNumbers.length < itemsToShow1) {
            var randomNumber = Math.floor(Math.random() * totalItems);
            if (!randomNumbers.includes(randomNumber))
                randomNumbers.push(randomNumber);
        }

        let result = [];
        for (let j = 0; j < randomNumbers.length; j++) {
            result.push(createOneSlider(data[randomNumbers[j]]));
        }
        return result;
    }
}

//function to get json data
async function getJSON(filePath) {
    const response = await fetch(filePath);
    const data = await response.json();

    return data;
}