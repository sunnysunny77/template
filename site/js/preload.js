const preload_image = (url) => {
  var img = new Image();
  img.src = url;
};

const path = location.pathname;

if(path.includes("example")) {

  preload_image("./images/..");
} else {

  preload_image("./images/..");
}