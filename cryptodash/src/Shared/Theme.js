export const theme = '';
//const theme = 'light';
export const lightTheme = theme === 'dark';

export function newFunction(value) {
    theme = value;
    return theme;
}

