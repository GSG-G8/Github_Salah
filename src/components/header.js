import React from 'react';
import Loading from './loading';
import getUserData from '../logic/fitch';

class Header extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    data: '',
  };

  componentDidMount() {
    const url = `https://api.github.com/orgs/GSG-G8`;
    getUserData(url).then(result => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {!data ? (
          <Loading />
        ) : (
          <div className="heder">
            <h1 className="heder__h1">{data.login}</h1>
            <img className="header__img" src={data.avatar_url} alt="logo" />
            <h3 className="heder__h3">{data.description}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
