/*
 * ZJUWLAN Login script (Nodejs)
 *
 * Author: Guo Shuai
 * Date: 2018.10.4
 */

const axios = require('axios');

let d = "action=login&username="+"316010XXXX"+
    "&password="+"XXXXXX"+
    "&ac_id=3"+
    "&user_ip="+
    "&nas_ip="+
    "&user_mac="+
    "&save_me=0"+
    "&ajax=1";

axios({
    method: "post",
    url: "https://net.zju.edu.cn/include/auth_action.php",
    action: 'login',
    data: d,
}).then((res) => {
    let ok_pattern = /^login_ok,/;
    let interval_pattern = /^E2532/;
    if(ok_pattern.test(res.data)) {
        console.log("Login OK!");
    }
    else if (interval_pattern.test(res.data)) {
        console.log("两次认证间隔时间太短！");
    }
    else {
        console.log(res.data);
    }
});

