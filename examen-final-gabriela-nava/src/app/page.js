'use client';
import React from 'react';
import Sidebar from '../../components/ui/Sidebar';
import CardGenerator from '../../components/ui/CardGenerator';
import DigitalClock from '../../components/ui/DigitalClock';
// import DrillingInfo from './DrillingInfo';
// import CardGallery from './CardGallery';

const MainPage = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-4">

        <section id="card-generator">
          <h2 className="text-2xl font-bold mb-4">Card Generator</h2>
          <CardGenerator />
        </section>


        <section id="digital-clock" className="mt-8">
          <DigitalClock />
        </section>

        {/* <section id="drilling-info" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Drilling Info</h2>
          <DrillingInfo />
        </section>

        <section id="card-gallery" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Galería de Cartas</h2>
          <CardGallery /> */}
        {/* </section> */}
      </div>
    </div>
  );
};

export default MainPage;