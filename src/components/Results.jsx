import React from 'react';
import './Results.css';

const Results = ({ data, error, onSynonymClick }) => {
  if (error) {
    return (
      <div className="error-container">
        <span role="img" aria-label="thinking face">😕</span>
        <h2>Something went wrong</h2>
        <p>We couldn't fetch the data. Please try again.</p>
      </div>
    );
  }

  if (!data) return null;

  if (data.title) {
    return (
      <div className="error-container">
        <span role="img" aria-label="sad face">😕</span>
        <h2>{data.title}</h2>
        <p>{data.message} {data.resolution}</p>
      </div>
    );
  }

  const wordData = data[0];
  const phoneticInfo = wordData.phonetics.find(p => p.audio && p.text) || wordData.phonetics.find(p => p.text);
  const audioUrl = wordData.phonetics.find(p => p.audio)?.audio;

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  return (
    <div className="results">
      <div className="word-section">
        <div>
          <h1>{wordData.word}</h1>
          <p className="phonetic-text">{phoneticInfo?.text}</p>
        </div>
        {audioUrl && (
          <button className="audio-btn" onClick={playAudio} aria-label="play audio">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
          </button>
        )}
      </div>

      {wordData.meanings.map((meaning, index) => (
        <div key={index} className="meaning-section">
          <div className="part-of-speech">
            <h2>{meaning.partOfSpeech}</h2>
            <div className="divider"></div>
          </div>
          <h3>Meaning</h3>
          <ul>
            {meaning.definitions.map((def, i) => (
              <li key={i}>
                <p>{def.definition}</p>
                {def.example && <p className="example">“{def.example}”</p>}
              </li>
            ))}
          </ul>
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div className="synonyms">
              <h3>Synonyms</h3>
              <div className="synonym-links">
                {meaning.synonyms.map((synonym, i) => (
                  <button key={i} onClick={() => onSynonymClick(synonym)}>{synonym}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      
      <div className="divider-source"></div>
      <div className="source-section">
        <h4>Source</h4>
        <a href={wordData.sourceUrls[0]} target="_blank" rel="noopener noreferrer">
          {wordData.sourceUrls[0]}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
        </a>
      </div>
    </div>
  );
};

export default Results;
