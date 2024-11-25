import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import Help from '../pages/help/Help';
import Live from '../pages/live/live';
import MyPage from '../pages/myPage/myPage';
import Payment from '../pages/payment/payment';
import Search from '../pages/search/search';
import SignIn from '../pages/signIn/signIn';
import SignUp from '../pages/signUp/signUp';
import VideoUpload from '../pages/videoUpload/VideoUpload';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Main />
      },
      {
        path : '/help',
        element : <Help />
      },
      {
        path : '/live',
        element : <Live />
      },
      {
        path : '/mypage',
        element : <MyPage />
      },
      {
        path : '/payment',
        element : <Payment />
      },
      {
        path : '/search',
        element : <Search />
      },
      {
        path : '/signin',
        element : <SignIn />
      },
      {
        path : '/signup',
        element : <SignUp />
      },
      {
        path : '/videoupload',
        element : <VideoUpload />
      },
    ]
  }
],
{
  future: {
      v7_startTransition: true,
      v7_fetcherPersist : true,
      v7_normalizeFormMethod : true,
      v7_partialHydration : true,
      v7_relativeSplatPath : true,
      v7_skipActionErrorRevalidation : true,
      v7_startTransition : true
  },
})

export default router;