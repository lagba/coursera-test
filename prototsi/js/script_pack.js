
var Packets = {
    "IPTV" : [970, 1030, 1300, 1400],
    "Tel" : [1000, 1040, 1330, 1430],
    "Both" : [1160, 1200, 1480, 1580],
    "AV" : [990, 1050, 1320, 1420]
};
    


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
    getPricePack('#'+i+'tarifBoxIPTV', i);
  };

  for (var i = 0; i < 4; i++) {
    getPricePack('#'+i+'tarifBoxTel', i);
  };

  for (var i = 0; i < 4; i++) {
    getPricePack('#'+i+'tarifBoxBoth', i);
  };

  for (var i = 0; i < 4; i++) {
    getPricePack('#'+i+'tarifBoxAV', i);
  };

  $('button.alert-btn-gifts').click(function() {
    alert("Переход на описание акции в формате .pdf");
  });

});

// Функция по тарифам Packets
function getPricePack(box, i) {
  $('' + box + '').click(function(){
    var totalSetIntPrice1 = 1;
    var totalSetIntPrice2 = 100;
    var totalSetTelPrice = 2700;
    var tarifName = box.slice(10);
    var totalMonthPrice = Packets[tarifName][i];
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

    if (box.indexOf("Tel") != -1 || box.indexOf("Both") != -1) {
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

    if (box.indexOf("IPTV") != -1 || box.indexOf("Both") != -1) {
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
      totalRouterPrice = 0;
      stringDisplay1 = ""; 
      totalMonthPrice = Packets[tarifName][i];
      $('input[name="iptv"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "3500") {
          stringDisplay1 = `
            <span class="price-text">Стоимость IP-TV приставки:</span>
            <span class="priceIPTV ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
          totalRouterPrice = parseInt($(this).data("exval"),10);
        };
        if ($(this).is(":checked") && $(this).data("exval") == "50") {
          totalMonthPrice += parseInt($(this).data("exval"),10);
        }
      });
      $('.displayIPTV').html(stringDisplay1);
      $('#modalPrices .priceIPTV').text(totalRouterPrice);
      $('#modalPrices .price3').text(totalMonthPrice);
    });

    $('input[name="telephone"]').change(function (){
      totalSetTelPrice = 2700;
      $('input[name="telephone"]:checked').each(function(){
        if ($(this).is(":checked") && $(this).data("exval") == "72") {
          totalSetTelPrice = parseInt($(this).data("exval"),10);
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
