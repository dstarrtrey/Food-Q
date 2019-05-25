import React from "react";
import "./ClientList.css";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";


//logic

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

 //styling
  return (
    <div className="clientbanner">
    <Container fluid>
    <Col size="md-12 lrg-12">
    <Jumbotron>
           <h2>Banner Image / Animated SVG here</h2>
         </Jumbotron>
    </Col>    
    </Container>
    <Container> 
     <Row class="clientwaitlist">
     <Col size="md-6 lrg-6">
     <h1>ClientList</h1>
      <p>All parties ahead of you: <span>{getAhead()}</span></p>
      <p>Party size in front of you: <span>{getInFront()}</span></p>
      </Col>  
       <Col size="md-6 lrg-6">
         <form>
           <Input name="name" placeholder="Name (required)" />
           <Input name="Party Size" placeholder="Party Size (required)" />
           <TextArea name="specialrequest" placeholder="Specific seating needs or special occasion?" />
           <FormBtn>Book Reservation</FormBtn>
         </form>
       </Col>
     </Row>
   </Container>
   </div>

  );
}


export default ClientList;
