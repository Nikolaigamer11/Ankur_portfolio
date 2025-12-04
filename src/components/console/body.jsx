import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Terminal() {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const workdist = {
    Jatayu: {
      link: "#",
      desc: "A bionic flying bird with cameras buit using esp32",
    },
    HandGesture: {
      link: "#",
      desc: "A sign language detection device that can detect sign language and traslate it ",
    },
  };
  const skills = ["JS", "Python", "C", "C++", "arduino", "esp32"];

  const WelcomeT = `
               .__                                
__  _  __ ____ |  |   ____  ____   _____   ____   
\\ \\/ \\/ // __ \\|  | _/ ___\\/  _ \\ /     \\_/ __ \\  
 \\     /\\  ___/|  |_\\  \\__(  <_> )  Y Y  \\  ___/  
  \\/\\_/  \\___  >____/\\___  >____/|__|_|  /\\___  > 
             \\/          \\/            \\/     \\/  
`;

  const skillT = `
  ___________   .__.__  .__          
 /   _____/  | _|__|  | |  |   ______
 \\_____  \\|  |/ /  |  | |  |  /  ___/
 /        \\    <|  |  |_|  |__\\___ \\ 
/_______  /__|_ \\__|____/____/____  >
        \\/     \\/                 \\/ 
`;

  const root = "C:\\Ankur's\\Portfolio>";

  // Commands
  const commands = {
    home: (
      <>
        <hero>
          <div>
            <h1 class="text-xs md:text-2xl tracking-tight">
              <pre class="overflow-x-hidden text-sm">
                \____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____/
              </pre>
              <pre class="">{WelcomeT}</pre>
            </h1>
            <h3 class=" text-xl md:text-3xl">Hello I'm Ankur Pathak</h3>
            <p>I love old style computers so here is a old crt terminal </p>
          </div>
          <div className="options">
            <pre class="text-lg overflow-x-hidden">
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - -
              <ul class=" text-sm md:text-xl">
                Commands to interact-
                <li>Home</li>
                <li>Socials</li>
                <li>Works</li>
                <li>Insides</li>
                <li>Clear</li>
                <li>Help</li>
                ##################################################################################################################
              </ul>
            </pre>
          </div>
        </hero>
      </>
    ),
    help: (
      <>
        <div>Available commands:</div>
        <div>- contacts</div>
        <div>- about</div>
        <div>- clear</div>
        <div>- help</div>
      </>
    ),

    socials: (
      <div class="flex flex-col">
        <div>
          <h3>here are the socials to contact with me :-</h3>
        </div>
        <div class="flex flex-row w-1/2 justify-around text-4xl ">
          <div>
            <a href="mailto:ankurpathak005@gmail.com">
              <AiOutlineMail />
            </a>
          </div>
          <div>
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
          <div>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    ),

    works: (
      <>
        <div>
          <h3>Here is list a projects I've contributed to or work with :-</h3>
        </div>
        <ul>
          {Object.entries(workdist).map(([key, value]) => (
            <li className="w-fit" key={key}>
              <a
                href={`${value.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="flex ">
                  <h4 class="w-55 flex-none">{key} —</h4>
                  <h4>{value.desc}</h4>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </>
    ),
    insides: (
      <>
        <div>
          <h3>
            I like to tinker things, and while doing do I have learned a few
            things on the way, you can enter the command works to see my
            workings.
            <h4 class="text-xs md:text-xl tracking-tight">
              <pre class="overflow-x-hidden text-sm">
                \____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____/
              </pre>
              <pre class="">{skillT}</pre>
              <pre class="overflow-x-hidden mt-4 text-sm">
                \____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____'____/
              </pre>
            </h4>
            <ul className="grid grid-cols-2 w-1/2">
              {skills.map((skills, index) => (
                <li key={index} className="flex w-1/2">
                  <span>{index + 1}.</span>
                  <span>{skills}</span>
                </li>
              ))}
            </ul>
          </h3>
        </div>
      </>
    ),
  };

  const defaultRoot = "home";

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      command: "",
      response: commands[defaultRoot.trim().toLowerCase()],
    },
  ]);

  // Keep input focused always
  useEffect(() => {
    const keepFocus = () => {
      if (inputRef.current) inputRef.current.focus();
    };
    document.addEventListener("click", keepFocus);
    return () => document.removeEventListener("click", keepFocus);
  }, []);

  // Auto scroll to bottom when history updates
  useEffect(() => {
    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();

      // CLEAR SCREEN
      if (cmd === "clear") {
        setHistory([
          {
            command: "",
            response: commands[defaultRoot.trim().toLowerCase()],
          },
        ]);
        setInput("");
        return;
      }

      let output;

      if (commands[cmd]) {
        output = commands[cmd];
      } else {
        output = <div>'{cmd}' is not recognized as a command.</div>;
      }

      // Update terminal history
      setHistory((prev) => [...prev, { command: input, response: output }]);

      setInput("");
    }
  };

  return (
    <div
      className="terminal-container h-dvh overflow-y-auto"
      ref={containerRef}
    >
      {history.map((item, index) => (
        <div key={index} className="terminal-line">
          <div className="terminal-command">{root + item.command}</div>
          <div className="terminal-response">{item.response}</div>
        </div>
      ))}

      {/* Input Line */}
      <div className="terminal-input-line">
        <span className="terminal-prompt">{root}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="terminal-input"
          autoFocus
        />
      </div>
    </div>
  );
}
