import Header from "./Header";

const About = () => {
  return (
    <>
      <main>
        <Header />
      </main>
      <section className="herosection">
        {/* <div className="container">
          <h1>About Us</h1>
          <p>Welcome to our company's "About Us" page. Here, we'll introduce you to our mission, history, team, and more.</p>

          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Our History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Meet Our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Values and Philosophy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Our Products/Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Customer Focus</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Community Involvement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Achievements and Recognition</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, feel free to contact us at <a href="mailto:info@example.com">info@example.com</a>.
          </p>

          <footer>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </footer>
        </div> */}
        <h1 className="mainheading">MEET OUR TEAM</h1>
        <img className="staffimg" src="../images/staff.png" alt="" />
        <center>
          <p className="infostaff">We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family</p>
          <button className="contactbtn">Contact Us.</button>
        </center>
      </section>
    </>
  );
};
export default About;
