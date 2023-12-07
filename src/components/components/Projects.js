const Projects = () => {
    return (
      <section className="blog section" id="blog">
        <div className="blog__container container">
          <h2 className="section__title">
          Explore Our Steel and Construction Projects
          </h2>
  
          <div className="blog__content grid">
            <article className="blog__card">
              <div className="blog__image">
                <img src="./media/p.png" alt="Rupasinghe Steels Blog 1" className="blog__img" />
                {/* <a href="" className="blog__button">
                  <i className="bx bx-right-arrow-alt"></i>
                </a> */}
                <div className="blog__stats">
                  <div className="blog__reaction">
                    <i className="bx bx-comment"></i>
                    <span>0</span>
                  </div>
                  <div className="blog__reaction">
                    <i className="bx bx-show"></i>
                    <span>0</span>
                  </div>
                </div>
              </div>
  
              <div className="blog__data">
                <h2 className="blog__title">Project 1</h2>
                <p className="blog__description">
                  Explore the latest innovations in steel fabrication with Rupasinghe Steels. Learn about advanced techniques and industry standards.
                </p>
              </div>
            </article>
            <article className="blog__card">
              <div className="blog__image">
                <img src="./media/p.png" alt="Rupasinghe Steels Blog 2" className="blog__img" />
                {/* <a href="" className="blog__button">
                  <i className="bx bx-right-arrow-alt"></i>
                </a> */}
                <div className="blog__stats">
                  <div className="blog__reaction">
                    <i className="bx bx-comment"></i>
                    <span>0</span>
                  </div>
                  <div className="blog__reaction">
                    <i className="bx bx-show"></i>
                    <span>0</span>
                  </div>
                </div>
              </div>
  
              <div className="blog__data">
                <h2 className="blog__title">project 2</h2>
                <p className="blog__description">
                  Dive into the significance of steel in modern construction projects. Rupasinghe Steels shares insights on the role of steel in creating durable and innovative structures.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  