import * as React from 'react';

import NavBar from './NavBar';

class AppContent extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      header,
      body
    } = this.props;
    let {
      title
    } = header;
    return(
      <div className="AppContent">
        <NavBar title={title} />
        <div className="AppContent__body">
          {body}
        </div>
      </div>
    )
  }
}

export default AppContent;