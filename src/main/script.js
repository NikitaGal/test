
var tok = '2973437696.1677ed0.62ce9285f7944a75a241869215f67e8c'
, userid = 2973437696
, count = 30;

$.ajax({
  //AJAX запрос 
  url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
  dataType: 'jsonp',
  type: 'GET',
  data: {
      access_token: tok,
      count: count
  },
  success: function(result) {
      //При успешном запросе
      console.log(result);
      //При загрузке
      var tag1 = document.getElementById('Tag-1').value;
      for (x in result.data) {
          result.data[x].tags.forEach(function(item, i, arr) {
              //Переборка и выбор фото по тегу
              if (item == tag1)
                  $('ul.ul-1').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
              //Выводим фото
            })
        }

        var tag2 = document.getElementById('Tag-2').value;
        for (x in result.data) {
            result.data[x].tags.forEach(function(item, i, arr) {
                if (item == tag2)
                    $('ul.ul-2').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
            })
        }
   
        var tagComb = [document.getElementById('Tag-2').value, document.getElementById('Tag-1').value];
        console.log(tagComb);
        //Массив из двух тегов
        tagComb.sort();
        console.log(tagComb);
        //Сортировка массива из двух тегов
        for (x in result.data) {
            if (result.data[x].tags.toString() == tagComb.toString())
                //Сравнение массивов как строк
                $('ul.ul-3').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
        }
    

      //Первый тег
      var firstButton = document.getElementById('btn-1');
      firstButton.addEventListener("click", function() {
          //Событие-клик
          $('ul.ul-1').empty()
          //Очищаем контент
          var tag1 = document.getElementById('Tag-1').value;
          for (x in result.data) {
              result.data[x].tags.forEach(function(item, i, arr) {
                  //Переборка и выбор фото по тегу
                  if (item == tag1)
                      $('ul.ul-1').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
                  //Выводим фото
              })
          }

      });

      //Второй тег
      var secondButton = document.getElementById('btn-2');
      secondButton.addEventListener("click", function() {
          $('ul.ul-2').empty()
          var tag2 = document.getElementById('Tag-2').value;
          for (x in result.data) {
              result.data[x].tags.forEach(function(item, i, arr) {
                  if (item == tag2)
                      $('ul.ul-2').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
              })
          }
      });

      //Третий столбец по двум тегам
      $("div.tags").on('DOMNodeInserted', function() {
          //var thirdButton = document.getElementById('btn-3');
          //thirdButton.addEventListener("click", function() {
          var tagComb = [document.getElementById('Tag-2').value, document.getElementById('Tag-1').value];
          console.log(tagComb);
          //Массив из двух тегов
          tagComb.sort();
          console.log(tagComb);
          //Сортировка массива из двух тегов
          for (x in result.data) {
              if (result.data[x].tags.toString() == tagComb.toString())
                  //Сравнение массивов как строк
                  $('ul.ul-3').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
          }
      })

  },
  error: function(result) {
      //При ошибке
      console.log(result);
  }
});
;