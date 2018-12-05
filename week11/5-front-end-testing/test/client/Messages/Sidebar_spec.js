/* global describe,it,beforeEach */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Sidebar from '../../../src/components/messages/Sidebar';

// =======================================================
// We need to stub auth.tokenUserId() so it always returns
// one of our test userIds.
import sinon from 'sinon';
import * as auth from '../../../src/lib/auth';
const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];
sinon.stub(auth, 'tokenUserId').returns(userIds[0]);
// =======================================================

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

// Notice that our test data has fully populated users, not just user IDs!
const testData = [
  {
    from: userData[0],
    to: userData[1],
    content: 'Hello Ellie!'
  }, {
    from: userData[1],
    to: userData[0],
    content: 'Hi Rob!'
  }, {
    from: userData[0],
    to: userData[2],
    content: 'Hi Matt!'
  }, {
    from: userData[2],
    to: userData[0],
    content: 'Hi Rob! How\'s life?'
  }
];

describe('Messages Sidebar', () => {
  let component;

  // This runs before each test case. Notice that `component` is global
  // so will be available to each test case.
  beforeEach(done => {
    component = shallow(<Sidebar messages={testData} />);
    done();
  });

  it('should show the correct number of .media divs', done => {
    expect(component.find('.media').length).to.eq(2);
    done();
  });

  it('should show the correct names and message counts', done => {
    //// NOTE: Try uncommenting the following line to see the whole component:
    // console.log('Here is the HTML', component.html());
    component.find('.content').forEach(div => {
      expect(div.text()).to.be.oneOf(['Matt (2)', 'Ellie (2)']);
    });
    done();
  });

  it('should fire its click handler on click', done => {
    const fakeOnClick = sinon.fake();
    const component = shallow(<Sidebar messages={testData} handleClick={fakeOnClick}/>);
    component.find('.media').first().simulate('click');
    expect(fakeOnClick.callCount).to.eq(1);
    done();
  });
});
