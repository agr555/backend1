// import {config} from "../config/config";
const options ={
    center: true,
    dots: true,
    nav: true,
    navText: ["<img src='../src/static/images/ArrowL.png'>",
        "<img src='../src/static/images/ArrowR.png'>"],
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        200: {
            items: 1,
        },
        800: {
            items: 1,
        },
        1200: {
            items: 2,
            // loop: false
        }
    }
};
const options2 = {
    loop: true,
    autoplay: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: false,
    // navText : ["<img src='images/down-arrow1.png'>","<img src='images/down-arrow2.png'>"],
    navText: ["", ""],
    pagination: true,
    responsive: {
        0: {
            items: 1,
        },
        900: {
            items: 3,
        },
        1200: {
            items: 2,
            loop: true
        }
    }
};
$(document).ready(function () {
let owl = $('.choice-text-block');
    let owl2 = $('.about-images');
    if ($(window).width() <= 1200) {
        owl.addClass('owl-carousel owl-theme');
     owl2.addClass('owl-carousel owl-theme');

        owl.owlCarousel(options);
      owl2.owlCarousel(options2);


    } else {
        owl.trigger("destroy.owl.carousel").removeClass('owl-carousel');
       owl2.trigger("destroy.owl.carousel").removeClass('owl-carousel');

    }

    $('.parallax1').addClass("d-none").hide();

    let productInput = document.getElementById('p1');//"product-input"
    let nameInput = document.getElementById('p2');//"product-input"
    let phoneInput = document.getElementById('p3');//"product-input"
    let thanks = document.getElementById('t21');//"product-input"
    $('.btn-add-to-cart').click((e) => {
        productInput.value = $(e.target).parents('.card-body').find('.card-title').text();
        $('.order')[0].scrollIntoView({behavior: "smooth"});
    });
    $('#create-order').click(function () {

        if (!productInput.value) {
            productInput.style.border = "2px solid red";

            return;
        } else {
            productInput.style.border = "1px solid rgb(246, 226, 205)";
            thanks.style.color = "#271E19";
        }
        if (!nameInput.value) {
             nameInput.style.border = "2px solid red";
            return;
        } else {
            nameInput.style.border = "1px solid rgb(246, 226, 205)";
        }
        if (!phoneInput.value) {
            phoneInput.style.border = "2px solid red";
            return;
        } else {
            phoneInput.style.border = "1px solid rgb(246, 226, 205)";
        }
        thanks.style.color = "rgb(246, 226, 205)";

        function sayHi(phrase, who) {
            thanks.style.color = "#271E19";
            nameInput.value = '';
            phoneInput.value = '';
            productInput.value = '';
        }

        setTimeout(sayHi, 2000, "Thanks!");

    })


    /*!!! translate*/
    let objInnerText = {
        ru: {
            title1: "О нас",
            title2: "Каталог",
            title3: "Заказать",
            title4: "Свежая и вкусная выпечка по особым рецептам только у нас!",
            title5: "Перейти в каталог",
            title6: "О НАС",
            title7: "Наша пекарня «Cake o’clock» занимается созданием различной выпечки и десертов",
            title8: "Клиенты выбирают нас за качество! Нам ежедневно поставляют продукты, поэтому наши выпечка и десерты всегда свежие",
            title9: "Кроме того, у нас вы сможете оформить бесплатную доставку по всему городу, независимо от общей стоимости заказа!",
            title10: "НАШИ ДЕСЕРТЫ",
            title11: "Чизкейк с черникой",
            title12: "Круассан с миндалем",
            title13: "Брауни",
            title14: "+Капкейк с шоколадом",
            title15: "+Медовик",
            title16: "+Наполеон",
            title17: "ОФОРМЛЕНИЕ ЗАКАЗА",
            title18: "Заполните форму для подтверждения заказа. В течение 10 минут вам придет сообщение о доставке и оплате!",
            title19: "Оформить заказ",
            title20: "Все права защищены",
            title21: "Спасибо за заказ!",

        },
        en: {
            title1: "About Us",
            title2: "Catalogue",
            title3: "Order",
            title4: "Fresh and delicious baked goods with special recipes only from us!",
            title5: "Go to catalogue",
            title6: "About Us",
            title7: "Our Cake o'clock Bakery creates a variety of baked goods and desserts",
            title8: "Customers choose us for our quality! We are supplied daily, so our pastries and desserts are always fresh",
            title9: "In addition, we offer free delivery throughout the city, regardless of the total cost of your order!",
            title10: "OUR DESSERTS",
            title11: "Blueberry_Cheesecake",
            title12: "Croissant_with_almonds",
            title13: "Brownies",
            title14: "Chocolate_Cupcake",
            title15: "Honeydew",
            title16: "Napoleon",
            title17: "Fill out an order.",
            title18: "Fill in the form to confirm your order. You will be notified about delivery and payment within 10 minutes!",
            title19: "Checkout",
            title20: "All rights reserved",
            title21: "Thanks for ordering!",
        },
        sk: {
            title1: "O nás",
            title2: "Katalóg",
            title3: "Objednávka",
            title4: "Čerstvé a chutné pečivo so špeciálnymi receptúrami len od nás!",
            title5: "Prejsť na katalóg",
            title6: "O nás",
            title7: "Naša pekáreň Cake o'clock vytvára rôzne druhy pečiva a dezertov",
            title8: "Zákazníci si nás vyberajú pre našu kvalitu! Zásobujeme sa denne, takže naše pečivo a zákusky sú vždy čerstvé",
            title9: "Okrem toho ponúkame bezplatné doručenie po celom meste bez ohľadu na celkovú cenu vašej objednávky!",
            title10: "NAšE ZÁKUSKY",
            title11: "Čučoriedkový_tvarohový_koláč",
            title12: "Croissant_s_mandľami",
            title13: "Brownies",
            title14: "Čokoládový_koláčik",
            title15: "Medovník",
            title16: "Napoleon",
            title17: "Vyplňte objednávku",
            title18: "Vyplňte formulár na potvrdenie objednávky. O doručení a platbe budete informovaní do 10 minút!",
            title19: "Checkout",
            title20: "Všetky práva vyhradené",
            title21: "Ďakujeme za objednávku!"
        }
    };
    let objPlaceholder = {
        ru: {
            title1: "Выберите десерт",
            title2: "Имя",
            title3: "Номер телефона"
        },
        en: {
            title1: "Choose a dessert",
            title2: "Name",
            title3: "Phone Number"
        },
        sk: {
            title1: "Vyberte si dezert",
            title2: "Meno",
            title3: "Telefónne číslo"
        }
    }
    let objRepeat = {
        ru: {
            title1: "Цена за 1 шт",
            title2: "Кол-во",
            title3: "Оформить заказ"
        },
        en: {
            title1: "Price per 1 pc",
            title2: "Quantity",
            title3: "Checkout"
        },
        sk: {
            title1: "Cena za 1 ks",
            title2: "Množstvo",
            title3: "Checkout"
        }
    }
    let objAlert = {
        ru: {
            title1: "Сначала выберите продукт!'",
            title2: "Введите ваше имя",
            title3: "Введите номер телефона",
            title4: "Спасибо за заказ!"
        },
        en: {
            title1: 'Select a product first!',
            title2: "Enter your name",
            title3: "Enter your phone number",
            title4: "Thank you for ordering!"
        },
        sk: {
            title1: "Najskôr si vyberte produkt!",
            title2: "Zadajte svoje meno",
            title3: "Zadajte svoje telefónne číslo",
            title4: "Ďakujeme za objednávku!"
        }
    }


    /*change currency*/
    let prices = document.getElementsByClassName("product-item-price");
    document.getElementById("change-currency").onclick = function (e) {
        let currentCurrency = e.target.innerText;
        let newCurrency = "₽";
        let coefficient = 1;
        if (currentCurrency === "₽") {
            newCurrency = "$";
            coefficient = 0.012;
        } else if (currentCurrency === "$") {
            newCurrency = "BYN";
            coefficient = 3;
        } else if (currentCurrency === 'BYN') {
            newCurrency = '€';
            coefficient = 0.009;
        } else if (currentCurrency === '€') {
            newCurrency = '₽';
            coefficient = 1;
        }
        e.target.innerText = newCurrency;
        for (let i = 0; i < prices.length; i++) {
            prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
        }
    }
    /*
        let magicHat = {};     // Начинаем с пустого объекта
        let spell = 'rabbit';  // Динамическое имя переменной
        magicHat[spell] = '🐇';  // Теперь кролик 'rabbit' ассоциируется с значком '🐇'
        console.log(magicHat)
        console.log(spell)
        console.log(magicHat[spell])
    */

    /*  function lang1(language) {
          let t33 = {}, storeInnerText = {}, storePlaceholder = {}, storeRepeat = {}, storeAlert = {}

          if (language === 'en') {
              // t33 = {en: {title1}, en: {title2}, en: {title3}} = objInnerText;
              storeInnerText = objInnerText.en;
              storePlaceholder = objPlaceholder.en;
              storeRepeat = objRepeat.en;
              storeAlert = objAlert.en;

              console.log(storeInnerText)
          } else if (language === 'sk') {
              // t33 = {sk: {title1}, sk: {title2}, sk: {title3}} = objInnerText;
              storeInnerText = objInnerText.sk;
              storePlaceholder = objPlaceholder.sk;
              storeRepeat = objRepeat.sk;
              storeAlert = objAlert.sk;

          } else if (language === 'ru') {
              // t33 = {ru: {title1}, ru: {title2}, ru: {title3}} = objInnerText;
              storeInnerText = objInnerText.ru;
              storePlaceholder = objPlaceholder.ru;
              storeRepeat = objRepeat.ru;
              storeAlert = objAlert.ru;
          }
          /!*    t1.innerText = title1
              t2.innerText = title2;
              t3.innerText = title3;

              t1.innerText = storeInnerText.title1
              t2.innerText = storeInnerText.title2;
              t3.innerText = storeInnerText.title3;*!/

          let tmpStore = {};
          //for innerText
          for (let i = 1; i <= Object.keys(storeInnerText).length; i++) {
              tmpStore['t' + i] = storeInnerText['title' + i]; //prop0: 'value0', prop1: 'value1', prop2: 'value2', prop3: 'value3', …}
              console.log(tmpStore['t' + i])
          }
          for (const [key, value] of Object.entries(tmpStore)) {
              let t1_ = document.getElementById(`${key}`);
              t1_.innerText = `${value}`;
              console.log(t1_.innerText);
          }
          //for placeholders
          for (let i = 1; i <= Object.keys(storePlaceholder).length; i++) {
              tmpStore['p' + i] = storePlaceholder['title' + i]; //prop0: 'value0', prop1: 'value1', prop2: 'value2', prop3: 'value3', …}
              console.log(tmpStore['p' + i])
          }
          for (const [key, value] of Object.entries(tmpStore)) {
              let p1_ = document.getElementById(`${key}`);
              p1_.placeholder = `${value}`;
              console.log(p1_.innerText);
          }

          //for className
          for (let i = 1; i <= Object.keys(storeRepeat).length; i++) {
              tmpStore['c' + i] = storeRepeat['title' + i]; //prop0: 'value0', prop1: 'value1', prop2: 'value2', prop3: 'value3', …}
              console.log(tmpStore['c' + i])
          }
          for (const [key, value] of Object.entries(tmpStore)) {
              let c1_ = document.getElementsByClassName(`${key}`);
              for (var i = 0; i < c1_.length; i++) {
                  c1_[i].innerText = `${value}`;
                  ; // Change the content
                  console.log(c1_.innerText);
              }
          }
          //for alert
          for (let i = 1; i <= Object.keys(storeAlert).length; i++) {
              console.log(storeAlert)
              // console.log(`${key}`)
              // console.log(`${value}`)
              tmpStore['t' + i] = storeInnerText['title' + i]; //prop0: 'value0', prop1: 'value1', prop2: 'value2', prop3: 'value3', …}
              console.log(tmpStore['t' + i])
          }
          /!*    for (const [key, value] of Object.entries(tmpStore)) {
                  let a1_ = document.getElementById(`${key}`);
                  a1_.innerText = `${value}`;
              }*!/
      }*/

    /*lang*/
    document.getElementById("change-language").onclick = function (e) {

        let newLanguage = "EN";
        let currentLanguage = e.target.innerText;
        if (currentLanguage === "EN") {
            newLanguage = "SK";

        } else if (currentLanguage === "SK") {
            newLanguage = "RU";

        } else if (currentLanguage === 'RU') {
            newLanguage = 'EN';

        }
        e.target.innerText = newLanguage;
        let language = e.target.innerText;

        let storeInnerText = {}, storePlaceholder = {}, storeRepeat = {}, storeAlert = {}

        if (language === 'EN') {
            storeInnerText = objInnerText.en;
            storePlaceholder = objPlaceholder.en;
            storeRepeat = objRepeat.en;

            console.log(storeInnerText)
        } else if (language === 'SK') {
            storeInnerText = objInnerText.sk;
            storePlaceholder = objPlaceholder.sk;
            storeRepeat = objRepeat.sk;

        } else if (language === 'RU') {
            storeInnerText = objInnerText.ru;
            storePlaceholder = objPlaceholder.ru;
            storeRepeat = objRepeat.ru;
        }

        let tmpStore1 = {},tmpStore2 = {}, tmpStore3 = {},tmpStore4 = {};
        //for innerText
        for (let i = 1; i <= Object.keys(storeInnerText).length; i++) {
            tmpStore1['t' + i] = storeInnerText['title' + i]; //prop0: 'value0', prop1: 'value1', prop2: 'value2', prop3: 'value3', …}
            console.log(tmpStore1['t' + i])
        }
        for (const [key, value] of Object.entries(tmpStore1)) {
            let t1_ = document.getElementById(`${key}`);
            t1_.innerText = `${value}`;
        }
        //for placeholders
        for (let i = 1; i <= Object.keys(storePlaceholder).length; i++) {
            tmpStore2['p' + i] = storePlaceholder['title' + i]; //prop0: 'value0', prop1: 'value1', prop2: 'value2', prop3: 'value3', …}
        }
        for (const [key, value] of Object.entries(tmpStore2)) {
            let p1_ = document.getElementById(`${key}`);
            p1_.placeholder = `${value}`;
        }

        //for className
        for (let i = 1; i <= Object.keys(storeRepeat).length; i++) {
            tmpStore3['c' + i] = storeRepeat['title' + i]; //prop0: 'value0', prop1: 'value1', prop2: 'value2', prop3: 'value3', …}
        }
        for (const [key, value] of Object.entries(tmpStore3)) {
            let c1_ = document.getElementsByClassName(`${key}`);
            for (var i = 0; i < c1_.length; i++) {
                c1_[i].innerText = `${value}`;
            }
        }

        if ($(window).width() <= 1200) {
            $('.choice-text-block').trigger("destroy.owl.carousel").removeClass('owl-carousel');
/*            let t12 = $('#t13').addClass('d-none').removeAttr("id");
            let t11 = $('#t23').removeClass('d-none').removeAttr("id").attr('id','t13');*/
            owl.addClass('owl-carousel').trigger('refresh.owl.carousel');
            owl.owlCarousel(options);
        }
    }
})

function minus(id) {
    let cakeCost = document.getElementById(id);
    if (cakeCost.innerText > 0) cakeCost.innerText = parseInt(cakeCost.innerText) - 1;
}

function plus(id) {
    let cakeCost = document.getElementById(id);
    if (cakeCost.innerText >= 0) cakeCost.innerText = parseInt(cakeCost.innerText) + 1;
}

function goto(str) {
    document.getElementsByClassName(str)[0].scrollIntoView({behavior: "smooth"});
}
