import { useState, useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { PageProps } from '../App';

const workExperience = [
  {
    company: "BG Communications International Inc.",
    role: "Full-Stack Developer",
    period: "2024 - 2025",
    description: "Development of interactive web applications using React, TypeScript and Springboot. Implemented modern UI/UX designs and optimized performance.",
    description2: "Collaborated closely with clients to gather requirements and deliver tailored solutions."
  },
  {
    company: "Genetec Inc.",
    role: "Integration Specialist",
    period: "2022",
    description: "Tested and integrated various software solutions. Collaborated with cross-functional teams and clients to ensure seamless integration of systems.",
    description2: "Produced detailed documentation and reports on integration processes and outcomes."
  },
  {
    company: "Concordia University",
    role: "B.Eng. Software Engineering (Completed)",
    period: "2021-2025",
  },
  {
    company: "10+ Hackathons and Competitions",
    role: "ConUHacks, McGame Jam, CsGames, and many more",
    period: "2021-2025",
    description: "Completed Projects within various hackathons and competitions, showcasing skills in software engineering and time efficiency.",
    description2: "Part of teams that won awards during competitions, including Puzzle Hero, Info-Theo, and others."
  }
];

const projects = [
  {
    id: 1,
    title: "3D Water Ripple Simulator",
    tags: ["C++", "OpenGL", "LibIGL", "Eigen"],
    thumbnail: "public/images/waterripple.png",
    description: "An interactive water ripple simulation using libigl (C++), where clicking generates realistic wave ripples on a 3D mesh surface.",
    longDescription: "This project simulates lifelike water ripples on a deformable 3D mesh using libigl and C++. Users can click to create dynamic waves that interact, amplify, or cancel out over time, producing a natural ripple effect. Adjustable controls allow for real-time tweaking of intensity, pausing the simulation, and resetting the mesh. The project explores the visual power of simple physics-based math in interactive environments, bridging the gap between digital and natural motion.",
    technicalDetails: "Built with libigl in C++, the simulation deforms a triangular mesh by applying damped sine wave functions at user click locations. Real-time vertex displacement simulates ripple propagation with constructive and destructive wave interference. Features include keyboard controls for intensity, pausing, and mesh reset. The project focuses on mesh manipulation, real-time interaction, and decay-based wave dynamics.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "",
    github: "https://github.com/altam-sh/Water-Ripple-Simulator",
    hasLink: false,
    hasGithub: true
  },
  {
    id: 2,
    title: "Visual 3D B-Spline Editor",
    tags: ["C++", "OpenGL", "LibIGL"],
    thumbnail: "public/images/placeholder2.png",
    description: "An interactive 3D B-Spline surface editor built with C++ and libigl, allowing real-time control point manipulation and surface visualization.",
    longDescription: "This tool enables users to intuitively explore and edit tensor-product B-Spline surfaces in 3D. Built with C++, OpenGL, and libigl, the editor supports interactive control point dragging, display toggles, and multi-patch editing. Designed as a hands-on approach to geometric modeling, it provides a simple yet functional UI for real-time surface manipulation. The project focuses on understanding how B-Splines behave and how they are constructed from control lattices, blending math, modeling, and user interaction.",
    technicalDetails: "Developed in C++ using libigl and OpenGL for rendering and interaction. The editor supports dynamic B-Spline patch creation, real-time mesh updates based on control point input, and toggling between visualization modes. The architecture separates UI interaction (click, drag, toggle) from the backend surface evaluation, providing a modular approach to real-time geometric editing.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "",
    github: "https://github.com/altam-sh/BSplineEditor",
    hasLink: false,
    hasGithub: true
  },
  {
    id: 3,
    title: "Zippo Lighter Technical Modeling",
    tags: ["Fusion 360", "Technical Drawing"],
    thumbnail: "public/images/placeholder3.jpg",
    description: "A detailed 3D model and technical drawing of a Zippo lighter created in Fusion 360, following engineering design standards.",
    longDescription: "This project involved reverse-engineering and modeling a Zippo-style lighter in Fusion 360 with attention to both aesthetic realism and mechanical accuracy. Alongside the 3D model, a complete set of technical drawings was produced, adhering to industry-standard drafting practices. The goal was to practice precise modeling techniques and showcase competency in technical communication through engineering drawings.",
    technicalDetails: "Modeled in Fusion 360 with real-world measurements and mechanical constraints in mind. The project includes an exploded view and detailed orthographic projections, using standard dimensioning, tolerancing, and annotation practices. Emphasis was placed on maintaining proper part relationships and producing manufacturing-ready documentation.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "",
    github: "",
    hasLink: false,
    hasGithub: false
  }
];

const projects2 = [
  {
    id: 4,
    title: "Giuseppe's Cellar",
    tags: ["Unity", "C#", "Blender", "AI Behavior Trees", "3D"],
    thumbnail: "public/images/placeholder.jpg",
    description: "A stylized first-person survival horror game built in Unity, featuring custom ghost AI, flashlight-based combat, and chaotic wine-fueled gameplay.",
    longDescription: "Giuseppe's Cellar is a short-form survival horror game where players must recover ten special wine bottles from a haunted, pitch-black cellar. Armed only with a flashlight, players must navigate maze-like shelves while avoiding three types of ghosts—each with distinct behaviors. White Ghosts swarm when one spots you, Horned Ghosts creep up when you're not looking, and Brown Ghosts explode when provoked. Players can use bottles to distract enemies or trigger chain reactions. The game features low-poly stylized visuals, dynamic lighting, and tightly designed gameplay loops, blending tension with humor for an engaging experience.",
    technicalDetails: "Developed in Unity with C#, the project includes AI behavior trees, A* pathfinding, and decision-based ghost logic. Ghosts respond to player actions, sightlines, and noise. Maps were designed for tight movement and layered strategy, with optimized lighting and occlusion culling for performance. Some 3D models were custom created in Blender, and gameplay was tuned for both challenge and fun within a short runtime.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://maisonwells.itch.io/giuseppes-cellar",
    github: "https://github.com/ShawnOstadAbbasi/COMP476_Project",
    hasLink: true,
    hasGithub: true
  },
  {
    id: 5,
    title: "Chromatic Journey",
    tags: ["Unity", "C#", "2D Animation", "Level Design", "Digital Art"],
    thumbnail: "public/images/placeholder2.png",
    description: "A hand-drawn 2D puzzle-platformer built in Unity, blending speedrunning, color-themed puzzles, and precise platforming into a vibrant artistic experience.",
    longDescription: "Chromatic Journey is a fast-paced 2D puzzle-platformer where players control Chroma, a young artist racing to restore the world's stolen colors. Guided by the cryptic Voice of Reason, you'll navigate through three beautifully themed levels—Red, Green, and Blue—each filled with intricate puzzles, secrets, and platforming challenges. Designed for both first-time players and speedrunners, the game rewards creative thinking and precision. All characters, sprite animations and cutscenes were hand-drawn and animated by me to create an immersive and emotionally resonant world.",
    technicalDetails: "Built in Unity with C#, the game features hand-crafted level design optimized for fluid movement and replayability. The gameplay loop is centered around color-based puzzle solving, high-skill platforming, and time-based completion goals. Hidden shortcuts and secret routes offer dramatic time savings for dedicated speedrunners. All visual assets, including sprite sheets, environmental art, and animated cutscenes, were fully illustrated and animated by hand to maintain a cohesive artistic style.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://maisonwells.itch.io/chromatic-journey",
    github: "https://github.com/Abdoul111/Chromatic_Journey",
    hasLink: true,
    hasGithub: true
  },
  {
    id: 6,
    title: "Chords of the Past",
    tags: ["Unity", "C#", "Digital Art", "2D Animation", "Game Design", "Sound Design"],
    thumbnail: "public/images/placeholder3.jpg",
    description: "A musical puzzle game built in Unity where players explore childhood memories to recover a lost creative spark—playable with a MIDI keyboard for a unique interactive experience.",
    longDescription: "Chords of the Past is a narrative-driven puzzle game inspired by the theme of 'Lost & Found.' You play as a once-renowned musician trapped in a creative block and plagued by memory loss. By venturing through his fragmented mind, you relive four formative childhood moments—breaking a music box, buying his first harp, tuning it for the first time, and learning his first song. These minigames are interwoven with hand-drawn cutscenes that bring the story to life. With each memory restored, the artist regains a part of himself and his music. The game can be played traditionally or using a MIDI keyboard as a controller, adding a fresh layer of immersion and physicality to its musical mechanics.",
    technicalDetails: "Developed in Unity with C#, the game features four distinct minigames tied together by a central narrative and memory-themed progression. MIDI keyboard compatibility was implemented to support real-time musical input, transforming the device into a game controller and unlocking unique mechanics. All 2D art, animations, and cutscenes were custom-made and illustrated by me to match the emotional tone of the story. The project also includes custom sound design and audio cues synced to player input to deepen immersion and enhance storytelling.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://dudenameddarcy.itch.io/chords-of-the-past",
    github: "https://github.com/NicolasBernardBoyer/McGameJam-2025",
    hasLink: true,
    hasGithub: true
  },
  {
    id: 7,
    title: "Undeath",
    tags: ["Unity", "C#", "Pixel Art", "Sprite Animation"],
    thumbnail: "public/images/placeholder4.png",
    description: "A lighthearted 2D zombie shooter where you play as Death—die, return as a ghost, and fight your way back to life. Features original pixel art and animations.",
    longDescription: "Undeath is a fast-paced 2D zombie shooter inspired by a game design challenge from Beenox. You play as Death, tasked with slaying waves of the undead using a pistol. When defeated, you transform into Death's ghostly form wielding a scythe. If you can slay enough zombies in this spectral state, you’re revived and the cycle continues. This twist on standard shooter mechanics adds layers of rhythm and risk to gameplay without overcomplicating it. Despite the grim theme, the game has a playful, almost 'cute' visual style that brings levity and charm. Death’s different states are uniquely animated to give him character, turning a dark premise into an engaging, stylized experience.",
    technicalDetails: "Built in Unity using C#, the game features custom pixel art and sprite animations created entirely by hand. Each of Death’s forms—living and ghost—has its own distinct animations and gameplay mechanics. The revival loop adds strategic variation to an otherwise straightforward zombie shooter, all while maintaining a cohesive and humorous tone. The game was optimized for responsive input and smooth transitions between Death's forms.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://devpost.com/software/undeath",
    github: "https://github.com/yourusername/music-visualization",
    hasLink: true,
    hasGithub: false
  }
];

const projects3 = [
  {
    id: 8,
    title: "OPUS Web - ERP System",
    tags: ["React", "TypeScript", "Springboot", "Java", "Docker", "SQL", "JUnit", "Robot + Selenium", "Figma"],
    thumbnail: "public/images/placeholder.jpg",
    description: "A modern ERP web application built for a translation company, replacing a legacy desktop system with a scalable and maintainable full-stack solution.",
    longDescription: "OPUS Web is a complete reimagining of a legacy ERP desktop application into a modern, scalable web platform tailored for a translation company. Built using React (TypeScript) on the frontend and Spring Boot (Java) on the backend, the project features full Dockerization and a redesigned SQL database optimized for scalability and clarity. We conducted a complete data migration from the legacy system and worked closely with stakeholders through weekly meetings and iterative reviews to ensure alignment and usability. The application is currently under NDA, but its development included enterprise-grade testing with JUnit and end-to-end automation using Robot Framework and Selenium.",
    technicalDetails: "Frontend: React with TypeScript, designed in Figma for clean UX. Backend: Java with Spring Boot, RESTful API architecture. Containerized with Docker. Testing: JUnit for unit/integration tests, Robot Framework with Selenium for end-to-end UI automation. Database: Fully redesigned SQL schema with efficient relationships and data integrity, including complete migration scripts from the legacy system.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "",
    github: "",
    hasLink: false,
    hasGithub: false
  },
  {
    id: 9,
    title: "Condo Connect - Property Management System",
    tags: ["React", "CSS", "JavaScript", "Firebase", "Python", "JUnit", "Figma"],
    thumbnail: "public/images/placeholder2.png",
    description: "A full-featured property management platform with role-based access for owners, managers, and renters, designed for both web and mobile use.",
    longDescription: "Condo Connect is a responsive and intuitive property management system built to streamline communication and operations between condo owners, renters, and managers. The platform supports key functionalities such as condo listing, rent payment and claims, service and facility management, billing, and maintenance requests. The interface adapts seamlessly across web and mobile platforms, ensuring accessibility and usability for all user roles. The frontend is built in React with custom CSS and JavaScript, backed by Firebase for real-time data, and Python for backend logic and testing with JUnit. All UI/UX flows were designed in Figma for clarity and consistency.",
    technicalDetails: "Frontend: React, CSS, and vanilla JavaScript with responsive design for cross-device compatibility. Backend: Firebase for authentication and real-time database. Python backend services with JUnit for logic testing. Design: Figma-driven UI workflows with mobile-first considerations.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "",
    github: "",
    hasLink: false,
    hasGithub: false
  },
  {
    id: 10,
    title: "Purrsonality - Web Visual Novel",
    tags: ["React", "TypeScript", "Vite", "Digital Art", "Decision Trees", "Storywriting"],
    thumbnail: "public/images/placeholder4.png",
    description: "A web-based visual novel that simultaneously quizes players, matching them with one of the five major personality archetypes based on their in-game decisions, featuring original hand-drawn art and branching dialogue paths.",
    longDescription: "Purrsonality is a narrative-driven web visual novel developed in React and TypeScript with Vite, designed to explore player personality through decision-making. Inspired by the Five Factor Model (Big Five personality traits), the game features branching dialogue paths that align the player with unique feline characters, each representing a different trait. All cat characters and backgrounds were hand-drawn specifically for this project. The game's dialogue was carefully written without AI assistance, ensuring every line feels organic and personalized. The project stands out not only for its particular styling but also its authenticity in design and writing",
    technicalDetails: "Frontend built with React + Vite + TypeScript. Game logic handled with decision trees based on Five Factor personality archetypes. All art assets were digitally drawn by me. Dialogue trees manually implemented with React state logic. No AI-generated content—dialogue was hand-written for character authenticity.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://www.linkedin.com/posts/altamash-sheikh-mw_its-officially-been-a-full-week-since-i-activity-7294563722218360832-rDd1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdVnqQBTO7K21TTVGCSjNVB8aWYyOUVrGw",
    github: "https://github.com/eplxy/ConUHacks-IX",
    hasLink: true,
    hasGithub: true
  }, 
  {
    id: 11,
    title: "Maison Wells - Personal Portfolio",
    tags: ["React", "TypeScript", "Vite", "Tailwindcss", "CSS Animation"],
    thumbnail: "public/images/placeholder4.png",
    description: "A personal portfolio website designed and developed from scratch to showcase my skills in web development, animation, and UI/UX design.",
    longDescription: "Maison Wells is my personal portfolio and one of my most comprehensive and creatively driven projects to date. Built with React, TypeScript, Vite, and TailwindCSS, it was carefully designed to balance clarity, personality, and visual flair. Every element — from the information architecture and interactive navigation paths to smooth CSS animations and custom UI components — was hand-crafted to reflect both my technical ability and aesthetic sensibilities. The site supports responsive layouts, audio cues, and a dark, modern visual theme to immerse visitors in a fluid experience. More than just a website, it serves as a live demonstration of my capabilities in frontend development, interaction design, and storytelling through web interfaces.",
    technicalDetails: "Developed using React with TypeScript and Vite for fast performance. TailwindCSS used for design consistency and responsive layout. Includes CSS keyframe animations, interactive transitions, dynamic routing, and accessibility-conscious UI components. Optimized for mobile and desktop viewing, with support for light audio feedback and layered motion effects. Every part of Maison Wells was crafted to reflect who I am — as a developer, a designer, and a creative. It's not just where I show my work; it's part of the work itself.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "",
    github: "https://github.com/altam-sh/maisonwells-portfolio",
    hasLink: false,
    hasGithub: true
  }
];

const ProfessionalProfile: React.FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<'projects' | 'experience'>('projects');

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  const getSelectedProject = () => {
    const allProjects = [...projects, ...projects2, ...projects3];
    return allProjects.find(project => project.id === selectedProject);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white font-serif overflow-hidden">
      {/* Header - Fixed at the top */}
      <div
        className="px-4 md:px-8 lg:px-16 py-8 transition-opacity duration-1000 bg-black z-10"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        <h1 className="text-4xl md:text-5xl mb-4 font-serif">[Professional Profile]</h1>
        <div className="h-px w-full bg-white opacity-50 mb-8"></div>
        <div className="flex space-x-6">
          <button
            className={`text-lg uppercase tracking-wider duration-300 ${
              currentSection === 'projects'
                ? 'text-white'
                : 'text-gray-500 hover:text-purple-400'
            }`}
            onClick={() => setCurrentSection('projects')}
          >
            Projects
          </button>
          <button
            className={`text-lg uppercase tracking-wider duration-300 ${
              currentSection === 'experience'
                ? 'text-white'
                : 'text-gray-500 hover:text-purple-400'
            }`}
            onClick={() => setCurrentSection('experience')}
          >
            Experience
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 pb-8">
        <div
          className="transition-opacity duration-1000 delay-300"
          style={{ opacity: fadeIn ? 1 : 0 }}
        >
          {/* Projects Section */}
          {currentSection === 'projects' && (
            <div>
              <h1 className="text-2xl md:text-3xl mb-4 font-serif">Computer Graphics and Geometric Modeling</h1>
              <div className="h-px w-full bg-white opacity-50 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className="border border-white hover:border-purple-400 p-6 transition-all duration-300 cursor-pointer group relative"
                    onClick={() => openModal(project.id)}
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-1 transition-all duration-500 filter contrast-110"
                      />
                    </div>
                    <h3 className="text-2xl mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-s px-2 py-1 border border-white text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-m">{project.description}</p>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        [view details]
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-2xl md:text-3xl mb-4 mt-8 font-serif">Game Development and Art</h1>
              <div className="h-px w-full bg-white opacity-50 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects2.map((project) => (
                  <div 
                    key={project.id} 
                    className="border border-white hover:border-purple-400 p-6 transition-all duration-300 cursor-pointer group relative"
                    onClick={() => openModal(project.id)}
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-1 transition-all duration-500 filter contrast-110"
                      />
                    </div>
                    <h3 className="text-2xl mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-s px-2 py-1 border border-white text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-m">{project.description}</p>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        [view details]
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-2xl md:text-3xl mb-4 mt-8 font-serif">Software and Web Development</h1>
              <div className="h-px w-full bg-white opacity-50 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects3.map((project) => (
                  <div 
                    key={project.id} 
                    className="border border-white hover:border-purple-400 p-6 transition-all duration-300 cursor-pointer group relative"
                    onClick={() => openModal(project.id)}
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-1 transition-all duration-500 filter contrast-110"
                      />
                    </div>
                    <h3 className="text-2xl mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-s px-2 py-1 border border-white text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-m">{project.description}</p>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        [view details]
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section */}
          {currentSection === 'experience' && (
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="border-l-2 border-white pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-white"></div>
                  <h3 className="text-2xl">{job.company}</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-xl text-gray-300">{job.role}</span>
                    <span className="text-gray-400">{job.period}</span>
                  </div>
                  <p className="text-gray-300">{job.description}</p>
                  <p className="text-gray-300">{job.description2}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Footer */}
          <div
            className="mt-12 transition-opacity duration-1000 delay-500"
            style={{ opacity: fadeIn ? 1 : 0 }}
          >
            <div className="h-px w-full bg-white opacity-50 mb-8"></div>
            <button
              className="group relative px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-serif overflow-hidden"
              onClick={() => navigate('mainmenu', 'right')}
            >
              <span className="relative z-10">Return Home</span>
              <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            {/* <div className="relative -my-8 -mx-[2.5vw] py-20 flex justify-start">
              <div className="group flex items-center space-x-3 cursor-pointer">
                
                <ArrowButton 
                  direction="left" 
                  svgPath="/images/arrow.svg" 
                  fadeOut={false} 
                  navigate={navigate} 
                  pageName="mainmenu" 
                />
                <span className="ml-29 text-2xl transition-all duration-300 group-hover:opacity-50 group-hover:-translate-x-2">
                  Return Home
                </span> 
              </div> 
            <div>*/}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <div 
          className={`fixed inset-0 bg-black/60 bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          <div 
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-black bg-opacity-90 border border-white p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="sticky top-2 float-right text-white hover:text-purple-400 z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {getSelectedProject() && (
              <div className="modal-content space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl mb-2">{getSelectedProject()?.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {getSelectedProject()?.tags.map((tag, index) => (
                      <span key={index} className="text-s px-2 py-1 border border-white text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mx-auto w-1/2 aspect-video overflow-hidden">
                  <img 
                    src={getSelectedProject()?.thumbnail} 
                    alt={getSelectedProject()?.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl mb-2">Overview</h3>
                  <p className="text-gray-300 mb-4">{getSelectedProject()?.longDescription}</p>
                  
                  {/* Additional content for detailed view */}
                  <div className="mt-8">
                    <h3 className="text-xl mb-2">Technical Details</h3>
                    <p className="text-gray-300 mb-4">{getSelectedProject()?.technicalDetails}</p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl mb-2">Gallery</h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <img src={getSelectedProject()?.screenshot1}  alt="Additional screenshot" className="w-full h-full object-cover" />
                      <img src={getSelectedProject()?.screenshot2}  alt="Additional screenshot" className="w-full h-full object-cover" />
                      <img src={getSelectedProject()?.screenshot3}  alt="Additional screenshot" className="w-full h-full object-cover" />
                      <img src={getSelectedProject()?.screenshot4}  alt="Additional screenshot" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  {getSelectedProject()?.hasLink && (
                  <a 
                    href={getSelectedProject()?.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-white hover:bg-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                  )}
                  {getSelectedProject()?.hasGithub && (
                  <a 
                    href={getSelectedProject()?.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-white hover:bg-purple-400 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalProfile;