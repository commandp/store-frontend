mui.init({
  gestureConfig:{
   tap: true, //默认为true
   doubletap: false, //默认为false
   longtap: false, //默认为false
   swipe: true, //默认为true
   drag: true, //默认为true
   hold: true,//默认为false，不监听
   release: true//默认为false，不监听
  }
});

// 加入购物车弹层
mui('body').on('tap', '#btn-buy', function () {
    document.querySelector('#edit-dialog').style.display = 'block';
}).on('tap', '#edit-dialog .btn-close', function () {
    document.querySelector('#edit-dialog').style.display = 'none';
});

// 下拉显示LOGO
mui('#wrapper').on('touchstart', '.mui-content', function (e) {
    this.startClientY = e.changedTouches[0].clientY;
    this.wrapper = document.querySelector('#wrapper');
    this.wrapper.style['webkitTransition'] = '0s';
    this.documentEle = document.documentElement;
}).on('touchmove', '.mui-content', function (e) {
    if (this.documentEle.scrollTop > 0) {
        this.startClientY = null;
        return;
    } else if (!this.startClientY) {
        this.startClientY = e.changedTouches[0].clientY;
    }
    var diff = (e.changedTouches[0].clientY) - this.startClientY;
    this.diff = diff;
    if (diff > 0) {
        this.wrapper.style['webkitTransform'] = 'translateY(' + diff*0.8 + 'px)';
    }
}).on('touchend', '.mui-content', function () {
    if (this.diff > 0) {
        this.wrapper.style['webkitTransform'] = 'none';
        this.wrapper.style['webkitTransition'] = '0.3s';
    }
    this.startClientY = 0;
});

// 产品详情
mui('.list-2').on('tap', 'a', function () {
    location.href = 'product_regular.html';
});

// 客户编辑
mui('')