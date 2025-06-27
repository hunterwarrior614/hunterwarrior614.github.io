var now = new Date();
function createtime() {
    now.setTime(now.getTime() + 1000);
    
    // 修改这里：将起始时间改为实际建站时间
    var siteCreation = new Date("06/25/2025 21:41:45"); // 替换为您的实际建站时间
    
    // 计算网站运行时间
    var totalSeconds = (now - siteCreation) / 1000;
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = Math.floor(totalSeconds % 60);
    
    // 格式化时间单位
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    // 生成显示内容
    let displayContent = "";
    if (hours < 18 && hours >= 9) {
        displayContent = `<div style="font-size:13px;font-weight:bold">
                         哇！本站居然运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒耶✌
                         <i id="heartbeat" class='fas fa-heartbeat'></i></div>`;
    } else {
        displayContent = `<div style="font-size:13px;font-weight:bold">
                         哇！本站居然运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒耶✌ 
                         <i id="heartbeat" class='fas fa-heartbeat'></i></div>`;
    }
    
    // 更新显示
    const workboard = document.getElementById("workboard");
    if (workboard) {
        workboard.innerHTML = displayContent;
    }
}

// 每秒更新一次
setInterval(createtime, 1000);