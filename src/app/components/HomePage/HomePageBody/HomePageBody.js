import React, {Component} from 'react';
import PageContent from "./PageContent/PageContent";
import RightSideBar from "./PageFilters/RightSideBar";

class HomePageBody extends Component {
  render() {
    return (
      <div className="container p-2 p-lg-5 home-page">
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <PageContent/>
          </div>
          <div className='col-12 col-lg-4'>
            <RightSideBar/>
          </div>
        </div>

      </div>
    );
  }
}

export default HomePageBody;
