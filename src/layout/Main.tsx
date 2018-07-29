import * as React from 'react';
import { RoutesTemplate } from '../routes/RoutesTemplate';
import { SideBar } from '.';

export const Main = (props) => {
  return(
    <div>
      <SideBar />
      <main>
        <RoutesTemplate />
      </main>
    </div>
  )
}