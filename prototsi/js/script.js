
var Internet = [
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 900
      },
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 1000
      },
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 1300
      },
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 1700
      }
  ];
var Telephone = [
      {
        "setPrice1" : 72,
        "setPrice2" : 2700,
        "monthPrice" : 241
      }
  ];
var Iptv = [
      {
        "setPrice" : 0,
        "routerPrice" : 3500,
        "monthPrice" : 180
      }
  ];
var Packets = [
      {
        "monthPrice" : 1300
      },
      {
        "monthPrice" : 1330
      },
      {
        "monthPrice" : 1480
      },
      {
        "monthPrice" : 1320
      }
  ];

// Очистка чекбоксов после перезагрузки страницы
for (i=0; i < document.getElementsByClassName('checks').length; i++) {
  if (document.getElementsByClassName('checks')[i].type=="checkbox") {
    document.getElementsByClassName('checks')[i].checked=false;
  }
};

$(document).ready(function(){

  $('.close').click(function() {
    $('.checker').prop("checked", false);
    $('input#tab1').prop("checked", true);
  });

  $('.close2').click(function() {
    $('.checker').prop("checked", false);
    $('input#tab1').prop("checked", true);
  });

  for (var i = 0; i < 4; i++) {
    getPriceInt('#'+i+'tarifBoxInt', i);
  };

  for (var i = 0; i < 4; i++) {
    getPriceTel('#'+i+'tarifBoxTel', i);
  };

  for (var i = 0; i < 4; i++) {
    getPriceIPTV('#'+i+'tarifBoxIPTV', i);
  };

  for (var i = 0; i < 4; i++) {
    getPricePack('#'+i+'tarifBoxPack', i);
  };

  $('button.alert-btn-gifts').click(function() {
    alert("Переход на описание акции в формате .pdf");
  });

  $('button.alert-btn-service').click(function() {
    alert("Переход на запуск сервиса или описание в зависимости от бизнес-процессов сервиса");
  });

  $('a.document-links').click(function() {
    alert("Переход на текст документа в формате .doc");
  });

  $('button.alert-btn-pay').click(function() {
    alert("Переход на страницу оплаты платежной системы");
  });


});

// Функция по тарифам Интернет
function getPriceInt(box, i) {
  $('' + box + '').click(function(){
    var totalSetPrice1 = Internet[i].setPrice1;
    var totalSetPrice2 = Internet[i].setPrice2;
    var stringDisplay = "";
    var totalRouterPrice = 0;
    var totalMonthPrice = Internet[i].monthPrice;

    $('h6.script_headerText').text('Куда Вам надо подключить услуги?');
    $('ul.script_ul').html(`
    <li class="nav-item">
      <label class="tes" for="tab1" style="border-bottom: 1px ridge #17469E;">В квартиру</label>
    </li>
    <li class="nav-item">
      <label class="tes" for="tab2">В частный дом</label>
    </li>`);

    $('section.script_section').html(`
    <div class="tab1 p-0 pt-3">
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="internet" data-exval="0">
        <span>Получить Wi-Fi роутер по акции "Двойная выгода!"</span>
      </h6>
    </div>
    <div class="tab2 p-0 pt-3">
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="internet" data-exval="0">
        <span>Получить Wi-Fi роутер по акции "Твоя весна!"</span>
      </h6>
    </div>
    <h5 class="modal-title pt-3">Итого к оплате</h5>
    <div class="d-flex flex-row p-0">
      <div id="modalPrices" class="d-flex flex-column flex-grow-1">
        <div class="p-0 d-flex flex-row flex-grow1">
          <span class="price-text">Стоимость подключения по акции:</span>
          <span class="priceInt1 tab1 ml-auto price-text"></span>
          <span class="priceInt2 tab2 ml-auto price-text"></span>
          <span class="price-text ml-3">руб.</span>
        </div>
        <div class="p-0 d-flex flex-row flex-grow1 displayRouter">
        </div>
        <div class="p-0 d-flex flex-row flex-grow1">
          <span class="price-text">Абонентская плата:</span>
          <span class="price3 ml-auto price-text"></span>
          <span class="price-text ml-3">руб/мес</span>
        </div>
      </div>
    </div>`);

    $('.tes').click(function() {
      $('.tes').css('border-bottom', 'none');
      $(this).css('border-bottom', '1px ridge #17469E');
    });

    $('input[name="pct"]').click(function(){
      $(`input[name="internet"]:checked`).each(function () {
        $(this).prop('checked',false).trigger('change');
      });
    });

    $('input[name="internet"]').change(function(){
      totalRouterPrice = 0;
      stringDisplay = ""; 
      $('input[name="internet"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "0") {
          stringDisplay = `
            <span class="price-text">Стоимость Wi-Fi роутера по акции:</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
          totalRouterPrice = parseInt($(this).data("exval"),10);
        };
      });
      $('.displayRouter').html(stringDisplay);
      $('#modalPrices .priceRouter').text(totalRouterPrice);
    });

    $('#modalPrices .priceInt1').text(totalSetPrice1);
    $('#modalPrices .priceInt2').text(totalSetPrice2);
    $('#modalPrices .price3').text(totalMonthPrice);
  });
};

// Функция по тарифам Телефонии
function getPriceTel(box, i) {
  $('' + box + '').click(function(){
    var totalSetPrice1 = Telephone[i].setPrice1;
    var totalSetPrice2 = Telephone[i].setPrice2;
    var stringDisplay = "";
    var totalTelephonePrice = 0;
    var totalMonthPrice = Telephone[i].monthPrice;

    $('h6.script_headerText').text('У Вас телефонизированное помещение?');
    $('ul.script_ul').html(`
    <li class="nav-item">
      <label class="tes" for="tab1" style="border-bottom: 1px ridge #17469E;">Да</label>
    </li>
    <li class="nav-item">
      <label class="tes" for="tab2">Нет</label>
    </li>`);

    $('section.script_section').html(`
    <div class="tab1 p-0 pt-3">
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="telephone" data-exval="0">
        <span>Получить телефон по акции "Телефон в подарок!"</span>
      </h6>
    </div>
    <div class="tab2 p-0 pt-3">
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="telephone" data-exval="0">
        <span>Получить телефон по акции "Телефон в подарок!"</span>
      </h6>
    </div>
    <h5 class="modal-title pt-3">Итого к оплате</h5>
    <div class="d-flex flex-row p-0">
      <div id="modalPrices" class="d-flex flex-column flex-grow-1">
        <div class="p-0 d-flex flex-row flex-grow1">
          <span class="price-text">Стоимость подключения:</span>
          <span class="price1 tab1 ml-auto price-text"></span>
          <span class="price2 tab2 ml-auto price-text"></span>
          <span class="price-text ml-3">руб.</span>
        </div>
        <div class="p-0 d-flex flex-row flex-grow1 displayTel">
        </div>
        <div class="p-0 d-flex flex-row flex-grow1">
          <span class="price-text">Абонентская плата:</span>
          <span class="price3 ml-auto price-text"></span>
          <span class="price-text ml-3">руб/мес</span>
        </div>
      </div>
    </div>`);

    $('.tes').click(function() {
      $('.tes').css('border-bottom', 'none');
      $(this).css('border-bottom', '1px ridge #17469E');
    });

    $('input[name="pct"]').click(function(){
      $(`input[name="telephone"]:checked`).each(function () {
        $(this).prop('checked',false).trigger('change');
      });
    });

    $('input[name="telephone"]').change(function(){
      totalTelephonePrice = 0;
      stringDisplay = ""; 
      $('input[name="telephone"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "0") {
          stringDisplay = `
            <span class="price-text">Стоимость телефона по акции:</span>
            <span class="priceTelephone ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
          totalTelephonePrice = parseInt($(this).data("exval"),10);
        };
      });
      $('.displayTel').html(stringDisplay);
      $('#modalPrices .priceTelephone').text(totalTelephonePrice);
    });

    $('#modalPrices .price1').text(totalSetPrice1);
    $('#modalPrices .price2').text(totalSetPrice2);
    $('#modalPrices .price3').text(totalMonthPrice);
  });
};

// Функция по тарифам IPTV
function getPriceIPTV(box, i) {
  $('' + box + '').click(function(){
    var totalSetPrice = Iptv[i].setPrice;
    var totalMonthPrice = Iptv[i].monthPrice;
    var totalRouterPrice = 0;
    var stringDisplay = ""; 

    $('h6.script_headerText').text('У Вас имеется Интернет от ТСИ?');
    $('ul.script_ul').html(`
    <li class="nav-item">
      <label class="tes" for="tab1" style="border-bottom: 1px ridge #17469E;">Да</label>
    </li>
    <li class="nav-item">
      <label class="tes" for="tab2">Нет</label>
    </li>`);

    $('section.script_section').html(`
    <div class="tab1 p-0 pt-3">
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="iptv" data-exval="3500">
        <span>Добавить IP-TV приставку</span>
      </h6>
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="iptv" data-exval="50">
        <span>Добавить пакет каналов "IPTV 18+"</span>
      </h6>
      <h5 class="modal-title pt-3">Итого к оплате</h5>
      <div class="d-flex flex-row p-0">
        <div id="modalPrices" class="d-flex flex-column flex-grow-1">
          <div class="p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Стоимость подключения:</span>
            <span class="price1 ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          </div>
          <div class="p-0 d-flex flex-row flex-grow1 display">
          </div>
          <div class="p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Абонентская плата:</span>
            <span class="price3 ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tab2 p-0 pt-3">
      <h6 class="text-left price-text">
        <span>Для доступа к услуге необходимо подключить Интернет от ТСИ!</span>
      </h6>
    </div>
    `);

    $('.tes').click(function() {
      $('.tes').css('border-bottom', 'none');
      $(this).css('border-bottom', '1px ridge #17469E');
    });

    $('input[name="iptv"]').change(function(){
      totalRouterPrice = 0;
      stringDisplay = ""; 
      totalMonthPrice = Iptv[i].monthPrice;
      $('input[name="iptv"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "3500") {
          stringDisplay = `
            <span class="price-text">Стоимость IP-TV приставки:</span>
            <span class="priceIPTV ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
          totalRouterPrice = Iptv[0].routerPrice;
        };
        if ($(this).is(":checked") && $(this).data("exval") == "50") {
          totalMonthPrice += parseInt($(this).data("exval"),10);
        }
      });
      $('.display').html(stringDisplay);
      $('#modalPrices .priceIPTV').text(totalRouterPrice);
      $('#modalPrices .price3').text(totalMonthPrice);
    });

    $('input[name="pct"]').click(function(){
      $(`input[name="iptv"]:checked`).each(function () {
        $(this).prop('checked',false).trigger('change');
      });
    });

    $('#modalPrices .price1').text(totalSetPrice);
    $('#modalPrices .priceIPTV').text(totalRouterPrice);
    $('#modalPrices .price3').text(totalMonthPrice);
  });
};

// Функция по тарифам Packets
function getPricePack(box, i) {
  $('' + box + '').click(function(){
    var totalSetIntPrice1 = Internet[i].setPrice1;
    var totalSetIntPrice2 = Internet[i].setPrice2;
    var totalSetTelPrice = Telephone[0].setPrice2;
    var totalMonthPrice = Packets[i].monthPrice;
    var totalRouterPrice = 0;
    var totalIPTVRouterPrice = 0;
    var stringDisplayRouter = ""; 
    var stringDisplayIPTV = ""; 

    $('h6.script_headerText').text('Куда Вам надо подключить услуги?');
    $('ul.script_ul').html(`
    <li class="nav-item">
      <label class="tes" for="tab1" style="border-bottom: 1px ridge #17469E;">В квартиру</label>
    </li>
    <li class="nav-item">
      <label class="tes" for="tab2">В частный дом</label>
    </li>`);

    $('section.script_section').html(`
    <div class="tab1 p-0 pt-3">
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="internet" data-exval="0">
        <span>Получить Wi-Fi роутер по акции "Двойная выгода!"</span>
      </h6>
    </div>
    <div class="tab2 p-0 pt-3">
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="internet" data-exval="0">
        <span>Получить Wi-Fi роутер по акции "Твоя весна!"</span>
      </h6>
    </div>
    <h5 class="modal-title pt-3">Итого к оплате</h5>
    <div class="d-flex flex-row p-0">
      <div id="modalPrices" class="d-flex flex-column flex-grow-1">
        <div class="p-0 d-flex flex-row flex-grow1 metka">
          <span class="price-text">Стоимость подключения Интернет по акции:</span>
          <span class="priceInt1 tab1 ml-auto price-text"></span>
          <span class="priceInt2 tab2 ml-auto price-text"></span>
          <span class="price-text ml-3">руб.</span>
        </div>
        <div class="p-0 d-flex flex-row flex-grow1 displayRouter">
        </div>
        <div class="p-0 d-flex flex-row flex-grow1 displayIPTV">
        </div>
        <div class="p-0 d-flex flex-row flex-grow1">
          <span class="price-text">Абонентская плата:</span>
          <span class="price3 ml-auto price-text"></span>
          <span class="price-text ml-3">руб/мес</span>
        </div>
      </div>
    </div>`);

    if (i == 1 || i == 2) {
      $('div.tab1, div.tab2').prepend(`
        <h6 class="text-left price-text">
          <input type="checkbox" class="checker" name="telephone" data-exval="72">
          <span>У меня телефонизированное помещение</span>
        </h6>`);
      $('div.metka').after(`
        <div class="p-0 d-flex flex-row flex-grow1">
          <span class="price-text">Стоимость подключения телефонии:</span>
          <span class="priceTel ml-auto price-text"></span>
          <span class="price-text ml-3">руб.</span>
        </div>`);
    };

    if (i == 0 || i == 2) {
      $('div.tab1, div.tab2').append(`
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="iptv" data-exval="3500">
        <span>Добавить IP-TV приставку</span>
      </h6>
      <h6 class="text-left price-text">
        <input type="checkbox" class="checker" name="iptv" data-exval="50">
        <span>Добавить пакет каналов "IPTV 18+"</span>
      </h6>`);
    };

    $('.tes').click(function() {
      $('.tes').css('border-bottom', 'none');
      $(this).css('border-bottom', '1px ridge #17469E');
    });

    $('input[name="internet"]').change(function(){
      totalRouterPrice = 0;
      stringDisplayRouter = ""; 
      $('input[name="internet"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "0") {
          stringDisplayRouter = `
            <span class="price-text">Стоимость Wi-Fi роутера по акции:</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
          totalRouterPrice = parseInt($(this).data("exval"),10);
        };
      });
      $('.displayRouter').html(stringDisplayRouter);
      $('#modalPrices .priceRouter').text(totalRouterPrice);
    });

    $('input[name="iptv"]').change(function (){
      totalIPTVRouterPrice = 0;
      stringDisplayIPTV = ""; 
      totalMonthPrice = Packets[i].monthPrice;
      $('input[name="iptv"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "3500") {
          stringDisplayIPTV = `
            <span class="price-text">Стоимость IP-TV приставки:</span>
            <span class="priceIPTV ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
          totalIPTVRouterPrice = Iptv[0].routerPrice;
        };
        if ($(this).is(":checked") && $(this).data("exval") == "50") {
          totalMonthPrice += parseInt($(this).data("exval"),10);
        }
      });
      $('.displayIPTV').html(stringDisplayIPTV);
      $('#modalPrices .priceIPTV').text(totalIPTVRouterPrice);
      $('#modalPrices .price3').text(totalMonthPrice);
    });

    $('input[name="telephone"]').change(function (){
      totalSetTelPrice = Telephone[0].setPrice2;
      $('input[name="telephone"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "72") {
          totalSetTelPrice = Telephone[0].setPrice1;
        }
      });
      $('#modalPrices .priceTel').text(totalSetTelPrice);
    });

    $('input[name="pct"]').click(function(){
      $(`input[name="internet"]:checked,
        input[name="iptv"]:checked,
        input[name="telephone"]:checked`).each(function () {
        $(this).prop('checked',false).trigger('change');
      });
    });

    $('#modalPrices .priceInt1').text(totalSetIntPrice1);
    $('#modalPrices .priceInt2').text(totalSetIntPrice2);
    $('#modalPrices .priceTel').text(totalSetTelPrice);
    $('#modalPrices .price3').text(totalMonthPrice);
  });
};
