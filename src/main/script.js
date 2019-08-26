
  var  tok = '2973437696.1677ed0.62ce9285f7944a75a241869215f67e8c', 
  userid = 2973437696, 
  kolichestvo = 10; 
  
  $('#btn-1').on('click',function(){ $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: tok, count: kolichestvo}, // передаем параметры, которые мы указывали выше
      success: function(result){
        console.log(result);
          var tag = document.getElementById('Tag-1').value;
            for( x in result.data ){
              if( result.data[x].tags == tag) 
              $('ul.ul-1').append('<li><img src="'+result.data[x].images.low_resolution.url+'"></li>');
            }
          },
      error: function(result){
        console.log(result); // пишем в консоль об ошибках
      }
    })
  });  

  $('#btn-2').on('click',function(){ $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: tok, count: kolichestvo}, // передаем параметры, которые мы указывали выше
      success: function(result){
        console.log(result);
          var tag = document.getElementById('Tag-2').value;
            for( x in result.data ){
              if( result.data[x].tags == tag) 
              $('ul.ul-2').append('<li><img src="'+result.data[x].images.low_resolution.url+'"></li>');
            }
          },
      error: function(result){
        console.log(result); // пишем в консоль об ошибках
      }
    })
  });


  
 
  



