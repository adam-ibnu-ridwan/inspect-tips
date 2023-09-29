// clear CSS code from any website
document.querySelectorAll("link[rel=stylesheet]")
  .forEach(e => e.setAttribute("rel",""));
