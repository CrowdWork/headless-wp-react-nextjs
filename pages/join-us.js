import Navigation from "../components/Navigation";
import React, { Component, Fragment } from "react";
import axios from "axios";
import Link from "next/link";

export default class extends Component {
  //Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    const response = await axios.get(
      "https://www.betomorrow.com/wp-json/wp/v2/posts/"
    );

    // Return response to offers object in props
    return {
      offers: response.data
    };
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>Nos Posts !</h1>
        <ul>
          {this.props.offers.map(offer => (
            <li
              key={offer.id}
              className={
                "bto_join_us_offer_card_wrapper bto_join_us_offer_card_wrapper__" +
                offer.id
              }
            >
              <Link href={`/nous-rejoindre/${offer.slug}`}>
                <a
                  href={`/nous-rejoindre/${offer.slug}`}
                  title={`${offer.title.rendered}`}
                >
                  {offer.title.rendered}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
