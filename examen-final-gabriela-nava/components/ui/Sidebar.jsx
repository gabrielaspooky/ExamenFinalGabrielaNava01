"use client";
import React from 'react';
import { Home, Clock, Info, Image } from 'lucide-react';

const Sidebar = () => {

  return (
    <div className="bg-green-400 w-[220px] h-screen flex flex-col">
      <h1 className="p-4 text-2xl font-bold">Examen Final</h1>

      <div className="flex flex-col items-start py-4 px-4">
 
        <a href="#card-generator" className="flex items-center mb-4 p-2 w-full text-black hover:bg-green-500">
          <Home className="mr-2" />
          <span>Card Generator</span>
        </a>

  
        <a href="#digital-clock" className="flex items-center mb-4 p-2 w-full text-black hover:bg-green-500">
          <Clock className="mr-2" />
          <span>Digital Clock</span>
        </a>

    
        <a href="#drilling-info" className="flex items-center mb-4 p-2 w-full text-black hover:bg-green-500">
          <Info className="mr-2" />
          <span>Drilling Info</span>
        </a>

 
        <a href="#card-gallery" className="flex items-center mb-4 p-2 w-full text-black hover:bg-green-500 ">
          <Image className="mr-2" />
          <span>Galería de Cartas</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
