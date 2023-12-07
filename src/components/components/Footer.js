const Footer =  () => {
    return  <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rupasinghe Steels<span>.</span></h1>
        <p className="footer__description">
          Your Trusted Partner in Steel Construction.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              No 357 Kandy Road,  Peliyagoda <br />
              Sri Lanka
            </p>
          
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +94 7777 51550    |  +94 772177729 <br />
              Notyet@gmail.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Office</h2>
            <p className="footer__information">
              Weekdays:  <br />
              9 AM - 5:30 PM
             
            </p> 
            </div> 

             {/* <a href="https://www.google.com/maps/dir/6.9302924,79.8632827/357+Kandy+Rd,+Peliyagoda+11300/@6.9499247,79.8471677,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae2581bc2d37227:0x22699eef6942b574!2m2!1d79.9121432!2d6.9690497?entry=ttu" target="_blank"  className ="footer__information">
                View on Map  <br/>
              </a> */}
              <br/>
              <div  className= "footer__information">
                <iframe
                  title="Rupasinghe Steels Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7923.479828980889!2d79.8471677!3d6.9499247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581bc2d37227%3A0x22699eef6942b574!2s357%20Kandy%20Rd%2C%20Peliyagoda%2011300!5e0!3m2!1sen!2slk!4v1665548899517!5m2!1sen!2slk"
                  allowFullScreen
                ></iframe>
              </div>

            <div className="footer__data">
            <p className="footer__newsletter-description">
              Send us a messsage
            </p>

            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer__input"
              />
              <button className="footer__button">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>
         

        <div className="footer__group">
          <ul className="footer__social">
            <a href="https://www.facebook.com/rehasteelhardware"  target="_blank" rel="noreferrer"className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.facebook.com/rehasteelhardware"  target="_blank" rel="noreferrer" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
           
          </ul>

          <span className="footer__copy"> &#169; Rupasinghe Steels. All rights reserved </span>
        </div>
      </div>
    </footer>
} 

export default Footer;
