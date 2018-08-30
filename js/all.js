


(function () {




  var delay = function(s){
    return new Promise(function(resolve,reject){
     setTimeout(resolve,s); 
    });
  };
  
  delay().then(function(){
    $('.text-1').fadeIn(200);
    return delay(1500); // 延遲ㄧ秒
  }).then(function(){
    $('.text-2').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-3').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-4').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-5').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-6').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-7').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-8').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-9').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-10').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-11').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-12').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-13').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-14').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-15').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-16').fadeIn(200);
    return delay(400); // 延遲一秒
  }).then(function(){
    $('.text-17').fadeIn(200);
    return delay(400); // 延遲一秒
  });




  // 吃的
  function decideFood() {
    var foods = ['雞排', '炸雞', '紅豆餅', '露易莎', '寮國咖啡', '甜不辣', '大腸包小腸'];
    var foodIndex = Math.floor(Math.random() * foods.length);
    $("#food").html(foods[foodIndex]);
  }
  $("#decide-food").click(decideFood);

  // 喝的
  function decideDrink() {
    var foods = ['大苑子', '清心', 'COCO', '露易莎', '寮國咖啡'];
    var foodIndex = Math.floor(Math.random() * foods.length);
    $("#drink").html(foods[foodIndex]);
  }
  $("#decide-drink").click(decideDrink);



  // $('.item-img img').hover, function(){
  //   $(this).toggleClass('swing');
  // });

  $(".item-img img").hover(function() {
    $(this).stop().toggleClass('swing');
  });

})();

