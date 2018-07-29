import * as React from 'react';
import { connect } from 'react-redux';

import { BoardList } from '../components';
import { getBoardList } from '../actions';
import { getListChecked } from '../../data/listChecked/actions';
import { getCardList } from '../../data/cardList/actions';

class BoardListContainer extends React.Component<any,any> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { getBoardList, getListChecked, getCardList } = this.props;
    getBoardList();
    getListChecked();
    getCardList();
    setInterval(() => {
      let icon = document.getElementById("refresh");
      let className = icon.className;
      icon.className = `${className} animated rotateIn`;
      getCardList();
      setTimeout(() => {
        icon.className = className;
      }, 2000)
    }, 5000)
  }

  public render() {
    return(
      <BoardList {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  let { boards, data } = state;
  let { listChecked, cardList } = data;
  return {
    boards,
    listChecked,
    cardList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoardList() {
      dispatch(getBoardList());
    },
    getListChecked() {
      dispatch(getListChecked());
    },
    getCardList() {
      dispatch(getCardList());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardListContainer);
