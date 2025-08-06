document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(".theme-btn");

  // Charger le thème sauvegardé
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Mettre à jour la visibilité des boutons
  updateThemeButtonVisibility(savedTheme);

  // Gestionnaire de clic pour les boutons de thème
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme;
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      updateThemeButtonVisibility(theme);
    });
  });

  function updateThemeButtonVisibility(currentTheme) {
    themeButtons.forEach((button) => {
      button.style.display =
        button.dataset.theme === currentTheme ? "none" : "inline-block";
    });
  }
});
