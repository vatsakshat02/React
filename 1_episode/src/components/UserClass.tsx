import React from 'react';
import { userProps, userState } from '../types/Props';
class UserClass extends React.Component<userProps, userState> {
  constructor(props: userProps) {
    super(props);

    this.state = {
      userInfo: {
        name: 'default',
        location: 'default',
      },
    };

    // console.log('child constructor');
  }

  async componentDidMount() {
    // console.log('Child Component Mounted');
    const data = await fetch('https://api.github.com/users/vatsakshat02');
    const response = await data.json();
    console.log(response);
    this.setState({
      userInfo: response,
    });
  }

  render() {
    // const { name, location } = this.props;
    const { name, location } = this.state.userInfo;
    // console.log('child renderer');
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @vatsakshat02 </h4>
      </div>
    );
  }
}

export default UserClass;
