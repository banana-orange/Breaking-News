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
    // 添加文章类型
    category_add: baseUrl + "admin/category_add",
    // 编辑文章类型
    category_edit: baseUrl + "admin/category_edit",

    // 三文章类型接口
    // 文章类型显示
    article_show: baseUrl + 'admin/search',
    // 文章删除
    article_del: baseUrl + "admin/article_delete",
    // 文章添加
    article_add: baseUrl + "admin/article_publish",
}