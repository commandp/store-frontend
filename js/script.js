// 加入购物车
mui('body').on('tap', '#btn-go-buy', function () {
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
    var diff = e.changedTouches[0].clientY - this.startClientY;
    this.diff = diff;
    if (diff > 0) {
        this.wrapper.style['webkitTransform'] = 'translateY(' + diff*0.8 + 'px)';
    }
}).on('touchend', '.mui-content', function () {
    if (this.diff > 0) {
        this.wrapper.style['webkitTransform'] = 'translateY(' + 0 + 'px)';
        this.wrapper.style['webkitTransition'] = '0.3s';
    }
    this.startClientY = 0;
});