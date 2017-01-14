$(function () {
    //首部
    ~function(){
        //step:轮播图步数，t:定时器，ts:定时器时间
        var step= 0,t=null,ts=4000;
        //首部轮播图
        function headerChanger(){
            var $curDiv=$(".banner>div").eq(step);
            $curDiv.css("zIndex",1).siblings().css("zIndex",0);
            $curDiv.animate({opacity:1},800, function () {
                $(this).siblings().css("opacity",0);
            });
        }

        //自动轮播
        t=window.setInterval(autoMove,ts);
        function autoMove(){
            if(step===($(".banner>div").length-1)){
                step=-1;
            }
            step++;
            headerChanger();
        }
    }();

    //--home
    ~function(){
        //step:轮播图步数，t:定时器，ts:定时器时间
        var step= 0,t=null,ts=4000;
        //Home轮播图
        function changerHome(){
            var $curLi=$(".home>ul>li").eq(step);
            $curLi.css("zIndex",1).siblings().css("zIndex",0);
            $curLi.animate({opacity:1},800, function () {
                $(this).siblings().css("opacity",0);
            });

            var $curA=$(".icon>a").eq(step);
            $curA.addClass("icon1").siblings().removeClass("icon1");
        }

        //自动轮播
        t=window.setInterval(autoMove,ts);
        function autoMove(){
            if(step===($(".home>ul>li").length-1)){
                step=-1;
            }
            step++;
            changerHome();
        }

        //焦点切换
        $(".icon>a").on("click", function () {
            step=$(this).index();
            changerHome();
        })
    }();


    //移动端
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        Mobile();
    }

    function Mobile(){
        $("#a1").bind("click", function () {
            $("#navConUl").toggle();
        });
        $("#last1>div").bind("click", function () {
            var $this=$(this);
            if (this.offsetHeight > 200) {
                $this.animate({height:"50px"},800);
            } else {
                $this.animate({height:"200px"},800);
            }
        })
    }
});













