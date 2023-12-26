import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '@/components/signIn';

import ArticleDetail from '@/pages/articleDetail';
import TextEditor from '@/pages/editor';
import SignUp from '@/components/signUp';
import MyPage from '@/pages/myPage';
import ArticleListPage from '@/pages/articleList';
import EditArticle from '@/pages/editor/EditArticle';
import AdminLogin from '@/pages/adminLogin';
import AdminBoardDetail from '@/pages/AdminBoardDetail';
import AdminBoard from '@/pages/adminBoard';
import Main from '@/pages/main';
import Contest from '@/pages/contest';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/contest',
        element: <Contest />,
      },
      {
        path: '/community',
        element: <ArticleListPage />,
      },
      {
        path: '/community/:id',
        element: <ArticleDetail />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },
      {
        path: '/admin/board',
        element: <AdminBoard />,
      },
      {
        path: '/admin/detail/:id',
        element: <AdminBoardDetail />,
      },
    ],
  },

  {
    path: '/write',
    element: <TextEditor />,
  },
  {
    path: '/edit/:id',
    element: <EditArticle />,
  },
]);
