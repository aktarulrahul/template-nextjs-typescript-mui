import { CssBaseline, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Next TypeScript MUI</title>
        <meta name="description" content="Nextjs TypeScript MUI Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* There is already an h1 in the page, let's not duplicate it. */}
        <Typography variant="h2" component="h2" align="center">
          Next TypeScript MUI
        </Typography>
        ;
      </main>
    </>
  );
};

export default Home;
