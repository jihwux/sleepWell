export const lightTheme = {
  body: '#fcfcfc',
  text: '#363537 !important',
  toggleBackground: '#fcfcfc',
  startBackground: '#e6328d',
  mainColor: '#fcfcfc !important',
  navBar: '#fcfcfc',
  mainBgOpacity: '0',
  sunMoon:
    '0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040, 0 0 0 20px #ffde0020, 0 0 0 40px #ffde0010,  0 0 0 100px #ffde0000, 0 0 0px 0px #ffde0010',
  sunMoonBackground: '#ffde00',
  pickerToolBarText: '#7c7c7c',
};

export const darkTheme = {
  body: '#252424',
  text: '#fcfcfc !important',
  toggleBackground: '#3b3b3b',
  startBackground: '#3b3b3b',
  mainColor: '#fcfcfc',
  navBar: '#303030',
  mainBgOpacity: '1',
  sunMoon: '15px 15px 0 0 #ffde00',
  sunMoonBackground: 'none',
  pickerToolBarText: '#727272 !important',
  pickClockText: '#727272 !important',
};

export type Theme = typeof lightTheme;
