import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import Help from '../pages/help/Help';
import Live from '../pages/live/Live';
import MyPage from '../pages/myPage/MyPage';
import Payment from '../pages/payment/Payment';
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
import MyVideoManage from '../pages/MyVideoManage/MyVideoManage';
import Profile from '../pages/myPage/_component/profile/Profile';
import My from '../pages/myPage/_component/my/My';
import UpdateProgileImg from '../pages/myPage/_component/updateProfileImg/UpdateProfileImg';
import Update from '../pages/myPage/_component/update/Update';
import UpdatePassword from '../pages/myPage/_component/updatePassword/UpdatePassword';
import Certify from '../pages/myPage/_component/certify/Certify';
import ProMyVideoList from '../pages/myPage/_component/videoList/ProMyVideoList';
import NorMyVideoList from '../pages/myPage/_component/videoList/NorMyVideoList';
import LiveVideoList from '../pages/myPage/_component/videoList/LiveVideoList';
import QnAList from '../pages/myPage/_component/oftenQnA/QnAList';
import Write from '../pages/myPage/_component/oftenQnA/Write';
import Detail from '../pages/payment/Detail/Detail';
import Success from '../pages/payment/Success/Success';
import Failed from '../pages/payment/Failed/Failed';



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
            index : true,
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
          {
            path : 'update-password',
            element : <UpdatePassword />,
          },
          {
            path : 'certify',
            element : <Certify />,
          },
          {
            path : 'pro-videolist',
            element : <ProMyVideoList />,
          },
          {
            path : 'videolist',
            element : <NorMyVideoList />,
          },
          {
            path : 'livelist',
            element : <LiveVideoList />,
          },
          {
            path : 'qnalist',
            element : <QnAList />,
          },
          {
            path: 'qnalist/write',
            element: <Write />,
          },
        ]
      },
      {
        path : '/payment',
        element : <Payment />,
        children : [
          {
            index : true,
            element : <Detail />
          },
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
          {
            path : 'success',
            element : <Success />
          },
          {
            path : 'failed',
            element : <Failed />
          },
        ]
      },
      {
        // path : '/search',
        // element : <Search />
      },
      {
        // path : '/search/:title',
        // element : <SearchRead />
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
        path : '/myVideoManage/:id',
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
  },
})
// test
export default router;