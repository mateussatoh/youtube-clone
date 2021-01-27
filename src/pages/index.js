import React from 'react';
import Head from 'next/head';
import { Button } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Youtube Clone</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </>
  );
}
