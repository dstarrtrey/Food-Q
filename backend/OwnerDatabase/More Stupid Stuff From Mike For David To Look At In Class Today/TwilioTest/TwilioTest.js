const accountSid = 'AC274e936def16695c3d3a6072f7b4e0a3';
const authToken = '0fc9b547db34137feda915c455d27411';
const client = require('twilio')(accountSid, authToken);


// we need the twilio npm package installed so do npm i twilio
client.messages
  .create({
    // the body msg is what the text will apppear
     body: 'Hot Single LadyBois Are Looking For A Date Near You!',
    //  this is the # thats 
     from: '+15104625508',
    //  currently in trial mode, you can only send to reigstered phone #s which is my number, call me maybe
     to: '+17734541839'
   })
  .then(message => console.log(message.sid));

  // do "node twiliotest" for it work, twiliotest is the file name