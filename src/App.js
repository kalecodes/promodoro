import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Timer from './components/Timer';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App h-screen">
      <Header />
      <main className="flex h-9/10">
        <Tasks />
        <section className="w-1/2">
          <Timer />
          <Notes />
        </section>
      </main>
    </div>
  );
}

export default App;
