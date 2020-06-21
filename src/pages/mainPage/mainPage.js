import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { logoutUser } from '../../actions/actions';

import Articles from '../../components/articles/Articles';

import './mainPage.scss';

const Main = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const handleExit = (evt) => {
    evt.preventDefault();
    localStorage.removeItem('token');
    dispatch(logoutUser());
  };

  const { username } = currentUser;
  const isLogged = !!currentUser.id;
  const Header = () => (username ? <h1>{`Здравствуй ${username}`}</h1> : null);
  return (
    <div className="form-container">
      <Header />
      {isLogged ? (
        <Button
          disabled={false}
          size="large"
          className="button"
          icon={<LogoutOutlined />}
          shape="round"
          onClick={handleExit}
          type="danger"
        >
          Выйти
        </Button>
      ) : null}
      <Articles />
    </div>
  );
};

export default Main;
