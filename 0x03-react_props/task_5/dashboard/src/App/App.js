import './App.css';
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications';
import React from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn}) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3,  type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
  ];
  var logged = (!isLoggedIn) ? <Login />: <CourseList listCourses={listCourses}/>;
  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications} /> 
      <div className="App">
        <Header />
        <div className="App-body">
          {logged}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;