

const Special = () => {
  return  <div className="special section container" id="special">
    <div className="special__container">
      <div className="special__box">
      <h2 className="section__title">
       Our Services
        </h2>
        <h2 className="section__title2">
       Explore Our Diverse Services in Design, Construction, and Fabrication Excellence
        </h2>
      </div>

      <div className="special__category">
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/01.jpg"
              alt=""
              className="zoomed-in"
            />
          </div>
                  {/* <iframe
                   title="Embedded Video"
                   className="zoomed-in"
                   width="560"
                   height="315"
                   src=""
                   frameborder="0"
                   allowfullscreen >
                  </iframe>
           </div> */}

          <h3 className="special__title">Design & Build :</h3>
          <p className="special__description">
          Crafting visionary spaces from concept to completion, our design and build services seamlessly integrate creativity with precision for a tailored and functional outcome.
          </p>
        </div>

        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/02.jpg"
              alt=""
              className="zoomed-in"
            />
          </div>
          <h3 className="special__title">Building Construction :</h3>
          <p className="special__description">
          Elevating construction standards, we specialize in building construction that embodies durability, innovation, and aesthetic appeal, ensuring your structures stand the test of time.
          </p>
        </div>

        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/3.jpg"
              alt=""
              className="zoomed-in"
            />
          </div>
          <h3 className="special__title">Custom Fabrication :</h3>
          <p className="special__description">
          Tailored to your unique needs, our custom fabrication services bring your ideas to life with precision, creating bespoke solutions that reflect your distinct vision. </p>
        </div>

        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/4.jpg"
              alt=""
              className="zoomed-in"
            />
          </div>
          <h3 className="special__title">Structural Steel Fabrication :</h3>
          <p className="special__description">
          Setting the foundation for strength and stability, our structural steel fabrication combines engineering expertise with cutting-edge technology, delivering robust solutions for diverse projects. </p>
        </div>

        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/5.jpg"
              alt=""
              className="zoomed-in"
            />
          </div>
          <h3 className="special__title">Maintenance and Repair :</h3>
          <p className="special__description">
          Committed to the longevity of your investments, our maintenance and repair services provide timely and efficient solutions, ensuring your structures remain resilient and functional.</p>
        </div>

        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/6.jpg"
              alt=""
              className="zoomed-in"
            />
          </div>
          <h3 className="special__title">Sheet Metal Fabrication :</h3>
          <p className="special__description">
          Mastering the art of sheet metal, our fabrication services offer versatile solutions, merging form with function to meet the demands of various industries with precision and innovation</p>
        </div>
      </div>
    </div>
  </div>
}

export default Special;