var user = {
    //管理员登录验证接口
    login: function(account, password, callback) {
        $.post(
            APIURLS.user_login, {
                user_name: account,
                password: password
            },
            function(res) {
                callback(res)
            }
        )
    },
    // 管理员退出接口
    logout: function(callback) {
        $.post(APIURLS.user_logout, function(res) {
            callback(res);
        })
    },
    // 管理原信息接口
    getinfo: function(callback) {
        $.get(APIURLS.user_getinfo, function(res) {
            callback(res);
        })
    }

}