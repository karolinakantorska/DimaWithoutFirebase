

// layouts
// components
import Page from '../../components/Page';
import { _mockProjekts } from 'src/_mock/referenzen/referenzen';

//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import { OneProjectCom } from '../../components/_Projekte/OneProjectCom';
import Layout from '../../layouts';
import { useRouter } from 'next/router';
import { ProjectType } from 'src/utils/TS/interface';


// ----------------------------------------------------------------------

Referenz.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Referenz() {
  const router = useRouter();
  const { id } = router.query;
  const data = _mockProjekts.filter((projekt: ProjectType) => projekt.id === id);
  return (
    <Page title={`Projekt`}>
      <OneProjectCom project={data[0]} />
    </Page>
  );
}
