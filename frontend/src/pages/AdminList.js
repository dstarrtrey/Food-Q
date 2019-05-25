import React from "react";
import AddWaitlistItem from '../components/AddWaitlistItem';
import ShowWaitlistItems from '../components/ShowWaitlistItems'

function AdminList() {
  return (
    <>
      <h1>AdminList</h1>
      <ShowWaitlistItems />
      <AddWaitlistItem />
    </>
  );

}

export default AdminList;
