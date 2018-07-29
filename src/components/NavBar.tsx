import * as React from 'react';

class NavBar extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      title
    } = this.props;
    return(
      <nav className="navbar">
        <div className="brand-logo">
          <h3>{title}</h3>
        </div>
        <div className="nav-icon">
          <i className="fa fa-refresh" aria-hidden="true" id="refresh"></i>
        </div>
      </nav>
    )
  }
}

export default NavBar;