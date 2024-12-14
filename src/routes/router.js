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
import ComponentsPages from '../pages/componentsPages/ComponentsPages';
import PopularQuestion from '../pages/help/childrenPages/PopularQuestion';
import IndividualQuestion from '../pages/help/childrenPages/IndividualQuestion';
import Notice from '../pages/help/childrenPages/Notice';

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
        // 부모 페이지
        path : '/help',
        element : <Help />,
        children : [
          {
            // 자식 요소 예) http://localhost:3000/help/자주듣는질문
            path : 'popularquestion',
            element : <PopularQuestion />,
          },
          {
            // 자식 요소 예) http://localhost:3000/help/1:1문의
            path : 'individualquestion',
            element : <IndividualQuestion />,
          },
          {
            // 자식 요소 예) http://localhost:3000/help/공지사항
            path : 'notice',
            element : <Notice />,
          },
        ]
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
      {
        path : '/components',
        element : <ComponentsPages />
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
// test
export default router;