// layouts
import React from 'react';
import Layout from 'src/layouts';
import { GetStaticProps } from "next";
// components
import Page from 'src/components/Page';

import { TeamListCom } from 'src/components/_Team/TeamListCom';
import { team } from 'src/_mock/team/team';
// ----------------------------------------------------------------------

Teams.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Teams() {

  //console.log('data: ', data)

  return (
    <Page title="Teams">
      <TeamListCom teamList={team} />
    </Page>
  );
}

