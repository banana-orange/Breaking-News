var comment = {
    add: function(name, content, article_id, callback) {
        $.post(APIURLS.comment_add, { "name": name, "content": content, "article_id": id }, function(res) {
            callback(res);
        })
    },
    // 评论显示
    get: function(article_id, callback) {
        $.get(APIURLS.comment_get, { "article_id": id }, function(res) {
            callback(res);
        })
    }
}