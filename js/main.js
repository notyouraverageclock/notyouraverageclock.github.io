const defaultColor = '#000000';
const activatedColor = '#FAFCFC';
const shadowStyle = ".06vmax .08vmax #ebebeb";
// const element = document.getElementById('clock');
changeStyle('时间')

// var virtualOrigin = Date.parse("01 Jan 2000 00:00:00 GMT"),
//     realOrigin = Date.parse("01 Jan 2000 00:03:00 GMT"),
//     factor = 3600;

// function getVirtual(time) {
//     return new Date(virtualOrigin + (time - realOrigin) * factor);
// }


function startTime() {
    // Date('December 17, 1995 12:25:00')
    const today = new Date();

    const h = today.getHours();
    const m = today.getMinutes();

    // time of the day
    timeOfTheDay(h);
    // hours
    hourOfTheDay(h);
    // minutes
    minuteOfTheDay(h, m);

    // document.getElementById("txt").innerHTML = today;
    setTimeout(startTime, 1000);
}

function timeOfTheDay(h) {
    switch (h) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            defaultStyle('晚');
            changeStyle("凌晨");
            break
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            defaultStyle('凌晨');
            changeStyle("上g2");
            changeStyle("午h2");
            break
        case 12:
        case 13:
        case 14:
            defaultStyle('上g2');
            changeStyle("中");
            changeStyle("午h2");
            break
        case 15:
        case 16:
        case 17:
            defaultStyle('中');
            defaultStyle('午h2');
            changeStyle("下午");
            break
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            defaultStyle('下午');
            changeStyle("晚");
            changeStyle("上g2");
            break
    }
}

function hourOfTheDay(h) {
    switch (h % 12) {
        case 0:
            defaultStyle("十a3");
            defaultStyle("一b3");
            defaultStyle("点c3");

            changeStyle("十f5");
            changeStyle("二g5");
            changeStyle("点h5");
            break
        case 1:
            defaultStyle("十f5");
            defaultStyle("二g5");
            defaultStyle("点h5");

            changeStyle("一b3");
            changeStyle("点c3");
            break
        case 2:
            defaultStyle("一b3");
            defaultStyle("点c3");

            changeStyle("两点")
            break
        case 3:
            defaultStyle("两点")

            changeStyle("三a4")
            changeStyle("点d4")
            break
        case 4:
            defaultStyle("三a4")

            changeStyle("四b4")
            changeStyle("点d4")
            break
        case 5:
            defaultStyle("四b4")

            changeStyle("五c4")
            changeStyle("点d4")
            break
        case 6:
            defaultStyle("五c4")
            defaultStyle("点d4")

            changeStyle("六点")
            break
        case 7:
            defaultStyle("六点")

            changeStyle("七点")
            break
        case 8:
            defaultStyle("七点")

            changeStyle("点e5")
            changeStyle("八点")
            break
        case 9:
            defaultStyle("点e5")
            defaultStyle("八点")

            changeStyle("点e5")
            changeStyle("九点")
            break
        case 10:
            defaultStyle("点e5")
            defaultStyle("九点")

            changeStyle("十f5")
            changeStyle("点h5")
            break
        case 11:
            defaultStyle("十f5")
            defaultStyle("点h5")

            changeStyle("十a3")
            changeStyle("一b3")
            changeStyle("点c3")
            break
    }
}

function minuteOfTheDay(h, m) {
    switch (m) {
        case 0:
            defaultStyle("五a8")
            defaultStyle("十b8")
            defaultStyle("九分")

            changeStyle("整")
            break
        case 1:
            defaultStyle('整')

            changeStyle("零")
            changeStyle("一h6")
            break
        case 2:
            defaultStyle("一h6")

            changeStyle("零")
            changeStyle("二h7")
            break
        case 3:
            defaultStyle("二h7")

            changeStyle("零")
            changeStyle("三g7")
            break
        case 4:
            defaultStyle("三g7")

            changeStyle("零")
            changeStyle("四g8")
            break
        case 5:
            defaultStyle("四g8")

            changeStyle("零")
            changeStyle("五g6")
            break
        case 6:
            defaultStyle("五g6")

            changeStyle("零")
            changeStyle("六f8")
            break
        case 7:
            defaultStyle("六f8")

            changeStyle("零")
            changeStyle("七h8")
            break
        case 8:
            defaultStyle("七h8")

            changeStyle("零")
            changeStyle("八分")
            break
        case 9:
            defaultStyle("八分")

            changeStyle("零")
            changeStyle("九分")
            break
        case 10:
            defaultStyle("零")
            defaultStyle("九分")

            changeStyle("十b6")
            changeStyle("分")
            break
        case 11:
            defaultStyle("分")

            changeStyle("十b6")
            changeStyle("一d6")
            break
        case 12:
            defaultStyle("十b6")
            defaultStyle("一d6")

            switch (h % 12) {
                case 0:
                case 12:
                    changeStyle("十b7")
                    changeStyle("二h7")
                    break
                default:
                    changeStyle("十f5")
                    changeStyle("二g5")
            }
            break
        case 13:
            defaultStyle("十b7")
            defaultStyle("二h7")
            defaultStyle("十f5")
            defaultStyle("二g5")

            changeStyle("十b7")
            changeStyle("三g7")
            break
        case 14:
            defaultStyle("十b7")
            defaultStyle("三g7")

            changeStyle("十b6")
            changeStyle("四g8")
            break
        case 15:
            defaultStyle("十b6")
            defaultStyle("四g8")

            changeStyle("一刻")
            break
        case 16:
            defaultStyle("一刻")

            changeStyle("十b8")
            changeStyle("六e8")
            break
        case 17:
            defaultStyle("六e8")

            changeStyle("十b8")
            changeStyle("七c8")
            break
        case 18:
            defaultStyle("十b8")
            defaultStyle("七c8")

            changeStyle("十b7")
            changeStyle("八分")
            break
        case 19:
            defaultStyle("八分")

            changeStyle("十b7")
            changeStyle("九分")
            break
        case 20:
            defaultStyle("十b7")
            defaultStyle("九分")

            changeStyle("二十")
            break
        case 21:
            changeStyle("二十")
            changeStyle("一h6")
            break
        case 22:
            defaultStyle("一h6")

            changeStyle("二十")
            changeStyle("二h7")
            break
        case 23:
            defaultStyle("二h7")

            changeStyle("二十")
            changeStyle("三g7")
            break
        case 24:
            defaultStyle("三g7")

            changeStyle("二十")
            changeStyle("四g8")
            break
        case 25:
            defaultStyle("四g8")

            changeStyle("二十")
            changeStyle("五h4")
            break
        case 26:
            defaultStyle("五h4")

            changeStyle("二十")
            changeStyle("六f8")
            break
        case 27:
            defaultStyle("六f8")

            changeStyle("二十")
            changeStyle("七h8")
            break
        case 28:
            defaultStyle("七h8")

            changeStyle("二十")
            changeStyle("八分")
            break
        case 29:
            defaultStyle("八分")

            changeStyle("二十")
            changeStyle("九分")
            break
        case 30:
            defaultStyle("二十")
            defaultStyle("九分")

            switch (h % 12) {
                case 1:
                case 11:
                case 6:
                    changeStyle("半d3")
                    break
                case 0:
                case 2:
                case 3:
                case 4:
                case 5:
                case 7:
                case 8:
                case 9:
                case 10:
                    changeStyle("半e4")
                    break
            }
            break
        case 31:
            defaultStyle("半d3")
            defaultStyle("半e4")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("一d6")
            break
        case 32:
            defaultStyle("一d6")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("二d7")
            break
        case 33:
            defaultStyle("二d7")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("三g7")
            break
        case 34:
            defaultStyle("三g7")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("四e6")
            break
        case 35:
            defaultStyle("四e6")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("五c7")
            break
        case 36:
            defaultStyle("五c7")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("六e8")
            break
        case 37:
            defaultStyle("六e8")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("七c8")
            break
        case 38:
            defaultStyle("七c8")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("八分")
            break
        case 39:
            defaultStyle("八分")

            changeStyle("三a6")
            changeStyle("十b6")
            changeStyle("九分")
            break
        case 40:
            defaultStyle("三a6")
            defaultStyle("十b6")
            defaultStyle("九分")

            changeStyle("四a7")
            changeStyle("十b7")
            break
        case 41:
            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("一d6")
            break
        case 42:
            defaultStyle("一d6")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("二d7")
            break
        case 43:
            defaultStyle("二d7")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("三g7")
            break
        case 44:
            defaultStyle("三g7")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("四e6")
            break
        case 45:
            defaultStyle("四e6")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("五c7")
            break
        case 46:
            defaultStyle("五c7")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("六e8")
            break
        case 47:
            defaultStyle("六e8")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("七c8")
            break
        case 48:
            defaultStyle("七c8")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("八分")
            break
        case 49:
            defaultStyle("八分")

            changeStyle("四a7")
            changeStyle("十b7")
            changeStyle("九分")
            break
        case 50:
            defaultStyle("四a7")
            defaultStyle("十b7")
            defaultStyle("九分")

            changeStyle("五a8")
            changeStyle("十b8")
            break
        case 51:
            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("一d6")
            break
        case 52:
            defaultStyle("一d6")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("二d7")
            break
        case 53:
            defaultStyle("二d7")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("三d8")
            break
        case 54:
            defaultStyle("三d8")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("四g8")
            break
        case 55:
            defaultStyle("四g8")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("五c7")
            break
        case 56:
            defaultStyle("五c7")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("六e8")
            break
        case 57:
            defaultStyle("六e8")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("七c8")
            break
        case 58:
            defaultStyle("七c8")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("八分")
            break
        case 59:
            defaultStyle("八分")

            changeStyle("五a8")
            changeStyle("十b8")
            changeStyle("九分")
            break
    }

}

function changeStyle(element) {
    document.getElementById(element).style.textShadow = shadowStyle;
    document.getElementById(element).style.color = activatedColor;

}

function defaultStyle(element = 'clock') {
    document.getElementById(element).style.color = defaultColor;
    document.getElementById(element).style.textShadow = '';
}