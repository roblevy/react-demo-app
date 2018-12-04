/* global describe,it,beforeEach */
// See the notes in `helper.js` for lots of additional explanation.
// Run `yarn test:client` to run all the tests.
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

// import your component to be tested here.
// e.g. import BurgersIndex from '../../../src/components/burgers/Index';

// You might need to add some test data
// e.g. const testData = [...];

describe('component name goes here', () => {
  // You could have a beforeEach which sets up the component.
  // You'll have to save the component to a global once you've created it
  // to make it available to all the test cases. See Messages/Sidebar_spec.js
  // for an example of this.
  beforeEach(done => {
    // Do some stuff then...
    done();
  });

  // A test case should describe one real-world job
  // of a component
  it('should... (test case goes here)', done => {
    // Render the component to test, either shallow or mount.
    // See the notes in `helper.js` for what these are.
    // const component = shallow(<ComponentToTest prop1={value1} etc... />)

    // Now have some assertions which will be true only
    // if the component is fulfilling the real-world job you
    // are testing in this test case.
    // Enzyme allows querySelector style selection of DOM elements
    // via component.find.
    // e.g. expect(component.find('div').length).to.eq(3);

    // Then call done when all the assertions are finished.
    done();
  });
});
