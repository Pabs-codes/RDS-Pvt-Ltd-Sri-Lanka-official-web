import {useState} from 'react';
import data from '../json/data.json'

const Place = () => {

    const [selectedImage,setSelectedImage] = useState (data.places[0].imageUrl);

    return (
      <section className="place section" id="place">
        <div className="place__container container">
          <h2 className="section__title">
            Explore Our Expertise in Construction and Steel Fabrication<br />
            at Rupasinghe Steels and Fabrication Pvt Ltd
          </h2>
  
          <div className="place__content grid">
            <div className="place__images">
              <img
                src={selectedImage}
                alt="Rupasinghe Steels Construction and Steel Fabrication 1"
                className="place__img-big"
              />
              <div className="place__img-smalls">
                {data.places.map((place,index) => {
                    return ( <img
                        key={index}
                        src={place.imageUrl}
                        alt="Rupasinghe Steels Construction and Steel Fabrication 1"
                        onClick={() => setSelectedImage(place.imageUrl)}
                        className={`place__img-small ${selectedImage === place.imageUrl && 'active'}`}
                      />)
                })}
              </div>
            </div>
  
            <div className="place__data">
              <h2 className="place__title">Discover Rupasinghe Steels and Fabrication Pvt Ltd</h2>
              <p className="place__description">
                Rupasinghe Steels and Fabrication Pvt Ltd excels in the construction industry, providing top-notch steel fabrication services.
                With a commitment to quality and precision, we deliver steel solutions that stand the test of time, ensuring the success of your construction projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Place;
  