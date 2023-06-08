import { Route, Routes } from 'react-router-dom';
import './css/style.css';
import Home from './pages/Home';
import CreateMovie from './pages/movie/create';
import Popular from './pages/movie/popular';
import NowPlaying from './pages/movie/now';
import TopRatedMovie from './pages/movie/toprated';
import Layout from './Layout';
// import ThemeProvider & Theme
import { ThemeProvider } from 'styled-components';
import theme from './components/utils/constants/theme';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<Popular />} />
            <Route path="/movie/now" element={<NowPlaying />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;
