/**
 * We use Fragment to avoid unnecessary extra markup.
 * The function only needs a wrapping parent element, but a div would work just fine.
 */
import Navigation from "../components/Navigation";
import { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <Navigation />
      <h1>First server-side rendered React.js app!</h1>
    </Fragment>
  );
};
