function getPhotoByTag(tagName) {
  //здесь надо пройтись по DATA_INSTA и вернуть массив фоток у которых есть такой тэг

  let arrPhoto = [];
  for (x in DATA_INSTA){
    DATA_INSTA[x].tags.forEach(function(item){
      if (item == tagName){
        arrPhoto.push( DATA_INSTA[x].images.low_resolution.url)
      }
    }) 
  }
  return arrPhoto;
}

function renderPhoto(element, photos) {
  //здесь ты должен внутрь element отрисовать все переданные photos
  for(i = 0; i < (photos.length); i++){
  $(element).append('<li><img src="' + photos[i] + '"></li>');
  }
}

function addPhotoToThirdColumn(photos1, photos2,el) {
  //здесь ты должен внутрь третьего столбца добавить те фотки что есть и в photos1 и в photos2
 var array3 = photos1.filter(function(obj){
   return photos2.indexOf(obj) >= 0;});
   console.log(array3)
 $(el).append('<li><img src="' + array3 + '"></li>');
}

var photosInFirstColumn = getPhotoByTag(document.getElementById('Tag-1').value);
var photosInSecondColumn = getPhotoByTag(document.getElementById('Tag-2').value);

renderPhoto($('ul.ul-1'), photosInFirstColumn);
renderPhoto($('ul.ul-2'), photosInSecondColumn);
addPhotoToThirdColumn(photosInFirstColumn,photosInSecondColumn,$('ul.ul-3'));

document.getElementById('btn-1').addEventListener("click", function () {
  $('ul.ul-1').empty()
  photosInFirstColumn = getPhotoByTag(document.getElementById('Tag-1').value);
  renderPhoto($('ul.ul-1'), photosInFirstColumn);
  addPhotoToThirdColumn(photosInFirstColumn,photosInSecondColumn, $('ul.ul-3'));
});

document.getElementById('btn-2').addEventListener("click", function () {
  $('ul.ul-2').empty()
  photosInSecondColumn = getPhotoByTag(document.getElementById('Tag-2').value);
  renderPhoto($('ul.ul-2'), photosInSecondColumn);
  addPhotoToThirdColumn(photosInFirstColumn,photosInSecondColumn, $('ul.ul-3'));
});