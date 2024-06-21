const events = (obj,typ,callback,opts) => {
  if (obj) {
    obj.addEventListener(typ,callback,opts);
  }
};

const callback = () => {
};


events(window, "load",  () => {
  callback();
});