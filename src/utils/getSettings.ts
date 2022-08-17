// next

// config
import { defaultSettings, cookiesKey } from '../config';

// ----------------------------------------------------------------------

export const getSettings = () => {
  const themeMode =  defaultSettings.themeMode;

  const themeDirection =
    defaultSettings.themeDirection;

  const themeColorPresets =
     defaultSettings.themeColorPresets;

  const themeLayout =  defaultSettings.themeLayout;

  const themeContrast =  defaultSettings.themeContrast;

  const themeStretch =  defaultSettings.themeStretch;

  return {
    themeMode,
    themeLayout,
    themeStretch,
    themeContrast,
    themeDirection,
    themeColorPresets,
  };
};

// ----------------------------------------------------------------------

const getData = (value: string) => {
  if (value === 'true' || value === 'false') {
    return JSON.parse(value);
  }
  if (value === 'undefined' || !value) {
    return '';
  }
  return value;
};
