import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-12 px-4 text-center">
      <div className="w-full max-w-2xl mx-auto">
        <Image
          src="/My_picture.png" // Replace with your image path
          alt="Raymond Jimenez"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />

<p className="mb-6 leading-relaxed text-white-600">
          Hello, World! 🌎 I graduated with colors from General Assembly that aren't just limited to primary ones. My trusty toolkit? It's filled with the power of the MERN stack, some Python, and a little Django dance.
        </p>
        <p className="mb-6 leading-relaxed text-white-600">
          I jumped into this code world after a friend lured me into JavaScript's magic. Imagine a kid in a candy store, but replace candy with coding languages, and that's me! 🍭
        </p>
        <p className="mb-6 leading-relaxed text-white-600">
          On off days, you'll catch me concocting side projects, kind of like a chef's version of a midnight snack! When not Googling error messages, I'm bonding with family, friends, and my rubber duck debugging squad. 🦆
        </p>
        <p className="mb-6 leading-relaxed text-white-600">
          In tech, "Learning never stops" is an understatement. Take a break, and boom, 300 new frameworks. But hey, I'm here for the fun, learning, and the occasional curveball from the coding universe. 💻✨
        </p>

        <div className="my-8 border-t border-b border-gray-300 py-6">
          <h3 className="text-3xl mb-4 font-semibold text-white-700">Technical Skills</h3>
          <ul className="space-y-2 text-white-600">
            <li>JavaScript (ES6+)</li>
            <li>React & Next.js</li>
            <li>TailwindCSS & Framer Motion</li>
            <li>Node.js & Express</li>
            <li>HTML & CSS</li>
            <li>BootStrap5 & Materialize</li>
            <li>Python & Django</li>
            <li>MongoDB & PostgreSQL</li>
            <li>...and the list keeps growing!</li>
          </ul>
        </div>

        <p className="mt-6 leading-relaxed text-white-600">
          Beyond the screen, I like traveling and meeting new faces. Ready to chat? So am I! Let's create something awesome together.
        </p>
      </div>
    </section>
  );
}

export default About;
