import { useDropzone } from 'react-dropzone';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// type
import { UploadProps } from './type';
//
import Image from '../Image';
import RejectionFiles from './RejectionFiles';
import BlockContent from './BlockContent';

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  height: '100%',
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  //transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

// ----------------------------------------------------------------------

export default function UploadSingleFile({
  error = false,
  file,
  helperText,
  sx,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    ...other,
  });
  const { maxSize } = other;
  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropZoneStyle className='hallo'
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter',

          }),
          ...(file && {
            padding: '12% 0',
          }),
        }}
      >
        <input {...getInputProps()} />

        <BlockContent maxSize={maxSize ? maxSize : false} />

        {file && (
          <Image
            alt="file preview"
            src={typeof file === 'string' ? file : file.url}
            sx={{
              top: 8,
              left: 8,
              borderRadius: 1,
              position: 'absolute',
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)',
            }}
          />
        )}
      </DropZoneStyle>

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      {helperText && helperText}
    </Box>
  );
}
