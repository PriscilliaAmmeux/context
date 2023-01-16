import React from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = React.useContext(UserContext);

  return (
    <>
      <div>User is </div>

      <button onClick={() => setIsOnline(!isOnline)}>
        {isOnline ? 'en ligne' : 'hors ligne'}
      </button>
    </>
  );
}

export default UserProfile;
