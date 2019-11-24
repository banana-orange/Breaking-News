var article = {
    // 文章类型显示
    show: function(curPage, type, state, callback) {
        $.get(APIURLS.article_show, {
                page: curPage,
                type: type,
                state: state,
            },
            function(res) {
                callback(res);
            })
    },
    // 文章删除
    del: function(id, callback) {
        $.get(APIURLS.article_del, { "id": id }, function(res) {
            callback(res);
        })
    },
    // 文章添加
    add: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_add,
            type: "post",
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: function(res) {
                callback(res);
            }
        })
    },
    // 文章显示补充
    getDetail: function(id, callback) {
        $.get(APIURLS.article_show, {
                "id": id,
            },
            function(res) {
                callback(res);
            })
    },
    // 文章修改
    edit: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_edit,
            type: "post",
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: function(res) {
                callback(res);
            }
        })
    },

}