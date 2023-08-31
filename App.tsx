import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Text } from 'react-native';
import { Welcome } from './src/screens/Welcome';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}