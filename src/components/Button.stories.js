import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked', 'test')}>Hello Button</Button>
  ))