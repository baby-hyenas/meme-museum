import React from 'react';
import './style.css';

type AutocompleteProps = {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
};

export const AutoComplete: React.FC<AutocompleteProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <ul className="search-suggestion-list">
      {suggestions.map((suggestion, index) => (
        <li key={index} onMouseDown={() => onSuggestionClick(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
};