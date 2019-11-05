import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'Faker';
const App = () => {
  return (
    <div className='ui container comments'>
      <div className="comments">
        <a href="/" className="avatar">
        <img alt="avatar" src{faker.image.avatar()}/>
        </a>
      </div>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6</span>
        </div>
        <div className="text">blahblahblah</div>
      </div>
    </div>
);
};

ReactDOM.render(<App />, document.querySelector('#root'));
