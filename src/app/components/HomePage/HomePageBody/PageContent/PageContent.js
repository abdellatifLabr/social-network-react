import React, { Component } from "react";
import SinglePost from "./SinglePost/SinglePost";
import SinglePostComments from "./SinglePost/SinglePostComments";

class PageContent extends Component {
  render() {
    return (
      <div>
       <SinglePost/>
       <SinglePostComments/>
      </div>
    );
  }
}

export default PageContent;
