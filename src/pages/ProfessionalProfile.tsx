import { useState, useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { PageProps } from '../App';
import ArrowButton from '../components/ArrowButton';

const workExperience = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    description: "Led development of interactive web applications using React and TypeScript. Implemented modern UI/UX designs and optimized performance."
  },
  {
    company: "Digital Solutions Co.",
    role: "Frontend Developer",
    period: "2020 - 2022",
    description: "Built responsive interfaces with React. Collaborated with design team to translate concepts into functional components."
  },
  {
    company: "Creative Web Studios",
    role: "Junior Developer",
    period: "2018 - 2020",
    description: "Assisted in development of client websites and web applications. Learned fundamentals of modern web development."
  }
];

const projects = [
  {
    id: 1,
    title: "Algorithmic Art Generator",
    tags: ["React", "Canvas API", "TypeScript"],
    thumbnail: "public/images/placeholder.jpg",
    description: "A creative coding project that generates unique algorithmic art pieces based on user input and randomization.",
    longDescription: "This application leverages mathematical algorithms to create unique visual compositions. Users can adjust parameters to influence the generative process, resulting in one-of-a-kind digital artworks. The project explores the intersection of code and creativity, using React for the interface and Canvas API for rendering graphics.",
    link: "https://example.com/art-generator",
    github: "https://github.com/yourusername/algorithmic-art"
  },
  {
    id: 2,
    title: "Interactive Data Visualization",
    tags: ["D3.js", "React", "Firebase"],
    thumbnail: "public/images/placeholder2.png",
    description: "A dashboard that transforms complex datasets into interactive, visually compelling representations.",
    longDescription: "This data visualization project makes complex information accessible through interactive charts and graphs. Built with D3.js and React, it features real-time updates via Firebase, custom animations, and responsive design for all device sizes. The visualization techniques range from standard bar charts to more experimental representations.",
    link: "https://example.com/data-viz",
    github: "https://github.com/yourusername/data-visualization"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    tags: ["Next.js", "Tailwind CSS", "Stripe API"],
    thumbnail: "public/images/placeholdersqr2.png",
    description: "A fully functional e-commerce platform with modern design, smooth animations, and secure payment processing.",
    longDescription: "This e-commerce solution features a clean, intuitive interface built with Next.js and Tailwind CSS. It includes product filtering, user accounts, shopping cart functionality, and secure checkout via Stripe. Performance optimizations ensure quick load times and smooth transitions between pages.",
    link: "https://example.com/ecommerce",
    github: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 4,
    title: "Music Visualization Tool",
    tags: ["Three.js", "Web Audio API", "React"],
    thumbnail: "/api/placeholder/600/400",
    description: "A 3D audio visualization tool that reacts to music in real-time, creating immersive visual experiences.",
    longDescription: "This project uses the Web Audio API to analyze audio frequencies and Three.js to render dynamic 3D visualizations that respond to music in real-time. Users can upload their own audio files or connect to streaming services. The visualizations adapt to different audio characteristics, creating unique visual patterns for each track.",
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
    return projects.find(project => project.id === selectedProject);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white font-serif overflow-hidden">
      {/* Header - Fixed at the top */}
      <div
        className="px-4 md:px-8 lg:px-16 py-8 transition-opacity duration-1000 bg-black z-10"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        <h1 className="text-5xl md:text-6xl mb-4 font-serif">Professional Profile</h1>
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <span className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      [view details]
                    </span>
                  </div>
                </div>
              ))}
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
            className="mt-16 transition-opacity duration-1000 delay-500"
            style={{ opacity: fadeIn ? 1 : 0 }}
          >
            <div className="h-px w-full bg-white opacity-50 mb-8"></div>
            <button
              className="px-6 py-3 border border-white bg-transparent hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate('mainmenu', 'right')}
            >
              Return Home
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

                <div className="relative aspect-video overflow-hidden">
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
                    <p className="text-gray-300 mb-4">
                      This section can contain in-depth technical explanations about how the project was built,
                      challenges faced, and solutions implemented. You can include code snippets, architecture
                      diagrams, or any other technical details relevant to the project.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl mb-2">Gallery</h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <img src="/api/placeholder/400/300" alt="Additional screenshot" className="w-full h-full object-cover" />
                      <img src="/api/placeholder/400/300" alt="Additional screenshot" className="w-full h-full object-cover" />
                      <img src="/api/placeholder/400/300" alt="Additional screenshot" className="w-full h-full object-cover" />
                      <img src="/api/placeholder/400/300" alt="Additional screenshot" className="w-full h-full object-cover" />
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