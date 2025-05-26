import { useState, useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { PageProps } from '../App';

const workExperience = [
  {
    company: "BG Communications International Inc.",
    role: "Full-Stack Developer",
    period: "2024 - 2025",
    description: "Led development of interactive web applications using React, TypeScript and Springboot. Implemented modern UI/UX designs and optimized performance."
  },
  {
    company: "Genetec Inc.",
    role: "Integration Specialist",
    period: "2022",
    description: "Tested and integrated various software solutions. Collaborated with cross-functional teams and clients to ensure seamless integration of systems."
  },
  {
    company: "Concordia University",
    role: "B.Eng. Software Engineering (Completed)",
    period: "2021-2025",
    description: "Tested and integrated various software solutions. Collaborated with cross-functional teams and clients to ensure seamless integration of systems."
  },
  {
    company: "10+ Hackathons and Competitions",
    role: "ConUHacks, McGame Jam, CsGames, and many more",
    period: "2021-2025",
    description: "Tested and integrated various software solutions. Collaborated with cross-functional teams and clients to ensure seamless integration of systems."
  }
];

const projects = [
  {
    id: 1,
    title: "3D Water Ripple Simulator",
    tags: ["C++", "OpenGL", "LibIGL", "Eigen"],
    thumbnail: "public/images/waterripple.png",
    description: "A creative coding project that generates unique algorithmic art pieces based on user input and randomization.",
    longDescription: "This application leverages mathematical algorithms to create unique visual compositions. Users can adjust parameters to influence the generative process, resulting in one-of-a-kind digital artworks. The project explores the intersection of code and creativity, using React for the interface and Canvas API for rendering graphics.",
    technicalDetails: "Built with React and TypeScript, this project utilizes the Canvas API for rendering graphics. It features a user-friendly interface that allows users to customize parameters, generating unique art pieces each time. The application is optimized for performance and responsiveness, ensuring smooth interactions.",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/art-generator",
    github: "https://github.com/yourusername/algorithmic-art"
  },
  {
    id: 2,
    title: "Visual 3D B-Spline Editor",
    tags: ["C++", "OpenGL", "LibIGL"],
    thumbnail: "public/images/placeholder2.png",
    description: "A dashboard that transforms complex datasets into interactive, visually compelling representations.",
    longDescription: "This data visualization project makes complex information accessible through interactive charts and graphs. Built with D3.js and React, it features real-time updates via Firebase, custom animations, and responsive design for all device sizes. The visualization techniques range from standard bar charts to more experimental representations.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/data-viz",
    github: "https://github.com/yourusername/data-visualization"
  },
  {
    id: 3,
    title: "Zippo Lighter Technical Modeling",
    tags: ["Fusion 360", "Technical Drawing"],
    thumbnail: "public/images/placeholder3.jpg",
    description: "A fully functional e-commerce platform with modern design, smooth animations, and secure payment processing.",
    longDescription: "This e-commerce solution features a clean, intuitive interface built with Next.js and Tailwind CSS. It includes product filtering, user accounts, shopping cart functionality, and secure checkout via Stripe. Performance optimizations ensure quick load times and smooth transitions between pages.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/ecommerce",
    github: "https://github.com/yourusername/ecommerce-platform"
  }
];

const projects2 = [
  {
    id: 4,
    title: "Giuseppe's Cellar",
    tags: ["Unity", "C#", "Blender", "AI Behavior Trees", "3D"],
    thumbnail: "public/images/placeholder.jpg",
    description: "A creative coding project that generates unique algorithmic art pieces based on user input and randomization.",
    longDescription: "This application leverages mathematical algorithms to create unique visual compositions. Users can adjust parameters to influence the generative process, resulting in one-of-a-kind digital artworks. The project explores the intersection of code and creativity, using React for the interface and Canvas API for rendering graphics.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/art-generator",
    github: "https://github.com/yourusername/algorithmic-art"
  },
  {
    id: 5,
    title: "Chromatic Journey",
    tags: ["Unity", "C#", "2D Animation", "Level Design", "Digital Art"],
    thumbnail: "public/images/placeholder2.png",
    description: "A dashboard that transforms complex datasets into interactive, visually compelling representations.",
    longDescription: "This data visualization project makes complex information accessible through interactive charts and graphs. Built with D3.js and React, it features real-time updates via Firebase, custom animations, and responsive design for all device sizes. The visualization techniques range from standard bar charts to more experimental representations.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/data-viz",
    github: "https://github.com/yourusername/data-visualization"
  },
  {
    id: 6,
    title: "Chords of the Past",
    tags: ["Unity", "C#", "Digital Art", "2D Animation", "Game Design", "Sound Design"],
    thumbnail: "public/images/placeholder3.jpg",
    description: "A fully functional e-commerce platform with modern design, smooth animations, and secure payment processing.",
    longDescription: "This e-commerce solution features a clean, intuitive interface built with Next.js and Tailwind CSS. It includes product filtering, user accounts, shopping cart functionality, and secure checkout via Stripe. Performance optimizations ensure quick load times and smooth transitions between pages.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/ecommerce",
    github: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 7,
    title: "Undeath",
    tags: ["Unity", "C#", "Pixel Art", "Sprite Animation"],
    thumbnail: "public/images/placeholder4.png",
    description: "A 3D audio visualization tool that reacts to music in real-time, creating immersive visual experiences.",
    longDescription: "This project uses the Web Audio API to analyze audio frequencies and Three.js to render dynamic 3D visualizations that respond to music in real-time. Users can upload their own audio files or connect to streaming services. The visualizations adapt to different audio characteristics, creating unique visual patterns for each track.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/music-viz",
    github: "https://github.com/yourusername/music-visualization"
  }
];

const projects3 = [
  {
    id: 8,
    title: "OPUS Web - ERP Module",
    tags: ["React", "TypeScript", "Springboot", "Java", "Docker", "SQL", "JUnit", "Robot + Selenium", "Figma"],
    thumbnail: "public/images/placeholder.jpg",
    description: "A creative coding project that generates unique algorithmic art pieces based on user input and randomization.",
    longDescription: "This application leverages mathematical algorithms to create unique visual compositions. Users can adjust parameters to influence the generative process, resulting in one-of-a-kind digital artworks. The project explores the intersection of code and creativity, using React for the interface and Canvas API for rendering graphics.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/art-generator",
    github: "https://github.com/yourusername/algorithmic-art"
  },
  {
    id: 9,
    title: "Condo Connect - Property Management System",
    tags: ["React", "CSS", "JavaScript", "Firebase", "Python", "JUnit", "Figma"],
    thumbnail: "public/images/placeholder2.png",
    description: "A dashboard that transforms complex datasets into interactive, visually compelling representations.",
    longDescription: "This data visualization project makes complex information accessible through interactive charts and graphs. Built with D3.js and React, it features real-time updates via Firebase, custom animations, and responsive design for all device sizes. The visualization techniques range from standard bar charts to more experimental representations.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/data-viz",
    github: "https://github.com/yourusername/data-visualization"
  },
  {
    id: 10,
    title: "Journalling Mobile App",
    tags: ["React Native", "Tailwindcss", "JavaScript", "Figma", "UI/UX", "User Feedback and Testing"],
    thumbnail: "public/images/placeholder3.jpg",
    description: "A fully functional e-commerce platform with modern design, smooth animations, and secure payment processing.",
    longDescription: "This e-commerce solution features a clean, intuitive interface built with Next.js and Tailwind CSS. It includes product filtering, user accounts, shopping cart functionality, and secure checkout via Stripe. Performance optimizations ensure quick load times and smooth transitions between pages.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/ecommerce",
    github: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 11,
    title: "Purrsonality - Web Visual Novel",
    tags: ["React", "TypeScript", "Vite", "Digital Art", "Decision Trees", "Storywriting"],
    thumbnail: "public/images/placeholder4.png",
    description: "A 3D audio visualization tool that reacts to music in real-time, creating immersive visual experiences.",
    longDescription: "This project uses the Web Audio API to analyze audio frequencies and Three.js to render dynamic 3D visualizations that respond to music in real-time. Users can upload their own audio files or connect to streaming services. The visualizations adapt to different audio characteristics, creating unique visual patterns for each track.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/music-viz",
    github: "https://github.com/yourusername/music-visualization"
  }, 
  {
    id: 12,
    title: "Maison Wells - Personal Portfolio",
    tags: ["React", "TypeScript", "Vite", "Tailwindcss", "CSS Animation" ],
    thumbnail: "public/images/placeholder4.png",
    description: "A 3D audio visualization tool that reacts to music in real-time, creating immersive visual experiences.",
    longDescription: "This project uses the Web Audio API to analyze audio frequencies and Three.js to render dynamic 3D visualizations that respond to music in real-time. Users can upload their own audio files or connect to streaming services. The visualizations adapt to different audio characteristics, creating unique visual patterns for each track.",
    technicalDetails: "",
    screenshot1: "public/images/screenshot1.jpg",
    screenshot2: "public/images/screenshot2.jpg",
    screenshot3: "public/images/screenshot3.jpg",
    screenshot4: "public/images/screenshot4.jpg",
    link: "https://example.com/music-viz",
    github: "https://github.com/yourusername/music-visualization"
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
                  <a 
                    href={getSelectedProject()?.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-white hover:bg-purple-400 hover:bg-opacity-10 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={getSelectedProject()?.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-white hover:bg-purple-400 hover:bg-opacity-10 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
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