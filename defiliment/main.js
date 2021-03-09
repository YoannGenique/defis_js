window.onscroll = function () {
  scrollIndicator();
};

function scrollIndicator() {
  let doc = document.documentElement;

  let el_doc = doc.scrollTop;

  const hightscreen = doc.scrollHeight;

  const hightIn = doc.clientHeight;

  let hightEcran = hightscreen - hightIn;

  let pourcentScroll = (el_doc / hightEcran) * 100;

  document.getElementById("bar").style.width = pourcentScroll + "%";

  console.log(pourcentScroll);
}
