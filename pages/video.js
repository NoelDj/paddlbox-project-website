const Video = ({data}) => {
    
    
    return ( 
        <main id="video-page"  className="d-flex align-items-center justify-content-between">
              
          <section className="container rounded my-5">
            <h1>Learn How To Paddle</h1>
          <div class="video-wrapper">
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/t8H4TDi6XWk">
            </iframe>
            </div>
          </section>
        </main>
     );
}
 
export default Video;
