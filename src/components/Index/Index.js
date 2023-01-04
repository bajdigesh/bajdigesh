import React, { useEffect, useState } from "react";
import { designation, name } from "src/constants";

import { Link } from "react-router-dom";
import Navigation from "src/components/Navigation";

const PortfolioList = React.lazy(() =>
  import("src/components/Portfolios/List")
);

const Index = () => {
  const [scrollClassName, setScrollClassName] = useState("");

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = (e) => {
      let scrollAmt = window.scrollY;

      scrollAmt <= 0
        ? setScrollClassName("")
        : scrollAmt > lastScrollTop
        ? setScrollClassName("slide-out")
        : setScrollClassName("slide-in");

      lastScrollTop = scrollAmt;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation className={scrollClassName} />

      <section className={"intro d-flex"}>
        <div className={"wrapper"}>
          <div className={"intro-content"}>
            <h3>{name}</h3>
            <h5>{designation}</h5>
          </div>
          <Link to="#root" className={"btn btn--ghost is-ghost is-cta"}>
            {"Contact"}
          </Link>
        </div>

        <div className={"is-blurred-circle"}></div>
      </section>

      <PortfolioList />
    </>
  );
};

export default Index;
