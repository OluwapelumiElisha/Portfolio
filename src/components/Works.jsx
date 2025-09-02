import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import PMS from "../assets/pms.png";
import CBT from "../assets/cbt.png";
import Flutter from "../assets/wave.png";
import QR from "../assets/qr.png";
import Quiz from '../assets/Quiz.png'
import TECH from "../assets/Tech.png"
import barber from '../assets/Bar.png'
import SSE from "../assets/download.png"
import DEP from "../assets/dep.png"


export const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const ListOfProject = [
    {
      img: DEP,
      title: "Dependly",
      subtitle: "Developing the frontend of a FinTech web application using Next.js, TypeScript, and Tailwind CSS. The platform enables secure contract-based transactions, allowing users to transfer and receive money seamlessly. With a focus on modern UI/UX, the app ensures a responsive, secure, and efficient financial experience.",
      skills: [
        { name: "Next.js" },
        { name: "Tailwind" },
        { name: "TypeScript" },
        // { name: "Firebase" },
      ],
      gitLink: "https://dependly.app/",
      projectLink: "https://dependly.app/",
    },
    {
      img: barber,
      title: "Barbering-Appiontment Platform",
      subtitle: "The website is a barbering appointment system where users can easily select a barber, pick a time slot, and book their appointment. It features a clean, user-friendly interface that ensures a smooth booking experience.",
      skills: [
        { name: "Next.js" },
        { name: "Tailwind" },
        { name: "TypeScript" },
        // { name: "Firebase" },
      ],
      gitLink: "https://github.com/OluwapelumiElisha/Barbering-Appointment-Frontend",
      projectLink: "https://barbering-appointment-frontend.vercel.app/",
    },
    {
      img: PMS,
      title: "Project Management System",
      subtitle: "A Full-Stack Project Management System that allows users to create, track, and manage multiple projects efficiently. Users can organize tasks, assign statuses, and monitor progress in real time enhancing team collaboration and productivity.",
      skills: [
        { name: "React" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Tailwind CSS" },
      ],
      gitLink: "https://github.com/Elisha-devv/project-management-system",
      projectLink: "https://project-management-sysem.vercel.app/",
    },
    {
      img: CBT,
      title: "Standard CBT Management System",
      subtitle: "A browser-based CBT (Computer-Based Test) system that allows users to take timed multiple-choice tests with automatic result evaluation. Designed for easy test creation, user participation, and performance tracking.",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Firebase" },
      ],
      gitLink: "https://github.com/OluwapelumiElisha/STANDARD-CBT-MANAGEMENT-SYSTEM",
      projectLink: "https://standard-cbt-management-system.vercel.app/",
    },
    {
      img: SSE,
      title: "Stock Symbol Extractor",
      subtitle: "A Node.js application, Extracts stock symbols from Gmail, fetches financial data using the Alpha Vantage API, and posts results to a Discord channel. Features robust error handling, duplicate post prevention, and secure handling of sensitive data.",
      skills: [
        { name: "Node.Js" },
        { name: "Express.Js" },
        { name: "Rest Api" },
      ],
      gitLink: "https://github.com/OluwapelumiElisha/Stock-Symbol-Extractor",
      projectLink: "https://github.com/OluwapelumiElisha/Stock-Symbol-Extractor",
    },
    {
      img: QR,
      title: "QR Code-Based Meal Tracking System",
      subtitle: "A web app that tracks and verifies one's meals using QR code scanning and real-time database updates.",
      skills: [
        { name: "React" },
        { name: "Express.js" },
        { name: "Tailwind CSS" },
        { name: "MonogoDB" },
      ],
      gitLink: "https://github.com/OluwapelumiElisha/QR-CODE-SCANNER",
      projectLink: "https://track-a-meal.vercel.app/",
    },
    {
      img: Quiz,
      title: "Quiz App",
      subtitle: "A straightforward quiz game application where users can answer multiple-choice questions, view their score at the end, and restart the game for repeated play. Built with clean code and optimized for a seamless user experience.",
      skills: [
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "Sass" },
        { name: "Firebase" },
        // { name: "Tailwind CSS" },
      ],
      gitLink: "https://github.com/OluwapelumiElisha/Quiz-Game",
      projectLink: "https://oluwapelumielisha.github.io/Quiz-Game/Quiz",
    },
    
    {
      img: Flutter,
      title: "CBT Management System",
      subtitle: "A responsive Flutterwave landing page replication built with HTML, Sass, CSS, and Bootstrap. This project mirrors the structure and styling of the original design while maintaining clean code and mobile responsiveness.",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Bootstrap" },
      ],
      gitLink: "https://github.com/OluwapelumiElisha/FLUTTERWAVE-PROJECT",
      projectLink: "https://oluwapelumielisha.github.io/FLUTTERWAVE-PROJECT/",
    },
    {
      img: TECH,
      title: "Techtitude-Website",
      subtitle: "A responsive Techtitude landing page replication built with HTML, CSS, and a touch of JavaScript. This project closely mirrors the original Figma design while maintaining clean structure, smooth responsiveness, and simple user interactions.",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
      ],
      gitLink: "https://github.com/OluwapelumiElisha/TECHTITUDE-WEBSITE",
      projectLink: "https://oluwapelumielisha.github.io/TECHTITUDE-WEBSITE/Landing%20Page",
    },
    
  ];


  return (
    <section className="pt-24" id="works">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1
            className="border-2 border-[#C8CACD] py-2 px-5 font-bold text-lg md:text-xl"
            data-aos="fade-up"
          >
            Works
          </h1>
          <p className="mt-2 text-base md:text-lg" data-aos="fade-up">
            These are some of my Project that i have worked
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-14 gap-y-10 mx-14 md:mx-16 py-10 text-[#0C0C0C] ">
          {ListOfProject.map((project, index) => (
            <div className="works-container " data-aos="fade-up" key={index}>
              <img
                src={project.img}
                alt={project.title}
                className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
              />
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-1 px-2 font-sans">
                  {project.title}
                </h1>
                <p className="mb-3 px-2 text-sm md:text-base font-serif">
                  {project.subtitle}
                </p>
                <span className="flex flex-wrap gap-2 px-2 ">
                  {project.skills.map((skill, idx) => (
                    <p key={idx} className="works-pill">{skill.name}</p>
                  ))}
                </span>
              </div>
              <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
                <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-lg" />
                </a>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <FaLink className="text-lg" />
                </a>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
