import React from 'react';
import {mount} from 'react-mounter';

import {mainLayout} from './layouts/MainLayout.jsx';
import App from '../App.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<App />)
    })
  }
});
