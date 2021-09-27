import * as React from 'react';
import { render } from '@testing-library/react-native';

import { Details } from '..';

describe('<Details  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Details />);
    expect(loadingIndicator.container).toMatchSnapshot();
  });
});
