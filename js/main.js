const default_color = '#000000';
const activated_color = '#FAFCFC';
const element = document.getElementById('clock');
document.getElementById('时间').style.color = activated_color

function startTime() {
  // Date('December 17, 1995 12:25:00')
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  // background change

  // time of the day
  switch (h) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      document.getElementById("晚").style.color = default_color;
      document.getElementById("上g2").style.color = default_color;

      document.getElementById("凌晨").style.color = activated_color;
      break
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      document.getElementById("凌晨").style.color = default_color;

      document.getElementById("上g2").style.color = activated_color;
      document.getElementById("午h2").style.color = activated_color;
      break
    case 12:
    case 13:
    case 14:
      document.getElementById("上g2").style.color = default_color;

      document.getElementById("中").style.color = activated_color;
      document.getElementById("午h2").style.color = activated_color;
      break
    case 15:
    case 16:
    case 17:
      document.getElementById("中").style.color = default_color;
      document.getElementById("午h2").style.color = default_color;

      document.getElementById("下午").style.color = activated_color;
      break
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      document.getElementById("下午").style.color = default_color;

      document.getElementById("晚").style.color = activated_color;
      document.getElementById("上g2").style.color = activated_color;
  }

  // background change
  switch (h) {
    case 0:
    case 1:
    case 2:
      element.className = 'clockbox theme_black';
      break
    case 3:
    case 4:
      element.className = 'clockbox theme_3';
      break
    case 5:
    case 6:
      element.className = 'clockbox theme_5';
      break
    case 7:
    case 8:
    case 9:
    case 10:
      element.className = 'clockbox theme_blue';
      break
    case 11:
    case 12:
    case 13:
      element.className = 'clockbox theme_white';
      break
    case 14:
    case 15:
    case 16:
      element.className = 'clockbox theme_yellow';
      break
    case 17:
    case 18:
    case 19:
      element.className = 'clockbox theme_sunset';
      break
    case 20:
    case 21:
      element.className = 'clockbox theme_dark';
      break
    case 22:
    case 23:
      element.className = 'clockbox theme_night';
      break
  }

  // hours
  switch (h % 12) {
    case 0:
      document.getElementById("十a3").style.color = default_color;
      document.getElementById("一b3").style.color = default_color;
      document.getElementById("点c3").style.color = default_color;

      document.getElementById("十f5").style.color = activated_color;
      document.getElementById("二g5").style.color = activated_color;
      document.getElementById("点h5").style.color = activated_color;
      break
    case 1:
      document.getElementById("十f5").style.color = default_color;
      document.getElementById("二g5").style.color = default_color;
      document.getElementById("点h5").style.color = default_color;

      document.getElementById("一b3").style.color = activated_color;
      document.getElementById("点c3").style.color = activated_color;
      break
    case 2:
      document.getElementById("一b3").style.color = default_color;
      document.getElementById("点c3").style.color = default_color;

      document.getElementById("两点").style.color = activated_color;
      break
    case 3:
      document.getElementById("两点").style.color = default_color;

      document.getElementById("三a4").style.color = activated_color;
      document.getElementById("点d4").style.color = activated_color;
      break
    case 4:
      document.getElementById("三a4").style.color = default_color;

      document.getElementById("四b4").style.color = activated_color;
      document.getElementById("点d4").style.color = activated_color;
      break
    case 5:
      document.getElementById("四b4").style.color = default_color;

      document.getElementById("五c4").style.color = activated_color;
      document.getElementById("点d4").style.color = activated_color;
      break
    case 6:
      document.getElementById("五c4").style.color = default_color;
      document.getElementById("点d4").style.color = default_color;

      document.getElementById("六点").style.color = activated_color;
      break
    case 7:
      document.getElementById("六点").style.color = default_color;

      document.getElementById("七点").style.color = activated_color;
      break
    case 8:
      document.getElementById("七点").style.color = default_color;

      document.getElementById("点e5").style.color = activated_color;
      document.getElementById("八点").style.color = activated_color;
      break
    case 9:
      document.getElementById("八点").style.color = default_color;

      document.getElementById("点e5").style.color = activated_color;
      document.getElementById("九点").style.color = activated_color;
      break
    case 10:
      document.getElementById("点e5").style.color = default_color;
      document.getElementById("九点").style.color = default_color;

      document.getElementById("十f5").style.color = activated_color;
      document.getElementById("点h5").style.color = activated_color;
      break
    case 11:
      document.getElementById("十f5").style.color = default_color;
      document.getElementById("点h5").style.color = default_color;

      document.getElementById("十a3").style.color = activated_color;
      document.getElementById("一b3").style.color = activated_color;
      document.getElementById("点c3").style.color = activated_color;
      break
  }

  // minutes
  switch (m) {
    case 0:
      document.getElementById("五a8").style.color = default_color;
      document.getElementById("十b8").style.color = default_color;
      document.getElementById("九分").style.color = default_color;

      document.getElementById("整").style.color = activated_color;
      break
    case 1:
      document.getElementById("整").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("一h6").style.color = activated_color;
      break
    case 2:
      document.getElementById("一h6").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("二h7").style.color = activated_color;
      break
    case 3:
      document.getElementById("二h7").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("三g7").style.color = activated_color;
      break
    case 4:
      document.getElementById("三g7").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("四g8").style.color = activated_color;
      break
    case 5:
      document.getElementById("四g8").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("五g6").style.color = activated_color;
      break
    case 6:
      document.getElementById("五g6").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("六f8").style.color = activated_color;
      break
    case 7:
      document.getElementById("六f8").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("七h8").style.color = activated_color;
      break
    case 8:
      document.getElementById("七h8").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("八分").style.color = activated_color;
      break
    case 9:
      document.getElementById("八分").style.color = default_color;

      document.getElementById("零").style.color = activated_color;
      document.getElementById("九分").style.color = activated_color;
      break
    case 10:
      document.getElementById("零").style.color = default_color;
      document.getElementById("九分").style.color = default_color;

      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("分").style.color = activated_color;
      break
    case 11:
      document.getElementById("分").style.color = default_color;

      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("一d6").style.color = activated_color;
      break
    case 12:
      document.getElementById("十b6").style.color = default_color;
      document.getElementById("一d6").style.color = default_color;

      switch (h % 12) {
        case 0:
        case 12:
          document.getElementById("十b7").style.color = activated_color;
          document.getElementById("二h7").style.color = activated_color;
          break
        default:
          document.getElementById("十f5").style.color = activated_color;
          document.getElementById("二g5").style.color = activated_color;
      }
      break
    case 13:
      document.getElementById("二h7").style.color = default_color;
      document.getElementById("十f5").style.color = default_color;
      document.getElementById("二g5").style.color = default_color;

      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("三g7").style.color = activated_color;
      break
    case 14:
      document.getElementById("十b7").style.color = default_color;
      document.getElementById("三g7").style.color = default_color;

      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("四g8").style.color = activated_color;
      break
    case 15:
      document.getElementById("十b6").style.color = default_color;
      document.getElementById("四g8").style.color = default_color;

      document.getElementById("一刻").style.color = activated_color;
      break
    case 16:
      document.getElementById("一刻").style.color = default_color;

      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("六e8").style.color = activated_color;
      break
    case 17:
      document.getElementById("六e8").style.color = default_color;

      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("七c8").style.color = activated_color;
      break
    case 18:
      document.getElementById("十b8").style.color = default_color;
      document.getElementById("七c8").style.color = default_color;

      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("八分").style.color = activated_color;
      break
    case 19:
      document.getElementById("八分").style.color = default_color;

      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("九分").style.color = activated_color;
      break
    case 20:
      document.getElementById("十b7").style.color = default_color;
      document.getElementById("九分").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      break
    case 21:
      document.getElementById("二十").style.color = activated_color;
      document.getElementById("一h6").style.color = activated_color;
      break
    case 22:
      document.getElementById("一h6").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("二h7").style.color = activated_color;
      break
    case 23:
      document.getElementById("二h7").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("三g7").style.color = activated_color;
      break
    case 24:
      document.getElementById("三g7").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("四g8").style.color = activated_color;
      break
    case 25:
      document.getElementById("四g8").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("五h4").style.color = activated_color;
      break
    case 26:
      document.getElementById("五h4").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("六f8").style.color = activated_color;
      break
    case 27:
      document.getElementById("六f8").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("七h8").style.color = activated_color;
      break
    case 28:
      document.getElementById("七h8").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("八分").style.color = activated_color;
      break
    case 29:
      document.getElementById("八分").style.color = default_color;

      document.getElementById("二十").style.color = activated_color;
      document.getElementById("九分").style.color = activated_color;
      break
    case 30:
      document.getElementById("二十").style.color = default_color;
      document.getElementById("九分").style.color = default_color;

      switch (h % 12) {
        case 1:
        case 11:
        case 6:
          document.getElementById("半d3").style.color = activated_color;
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
          document.getElementById("半e4").style.color = activated_color;
          break
      }
      break
    case 31:
      document.getElementById("半d3").style.color = default_color;
      document.getElementById("半e4").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("一d6").style.color = activated_color;
      break
    case 32:
      document.getElementById("一d6").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("二d7").style.color = activated_color;
      break
    case 33:
      document.getElementById("二d7").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("三g7").style.color = activated_color;
      break
    case 34:
      document.getElementById("三g7").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("四e6").style.color = activated_color;
      break
    case 35:
      document.getElementById("四e6").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("五c7").style.color = activated_color;
      break
    case 36:
      document.getElementById("五c7").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("六e8").style.color = activated_color;
      break
    case 37:
      document.getElementById("六e8").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("七c8").style.color = activated_color;
      break
    case 38:
      document.getElementById("七c8").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("八分").style.color = activated_color;
      break
    case 39:
      document.getElementById("八分").style.color = default_color;

      document.getElementById("三a6").style.color = activated_color;
      document.getElementById("十b6").style.color = activated_color;
      document.getElementById("九分").style.color = activated_color;
      break
    case 40:
      document.getElementById("三a6").style.color = default_color;
      document.getElementById("十b6").style.color = default_color;
      document.getElementById("九分").style.color = default_color;


      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      break
    case 41:
      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("一d6").style.color = activated_color;
      break
    case 42:
      document.getElementById("一d6").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("二d7").style.color = activated_color;
      break
    case 43:
      document.getElementById("二d7").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("三g7").style.color = activated_color;
      break
    case 44:
      document.getElementById("三g7").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("四e6").style.color = activated_color;
      break
    case 45:
      document.getElementById("四e6").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("五c7").style.color = activated_color;
      break
    case 46:
      document.getElementById("五c7").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("六e8").style.color = activated_color;
      break
    case 47:
      document.getElementById("六e8").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("七c8").style.color = activated_color;
      break
    case 48:
      document.getElementById("七c8").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("八分").style.color = activated_color;
      break
    case 49:
      document.getElementById("八分").style.color = default_color;

      document.getElementById("四a7").style.color = activated_color;
      document.getElementById("十b7").style.color = activated_color;
      document.getElementById("九分").style.color = activated_color;
      break
    case 50:
      document.getElementById("四a7").style.color = default_color;
      document.getElementById("十b7").style.color = default_color;
      document.getElementById("九分").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      break
    case 51:
      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("一d6").style.color = activated_color;
      break
    case 52:
      document.getElementById("一d6").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("二d7").style.color = activated_color;
      break
    case 53:
      document.getElementById("二d7").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("三d8").style.color = activated_color;
      break
    case 54:
      document.getElementById("三d8").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("四g8").style.color = activated_color;
      break
    case 55:
      document.getElementById("四g8").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("五c7").style.color = activated_color;
      break
    case 56:
      document.getElementById("五c7").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("六e8").style.color = activated_color;
      break
    case 57:
      document.getElementById("六e8").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("七c8").style.color = activated_color;
      break
    case 58:
      document.getElementById("七c8").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("八分").style.color = activated_color;
      break
    case 59:
      document.getElementById("八分").style.color = default_color;

      document.getElementById("五a8").style.color = activated_color;
      document.getElementById("十b8").style.color = activated_color;
      document.getElementById("九分").style.color = activated_color;
      break
  }

  document.getElementById("txt").innerHTML = h + "h " + m + "m " + today;
  setTimeout(startTime, 1000);
}
