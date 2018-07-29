import * as React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import * as moment from 'moment';

class CheckedChart extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  getName(name) {
    return {
      backLog: "Backlog",
      inDevelopment: "In Development",
      done: "Done"
    }[name]
  }

  getData() {
    let { listChecked } = this.props;
    let series = [];
    let categories = []
    Object.keys(listChecked).forEach(k => {
      let name = this.getName(k);
      let data = {};
      listChecked[k].forEach(dat => {
        let date = moment(dat.date).format("MMM Do YYYY");
        data[date] = typeof(data[date]) == "number" ? data[date] + 1 : 0;
      })
      let _data = [];
      Object.keys(data).forEach(k => {
        _data.push(data[k])
        categories.push(k);
      })
      series.push({name, data: Object.keys(data).map(k => data[k]).reverse()})
    })
    categories = categories.filter((d,i) => categories.indexOf(d) === i);
    return {
      title: {
        text: 'Movimientos diarios'
      },
      xAxis: {
        type: 'datetime',
        categories: categories.reverse()
      },
      series
    }
  }

  render() {
    console.log(this.getData());
    return( 
      <HighchartsReact
        highcharts={Highcharts}
        options={this.getData()}
      />
    )
  }
}

export default CheckedChart;