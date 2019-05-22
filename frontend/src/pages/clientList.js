import React from 'react';
import Waitlist from '../components/Waitlist'

function ClientList() {
<<<<<<< HEAD
  const waitlist =[
    {
      id: 1,
      name: "Arthur",
      partySize: 3,
      phoneNumber: 7737377373
    },
    {
      id: 2,
      name: "Bob",
      partySize: 6,
      phoneNumber: 7373737379
    },
    {
      id: 3,
      name: 'Michael',
      partySize: 2,
      phoneNumber: 7838383336
    }
  ];
  const myId = 2;
  
  const getAhead = () => {
    const ids = waitlist.map(item => item.id);
    return ids.length - ids.indexOf(myId) - 1;
  }

  const getInFront = () => {
    const ids = waitlist.map(item => item.id);
    return waitlist[ids.indexOf(myId) + 1].partySize;
  }

  return (
    <div>
      <h1>ClientList</h1>
      <p>All parties ahead of you: <span>{getAhead()}</span></p>
      <p>Party size in front of you: <span>{getInFront()}</span></p>
    </div>
  )
=======
  return (
    <div>
      <h1>ClientList</h1>
      <Waitlist />
    </div>
  );
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
}

export default ClientList;
