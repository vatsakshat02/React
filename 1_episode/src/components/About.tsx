import User from './User';
import UserClass from './UserClass';
import React from 'react';
import { userState, userProps } from '../types/Props';
class About extends React.Component<userProps, userState> {
  constructor(props: userProps) {
    super(props);
    // console.log('parent constructor');
  }

  componentDidMount(): void {
    // console.log('Parent Mounted Successfully');
  }
  render() {
    // console.log('parent renderer');
    return (
      <div>
        <h1>This is a About us Page</h1>
        <h2>this is Zeekuworld</h2>
        <User />

        <UserClass name={'Riya'} location={'Gurugram'} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is a About us Page</h1>
//       <h2>this is Zeekuworld</h2>
//       <User />

//       <UserClass name={'Riya'} location={'Gurugram'} />
//     </div>
//   );
// };

export default About;
