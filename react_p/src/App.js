// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';
import PostEdit from './components/PostEdit';
import { useContext } from 'react';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button className="theme-button" onClick={toggleTheme}>
            {theme === 'light' ? '다크모드' : '라이트모드'}
        </button>
    );
};

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <ThemeToggleButton />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<CreatePost />} />
                        <Route path="/post/:id" element={<PostDetail />} />
                        <Route path="/post/edit/:id" element={<PostEdit />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;