import { GetStaticProps } from "next";
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import { ProjectsListCom } from 'src/components/_Projekte/projectsListCom';

import { _mockProjekts } from 'src/_mock/referenzen/referenzen';
// ----------------------------------------------------------------------

Projekte.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Projekte(props: any) {

  const data = props;
  return (
    <Page title="Projekte">
      <ProjectsListCom projectsList={_mockProjekts} />
    </Page>

  );
}

