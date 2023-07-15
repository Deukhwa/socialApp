import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Created Ad</Typography>
      </FlexBetween>
      <img
        src="http://localhost:3001/assets/info4.jpeg"
        alt="advert"
        width="100%"
        height="auto"
        style={{
          borderRadius: '0.75rem',
          margin: '0.75rem 0',
        }}
      />
      <FlexBetween>
        <Typography color={main}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Typography>
        <Typography color={medium}>costmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
