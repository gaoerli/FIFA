$(function() {
  // 手形隐藏
  setTimeout(() => {
    $(".circle_1").hide();
  }, 2000);

  // var id = decodeURI(GetQueryString("nation")); //选择的国家的id;
  // var id = localStorage.getItem("nation");

  // // 请求服务器;
  // $.ajax({
  //   type: "GET",
  //   url: "http://sieia.org/index/mobileport/hits?nation=" + id,
  //   dataType: "json",
  //   contentType: "application/json",
  //   success: function(data) {
  //     // console.log(data);
  //   },
  //   error: function(data) {
  //     // console.log(data);
  //   }
  // });

  /**
   * 文本域最大字符输入限制
   * @param {Object} className 元素class名
   * @param {Object} maxlimit  最大输入字符
   */

  $(document).on("keyup change", ".input-value", function() {
    inputChang($(this));
  });

  function inputChang(obj) {
    $(".after-text").text(obj.val());
    if (obj.val() != "") {
      // var tag = encodeURI(obj.val());
      $(".next")
        .addClass("next-active")
        .attr("href", "./page3.html");
    } else {
      $(".page-next")
        .removeClass("page-next-active")
        .removeAttr("href");
    }
    $(".input-show").css("visibility", "visible");
  }

  //点击选标签
  $(document).on("click", ".tag-items", function() {
    $(".input-show").css("visibility", "visible");
    var tagVal = $(this).text();
    $(".after-text").text(tagVal);
    $(".input-value").val("");

    $(".next")
      .addClass("next-active")
      .attr("href", "./page3.html");
  });

  //http://sieia.org/index/mobileport/hits?nation='中国'//点击量添加
  //http://sieia.org/index/mobileport/nation?nation='中国'//排名
  $(document).on("click", ".next", function() {
    if ($(".input-value").val().length > 8) {
      showToast("最多输入8个汉字");
      return false;
    }
    if (!$(this).hasClass("next-active")) {
      showToast("请选择或填写冠军原因");
      localStorage.setItem("tag", "");
    } else {
      localStorage.setItem("nation", localStorage.getItem("nation"));
      localStorage.setItem("tag", $(".after-text").text());
    }
  });
});
// function isChn(str) {
//   var reg = /^[\u3220-\uFA29]+$/;
//   if (!reg.test(str)) {
//     console.log("不全是中文");
//     return false;
//   } else {
//     console.log("全是中文");
//     return true;
//   }
// }

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
