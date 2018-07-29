import { IRoute } from '../constants/interfaces';
import BoardListContainer from '../boards/containers/BoardListContainer';
import GraphicsContainer from '../graphics/containers/GraphicsContainer';

const routes:IRoute[] = [
  {
    path: '/',
    component: BoardListContainer,
    exact: true
  },
  {
    path: '/graphics',
    component: GraphicsContainer,
    exact: true
  }
]

export default routes;
