let items = [

    item_1 = {
        img_url: 'https://nonfiction.com/web/product/medium/202206/ac6b0d0c07cbd3334c48306d9db919de.jpg',
        name: '논픽션 핸드크림',
        url: 'https://nonfiction.com/product/list.html?cate_no=63'
    },

    item_2 = {
        img_url: 'https://cdn-image02.casetify.com/usr/27391/11607391/~v1321/11534483x2_iphone-14-pro_16004813.png',
        name: 'casetify 핸드폰 케이스',
        url: 'https://www.casetify.com/ko_KR/product/SqryY_casetify/iphone-14-pro/recasetify-ultra-impact-case#/16004878'
    },

    item_3 = {
        img_url: 'https://www.lush.co.kr/upload/item/G21000003662/20230405174736L.png',
        name: '러쉬 바디스프레이',
        url: 'https://www.lush.co.kr/products/view/G21000003662?giftYn=Y&dc='
    },

    item_4 = {
        img_url: 'https://nagchampa.co.kr/web/product/big/202303/350d22334935ec9a842460a2181b0355.jpg',
        name: '나그참파 인센스 스틱',
        url: 'https://nagchampa.co.kr/product/나그참파코리아-나그참파-인센스-스틱-100g/30/category/24/display/1/'
    },

    item_5 = {
        img_url: 'https://lamyshop.kr/web/product/big/20200713/LM017.png',
        name: '라미 사파리 만년필',
        url: 'https://lamyshop.kr/product/사파리-만년필-차콜블랙-ef/1625/category/44/display/1/'
    },

    item_6 = {
        img_url: 'https://www.shinsegae.com/resources/site/img/service/membership/certificate/ico_giftcard_50000.png',
        name: '신세계 상품권 5만원권',
        url: 'https://www.shinsegae.com/service/membership/certificate.do'
    }

]


window.onload = function () {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('rank_' + i).style.backgroundImage = 'url(' + items[i - 1].img_url + ')';
        document.getElementsByClassName('giftName').item(i - 1).innerText = items[i - 1].name;
    }
}

function showPopup(id) {
    let num = id.substring(5);
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('img').style.backgroundImage = 'url(' + items[num - 1].img_url + ')';
    document.getElementById('productName').innerText = items[num - 1].name;

    document.getElementById("linkButton").onclick = function () {
        window.open(items[num - 1].url);
    }

    document.getElementById("closeButton").onclick = function () {
        document.getElementById('popup').style.display = 'none';
    }
}