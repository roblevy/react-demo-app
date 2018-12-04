/* global describe, it */
import React from 'react';
// See the notes in `helper.js` to explain what all this is.
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import your component to be tested here.
// e.g. import BurgersIndex from '../../../src/components/burgers/Index';

describe('component name goes here', () => {
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
