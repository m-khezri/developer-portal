import React from 'react';
import './Output.scss';

class Output extends React.Component {
  render() {
    return (
      <div className="Output bg-white rounded shadow-sm my-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Toturials-tab">Toturials</a>
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
            , ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto, ipsa praesentium omnis quisquam necessitatibus culpa consequuntur reprehenderit consequatur voluptatibus vero delectus eum cum harum, iure minus excepturi id iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto, ipsa praesentium omnis quisquam necessitatibus culpa consequuntur reprehenderit consequatur voluptatibus vero delectus eum cum harum, iure minus excepturi id iusto.
          </div>
          <div className="tab-pane container fade" id="Blog-tab">
            Veritatis architecto, ipsa praesentium omnis quisquam necessitatibus culpa consequuntur reprehenderit consequatur voluptatibus vero delectus eum cum harum, iure minus excepturi id iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto, ipsa praesentium omnis quisquam necessitatibus culpa consequuntur reprehenderit consequatur voluptatibus vero delectus eum cum harum, iure minus excepturi id iusto.
          </div>
          <div className="tab-pane container fade" id="Resources-tab">
            Sipsa praesentium omnis quisquam necessitatibus culpa consequuntur reprehenderit consequatur voluptatibus vero delectus eum cum harum, iure minus excepturi id iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto, ipsa praesentium omnis quisquam necessitatibus culpa consequuntur reprehenderit consequatur voluptatibus vero delectus eum cum harum, iure minus excepturi id iusto.
          </div>
          <div className="tab-pane container fade" id="Podcast-tab">
            Delectus eum cum harum, iure minus excepturi id iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto, ipsa praesentium omnis quisquam necessitatibus culpa consequuntur reprehenderit consequatur voluptatibus vero delectus eum cum harum, iure minus excepturi id iusto.
          </div>
        </div>


      </div>
    );
  }
}

export default Output;