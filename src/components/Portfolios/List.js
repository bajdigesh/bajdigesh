import React from "react";
import portfolioData from "src/datas/PortfolioData";

const PortfolioList = () => {
  const projectData = portfolioData;

  return (
    <section id="portfolio" className={"portfolio"}>
      <div className={"wrapper"}>
        <h4 className={"section--title"}>{"Some of My Works"}</h4>

        <ul className={"portfolio-list | d-grid"}>
          {!projectData.length ? (
            <li>{"Currently working on something exciting."}</li>
          ) : (
            projectData.map(({ title, image, content }) => (
              <li key={title} className={"portfolio-list--item | d-grid"}>
                {!!image && (
                  <figure>
                    <img src={image} loading="lazy" />
                  </figure>
                )}

                <article className="portfolio-list--content">
                  <h6>{title}</h6>
                  <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </article>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioList;
