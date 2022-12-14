import Link from 'next/link';
import { useState, Dispatch, SetStateAction } from 'react';
// @mui

import { ProjectType } from '../../utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { firstLettersBig } from '../../utils/Text/textUtils';
import { Box } from '@mui/system';
import { Grid, CardContent, Card } from '@mui/material';

import { PATH_PROJEKTE, } from '../../routes/paths';



import { TitleTextCom } from '../_Reusable/TitleTextCom';
import { BodyTextCom } from '../_Reusable/BodyTextCom';


export function TextCardCom({
  project,
  big,
  rewerseBig,
  setSucces,
  setLoading,
  setError,
}: {
  project: ProjectType,
  big: boolean,
  rewerseBig: boolean,
  setSucces: Dispatch<SetStateAction<string | boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<{
    code: string;
    message: string;
  } | null>>;

}) {
  const { title, location, id, objektAlter, photo, photos } = project;
  const [open, setOpen] = useState(false);
  const isDesktop = useResponsive('up', 'lm');
  const isMiddle = useResponsive('down', 'md');

  const isBigAndDisplaysDesktop = isDesktop && big;

  const cardPropsBig = {
    gridColumn: rewerseBig ? '1 / span 2' : '4 / span 2',
    gridRow: 'span 2',
    backgroundColor: 'background.default'
  };
  const propsGridTextBox = {
    backgroundColor: 'background.paper',
    minHeight: big ? '300px' : '100px',
    height: '100%',

  };
  const propsCardContent = {
    pl: isMiddle ? 1.8 : 3.15,
    pr: isMiddle ? 1.8 : 3.15,
    pt: isMiddle ? 2 : 4.75,
    width: '100%',
    cursor: 'pointer',
    height: '100%',
    '&:hover': {
      textShadow: '#979797 1px 0 10px'
    },
    '&:focus': {
      textShadow: '#979797 1px 0 10px'
    },
  };


  const TextBox = () => (
    <Grid
      container
      className="Card Content maxHeight144"
      direction='column'
      justifyContent="space-between"
      sx={{ ...propsGridTextBox }}
    >
      <Link href={`${PATH_PROJEKTE.projekt}/${id}`} passHref >
        <CardContent
          sx={{ ...propsCardContent }}
        >
          <TitleTextCom text={objektAlter.toUpperCase()} />
          <BodyTextCom text={title} sx={{ pt: .4 }} />
          <BodyTextCom text={firstLettersBig(location)} sx={{ pt: .4 }} />
        </CardContent>
      </Link>

    </Grid>
  )

  return (
    <>
      {!isBigAndDisplaysDesktop && <Card><TextBox /></Card>}
      {isBigAndDisplaysDesktop &&
        <Card sx={big && { ...cardPropsBig }} >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: rewerseBig ? '1fr 12px' : '12px 1fr',
            }}
          >
            <Box className='between' sx={{
              backgroundColor: 'background.paper',
              gridRow: 'span 2',
              gridColumn: rewerseBig ? '2' : '1',
            }}>
            </Box>
            <TextBox />
          </Box>
        </Card>
      }

    </>
  )
}
