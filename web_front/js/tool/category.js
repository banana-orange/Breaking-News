var category = {
    // 文章类型显示
    show: function(callback) {
        $.get(APIURLS.category_show, function(res) {
            callback(res);
        })
    },


}