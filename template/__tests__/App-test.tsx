/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import { createRenderer } from 'react-test-renderer/shallow';

const renderer = createRenderer();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    // renderer.render(<App />);
  });
});
