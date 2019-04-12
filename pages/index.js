/**
 * We use Fragment to avoid unnecessary extra markup.
 * The function only needs a wrapping parent element, but a div would work just fine.
 */
import Head from "next/head";
import Navigation from "../components/Navigation";
import { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <Navigation />
      <Head>
        <title>Headless WordPress with React and Next.js - Homepage</title>
        <meta
          name="description"
          content="Ceci est un site web ultra-simplifié, utiilisant WordPress et React. Cet exemple de méta description apparaîtra dans les résultats de recherche."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>First server-side rendered React.js app!</h1>
    </Fragment>
  );
};
