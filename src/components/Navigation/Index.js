import React, { useEffect, useState } from "react";

const Navigation = ({ className }) => {
  const [theme, setTheme] = useState(null);

  const onChangeTheme = (e) => {
    setTheme(() => {
      return e.target.value;
    });
    localStorage.setItem("theme", e.target.value);
  };

  useEffect(() => {
    const activeTheme = theme || localStorage.getItem("theme");
    !!activeTheme && document.body.classList.add(activeTheme);
    return () => {
      !!activeTheme && document.body.classList.remove(activeTheme);
    };
  }, [theme]);

  return (
    <section className={"top-bar"}>
      <div id={"top-bar--wrapper"} className={`wrapper ${className} | d-grid`}>
        <h6>
          <figure>
            <img src="" alt="" loading="lazy" />
          </figure>
        </h6>

        <div className={"top-bar--nav | d-grid"}>
          <div className={"toggler | txt-right"}>
            <input id="toggle-menu" type="checkbox" />
          </div>

          <nav className={"top-bar--nav-list | d-flex"}>
            <a href="#root">Home</a>
            <a href="#root">About</a>
            <a href="#portfolio">Portfolio</a>
          </nav>

          <div className={"theme | d-flex"}>
            <p className={"d-inline-flex"}>
              <input
                type="radio"
                name="theme"
                id="dark"
                value="dark"
                onChange={onChangeTheme}
                checked={localStorage.getItem("theme") === "dark"}
              />
              <span>Dark</span>
            </p>

            <p className={"d-inline-flex"}>
              <input
                type="radio"
                name="theme"
                id="light"
                value="light"
                onChange={onChangeTheme}
                checked={localStorage.getItem("theme") === "light"}
              />
              <span>Light</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
