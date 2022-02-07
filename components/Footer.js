const Footer = () => {
    return ( 
        <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 className="footer_title">About Paddlbox</h6>
                <p className="w">
                  Paddlebox is for everyone who wants a fun and different way to
                  move, whether as a shared activity with family and friends, or
                  alone.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 className="footer_title">Navigation Links</h6>
                <div className="row">
                  <div className="col-12">
                    <ul className="list_style">
                      <li><a href="#" className="w">Home</a></li>
                      <li><a href="#" className="w">About</a></li>
                      <li><a href="#" className="w">Order Paddleboard</a></li>
                      <li><a href="#" className="w">Paddleboard Guide</a></li>
                      <li><a href="#" className="w">Terms of Service</a></li>
                      <li><a href="#" className="w">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 className="footer_title">Newsletter</h6>
                <p className="w">
                  For news, updates and offers. Join our newsletter.
                </p>
                <div id="mc_embed_signup">
                  <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative">
                    <div className="input-group d-flex flex-row">
                      <input name="EMAIL" placeholder="Email Address" required type="email" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="border_line" />
          <div className="row footer-bottom d-flex justify-content-between align-items-center">
            <p className="col-lg-8 col-sm-12 footer-text m-0">
              Copyright © 2022 | Paddlebox
            </p>
            <div className="col-lg-4 col-sm-12 footer-social">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-dribbble" /></a>
              <a href="#"><i className="fa fa-behance" /></a>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;
