import data from '../json/data.json';
import { useState } from 'react';

const Products = () => {
  const [filter, setFilter] = useState('Structural_steel');

  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Explore our durable steel products and <br />
          choose the perfect solution for your project
        </h2>

        <ul className="products__filters">
        <li
            className={`products__item products__line ${filter === 'Structural_steel' && 'active-product'}`}
            onClick={() => setFilter('Structural_steel')}
            data-filter=""
          >
            <h3 className="products__title">Structural Steel</h3>
            <span className="products__stock">4 products</span>
          </li>

          <li
            className={`products__item products__line ${filter === 'Roofing_solutions' && 'active-product'}`}
            onClick={() => setFilter('Roofing_solutions')}
            data-filter=""
          >
            <h3 className="products__title">Roofing Solutions</h3>
            <span className="products__stock">3 products</span>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Cladding Sheets</h3>
            <span className="products__stock">4 products</span>
          </li>
        </ul>

        <div className="products__content grid">
          {data.categories.map((category, index) => {
            return (
              category.category === filter && (
                <article className="products__card main-menu" key={index}>
                  <div className="products__shape">
                    <img src={category.imageUrl} alt="" className="products__img" />
                  </div>
                  <div className="products__data">
                    <h2 className="products__name1">{category.name}</h2>
                    <h3 className="products__availability">{category.availability}</h3>
                    <h3 className="products__size2">{category.size2}</h3>
                    <h4 className="products__details">{category.details}</h4>
                    <h5 className="products__details2">{category.details2}</h5>

                    <button className="button products__button">
                      <i className="bx bx-shopping-bag"></i>
                    </button>
                  </div>
                </article>
              )
            );
          })}

          
        </div>
      </div>
    </section>
  );
};

export default Products;
