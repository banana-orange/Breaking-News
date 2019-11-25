var comment = {
    add: function(name, content, article_id, callback) {
        $.post(APIURLS.comment_add, { "name": name, "content": content, "article_id": id }, function(res) {
            callback(res);
        })
    }
}