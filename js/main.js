(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework


  var carsImages = document.querySelectorAll('.data-ref'),
   carsModels = document.querySelector('.modelName'),
   carsPrice = document.querySelector('.priceInfo'),
   carsDesc = document.querySelector('.modelDetails');



   function swipeText(){
   //console.log("From swipeText");
     objectIndex= carData[this.id];
     carsModels.firstChild.nodeValue = objectIndex.model;
     carsPrice.firstChild.nodeValue = objectIndex.price;
     carsDesc.firstChild.nodeValue = objectIndex.description;
     

 }

for (var i=0; i < carsImages.length; i++){
  carsImages[i].addEventListener('click', swipeText,false);
}

})();
