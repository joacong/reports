import * as React from 'react';
import { connect } from 'react-redux';
import { getListChecked } from '../../data/listChecked/actions';
import { getCardList } from '../../data/cardList/actions';
import { Graphics } from '../components';
import { getBoardList } from '../../boards/actions';

class GrapgicsContainer extends React.Component<any,any> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { getCardList, getListChecked, getBoardList } = this.props;
    getCardList();
    getListChecked();
    getBoardList();
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

  render() {
    return(
      <Graphics  {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  let { listChecked, cardList } = state.data;
  let { boards } = state;
  return {
    listChecked,
    cardList,
    boards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListChecked() {
      dispatch(getListChecked());
    },
    getCardList() {
      dispatch(getCardList());
    },
    getBoardList() {
      dispatch(getBoardList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrapgicsContainer)