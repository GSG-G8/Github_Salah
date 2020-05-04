import React from 'react';
import getUserData from '../logic/fetch';
import fire from './user';

class Members extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    mem: '',
  };

  componentDidMount() {
    const url = `https://api.github.com/orgs/GSG-G8/members`;
    getUserData(url).then(result => this.setState({ mem: result.data }));
  }

  getUser = e => {
    const name = e.target.alt;
    const url = `https://api.github.com/users/${name}`;
    getUserData(url).then(result => fire(result.data));
  };

  render() {
    const { mem } = this.state;
    const prof = 'https://github.com/';
    return (
      <div className="container">
        {mem &&
          mem.map(user => (
            <div className="member" key={user.login}>
              <h1 className="member__h1">{user.login}</h1>
              <img
                className="member__img"
                src={user.avatar_url}
                alt={user.login}
                onClick={this.getUser}
              />
              <a
                className="member__a"
                target="_blank "
                href={prof + user.login}
              >
                Profile
              </a>
            </div>
          ))}
      </div>
    );
  }
}

export default Members;
