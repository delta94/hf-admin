import React, { useState, useEffect, Component } from 'react';
import { Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import User from './User';
import Room from './Room';

export const Graph = ({ match }) => {
  return (
    <div>
      <Route path={match.path} component={User} />
      <Route path={`${match.path}/:id`} component={Room} />
    </div>
  );
};

export default Graph;
