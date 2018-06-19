$(function() {
  // var id = decodeURI(GetQueryString("nation")); //选择的国家的id;
  // var tag = decodeURI(GetQueryString("tag")); //选择的国家的tag;
  var id = localStorage.getItem("nation");
  var tag = localStorage.getItem("tag");

  if (tag == null) {
    tag = "发型酷";
  }
  if (id == null) {
    id = "中国";
  }
  $(".check-tag").text("因为" + tag);
  $(".check-nation,.nation").text(id);

  $.ajax({
    type: "GET",
    url: "http://sieia.org/index/mobileport/nation?nation=" + id,
    dataType: "json",
    contentType: "application/json",
    success: function(response) {
      var h = response;
      for (var i = 0; i < h.length; i++) {
        if (h[i].nation == id) {
          $(".hits").text(h[i].number);
          $(".rank-val").text(h[i].ranking);
        }
      }
      setTimeout(() => {
        html2canvas(document.querySelector("#page3")).then(canvas => {
          var url = canvas.toDataURL(canvas);
          $("#curTpl")
            .attr("src", url)
            .show();
          $("#page3").remove();
        });
      }, 1000);
    },
    error: function(data) {
      // console.log(data);
    }
  });
});
