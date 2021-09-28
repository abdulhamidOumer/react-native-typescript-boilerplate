import * as React from 'react';
import { render } from '@testing-library/react-native';

import { DetailsScreen } from '..';

describe('<Details  />', () => {
  it('should render', () => {
    render(<DetailsScreen />);
  });
});
