import React from 'react';
import { shallow } from 'enzyme';

import Login from '../../../src/app/components/Login';

describe('#Components Login', () => {
  describe('When render', () => {
    it('should render without crashing', () => {
      shallow(<Login />);
    });
  });
});
