import React from 'react';
import './Input.scss';
import Output from '../Output/Output';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Your input is  ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Input bg-white rounded shadow-sm p-3 d-flex">
          <div className="w-75 flex-item pt-3">
            <div className="input-group input-group-sm mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
              </div>
              <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Link</span>
              </div>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>

          <div className="flex-item mx-3">
            <div class="custom-control custom-radio">
              <input type="radio" className="custom-control-input" id="Toturials" name="example1" value="customEx" />
              <label class="custom-control-label" for="Toturials">Toturials</label>
            </div>

            <div class="custom-control custom-radio">
              <input type="radio" className="custom-control-input" id="Blog" name="example1" value="customEx" />
              <label class="custom-control-label" for="Blog">Blog</label>
            </div>

            <div class="custom-control custom-radio">
              <input type="radio" className="custom-control-input" id="Resources" name="example1" value="customEx" />
              <label class="custom-control-label" for="Resources">Resources</label>
            </div>

            <div class="custom-control custom-radio">
              <input type="radio" className="custom-control-input" id="Podcast" name="example1" value="customEx" />
              <label class="custom-control-label" for="Podcast">Podcast</label>
            </div>
          </div>
          <div className="flex-item mt-4 ml-3">
            <input className="btn btn-success" type="Submit" value="Add" />
            {/* <a href="www.google.com" className="btn btn-default btn-circle">+</a> */}
          </div>
        </div>
        <Output nameinput={this.state.value} />
      </form>
    );
  }
}

export default Inputs;

