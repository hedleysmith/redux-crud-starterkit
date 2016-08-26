import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import { Item } from '../Item.react.js';

describe('Item', function () {
  it('fully mounts ', function () {
    // TODO: Pull in a single item from mockItems.json to keep things DRY?
    const itemData = {
      id: 'item1',
      type: 'alert',
      title: 'Item 1',
      message: 'Lorem ipsum...',
      createdDate: 'date',
      active: true,
    };

    const wrapper = mount(<Item
      key={ itemData.id }
      itemData={itemData}
      arrayKey={ 0 } />
    );

    expect(wrapper.is(Item)).to.equal(true);
  })
});
