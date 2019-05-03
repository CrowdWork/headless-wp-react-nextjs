import Navigation from "../components/Navigation";
import React, { Component, Fragment } from "react";
import axios from "axios";
import Link from "next/link";

const offerListStye = {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
  padding: "30px",
  borderRadius: "15px"
};
const offerCardWrapperStyle = {
  display: "block",
  borderRadius: "6px",
  minHeight: "200px",
  height: "auto",
  flex: "0 0 100%",
  maxWidth: "32%",
  margin: "0 4px 45px",
  textAlign: "center",
  marginBottom: "35px"
};
const offerCardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "row wrap",
  height: "100%",
  position: "relative",
  bottom: 0,
  backgroundColor: "#fff",
  boxShadow: "0 10px 20px 0px rgba(0, 0, 0, 0.1)",
  transition: "all .3s ease-in-out"
};

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
        <h1>Nos offres</h1>
        <ul style={offerListStye}>
          {this.props.offers.map(offer => (
            <li
              key={offer.id}
              className={
                "bto_join_us_offer_card_wrapper bto_join_us_offer_card_wrapper__" +
                offer.id
              }
              style={offerCardWrapperStyle}
            >
              <Link href={`/nous-rejoindre/${offer.slug}`}>
                <a
                  href={`/nous-rejoindre/${offer.slug}`}
                  title={`${offer.title.rendered}`}
                  style={offerCardStyle}
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
