var article = {
    // 文章类型显示
    show: function(callback) {
        $.get(APIURLS.article_show, {
                page: 5,
                state: "已发布"
            },
            function(res) {
                callback(res);
            })
    },
    getDetail: function(id, callback) {
        $.get(APIURLS.article_show, {
                "id": id,
            },
            function(res) {
                callback(res);
            })
    },

}