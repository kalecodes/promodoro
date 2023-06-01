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
      <main className="flex flex-col md:flex-row h-9/10">
        <Tasks />
        <section className="md:w-1/2">
          <Timer />
          <Notes />
        </section>
      </main>
    </div>
  );
}

export default App;
