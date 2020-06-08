

// 模拟请求数据

$.mockjax([
    // 登录
    {url: '*/login', responseText: {"code":200, "message": "登录成功"}},

    // 验证码
    {url: '*/images/captcha?data=*', responseText: "data:image/png;base64,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"},

    // 首页数据
    {url: '*/index/wen', responseText: {"code": 200, "data": {"lastSevenUserVisitCount": [{"count": 127, "days": "05-18"}, {"count": 117, "days": "05-19"}, {"count": 128, "days": "05-20"}, {"count": 141, "days": "05-21"}, {"count": 151, "days": "05-22"}, {"count": 72, "days": "05-23"}, {"count": 47, "days": "05-24"}, {"count": 138, "days": "05-25"}, {"count": 108, "days": "05-26"}, {"count": 136, "days": "05-27"}, {"count": 112, "days": "05-28"}], "totalVisitCount": 42246, "todayVisitCount": 112, "todayIp": 93, "lastSevenVisitCount": [{"count": 127, "days": "05-18"}, {"count": 118, "days": "05-19"}, {"count": 129, "days": "05-20"}, {"count": 142, "days": "05-21"}, {"count": 151, "days": "05-22"}, {"count": 72, "days": "05-23"}, {"count": 47, "days": "05-24"}, {"count": 138, "days": "05-25"}, {"count": 109, "days": "05-26"}, {"count": 138, "days": "05-27"}, {"count": 112, "days": "05-28"}]}}},


])