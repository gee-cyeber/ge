$(function () {

    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });



//選択ボタン値を配列に入れてカウントする関数
      var box =[]; // 選択した問題の値を格納

    $(".btn").each(function(){
      $(this).on('click',function(){
        var value = $(this).data("value");
         box.push(value);
         console.log(box)
      });
    });

    $('.end').on('click',function(){
      // sumにboxにある値を全て計算
     const sum = box.reduce(function(a, x){return a + x;});

      // 計算結果sumに応じて回答を出力
      if(2 >= sum){
        $('#answer_01').css("display","")
      }else if(3 <= sum && sum <= 7) {
        $('#answer_02').css("display","")
      } else if(8 <= sum){
        $('#answer_03').css("display","")
      } else{
        $('#answer_04').css("display","")
      }
    })

});
