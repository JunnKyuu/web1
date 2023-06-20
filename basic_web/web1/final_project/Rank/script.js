let items = [];

class item{
    constructor(img_url, name, url){
        this.img_url = img_url;
        this.name = name;
        this.url = url;
    }
}

function showPopup(gift) {
    var img_url = gift.style.backgroundImage,
        name = document.querySelector('#' + gift.id + ' .giftName').innerText,
        url = '';

    for (const item of items) {
        if (item.name == name) {
            url = item.url;
            break;
        }
    }

    document.querySelector('#popupBackground').style.display = "block";
    document.querySelector('#popup').style.display = 'flex';
    document.querySelector('#img').style.backgroundImage = img_url;
    document.querySelector('#productName').innerText = name;



    document.querySelector("#linkButton").onclick = function () {
        window.open(url);
    }
    document.querySelector("#closeButton").onclick = function () {
        document.querySelector('#popup').style.display = 'none';
        document.querySelector('#popupBackground').style.display = "none";
    }
}



window.onload = function () {
    fetch('item.json')
        .then(response => response.json())
        .then(data => setInit(data))

    function setInit(data) {
        for (var i = 0; i < 6; i++) {
            items.push(new item(data[i].picture, data[i].name, data[i].link))
        }
        changeList(0);
        makeClone();
    }

    var slide = document.querySelector('.slide'),
        gift = document.querySelectorAll('.gift'),
        currentIndex = 0,
        slideCount = gift.length,
        slideWidth = 380,
        slideMargin = 50,
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        rankingList1 = document.querySelector('#rankingList_text_1'),
        rankingList2 = document.querySelector('#rankingList_text_2');





    function makeClone() {
        for (var i = 0; i < slideCount; i++) {
            var cloneSlide = gift[i].cloneNode(true);
            cloneSlide.classList.add('clone2');

            slide.appendChild(cloneSlide);
        }

        for (var i = slideCount - 1; i >= 0; i--) {
            var cloneSlide = gift[i].cloneNode(true);
            cloneSlide.classList.add('clone1');

            slide.prepend(cloneSlide);
        }

        for (var i = 0; i < slideCount; i++) {
            gift[i].classList.add('origin');
        }

        updateWidth();
        setInitPos();
        setTimeout(function () {
            slide.classList.add('animated');
        }, 100);
    }
    function updateWidth() {
        var currentSlides = document.querySelectorAll('.gift');
        var newSlideCount = currentSlides.length;

        var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
        slide.style.width = newWidth;
    }
    function setInitPos() {
        var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
        slide.style.transform = 'translate(' + initialTranslateValue + 'px, -50%)';
    }





    nextBtn.addEventListener('click', function () {
        moveSlide(currentIndex + 1);
    });
    prevBtn.addEventListener('click', function () {
        moveSlide(currentIndex - 1);
    });
    function moveSlide(num) {
        slide.style.left = -num * (slideWidth + slideMargin) + 10 + 'px';
        currentIndex = num;

        if (currentIndex == slideCount || currentIndex == -slideCount) {
            setTimeout(function () {
                slide.classList.remove('animated');
                slide.style.left = '10px';
                currentIndex = 0;
            }, 500);

            setTimeout(function () {
                slide.classList.add('animated');
            }, 530);
        }
    }
    setInterval(function () {
        moveSlide(currentIndex + 1);
    }, 2000);





    rankingList1.addEventListener('click', function () {
        rankingList1.style.color = 'black'
        rankingList2.style.color = '#c2b9b9'
        changeList(1);
    });
    rankingList2.addEventListener('click', function () {
        rankingList1.style.color = '#c2b9b9'
        rankingList2.style.color = 'black'
        changeList(2);
    });
    function changeList(num) {
        var list = document.querySelectorAll('.gift');
        if (num == 0) {
            for (let i = 0; i < items.length; i++) {
                list[i].style.backgroundImage = 'url(' + items[i].img_url + ')';
                document.querySelectorAll('.giftName').item(i).innerText = items[i].name;
            }
        } else if (num == 1) {
            for (let i = 0; i < items.length * 3; i++) {
                list[i].style.backgroundImage = 'url(' + items[(i) % (items.length)].img_url + ')';
                document.querySelectorAll('.giftName').item(i).innerText = items[(i) % (items.length)].name;
            }
        } else if (num == 2) {
            for (let i = 0; i < items.length * 3; i++) {
                list[i].style.backgroundImage = 'url(' + items[(items.length * 3 - (i + 1)) % (items.length)].img_url + ')';
                document.querySelectorAll('.giftName').item(i).innerText = items[(items.length * 3 - (i + 1)) % (items.length)].name;
            }
        }
    }
}

