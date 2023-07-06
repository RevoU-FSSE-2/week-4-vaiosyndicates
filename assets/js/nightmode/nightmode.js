const darkMode = (e) => {
  if (e) {
      let e = document.getElementById("nightmode-mobile"),
          d = document.getElementById("header");

      let footer = document.getElementById("footer");
      1 == e.checked
          ? (document.body.classList.add("dark-mode"), d.classList.add("dark-mode"), footer.classList.add("dark-mode"), localStorage.setItem("nightmode", !0), (document.getElementById("nightmode").checked = !0))
          : (document.body.classList.remove("dark-mode"), d.classList.remove("dark-mode"), footer.classList.remove("dark-mode"), localStorage.removeItem("nightmode"), (document.getElementById("nightmode").checked = !1));
  } else {
      let e = document.getElementById("header");
      let footer = document.getElementById("footer");
      1 == document.getElementById("nightmode").checked
          ? (
            document.body.classList.add("dark-mode"),
            e.classList.add("dark-mode"),
            footer.classList.add("dark-mode"),
            localStorage.setItem("nightmode", !0),
            (document.getElementById("nightmode-mobile").checked = !0),
            (document.getElementById("img-toggle-dark").style.display = "none"),
            (document.getElementById("img-toggle-light").style.display = "block"))
          : (document.body.classList.remove("dark-mode"),
            e.classList.remove("dark-mode"),
            footer.classList.remove("dark-mode"),
            localStorage.removeItem("nightmode"),
            (document.getElementById("nightmode-mobile").checked = !1),
            (document.getElementById("img-toggle-dark").style.display = "block"),
            (document.getElementById("img-toggle-light").style.display = "none"));
  }
};
