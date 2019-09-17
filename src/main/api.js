/**
 * Функция, которая ищет среди фоток те, у которых есть соответствующий тег
 * @param {string} tagName 
 */
import { DATA_INSTA } from "./data.js";
var x;

var tag1 = document.getElementById('Tag-1').value;
      for (x in DATA_INSTA) {
          DATA_INSTA[x].tags.forEach(function(item, i, arr) {
              if (item == tag1)
                  $('ul.ul-1').append('<li><img src="' + DATA_INSTA[x].images.low_resolution.url + '"></li>');
            })
        }

        var tag2 = document.getElementById('Tag-2').value;
        for (x in DATA_INSTA) {
            DATA_INSTA[x].tags.forEach(function(item, i, arr) {
                if (item == tag2)
                    $('ul.ul-2').append('<li><img src="' + DATA_INSTA[x].images.low_resolution.url + '"></li>');
            })
        }
   
        var tagComb = [document.getElementById('Tag-2').value, document.getElementById('Tag-1').value];
        tagComb.sort();
        for (x in DATA_INSTA) {
            if (DATA_INSTA[x].tags.sort() == tagComb.toString())
                $('ul.ul-3').append('<li><img src="' + DATA_INSTA[x].images.low_resolution.url + '"></li>');
        }

var firstButton = document.getElementById('btn-1');
      firstButton.addEventListener("click", function() {
var tag1 = document.getElementById('Tag-1').value;
getPhotoByTag1(tag1);
})

function getPhotoByTag1(tagName) {
    console.log(DATA_INSTA);
    $('ul.ul-1').empty()
    for (x in DATA_INSTA){   
        DATA_INSTA[x].tags.forEach(function(item) {
          if(item == tagName){
              console.log(x);
              $('ul.ul-1').append('<li><img src="' + DATA_INSTA[x].images.low_resolution.url + '"></li>');          
   }
  })
 }
}

var secondButton = document.getElementById('btn-2');
      secondButton.addEventListener("click", function() {
var tag2 = document.getElementById('Tag-2').value;
getPhotoByTag2(tag2);
})

function getPhotoByTag2(tagName) {
    console.log(DATA_INSTA);
    $('ul.ul-2').empty()
    for (x in DATA_INSTA){   
        DATA_INSTA[x].tags.forEach(function(item) {
          if(item == tagName){
              console.log(x);
              $('ul.ul-2').append('<li><img src="' + DATA_INSTA[x].images.low_resolution.url + '"></li>');             
   }
  })
 }
}

$("div.tags").on('DOMNodeInserted', function() {
    var tagComb = [document.getElementById('Tag-2').value, document.getElementById('Tag-1').value];
    console.log(tagComb);
    //Массив из двух тегов
    tagComb.sort();
    console.log(tagComb);
    //Сортировка массива из двух тегов
    for (x in DATA_INSTA) {
        if (DATA_INSTA[x].tags.sort() == tagComb.toString())
            //Сравнение массивов как строк
            $('ul.ul-3').append('<li><img src="' + DATA_INSTA[x].images.low_resolution.url + '"></li>');
    }
})

 




   
   


     

