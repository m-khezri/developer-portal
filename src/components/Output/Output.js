import React from 'react';
import './Output.scss';

class Output extends React.Component {
  render() {
    return (
      <div className="Output bg-white rounded shadow-sm my-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Toturials-tab">Toturials</a>
            <p>Name</p>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Blog-tab">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Resources-tab">Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Podcast-tab">Podcast</a>
          </li>
        </ul>

        <div class="tab-content">
          <div className="tab-pane container active" id="Toturials-tab">
          </div>
          <div className="tab-pane container fade" id="Blog-tab">
          </div>
          <div className="tab-pane container fade" id="Resources-tab">
          </div>
          <div className="tab-pane container fade" id="Podcast-tab">
          </div>
        </div>


      </div>
    );
  }
}

export default Output;