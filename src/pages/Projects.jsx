import { useState } from 'react';

function Projects() {
  const [filter, setFilter] = useState('*'); // Estado para controlar o filtro selecionado

  const handleFilterClick = selectedFilter => {
    setFilter(selectedFilter);
  };

  const projects = [
    {
      id: 1,
      title: 'EsteticWay App Web',
      category: 'filter-1',
      image: 'img/portfolio-1.jpg',
      link: 'img/portfolio-1.jpg'
    },
    {
      id: 2,
      title: 'Dojo-Samurai App',
      category: 'filter-2',
      image: 'img/portfolio-2.jpg',
      link: 'https://github.com/Sardo96/Project2-dojosamurai.git'
    },
    {
      id: 3,
      title: 'River Space Game',
      category: 'filter-3',
      image: 'img/portfolio-3.jpg',
      link: 'https://riverspace.netlify.app'
    },
    {
      id: 4,
      title: 'JavaScript Site Advogados',
      category: 'filter-1',
      image: 'img/portfolio-4.jpg',
      link: 'img/portfolio-4.jpg'
    },
    {
      id: 5,
      title: 'Doctor Appointment App',
      category: 'filter-2',
      image: 'img/portfolio-5.jpg',
      link: 'https://doctor-appointment-x.netlify.app'
    }
  ];

  const filteredProjects =
    filter === '*'
      ? projects
      : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container" href="#projects">
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <h2>Projetos</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <ul id="portfolio-filter">
              <li
                onClick={() => handleFilterClick('*')}
                className={filter === '*' ? 'filter-active' : ''}
              >
                All
              </li>
              <li
                onClick={() => handleFilterClick('filter-1')}
                className={filter === 'filter-1' ? 'filter-active' : ''}
              >
                Web Design
              </li>
              <li
                onClick={() => handleFilterClick('filter-2')}
                className={filter === 'filter-2' ? 'filter-active' : ''}
              >
                Mobile Apps
              </li>
              <li
                onClick={() => handleFilterClick('filter-3')}
                className={filter === 'filter-3' ? 'filter-active' : ''}
              >
                Game Dev
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${project.category} wow fadeInUp`}
              data-wow-delay={`${(project.id - 1) * 0.2}s`}
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={project.image} alt="Image" />
                </div>
                <div className="portfolio-text">
                  <h3>{project.title}</h3>
                  <a
                    className="btn"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
