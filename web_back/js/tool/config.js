// 整个项目的基地址
var baseUrl = "http://localhost:8000/";

// 列出所有用过的接口的地址
var APIURLS = {
    // 一管理员相关信息
    // 管理员登录验证接口
    user_login: baseUrl + "admin/login",
    // 管理员退出接口
    user_logout: baseUrl + "admin/logout",
    // 管理原信息接口
    user_getinfo: baseUrl + "admin/getuser",

    // 二文章类别管理
    // 文章类型显示
    category_show: baseUrl + "admin/category_search",
    // 删除文章类型
    category_del: baseUrl + "admin/category_delete",



}