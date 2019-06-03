"use strict"

import obj from './goodsNav.js';

import getData from './getData.js';

(function (window, $, undefined) {

    // let goodsNav;
    let goodsFlag;

    // 文档加载完成事件
    $(document).ready(function () {
        getData();

        console.log(obj);
        eventInit();
        initSwiper();
    });

    // 事件的初始化
    function eventInit() {
        $(".shop-car-wrap").hover(function () {
            $(".shop-car-list").slideDown(200);
        }, function () {
            $(".shop-car-list").slideUp(200);
        });

        $(".goods-item-hover").hover(function () {
            $(".goods-slide-wrap").slideDown(200);
        }, function (event) {

            $(".goods-slide-wrap").slideUp(200);

        });

        $(".goods-item").hover(function () {
            let id = $(this).attr("data-id");
            if (id) {
                fillListById(id);
            }
        });

        $("#input").on("focus", function () {
            if ($(".search-icon-wrap").hasClass("input-hover")) {
                $(".search-icon-wrap").removeClass("input-hover");
            }
            $(".search-icon-wrap").addClass("input-focus");

            $(".key-wrap").fadeOut(200);
            $("#key-list").show();
        });

        $("#input").on("blur", function () {
            $(".search-icon-wrap").removeClass("input-focus");

            let val = $("#input").val();
            if (!val) {
                $(".key-wrap").fadeIn(200);
            }

            $("#key-list").hide();
        });

        $("#input").hover(function () {
            $(".search-icon-wrap").addClass("input-hover");
        }, function () {
            $(".search-icon-wrap").removeClass("input-hover");
        });

    }


    // 初始化swiper插件
    function initSwiper() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true, //自动循环
            effect: "fade", // 切换效果
            simulateTouch: false, // 关闭鼠标触摸

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            // 前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }

    // 选择地区按钮点击事件
    function selectRegionClick() {
        $(".overlay").fadeIn(200);
        $(".region-wrap").css("display", "block");
        $(".region-wrap").animate({
            "top": "50%",
            "opacity": "1"
        }, 400);
    }

    // 遮罩点击
    function overlayClick() {
        $(".overlay").fadeOut(200);
        $(".region-wrap").animate({
            "top": "-25%",
            "opacity": "0"
        }, 400, function () {
            $(".region-wrap").css("display", "none");
        });
    }

    // 登录点击事件
    function login() {
        let protocol = localStorage.getItem("protocol");
        if (protocol) {
            console.log("跳转到登录页面");
        } else {
            let agree = confirm("你同意这个协议吗");
            if (agree) {
                localStorage.setItem("protocol", true);
                console.log("跳转到登录页面");
            }
        }
    }

    // 注册事件
    function register() {
        let protocol = localStorage.getItem("protocol");
        if (protocol) {
            console.log("跳转到注册页面");
        } else {
            let agree = confirm("你同意这个协议吗");
            if (agree) {
                localStorage.setItem("protocol", true);
                console.log("跳转到注册页面");
            }
        }
    }

    // 根据id填充商品导航列表
    function fillListById(id) {
        if (id == "phone" && goodsFlag != "phone") {
            fillList(goodsNav.phoneList);
            goodsFlag = "phone";
        }

        if (id == "redmi" && goodsFlag != "redmi") {
            fillList(goodsNav.redMiList);
            goodsFlag = "redmi";
        }
    }

    // 填充内容，更新页面
    function fillList(list) {
        let html = "";
        for (let i = 0; i < list.length; i++) {
            html += '<div class="goods-slide-item">';
            if (list[i].isNew) {
                html += '<div class="goods-new-wrap">';
                html += '<div class="goods-new">新品</div>';
                html += '</div>';
            }


            html += '<div class="goods-slide-img">';
            html += '<img src="' + list[i].imgUrl + '" alt="">';
            html += '</div>';
            html += '<div class="goods-slide-name">' + list[i].name + '</div>';
            html += '<div class="goods-slide-price">' + list[i].price + '</div>';
            html += '</div>';
        }

        $("#goods-slide-content").html(html);
    }

    function fillKeyList(list) {
        console.log(list);
        let html = "";
        for (let i = 0; i < list.length; i++) {
            html += '<div class="key-list-item">';
            html += '<div class="key-list-item-title">' + list[i].name + '</div>';
            html += '<div class="key-list-item-subtitle">约' + list[i].count + '件</div>';
            html += '</div>';
        }

        $("#key-list").html(html);
    }




    window.selectRegionClick = selectRegionClick;
    window.overlayClick = overlayClick;
    window.login = login;
    window.register = register;
})(window, jQuery);