import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import Results from './components/Results.jsx';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [font, setFont] = useState('Sans Serif');
  const [searchTerm, setSearchTerm] = useState('keyboard');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (word) => {
    const wordToSearch = word || searchTerm;
    if (!wordToSearch) {
      setError('empty');
      setData(null);
      return;
    }
    setError('');
    setData(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError('network');
    }
  };

  useEffect(() => {
    handleSearch('keyboard');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const handleSynonymClick = (synonym) => {
    setSearchTerm(synonym);
    handleSearch(synonym);
  };

  const getFontClass = () => {
    if (font === 'Serif') return 'font-serif';
    if (font === 'Mono') return 'font-mono';
    return 'font-sans';
  };

  return (
    <div className={`App ${getFontClass()}`}>
      <div className="container">
        <Header theme={theme} toggleTheme={toggleTheme} font={font} setFont={setFont} />
        <main>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={() => handleSearch()}
            error={error === 'empty'}
          />
          <Results data={data} error={error === 'network'} onSynonymClick={handleSynonymClick} />
        </main>
      </div>
    </div>
  );
}

export default App;