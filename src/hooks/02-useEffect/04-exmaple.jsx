import { Link } from 'react-router';

export const Exmaple04useEffect = () => {
  return (
    <div>
      <Link to='/post'> Go to post </Link>
      <br />
      <Link to={'user '}>Go to user</Link>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link
          to='/users/1'
          style={{
            fontWeight: 'normal',
            padding: '.3rem 1rem',
            outline: '1px solid #cccc',
            borderRadius: '.5rem',
            color: 'white',
          }}>
          Fetch User 1
        </Link>
        <Link
          to='users/2'
          style={{
            fontWeight: 'normal',
            padding: '.3rem 1rem',
            outline: '1px solid #cccc',
            borderRadius: '.5rem',
            color: 'white',
          }}>
          Fetch User 2
        </Link>
        <Link
          to='users/3'
          style={{
            fontWeight: 'normal',
            padding: '.3rem 1rem',
            outline: '1px solid #cccc',
            borderRadius: '.5rem',
            color: 'white',
          }}>
          Fetch User 3
        </Link>
      </div>
    </div>
  );
};
