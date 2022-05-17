import React, { Component } from "react";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {
        name: "",
        description: "",
        level: "Junior",
        salary: 30000
      },
      jobs: []
    };
  }

handleChange = e => {
  const { name, value } = e.target;

  this.setState(prevState => ({
    post: { ...prevState.post, [name]: value }
  }));
};

handleSubmit = e => {
  e.preventDefault();

  this.setState(prevState => ({
    jobs: [...prevState.jobs, prevState.post],
    post: { name: "", description: "", level: "", salary: 30000 }
  }));
};

render() {
  return (
    <div className="App">
      <nav>
        <button className="btn btn-primary">Post it!</button>
      </nav>


       * This is the section i've been trying to put in a separate component... *


      <div className="form-container">
        <form>
          <div className="form-group">
            <input
              className="col-12 form-control"
              name="name"
              onChange={this.handleChange}
              type="text"
              value={this.state.post.name}
              placeholder="post name"
            />
          </div>
          <div className="form-group">
            <textarea
              className="col-12 form-control"
              name="description"
              onChange={this.handleChange}
              type="text"
              value={this.state.post.description}
              placeholder="post description"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              className="col-12 form-control"
              name="salary"
              onChange={this.handleChange}
              type="number"
              value={this.state.post.salary}
              placeholder="post salary"
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              onChange={this.handleChange}
              name="level"
              value={this.state.post.level}>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
                <option>Any</option>
            </select>
           </div>
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>



      <div className="post-container">
        <ul>
          {this.state.jobs.map((job, index) => (
            <li key={index}>
              <ul className="post-tile">
                <li className="post-tile-name">{job.name}</li>
                <li className="post-tile-level">{job.level}</li>
                <li className="post-tile-description">{job.description}</li>
                <li className="post-tile-salary">£{job.salary}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
}