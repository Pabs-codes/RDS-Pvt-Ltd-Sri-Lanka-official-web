// import React from 'react';
// import './Hero.css';

// const Hero = () => {

//      const inquireNow = () => {
//        window.scrollTo({
//         top: 6350,
//         behavior: 'smooth'
//        })
//      }



//   return (
//     <section className="hero section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
//       <video
//         className="hero-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           position: 'absolute',
//           width: '100%',
//           height: '800px',
//           objectFit: 'cover',
//         }}
//       >
//         <source src="./media/drone.mp4" type="video/mp4" />
//         {/* You can add additional source elements for different video formats (e.g., webm, ogg) */}
//         Your browser does not support the video tag.
//       </video>
//       <div className="hero__content" style={{ zIndex: 1, color: '#fff', textAlign: 'center', position: 'relative' }}>
//       <h1 className="hero__title animated-text">
//         Elevate Your Projects <br />
//         With Quality Steel <br />
//         And Dependable Solutions.
//       </h1>
//       <button className="hero__button animated-button on" onClick={inquireNow}>Start Your Inquiry Now</button>
//    </div>
//     </section>
//   );
// }

// export default Hero;



import React from 'react';
import './Hero.css';

const Hero = () => {

  const inquireNow = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="./media/drone.mp4" type="video/mp4" />
        {/* You can add additional source elements for different video formats (e.g., webm, ogg) */}
        Your browser does not support the video tag.
      </video>
      <div className="hero__content" style={{ zIndex: 1, color: '#fff', textAlign: 'center', position: 'relative' }}>
        <h1 className="hero__title animated-text">
          Elevate Your Projects <br />
          With Quality Steel <br />
          And Dependable Solutions.
        </h1>
        <button className="hero__button animated-button on" onClick={inquireNow}>Start Your Inquiry Now</button>
      </div>
    </section>
  );
}

export default Hero;
