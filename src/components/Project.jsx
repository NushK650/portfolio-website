import { motion } from "motion/react"
import React from 'react';

function Projects() {
  return (
    <section id="project" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <a href="https://itineraio.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <p>Itinera.io</p>
            <img className='h-15 aspect-video mt-2' src="./Itinera.io.png" alt="Itinera.io" />
            </div>
          </a>
          <a href="https://kumartc-weather-app-twux.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6"> 
            <p>Weather App </p>
          <img className='h-15 aspect-video mt-2' src="./WeatherApp.png" alt="Weather App" /></div>
          </a>
          <a href="https://kumar-tp-pokemon-api-challenge.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6"> 
            <p>Pokemon App</p>
          <img className='h-15 aspect-video mt-2' src="./PokemonApp.png" alt="Pokemon App" /></div>
          </a>
        
        </div>
      </div>
    </section>
  );
}

export default Projects;