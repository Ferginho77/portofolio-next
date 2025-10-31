import Image from "next/image";
// File kamu: src/components/AboutSection.jsx
import EducationSection from "../components/EducationSection";
import AboutSection from "../components/AboutSection";
import SertiSection from "../components/SertiSection";
import ProjectSection from "../components/ProjectSection";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
        <div className="mb-6">
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Hi 👋, My Name Is <span className="text-blue-600">Fergie Fakhirusalam</span></h1>
        <h3 className="text-xl font-semibold text-gray-600 mb-4 text-center">
          I am a Student at University Logistic and International Business (ULBI), majoring in Informatics Engineering.
        </h3>
        <div className="bg-blue-50 rounded-xl p-4 w-full mb-4">
          <p className="text-lg text-gray-700 text-center">
            I am currently learning <span className="font-bold text-blue-500">Web Development</span>, And <span className="font-bold text-green-500">Mobile Development</span> Using Tools : <br></br> <span className="font-bold text-red-500">Laravel</span>, and <span className="font-bold text-black-300">Next.js</span>.
          </p>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="#about" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">About Me</a>
          <a href="#education" className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition">Education</a>
          <a href="#sertifikat" className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition">Certificates</a>
          <a href="#project" className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition">Project</a>
        </div>
      </div>
      <div id="about" className="mt-10">
        <AboutSection />
      </div>
      <div id="education" className="mt-10">
        <EducationSection />
      </div>  
      <div id="sertifikat" className="mt-10">
        <SertiSection />
      </div>
      <div id="project" className="mt-10 w-full">
        <ProjectSection />
      </div>
    </div>
  );
}
