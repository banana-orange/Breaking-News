var category = {
    // 文章类型显示
    show: function(callback) {
        $.get(APIURLS.category_show, function(res) {
            callback(res);
        })
    },
    // 删除文章类型
    del: function(id, callback) {
        $.post(APIURLS.category_del, { "id": id }, function(res) {
            callback(res);
        })
    },
    // 添加文章类型
    add: function(name, slug, callback) {
        $.post(APIURLS.category_add, { "name": name, "slug": slug }, function(res) {
            callback(res);
        })
    },
    edit: function(id, name, slug, callback) {
        $.post(APIURLS.category_edit, { "id": id, "name": name, "slug": slug }, function(res) {
            callback(res);
        })
    }

}