
var tok = '2973437696.1677ed0.62ce9285f7944a75a241869215f67e8c'
    , userid = 2973437696
    , count = 30;

//Второй тег
var firstButton = document.getElementById('btn-1');
//добавиляем событие 'click'
firstButton.addEventListener("click", function () {
    //создаем AJAX запрос
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: tok,
            count: count
        },
        success: function (result) {
            console.log(result);
            var tag = document.getElementById('Tag-1').value;
            for (x in result.data) {
                result.data[x].tags.forEach(function (item, i, arr) {
                    if (item == tag)
                        $('ul.ul-1').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
                })
            }
        },
        error: function (result) {
            console.log(result);
        }
    })
})


//Первый тег
var secondButton = document.getElementById('btn-2');
//добавиляем событие 'click'
secondButton.addEventListener("click", function () {
    //создаем AJAX запрос
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: tok,
            count: count
        },
        success: function (result) {
            console.log(result);
            var tag = document.getElementById('Tag-2').value;
            for (x in result.data) {
                result.data[x].tags.forEach(function (item, i, arr) {
                    if (item == tag)
                        $('ul.ul-2').append('<li><img src="' + result.data[x].images.low_resolution.url + '"></li>');
                })
            }
        },
        error: function (result) {
            console.log(result);
        }
    })
});

//общая фотография в двух столбцах
var thirdButton = document.getElementById('btn-3');
//добавиляем событие 'click'
thirdButton.addEventListener("click", function () {
    //создаем AJAX запрос
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: tok,
            count: count
        },
        success: function (result) {
            console.log(result);
            var tag = [document.getElementById('Tag-2').value, document.getElementById('Tag-1').value];
            tag.sort();
            for (x in result.data) {
                if (result.data[x].tags.toString() == tag.toString())
                    $('ul.ul-3').append('<li><img src="' + result.data[x].images.low_resolution.url + '" class-"IG"></li>');
            }
        },
        error: function (result) {
            console.log(result);
        }
    })
});





 


  
 
  



