(() => {
  const renderIcons = () => {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  };

  const setThemeIcon = (themeIcon, theme) => {
    if (!themeIcon) {
      return;
    }

    themeIcon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
    renderIcons();
  };

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const copyBaseBtn = document.getElementById("copy-base-btn");
    const baseUrlValue = document.getElementById("base-url-value");
    const baseUrl = `${window.location.origin}/api/v1`;

    if (baseUrlValue) {
      baseUrlValue.textContent = baseUrl;
    }

    if (copyBaseBtn) {
      copyBaseBtn.dataset.copyText = baseUrl;
    }

    renderIcons();

    const currentTheme = window.localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.classList.add("dark-mode");
      setThemeIcon(themeIcon, "dark");
    } else {
      setThemeIcon(themeIcon, "light");
    }

    if (copyBaseBtn) {
      copyBaseBtn.addEventListener("click", async () => {
        const copyText = copyBaseBtn.dataset.copyText || baseUrl;

        try {
          await navigator.clipboard.writeText(copyText);
        } catch (error) {
          return;
        }

        copyBaseBtn.innerHTML =
          '<i data-lucide="check" style="width:14px;height:14px;"></i> Copied!';
        copyBaseBtn.style.background = "var(--get-bg)";
        copyBaseBtn.style.color = "var(--get-text)";
        copyBaseBtn.style.borderColor = "var(--get-text)";
        renderIcons();

        window.setTimeout(() => {
          copyBaseBtn.innerHTML =
            '<i data-lucide="copy" style="width:14px;height:14px;"></i> Copy';
          copyBaseBtn.style.background = "";
          copyBaseBtn.style.color = "";
          copyBaseBtn.style.borderColor = "";
          renderIcons();
        }, 2000);
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        const nextTheme = isDarkMode ? "dark" : "light";

        window.localStorage.setItem("theme", nextTheme);
        setThemeIcon(themeIcon, nextTheme);
      });
    }
  });
})();
