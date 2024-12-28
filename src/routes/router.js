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
import Notice from '../pages/help/_components/Notice/Notice';
import IndividualQuestion from '../pages/help/_components/IndividualQuestion/IndividualQuestion';
import PopularQuestion from '../pages/help/_components/PopularQuestion/PopularQuestion';
import Address from '../pages/payment/address/Address';
import Info from '../pages/payment/info/Info';
import Transaction from '../pages/payment/transaction/Transaction';
import Cart from '../pages/payment/cart/Cart';
import Profile from '../pages/myPage/_component/profile/Profile';
import MyVideoManage from '../pages/MyVideoManage/MyVideoManage';
import My from '../pages/myPage/_component/my/My';
import UpdateProgileImg from '../pages/myPage/_component/updateProfileImg/UpdateProfileImg';
import Update from '../pages/myPage/_component/update/Update';


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
        element : <Live />,
      },
      {
        path : '/mypage',
        element : <MyPage />,
        children : [
          {
            path : 'my',
            element : <My />,
          },
          {
            path : 'profile',
            element : <Profile />,
          },
          {
            path : 'profile-img',
            element : <UpdateProgileImg />,
          },
          {
            path : 'update',
            element : <Update />,
          },
          // {
          //   // 자식 요소 예) http://localhost:3000/help/1:1문의
          //   path : 'individualquestion',
          //   element : <IndividualQuestion />,
          // },
          // {
          //   // 자식 요소 예) http://localhost:3000/help/공지사항
          //   path : 'notice',
          //   element : <Notice />,
          // },
        ]
        
      },
      {
        path : '/payment',
        element : <Payment />,
        children : [
          {
            path : 'address',
            element : <Address />,
          },
          {
            path : 'cart',
            element : <Cart />,
          },
          {
            path : 'transaction',
            element : <Transaction />,
          },
          {
            path : 'info',
            element : <Info />,
          },
        ]
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
      {
        path : '/myVideoManage',
        element : <MyVideoManage/>
      }
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