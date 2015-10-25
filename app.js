var page = tabris.create("Page", {
  title: "LiteTube. To Mor with love...",
  topLevel: true
});

tabris.create("WebView", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  url: 'http://youtube.com'
}).appendTo(page);

page.open();
