import Navigation from "../components/Navigation";
import React, { Component, Fragment } from "react";
import axios from "axios";
import Link from "next/link";

export default class extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    const response = await axios.get(
      `https://www.betomorrow.com/wp-json/wp/v2/posts?slug=${slug}`
    );

    return {
      offer: response.data[0]
    };
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>{this.props.offer.title.rendered}</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: this.props.offer.content.rendered
          }}
        />
      </Fragment>
    );
  }
}
