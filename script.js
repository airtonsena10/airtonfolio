//menu scroll///

//pegando a classe menu do html///
const menuItems = document.querySelectorAll(".menu a");

/// pegando  o scroll pelo href ///
function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}
/// pegando a possiçâo do scrol e deixando a rolangem suave ///
function scrollToPosition(to) {
  window.scroll({
    top: to, ///identificaçao do scroll
    behavior: "smooth", /// comportamento suave do scroll
  });

  smoothScrollTo(0, to);
}

// funçao para sabe onde o mouse foi clicado
function scrollToIdOnclick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 65;
  scrollToPosition(to);
}

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnclick);
  
});

