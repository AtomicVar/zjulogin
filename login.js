/*
 * ZJUWLAN Login script (Nodejs)
 *
 * Author: Guo Shuai
 * Date: 2018.10.4
 */

const axios = require('axios');

const waitForKeyPress = () => {
    console.log('Press any key to exit');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
};

let d
    = "action=login&username=" +
    "316010XXXX" +
    "&password=" +
    "XXXXXX" +
    "&ac_id=3" +
    "&user_ip=" +
    "&nas_ip=" +
    "&user_mac=" +
    "&save_me=0" +
    "&ajax=1";

axios({
    method : "post",
    url : "https://net.zju.edu.cn/include/auth_action.php",
    action : 'login',
    data : d,
}).then((res) => {
    let ok_pattern = /^login_ok,/;
    let interval_pattern = /^E2532/;
    if (ok_pattern.test(res.data)) {
        console.log("Login OK!");
        waitForKeyPress();
    } else if (interval_pattern.test(res.data)) {
        console.log("Interval too short! Wait for 10 seconds...");
        waitForKeyPress();
    } else {
        console.log(res.data);
        waitForKeyPress();
    }
});
