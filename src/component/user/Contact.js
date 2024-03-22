import "../../css/ContactUs.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2>Contact Us</h2>
        <form >
          <label forHtml="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label forHtml="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label forHtml="message">Message:</label>
          <textarea id="message" name="message" rows="4" cols="50" required></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Contact;
