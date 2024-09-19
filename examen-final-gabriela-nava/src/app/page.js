'use client';
import React from 'react';
import Sidebar from '../../components/ui/Sidebar';
import CardGenerator from '../../components/ui/CardGenerator';
import DigitalClock from '../../components/ui/DigitalClock';
import DrillingComponent from '../../components/ui/DrillingInfo';
import ProductCards from '../../components/ui/CardGallery';

const MainPage = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-4">

        <section id="card-generator">
          <h2 className="text-2xl font-bold mb-4">Card Generator</h2>
          <CardGenerator />
        </section>


        <section id="digital-clock" className="mt-8">
          <DigitalClock />
        </section>

        <section id="drilling-info" className="mt-8">
          <DrillingComponent />
        </section>

        <section id="card-gallery" className="mt-8">
          <ProductCards />
        </section>
      </div>
    </div>
  );
};

export default MainPage;