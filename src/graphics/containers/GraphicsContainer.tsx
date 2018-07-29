import * as React from 'react';
import { connect } from 'react-redux';
import { getListChecked } from '../../data/listChecked/actions';
import { getCardList } from '../../data/cardList/actions';
import { Graphics } from '../components';

class GrapgicsContainer extends React.Component<any,any> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { getCardList, getListChecked } = this.props;
    getCardList();
    getListChecked();
  }

  render() {
    return(
      <Graphics  {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  let { listChecked, cardList } = state.data;
  return {
    listChecked,
    cardList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListChecked() {
      dispatch(getListChecked());
    },
    getCardList() {
      dispatch(getCardList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrapgicsContainer)