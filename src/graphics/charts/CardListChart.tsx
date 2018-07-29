import * as React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import * as moment from 'moment';

class CardListChart extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  getData() {
    let { cardList, boards } = this.props;
    let series = [];
    boards.forEach(board => {
      let quantity = cardList.filter(card => card.idList == board.id).length;
      series.push({name: board.name, data: [quantity]})
    });
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: "Cantidad de cartas en listas"
      },
      xAxis: {
        categories: ["Cantidad"]
      },
      series
    }
  }

  render() {
    return(
      <HighchartsReact
        highcharts={Highcharts}
        options={this.getData()}
      />
    )
  }
}

export default CardListChart;