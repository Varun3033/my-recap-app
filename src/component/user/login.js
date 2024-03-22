import "../../css/login.css";

const Login = () => {
  return (
    <>
      <main className="login-page">
        <section className="login-section">
          <p className="title">User Login</p>

          <form action="">
            <div>
              <label forhtml="">
                <i className="fa fa-user-secret" aria-hidden="true"></i>
              </label>
              <input type="email" id="lUserName" name="" placeholder="Enter UserName" />
            </div>
            <div>
              <label forhtml="">
                <i className="fa fa-key" aria-hidden="true"></i>
              </label>
              <input type="password" id="lPassword" name="" placeholder="Enter Password" />
            </div>
            <div className="sign-in">
              <button type="button" id="signIn">
                <i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Login
              </button>
              <a href="/">Goto Home</a>
            </div>
            <div>
              <p className="align-right">
                Don't have account?
                <a href="#" className="create-account">
                  Create a new
                </a>
              </p>
            </div>
          </form>
        </section>
      </main>

      <section className="pop-registration d-none">
        <section className="user-registration">
          <form action="#">
            <div>
              <label forhtml="">Name</label>
              <input type="text" id="fullName" placeholder="Enter FullName" />
            </div>
            <div>
              <label forhtml="">Email</label>
              <input type="text" id="email" placeholder="Enter Email" />
            </div>
            <div>
              <label forhtml="">Mobile</label>
              <input type="text" id="mobile" placeholder="Enter Mobile" />
            </div>
            <div>
              <label forhtml="">Password</label>
              <input type="password" id="password" placeholder="Enter Password" />
            </div>
            <div>
              <label forhtml="">Confirm Password</label>
              <input type="text" id="cpassword" placeholder="Enter Confirm Password" />
            </div>
            <div>
              <button type="button" id="save" className="btn btn-success">
                Save
              </button>
              <button type="button" className="cancel btn btn-danger">
                Cancel
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};
export default Login;
