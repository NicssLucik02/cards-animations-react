import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  return (
    <header className="header">
      <div>Logo</div>

      <div>
        <img
          src={theme === "dark" ? "./assets/sun.svg" : "./assets/moon.svg"}
          className="theme-icon"
          alt="dark/light theme"
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        />
      </div>
    </header>
  );
};
