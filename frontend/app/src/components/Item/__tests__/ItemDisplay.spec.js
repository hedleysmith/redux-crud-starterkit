import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import ItemDisplay from '../ItemDisplay.react.js';

describe('Item', function () {
  it('fully mounts ', function () {
    const wrapper = mount(<ItemDisplay title="Test Title" message="Testing message 123" />);
    expect(wrapper.is(ItemDisplay)).to.equal(true);
  })

  it('loads correct message text', function () {
    const wrapper = mount(<ItemDisplay title="test" message="Testing message 123" />);
    expect(wrapper.contains(<p>Testing message 123</p>)).to.equal(true);
  })

  it('loads correct title text', function () {
    const wrapper = mount(<ItemDisplay title="Test Title" message="Testing message 123" />);
    expect(wrapper.contains(<h3>Test Title</h3>)).to.equal(true);
  })

  it('loads correct text (shallow rendering)', function () {
    const wrapper = shallow(<ItemDisplay title="test" message="Testing message 456" />);
    expect(wrapper.contains(<p>Testing message 456</p>)).to.equal(true);
  })
})
