import React from "react";

function ClientList() {
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
}

export default ClientList;
