import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const fetchUser = async (id, cancelToken, setUser) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      cancelToken,
    });
    setUser(res.data);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Cancell');
    } else {
      /*:TODO  handler error*/
    }
  }
};

export const User = () => {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split('/').at(2);

  useEffect(() => {
    const cancellToken = axios.CancelToken.source();

    fetchUser(id, cancellToken.token, setUser);

    return () => {
      cancellToken.cancel();
    };
  }, [id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>userName: {user.username} </p>
      <p>Email: {user.email}</p>
    </div>
  );
};
