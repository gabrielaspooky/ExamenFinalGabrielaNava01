"use client";
import React, { useState } from 'react';

export default function CardGenerator() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [collage, setCollage] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { name, collage, location }; 
    setCards([...cards, newCard]);
    setName('');
    setCollage('');
    setLocation('');
  };

  return (
    <div className="container mx-auto p-4 border">
      <h1 className="text-lg">Input Form</h1>
      <br />
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label htmlFor="name">Enter name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese el título"
            required
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="collage">Enter collage name</label>
          <input
            id="collage"
            value={collage}
            onChange={(e) => setCollage(e.target.value)}
            placeholder="Ingresa tus datos"
            required
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="location">Enter location</label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ingresa la ubicación"
            required
            className="p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-purple-500 text-white p-2 rounded">Generate card</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border rounded p-4">
            <img src="https://play-lh.googleusercontent.com/L4ELB2PYiQriE4fgz-KisQTpBVNxXM3jXvTk4Wq9QM2CEQf0kL6UR41ty-KwhWYUJQfB=w240-h480-rw" alt="Rick" />
            <h2 className="text-xl font-bold mb-2">{card.name}</h2>
            <p className="mb-4">{card.collage}</p>
            <p className="mb-4">{card.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
