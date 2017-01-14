var nav = document.getElementsByClassName("nav")[0];
var navCon = document.getElementsByClassName("navCon")[0];
var a = navCon.getElementsByTagName("a")[0];

var banner = document.getElementsByClassName("banner")[0];
var slide3 = banner.getElementsByTagName("div");
var slide1 = document.getElementsByClassName("slide1")[0];
var slide2 = document.getElementsByClassName("slide2")[0];

var home = document.getElementsByClassName("home")[0];
var homeOLi = home.getElementsByTagName("li");

var iCon = document.getElementsByClassName("icon")[0];
var homeA = iCon.getElementsByTagName("a");

/*

 window.onscroll = function () {
 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 if (scrollTop > 100) {
 nav.style.backgroundColor = "white";
 a.className = "c1";
 } else {
 nav.style.backgroundColor = "";
 a.className = "";
 }
 };
 */

/*第一屏轮播图*/
var interval = 4000, step = 1, astep = 0, time = null;
time = window.setInterval(autoMove, interval);
function autoMove() {
    lb();
}
function lb() {

    if (step == slide3.length - 1) {
        step = -1;
    }

    step++;

    var c = window.setInterval(function () {
        if (astep >= 1) {
            window.clearInterval(c);
            astep = 0;
            return;
        }

        astep += 0.01;

        for (var i = 0; i < slide3.length; i++) {
            if (step == i) {
                slide3[i].style.zIndex = 1;
                slide3[i].style.opacity = astep > 1 ? 1 : astep;
                continue;
            }
            slide3[i].style.zIndex = 0;
        }

    }, 10);
}


/*home轮播图*/

var interval1 = 4000, sj = 0, time1 = null, step1 = 0;
time1 = window.setInterval(function () {
    autouVa();
}, interval1);

function autouVa() {

    if (sj == homeOLi.length - 1) {
        sj = -1;
    }

    sj++;
    var c1 = window.setInterval(function () {
        if (step1 >= 1) {
            step1 = 0;
            window.clearInterval(c1);
            return;
        }
        step1 += 0.01;
        for (var i = 0; i < homeOLi.length; i++) {
            if (sj == i) {
                homeOLi[i].style.zIndex = 1;
                homeOLi[i].style.opacity = step1 > 1 ? 1 : step1;
                homeA[i].className = "icon1";
                continue;
            }
            homeOLi[i].style.zIndex = 0;
            homeA[i].className = "";
        }
    }, 10);
}


function jd() {
    for (var i = 0; i < homeA.length; i++) {
        homeA[i].a = i;
        homeA[i].onclick = function () {
            jdcl(this.a);
            sj = this.a;
        }
    }
}

function jdcl(sy) {
    for (var i = 0; i < homeOLi.length; i++) {
        homeOLi[i].style.opacity = 0;
        homeA[i].className = "";
    }
    homeOLi[sy].style.opacity = 1;
    homeA[sy].className = "icon1";
}
jd();

if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
    ooo();
}

function ooo() {
    var secti1 = document.getElementById("last1");
    var divO1 = secti1.getElementsByTagName("div");
    var oH3 = secti1.getElementsByTagName("h3");
    var a1 = document.getElementById("a1");
    var navConUl = document.getElementById("navConUl");
    a1.onclick = function () {
        if (navConUl.style.display == "block") {
            navConUl.style.display = "none";
        } else {
            navConUl.style.display = "block";
        }
    };
    for (var i = 0; i < divO1.length; i++) {
        oH3[i].a = i;
        oH3[i].onclick = function () {
            if (divO1[this.a].offsetHeight > 200) {
                divO1[this.a].style.height = 50 + "px";
            } else {
                divO1[this.a].style.height = 200 + "px";
            }
        }
    }
}