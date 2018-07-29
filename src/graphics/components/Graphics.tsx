import * as React from 'react';
import { CheckedChart, CardListChart } from '../charts';

import { AppContent } from '../../components';

export const Graphics = (props) => {
  let { listChecked, cardList, boards } = props;
  let title = "Gráficos";
  let body =  <div className="Chart__list">
                <div className="Chart__item">
                  <CheckedChart listChecked={listChecked}/>
                </div>
                <div className="Chart__item">
                  <CardListChart
                    cardList={cardList}
                    boards={boards}
                  />
                </div>
              </div>
  return(
    <AppContent
      header={{title}}
      body={body}
    />
  )
}