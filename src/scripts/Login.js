import React from 'react';

class Login extends React.Component {
  goToStore(event) {
    event.preventDefault();
    // first grab the text from the box
    const storeId = this.storeInput.value;
    // console.log(`Going to ${storeId}`)
    // second we're going to transition from / to /store/:storeId
    this.context.router.history.push(`/store/${storeId}`);
  }

  render() {
    // Any where else
    return (
      <div className="loginContainer">
        <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
          <h2>Please Enter A Store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={Date.now()} ref={(input) => { this.storeInput = input}} />
          <button type="submit" className="button">Visit Store →</button>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;
