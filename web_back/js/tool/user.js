var user = {
    //管理员登录验证接口
    login: function(account, password, callback) {
        $.post(
            "http://localhost:8000/admin/login", {
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
        $.post("http://localhost:8000/admin/logout", function(res) {
            callback(res);
        })
    },
    // 管理原信息接口
    getinfo: function(callback) {
        $.get("http://localhost:8000/admin/getuser", function(res) {
            callback(res);
        })
    }

}