import { Link } from 'react-router-dom';
import { Main } from 'reusableComponents';

export default function ErrorPage() {
  return (
    <Main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginBottom: '30px' }}>Page not found</h1>
      <Link to="/shops">Return on homepage</Link>
    </Main>
  );
}
