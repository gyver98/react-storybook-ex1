import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Name from './Name';

storiesOf('Components', module)
  .add('Name', () => (
    <div>
      <h2>Normal</h2>
      <Name name="Hello storybook" />
      <h2>Highlighted</h2>
      <Name name="Hello storybook" type="highlight" />
      <h2>Disabled</h2>
      <Name name="Hello storybook" type="disabled" />
    </div>
  ))