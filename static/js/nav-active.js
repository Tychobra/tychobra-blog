(function() {
  // find current page and add active class to nav item
  let page = window.location.pathname;
  page = page.replace(/\//g, "");
  //console.log(page);
  $("#page-" + page).addClass("active");
})();