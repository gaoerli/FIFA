fis.hook("relative");

fis.match("**", {
  relative: true
});

fis.match("*", {
  release: false
});

fis.match("/src/less/(*.less)", {
  rExt: ".css",
  parser: fis.plugin("less-2.x"),
  release: "css/$1"
});

fis.match("/src/scss/(*.scss)", {
  rExt: ".css",
  preprocessor: fis.plugin("autoprefixer", {
    browsers: ["Chrome < 29"]
  }),
  parser: fis.plugin("node-sass", {
    outputStyle: "expanded"
  }),
  release: "css/$1"
});

fis.match("/src/pug/(*.pug)", {
  rExt: ".html",
  parser: fis.plugin("pug"),
  release: "/$1"
});

fis.match("/src/(js/**)", {
  release: "$1"
});

fis.match("/src/(img/*)", {
  release: "$1"
});
