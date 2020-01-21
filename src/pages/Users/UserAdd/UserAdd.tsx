import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../../../graphql/queries';

import 'antd/dist/antd.css';
import { Form, Input, Icon, Button } from 'antd';

const Graph = () => {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsernmae = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = () => {
    createUser({ variables: { email: username, password: password } });
    window.location.reload();
  };

  return (
    <Form>
      <Input
        prefix={<Icon type="user" />}
        style={{ width: '150px', marginRight: '15px' }}
        placeholder="Username"
        value={username}
        onChange={onChangeUsernmae}
      />
      <Input
        prefix={<Icon type="lock" />}
        style={{ width: '150px', marginRight: '15px' }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={onChangePassword}
      />
      <Button type="primary" size="large" onClick={() => addUser()}>
        +
      </Button>
    </Form>
  );
};

export default Graph;
