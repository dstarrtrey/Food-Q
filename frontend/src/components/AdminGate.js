import React from 'react';
import LoginGate from './LoginGate';
import AdminList from './AdminList';
const AdminGate = props => {
  return (
    <LoginGate>
      <h2>AYYY WE MADE IT!!</h2>
      <AdminList />
    </LoginGate>
  );
};

export default AdminGate;