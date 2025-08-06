document.querySelectorAll(".offcanvas .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvas = bootstrap.Offcanvas.getInstance(
      document.getElementById("offcanvasMenu")
    );
    offcanvas.hide();
  });
});
