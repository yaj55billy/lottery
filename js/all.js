


(function(){


    
  // 吃的
  function decideFood(){
    var foods = ['雞排','炸雞','紅豆餅','露易莎','寮國咖啡','甜不辣','大腸包小腸'];
    var foodIndex = Math.floor(Math.random()*foods.length);
    $("#food").html(foods[foodIndex]);
  }
  $("#decide-food").click(decideFood);
    
  // 喝的
  function decideDrink(){
    var foods = ['大苑子','清心','COCO','露易莎','寮國咖啡'];
    var foodIndex = Math.floor(Math.random()*foods.length);
    $("#drink").html(foods[foodIndex]);
  }
  $("#decide-drink").click(decideDrink);

})();

