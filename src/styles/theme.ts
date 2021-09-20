export const lightTheme = {
  body: '#fcfcfc',
  text: '#363537',
  toggleBackground: '#fcfcfc',
  startBackground: '#e6328d',
  mainColor: '#fcfcfc',
  navBar: '#fcfcfc',
  mainBgOpacity: '0',
  sunMoon: 'none',
  sunMoonBackground: '#ffde00',
};

export const darkTheme = {
  body: '#252424',
  text: '#fcfcfc',
  toggleBackground: '#3b3b3b',
  startBackground: '#3b3b3b',
  mainColor: '#fcfcfc',
  navBar: '#303030',
  mainBgOpacity: '1',
  sunMoon: '15px 15px 0 0 #ffde00',
  sunMoonBackground: 'none',
};

export type Theme = typeof lightTheme;
