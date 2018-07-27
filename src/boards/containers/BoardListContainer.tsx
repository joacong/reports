import * as React from 'react';
import { connect } from 'react-redux';

import { BoardList } from '../components';
import {
  getBoardList
} from '../actions';

class BoardListContainer extends React.Component<any,any> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { getBoardList } = this.props;
    getBoardList();
  }

  public render() {
    return(
      <BoardList {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  let { boards } = state;
  return {
    boards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoardList() {
      dispatch(getBoardList());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardListContainer);
