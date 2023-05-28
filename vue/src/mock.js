const Mock = require('mockjs')
const Random = Mock.Random

let Result = {
    code: 200,
    msg: '成功',
    data: null
}

Mock.mock('/captcha', 'get', () => {

    Result.data = {
        token: Random.string(32),
        captchaImg: Random.dataImage('120x40', 'p7n5w')
    }
    return Result
})

Mock.mock('/login', 'post', () => {
    Result.code = 400
    Result.msg = "驗證碼錯誤"
    return Result
})

Mock.mock('/SideMenu_element/userinfo', 'get', () => {
    Result.data = {
        id: 1,
        username: "test",
        avater: "/assets/avater_1.png"
    }
    return Result
})

Mock.mock('/logout', 'post', () => {
    return Result
})


