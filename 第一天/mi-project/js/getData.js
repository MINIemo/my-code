
import obj from './goodsNav.js';

export default function () {
    let goodsNav;
    // 获取导航数据
    $.ajax({
        url: "data/goods-nav.json",
        success: function (result) {
            console.log(result);
            obj.goodsNav = result;
        }
    });


}