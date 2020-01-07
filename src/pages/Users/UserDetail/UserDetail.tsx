import React from 'react';
import { Link } from 'react-router-dom';

function UserDetail({ match, history }) {
  //   const user = users.find((user) => user.id === match.params.id);
  console.log(match.params.id);
  return (
    <>
      <span>유저 디테일</span>
      <Link to="/users">Back</Link>
    </>
  );
}

export default UserDetail;
