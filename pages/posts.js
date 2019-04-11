import Navigation from "../components/Navigation";
import React, { Component, Fragment } from "react";
import axios from "axios";

export default class extends Component {
  //Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    const response = await axios.get(
      "https://www.betomorrow.com/wp-json/wp/v2/posts/"
    );
    const elt = console.log("response.data : ", response.data);

    // Return response to posts object in props
    return {
      posts: response.data
    };
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>Nos Posts !</h1>
        <ul>
          {this.props.posts.map(post => (
            <li
              key={post.id}
              className={
                "bto_join_us_offer_card_wrapper bto_join_us_offer_card_wrapper__" +
                post.id
              }
            >
              {post.title.rendered}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
