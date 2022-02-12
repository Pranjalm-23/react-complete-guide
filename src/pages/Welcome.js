import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/newuser">
        <p>Welcome "newuser"</p>
      </Route>
    </section>
  );
};

export default Welcome;
