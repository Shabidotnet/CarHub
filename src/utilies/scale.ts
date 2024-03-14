import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const standardScreenWidth = 360;
const standardScreenHeight = 719;

const scaleWidth = width / standardScreenWidth;
const scaleHeight = height / standardScreenHeight;

export const scale = fontSize => {
  const scaledFontSize = Math.min(scaleWidth, scaleHeight) * fontSize;
  return Math.round(scaledFontSize);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
