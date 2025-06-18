import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export const User = () => {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split('/').at(2);
  //? OPcion 1
  //  useEffect(() => {
  //    let unsubscribed = false;

  //    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //      .then(response => response.json())
  //      .then(data => !unsubscribed && setUser(data));

  //    return () => (unsubscribed = false);
  //  }, [id]);

  //? Opcion 2
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal })
  //     .then(response => response.json())
  //     .then(data => setUser(data))
  //     .catch(error => {
  //       if (error.name === 'AbortErrorr') {
  //         console.log('Cancell');
  //       } else {
  //         /*:TODO  handler error*/
  //       }
  //     });
  //   return () => {
  //     controller.abort();
  //   };
  // }, [id]);

  // Opcion 3 - axios
  useEffect(() => {
    const cancellToken = axios.CancelToken.source();

    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          cancelToken: cancellToken.token,
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

    fetchUser();

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
