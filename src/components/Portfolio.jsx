import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Web Solution",
    BRAND: "Graphics",
    PHOTOS: "Website",
  };

  const projectsData = [
    {
      title: "Magrellos Foods",
      projectInfo:
        "An Online Food Ordering Solutiom.",
      client: "Magrellos Foods",
      technologies: "PHP, WooCormmece, GCP, Jquery, Cart Functionality, HTTP/3, W3 Cache",
      industry: "Foods",
      date: "2023",
      url: {
        name: "www.magrellosfoods.com",
        link: "https://www.example.com",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/magrellos 1.png",
      sliderImages: [
        "images/projects/magrellos 2.png",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "BOLORIMS",
      projectInfo:
        "A Multivendor ecormmerce Website.",
      client: "BEX NG",
      technologies: "GCP, PHP, AJAX, GIT, HTML, CSS, WooCormmerce, NGIX, Mysql, ",
      industry: "Ecormmece",
      date: "2022",
      url: {
        name: "www.bolorims.com",
        link: "https://www.bolorims.com",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/bolorims 1.png",
      sliderImages: [
        "images/projects/bolorims 2.png",
        "images/projects/Bolorims 3.png",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Ash Xander",
      projectInfo:
        "A Corporate Website.",
      client: "AX Limited",
      technologies: "ReactJS,Github, HTML5, CSS3, Apache, Boostrap, Jquery, Chart.js, Google Font Api",
      industry: "Investment Firm",
      date: "2022",
      url: {
        name: "www.ashxander.com",
        link: "https://www.ashxander.com",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/Ash 1.png",
      sliderImages: [
        "images/projects/Ash 2.png",
        "images/projects/Ash 3.png",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "Core Asset Management",
      projectInfo:
        "A Corporate Website for Core Asset Management Company",
      client: "Core Asset",
      technologies: "WordPress, HTML5, CSS3, PHP, GCP, Jquery, Apache, Mysql, Tidio, Boostrap, jsDelivr",
      industry: "Investment Firm",
      date: "2023",
      url: {
        name: "www.coreassetng.com",
        link: "https://www.coreassetng.com",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/Core 1.png",
      sliderImages: [
        "images/projects/Core 2.png",
        "images/projects/Core 3.png",
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Spectre",
      projectInfo:
        "A Coworking app for a law company.",
      client: "TOLG",
      technologies: "CakePHP, HTML5, CSS3, PHP, DigitalOcean, Git, JavaScript, GitHub Action(CI/CD), CSRF,  API ",
      industry: "Law Firm",
      date: "2021",
      url: {
        name: "www.spectre.com",
        link: "https://spectre.ftabapp.com/",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      // thumbImage: "images/projects/project-5.jpg",
      // sliderImages: [
      //   "images/projects/project-1.jpg",
      //   "images/projects/project-5.jpg",
      // ],
      categories: [filters.DESIGN],
    },
    {
      title: "Love of Christ Church",
      projectInfo:
        "A Website for Church.",
      client: "Loccim",
      technologies: "WordPress, HTML5, CSS3, PHP, Mysql, GCP, Apache",
      industry: "Religious",
      date: "2023",
      url: {
        name: "www.loccim.org",
        link: "https://loccim.org/",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/loccim 1.png",
      // sliderImages: [
      //   "images/projects/project-1.jpg",
      //   "images/projects/project-5.jpg",
      // ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 7",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "",
      sliderImages: [
        "",
        "",
      ],
      categories: [filters.DESIGN, filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
