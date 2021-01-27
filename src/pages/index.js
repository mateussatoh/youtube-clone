import React from 'react';
import { Button } from '@material-ui/core';

import Layout from '../components/Layout/index';

export default function Home() {
  return (
    <Layout>
      <h1>Youtube Clone</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </Layout>
  );
}
