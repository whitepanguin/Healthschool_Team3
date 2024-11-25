import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import Help from '../pages/help/Help';
import Live from '../pages/live/Live';
import MyPage from '../pages/myPage/MyPage';
import Payment from '../pages/payment/Payment';
import Search from '../pages/search/Search';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';
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