import React from 'react';
import Menu from './Menu';
import Visit from './Visit';
import Gallery from './Gallery';
import Hero from './Hero';

function Control() {
  return (
    <main className="bg-gray-500 flex-grow">
      <Hero />
      <Menu />
      <Visit />
      <Gallery />
    </main>
  )
}

export default Control