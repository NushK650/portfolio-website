// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <div className="py-20 h-full text-center bg-[url('/Hero.png')]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-4">
            Hi, I'm Tanush Kumar
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            A passionate Web Developer.
          </p>
          <button>
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
            >
              View My Projects
            </Link>
          </button>
        </div>
      </div>
      <div className="pt-20 pb-20 bg-gray-50 h-full">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Feel free to reach out! You can contact me via my email:
            TanushKumar650@gmail.com, number: 650-218-4892 or through the links
            bellow.
          </p>
          <div className="flex justify-center gap-10">
            <a href="https://github.com/NushK650">
              <img src="./github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/tanush-kumar-aab68135b/details/skills/">
              <img src="./linkedin.png" alt="linkedin" />
            </a>
            <a href="./ResumeV4.pdf">
              <img src="./resume.png" alt="resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
