import { OverlayScrollbars } from "overlayscrollbars";

const overlay = () => {

  window.osInst = OverlayScrollbars(document.body, {
    overflow: {
      x: "hidden",
      y: "scroll",
    },
    scrollbars: {
      theme: "os-theme-body",
    },
  });
};

const scrolled = () => {

  const observer = new IntersectionObserver((entries, observer)=>{

    entries.filter(index=> index.isIntersecting).forEach(index => {

      index.target.classList.add("scrolled");
      observer.unobserve(index.target);
    });
  });

  document.querySelectorAll(".scrolled-init").forEach(index => {

    observer.observe(index);
  });
};

export const init = () => {

  scrolled();
  overlay();
};