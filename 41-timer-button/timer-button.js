var $timerButton = (function(){
    var html = '<input  type="button" class="timer-button "value="同意 (6s)" disabled>';
      
    function show(conf){ 
      var $btn = $('<input type="button" disabled>');
       $btn.css({
          height:'50px',
          width:'150px'
       })
       var timer,
            num,
            cfg = {
              container:'body',
              num : 6,
              title:'同意',
              onClick:null
            };
      $(cfg.container).append($btn);
      $.extend(cfg,conf);//追加到最新配置
      //1.DOM draw
      //第一种添加
      //$(cfg.container).html(html);
      //第二种添加
      num = cfg.num;
      $btn.val(cfg.title + '(' + cfg.num + 's)');//按钮初始值
      timer=setInterval(function(){
          num--;
          if(num === 0){
            clearInterval(timer);
            $btn.val(cfg.title);
            $btn.removeAttr('disabled');
          }else{
            $btn.val(cfg.title + '(' + num + 's)')
          }
      },1000);
      //2.event bind
      $btn.click(cfg.onClick);
    }
    return {
      show : show
    }
  }());
  
  //不用 page load event
  //
  //封装成对象，有几种方案
  //
  //1.全局对象（简单对象自变量）：不完全是面对对象
  //var timer-button = {show:funtion(){}}
  
  //2.工厂函数，一个函数，返回值是一个简单对象 （大部分）
  //var timerBtn = (function(){
  //      return{
  //          show:function{}
  //      }
  //}())
  
  //3.构造函数  
  //function timerBtn(){} var timer = new timerBtn();
  
  
  function TimerButton(){
     var $btn = $('<input type="button" disabled>');
       $btn.css({
          height:'50px',
          width:'150px'
     })
     var timer,
         num,
         cfg = {
              container:'body',
              num : 6,
              title:'同意',
              onClick:null
         };
     this.show = function(conf){
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num = cfg.num;
        $btn.val(cfg.title + '(' + cfg.num + 's)');
        timer=setInterval(function(){
          num--;
          if(num === 0){
            clearInterval(timer);
            $btn.val(cfg.title);
            $btn.removeAttr('disabled');
          }else{
            $btn.val(cfg.title + '(' + num + 's)')
          }
      },1000);
      $btn.click(cfg.onClick);
    }
  
   }