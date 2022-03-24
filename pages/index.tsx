import type { NextPage } from 'next';
import Layout from '../components/layout';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div>some stuff in here</div>
        <Button variant="contained">Hello World</Button>
      </Layout>
    </>
  );
};

export default Home;
