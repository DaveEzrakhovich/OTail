import React from 'react';
import './App.css';
import { ConfigEditor } from './components/ConfigEditor/ConfigEditor';
import { PolicySetsProvider } from './context/PolicySetsContext';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/common/ThemeToggle';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider>
      <PolicySetsProvider>
        <div className="App">
          <header className="App-header">
            <h1>Tail Sampling Config Generator</h1>
            <ThemeToggle />
          </header>
          <main>
            <ConfigEditor />
          </main>
          <Analytics />
        </div>
      </PolicySetsProvider>
    </ThemeProvider>
  );
}

export default App;
