const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];

const messageData = [
  {
    from: userIds[0],
    to: userIds[1],
    content: 'Hello Ellie!'
  }, {
    from: userIds[1],
    to: userIds[0],
    content: 'Hi Rob!'
  }, {
    from: userIds[0],
    to: userIds[2],
    content: 'Hi Matt!'
  }, {
    from: userIds[2],
    to: userIds[0],
    content: 'Hi Rob! How\'s life?'
  }
];

const userData = [
  {
    _id: userIds[0],
    username: 'Rob',
    email: 'rob@rob',
    password: 'pass',
    image: '/assets/rob.jpeg'
  }, {
    _id: userIds[1],
    username: 'Ellie',
    email: 'ellie@ellie',
    password: 'pass',
    image: '/assets/ellie.jpeg'
  }, {
    _id: userIds[2],
    username: 'Matt',
    email: 'matt@matt',
    password: 'pass',
    image: '/assets/matt.png'
  }
];

function userCounts(messageData) {
  return null;
}
console.log(userCounts(messageData));
