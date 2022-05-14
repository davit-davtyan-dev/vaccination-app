const mainColor = '#005078';
const tintColorLight = mainColor;
const tintColorDark = '#fff';

export default {
  light: {
    text: mainColor,
    textInvert: '#fff',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    textInvert: '#000',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
