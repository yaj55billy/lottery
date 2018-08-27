


(function () {


  // 動畫


  for (i = 0; i < 17; i++) {
    var headLen = $('.lottery h1 span');
    // console.log(headLen[i].innerText);
    console.log(headLen[i]);
    $(headLen[i]).velocity({
      opacity: 1,
    }, {
        duration: 4000,
        // easing: [ 0.17, 0.67, 0.83, 0.67 ],
        // delay: 1000,
        loop:true
    });

    // setTimeout(function () {
    //   // headLen[i].innerText
    //   // $(".lottery h1").innerText('headLen[i]');

    // }, 200);
  }

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

})();

