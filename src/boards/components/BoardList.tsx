import * as React from 'react';
import { AppContent } from '../../components';
import * as moment from 'moment';

export const BoardList = (props) => {
  const getKey = (name) => {
    return name.replace("Backlog", "backLog").replace("In Development", "inDevelopment").replace("Done", "done");
  }

  const getIcon = (name) => {
    let k = getKey(name);
    return {
      backLog: {
        icon: <i className="fa fa-calendar" aria-hidden="true"></i>,
        color: "blue"
      },
      inDevelopment: {
        icon: <i className="fa fa-code" aria-hidden="true"></i>,
        color: "teal"
      },
      done: {
        icon: <i className="fa fa-check" aria-hidden="true"></i>,
        color: "green"
      }
    }[k]
  }

  let { boards, listChecked, cardList } = props;
  let body =  <div className="Board__list">
                <div className="Board__section">
                  Movimientos ultimo día
                </div>
                {
                  boards.map((board, i) => {
                    let quantity = listChecked[getKey(board.name)].filter(card => {
                      let { data, date } = card;
                      let { listAfter } = data;
                      let now = moment();
                      let update = moment(date);
                      let diff = now.diff(update, 'days');
                      return diff > 0 && diff <= 1 && listAfter.id == board.id;
                    }).length;
                    return  <div className="Board__item" key={i}>
                              <span className="Board__title">
                                {board.name}
                              </span>
                              <div className="Board__quantity">
                                {quantity}
                              </div>
                              <span className={`Board__icon -${getIcon(board.name).color}`}>
                                {getIcon(board.name).icon}
                              </span>
                            </div>
                  })
                }
                <div className="Board__section">
                  Cantidad de tareas por lista
                </div>
                {
                  boards.map((board, i) => {
                    let quantity = cardList.filter(card => card.idList == board.id).length
                    return  <div className="Board__item" key={i}>
                              <span className="Board__title">
                                {board.name}
                              </span>
                              <div className="Board__quantity">
                                {quantity}
                              </div>
                              <span className={`Board__icon -${getIcon(board.name).color}`}>
                                {getIcon(board.name).icon}
                              </span>
                            </div>
                  })
                }
              </div>;
  let title = "Resumenes";
  return(
    <AppContent
      header={{title}}
      body={body}
    />
  )
}
