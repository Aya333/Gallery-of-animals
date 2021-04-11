'use strict';
let combination = [];
$.ajax('./data/page-1.json').then((myData) => {
  myData.forEach((element) => {
    let newAnimal = new Animal(element);
    newAnimal.render();
  });
});
function Animal(myData) {
  this.image = myData.image_url;
  this.title = myData.title;
  this.description = myData.description;
  this.keyword = myData.keyword;
  this.horns = myData.horns;
  animalArray.push(this);
  combination.push(this);
}
let animalArray = [];

Animal.prototype.render = function () {
  let option = $('<option></option>').text(this.keyword);
  $('select').append(option);
  let map = {};
  $('select option').each(function () {
    if (map[this.value]) {
      $(this).remove();
    }
    map[this.value] = true;
  });
  /*   let dataClone=$( '#photo-template' ).clone();
  dataClone.addClass( this.keyword );
  dataClone.find( 'h2' ).text( this.title );
  dataClone.find( 'img' ).attr( 'src', this.image );
  dataClone.find( 'p' ).text( this.description ); */
  let dataClone = $('.photo-template').html();
  let dataSet = Mustache.render(dataClone, this);
  $('main').append(dataSet);
};
function selectList() {
  let shown = {};
  let select = $('select');
  animalArray.forEach((element) => {
    if (!shown[element.keyword]) {
      let option = `<option value="${element.keyword}">${element.keyword}</option>`;
      select.append(option);
      shown[element.keyword] = true;
    }
  });
}
$('select').on('change', function () {
  let selected = $(this).val();
  $('.div').hide();
  $(`.${selected}`).show();
});
selectList();

//Page-2//

$.ajax('./data/page-2.json').then((data1) => {
  data1.forEach((element) => {
    let newOne = new Animal2(element);
    newOne.render();
  });
});
function Animal2(data1) {
  this.image = data1.image_url;
  this.title = data1.title;
  this.description = data1.description;
  this.keyword = data1.keyword;
  this.horns = data1.horns;
  animal2Array.push(this);
  combination.push(this);
}
let animal2Array = [];
Animal2.prototype.render = function () {
  let option = $('<option></option>').text(this.keyword);
  $('select').append(option);
  let map = {};
  $('select option').each(function () {
    if (map[this.value]) {
      $(this).remove();
    }
    map[this.value] = true;
  });
  /*   let dataClone=$( '#photo-template' ).clone();
  dataClone.addClass( this.keyword );
  dataClone.find( 'h2' ).text( this.title );
  dataClone.find( 'img' ).attr( 'src', this.image );
  dataClone.find( 'p' ).text( this.description ); */
  let dataClone = $('.photo-template').html();
  let dataSet = Mustache.render(dataClone, this);
  $('main').append(dataSet);
};
function myList() {
  let shown = {};
  let select = $('select');
  animal2Array.forEach((element) => {
    if (!shown[element.keyword]) {
      let option = `<option value="${element.keyword}">${element.keyword}</option>`;
      select.append(option);
      shown[element.keyword] = true;
    }
  });
}
$('select').on('change', function () {
  let selected = $(this).val();
  $('.div').hide();
  $(`.${selected}`).show();
});
myList();

////////////////////////////////////SORT FUNCTION////////////////////////////////////
// $('#button1').trigger('click');
// function sorting(){
//   $('#sort').change(function () {
//     if ($(this).val() === 'title') {
//       combination.sort(function (a, b) {
//         if (a.title.toUpperCase() < b.title.toUpperCase()) {
//           console.log('hi from inside');
//           return 1;
//         }
//         if (a.title.toUpperCase() > b.title.toUpperCase()) {
//           return -1;
//         } else {
//           return 0;
//         }
//       });

//     } else if ($(this).val() === 'horn') {
//       combination.sort(function (a, b) {
//         if (a.horns < b.horns) {
//           return -1;
//         }
//         if (a.horns > b.horns) {
//           return 1;
//         } else {
//           return 0;
//         }
//       });
//       // console.log ('from horns',all);

//       return combination;
//     }
//   });
// }
// sorting();


$( '#button1' ).trigger( 'click' );
Animal.prototype.handlerFilter = function(){
  $('#sort').change(function () {
    if ($(this).val() === 'title') {
      animalArray.sort(function (a, b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {

          return 1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return -1;
        } else {
          return 0;
        }
      });

    } else if ($(this).val() === 'horn') {
      animalArray.sort(function (a, b) {
        if (a.horns < b.horns) {
          return -1;
        }
        if (a.horns > b.horns) {
          return 1;
        } else {
          return 0;
        }
      });


      return animalArray;
    }
  });
};

$( '#button2' ).trigger( 'click' );
Animal2.prototype.handlerFilter = function(){
  $('#sort').change(function () {
    if ($(this).val() === 'title') {
      animal2Array.sort(function (a, b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {

          return 1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return -1;
        } else {
          return 0;
        }
      });

    } else if ($(this).val() === 'horn') {
      animal2Array.sort(function (a, b) {
        if (a.horns < b.horns) {
          return -1;
        }
        if (a.horns > b.horns) {
          return 1;
        } else {
          return 0;
        }
      });


      return animal2Array;
    }
  });
};
