var React = require("react");

class NewUser extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
        <h1>Sign up for a new account!</h1>
        <div className="form-div">
          <form className="user-form" method="POST" action="/users/int">
            <div className="user-attribute">
              Name<input name="name" type="text" />
            </div>
            <div className="user-attribute">
              Password:<input name="password" type="text" />
            </div>
            <input name="submit" type="submit" />
          </form>
        </div>
        </body>
      </html>
    );
  }
}

module.exports = NewUser;
