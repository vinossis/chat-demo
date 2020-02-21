import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Users({ chanelInfo }) {
  const [info, setInfo] = useState(chanelInfo);
  useEffect(() => {
    setInfo(chanelInfo);
  }, [chanelInfo]);
  return (
    <div className="users">
      <ul>
        {info && info.activeUsers.map((item) => (
          <li>
            <a href="#123">{item}</a>
          </li>
        ))}
      </ul>
    </div>

  );
}


Users.propTypes = {
  chanelInfo: PropTypes.object,
};

export default Users;
