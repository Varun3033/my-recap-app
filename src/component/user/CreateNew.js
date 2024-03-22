const New = () => {
  return (
    <>
      <div className="container">
        <h2>Create New Account</h2>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label for="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password" required />

          <input type="submit" value="Create Account" />
        </form>
      </div>
    </>
  );
};

export default New;
