import Aos from "aos";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";

export const HomeSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in",
    });
  });

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Tech Solutions Expert"
  ];


  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % professions.length;
      const fullText = professions[current];

      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(50); // Faster when deleting
      } else {
        setTypingSpeed(150); // Normal speed when typing
      }

      // If completed writing the word
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
      }
      // If deleted the word
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before starting next word
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);
  const Animated_Image =
    "https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0";

  return (
    <section className="pt-12 md:pt-20" data-aos="fade-up" id='home'>
      <div className="flex-col space-y-10 md:flex md:flex-row  justify-around items-center">
        <div className="text-center md:text-right">
          <p className="text-base md:text-lg">Hi, I am </p>
          <h2 className="lg:text-4xl md:text-3xl sm:text-4xl text-2xl font-serif font-semibold">
            Oluwapelumi Elisha
          </h2>
          {/* <TypeAnimation
            sequence={["FullStack Developer", 1000, "", 1000]}
            repeat={Infinity}
            className="text-base md:text-lg"
          /> */}
          <div className=" font-medium text-white mb-2 h-10 text-base md:text-lg">
            <span className="inline-block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>
        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={Animated_Image}
            alt="animated-image"
            className="rounded-full h-72 md:h-96 object-contain shadow"
          />
        </div>
      </div>
    </section>
  );
};
