var nationVal = "";
//点击国家标签
$(document).on("click", ".itme-li", function() {
  // 获取当前节点
  var tagVal = $(this).index() + 1;
  nationVal = $(this).attr("data-name");

  // console.log(encodeURI(nationVal));
  // var xx = encodeURI(nationVal);
  // console.log(decodeURI(xx));

  // 清空边框
  $(".items")
    .children(".itme-li")
    .css("border", "2px solid rgba(0, 0, 0, 0)");
  $(this).css("border-color", " #ff0");

  // 显示国家
  $(".title")
    .children("div")
    .removeClass();
  $(".title")
    .children("div")
    .addClass("name name-" + tagVal);

  // 下一步
  $(".next")
    .addClass("next-activity")
    .attr("href", "./page2.html");

  // .attr("class");
  // console.log(className);
});

// var height = $(".list").height();
// console.log(height);

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2e588e1038674e5af7ba41eb2baa34e7";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
/**
 * 弹窗提示
 * @param {string} str
 */
function showToast(str) {
  $('<span class="showToast">' + str + "</span>").appendTo("body");
  setTimeout(() => {
    $(".showToast").remove();
  }, 1500);
}
function GetQueryString(str) {
  var LocString = String(window.document.location.href);
  var rs = new RegExp("(^|)" + str + "=([^&]*)(&|$)", "gi").exec(LocString),
    tmp;
  if ((tmp = rs)) return tmp[2];
  return null;
}

// 球滚动
$(document).ready(function() {
  $(".items").scroll(function() {
    var heg = $(".items").height(); //128

    var scrollheg = $(this).scrollTop(); //实时

    var allheg = $(".items")[0].scrollHeight; //box所有高度

    var ratio = scrollheg / (allheg - heg) * 100;

    $(".scl").css("top", ratio + "%");
  });
});

// 点击下一步弹层
$(document).on("click", ".next", function() {
  var url = $(this).attr("href");
  if (url == "#" || url == "") {
    showToast("请选择你的冠军球队");
    // console.log(url);
  } else {
    localStorage.setItem("nation", nationVal);
  }
});
