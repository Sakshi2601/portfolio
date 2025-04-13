const projectsData = [
  {
    id: 1,
    name: "DigiVidya Learning Platform",
    duration: "Oct 2024 - Nov 2024",
    description: "Voice-based digital learning platform with an AI chatbot assistant.",
    demoLink: "https://hack-vcet.vercel.app",
    githubLink: "https://github.com/Sakshi2601/hack-vcet",
    image: "./assests/digi-vidya.png",
    tags: ["java", "htmlcss"],
  },
  {
    id: 2,
    name: "Housyy House Service Provider",
    duration: "Aug 2023 – Mar 2024",
    description: "MERN stack platform offering house services with back-end focus.",
    demoLink: "https://housyy.vercel.app",
    githubLink: "https://github.com/Haamidraza03/House-Services",
    image: "./assests/Housyy.png",
    tags: ["mern", "react"],
  },
  {
    id: 3,
    name: "Meal: Recipe Finder App",
    duration: "Mar 2024 - Apr 2024",
    description: "Suggests YouTube videos and recipes using React and Meal Database API.",
    demoLink: "https://meal-alpha.vercel.app",
    githubLink: "https://github.com/Sakshi2601/meal",
    image: "./assests/meal.png",
    tags: ["react"],
  },
  {
    id: 4,
    name: "Fashion Blaze E-Commerce",
    duration: "May 2023 – June 2023",
    description: "Seamless e-commerce experience using Owl Carousel, HTML, CSS, and JavaScript.",
    demoLink: "https://fashion-blaze-project.vercel.app",
    githubLink: "https://github.com/Sakshi2601/proj-cloth",
    image: "./assests/fashion-blaze.png",
    tags: ["htmlcss"],
  },
  {
    id: 5,
    name: "Digital Marketing Website",
    duration: "June 2024 – July 2024",
    description: "Website focusing on design and functionality using Bootstrap and Getform.io.",
    demoLink: "https://digital-marketing-sable.vercel.app",
    githubLink: "https://github.com/Sakshi2601/Digital-Marketing",
    image: "./assests/digital-marketing.png",
    tags: ["htmlcss"],
  },
  {
    id: 6,
    name: "Gamified Platform For Law Awareness",
    duration: "August 2024",
    description: "VR-based platform for learning laws, developed using MERN Stack and React360.",
    demoLink: null,
    githubLink: "https://github.com/Sakshi2601/main_project",
    image: "./assests/gamified.png",
    tags: ["mern", "react"],
  },
  {
    id: 7,
    name: "Photography Website",
    duration: "May 2023 - June 2023",
    description: "A showcase for excellent photography collections built with HTML and CSS.",
    demoLink: "https://photography-ashy.vercel.app",
    githubLink: "https://github.com/Sakshi2601/photography",
    image: "./assests/photography.png",
    tags: ["htmlcss"]
  },
  {
    id: 8,
    name: "Weather App",
    duration: "March 2024 - April 2024",
    description: "Provides weather updates for different locations using Weather API.",
    demoLink: "https://weather-app-omega-smoky-24.vercel.app",
    githubLink: "https://github.com/Sakshi2601/weather-app",
    image: "./assests/weather.png",
    tags: ["htmlcss"]
  },
  {
    id: 9,
    name: "Import Export System",
    duration: "March 2024 - April 2024",
    description: "Full Stack Java Web Application to provide efficient trade.",
    demoLink: "https://import-export-system.vercel.app",
    githubLink: "https://github.com/Sakshi2601/import-export",
    image: "./assests/import-export.png",
    tags: ["htmlcss", "java"]
  },
  {
    id: 10,
    name: "Sketch Calc",
    duration: "Dec 2024 - Jan 2025",
    description: "A math notes application to find solution using diagrams",
    demoLink: "",
    githubLink: "https://github.com/Sakshi2601/Sketch-Calc",
    image: "./assests/sketch-calc.png",
    tags: ["react"]
  },
  {
    id: 11,
    name: "My React Portfolio",
    duration: "Dec 2024 - Jan 2025",
    description: "My Portfolio made using React and Vite config with Getform.io.",
    demoLink: "https://sakshi-choudhary-portfolio.vercel.app",
    githubLink: "https://github.com/Sakshi2601/my-portfolio",
    image: "./assests/portfolio.png",
    tags: ["react"]
  },
  {
    id: 12,
    name: "Rock Paper Scissor",
    duration: "June 2024 - July 2024",
    description: "Javascript program for rock paper and scissor game.",
    demoLink: "https://rock-paper-scissor-rouge-three.vercel.app",
    githubLink: "https://github.com/Sakshi2601/rock-paper-scissor",
    image: "./assests/rock-paper-scissor.png",
    tags: ["htmlcss"]
  },
];

const container = document.getElementById('projectCards');

function renderProjects(filter = "all") {
  container.innerHTML = "";
  const filtered = filter === "all" ? projectsData : projectsData.filter(p => p.tags.includes(filter));

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";

    card.innerHTML = `
      <div class="card project-card h-100 bg-black text-white border border-dark shadow-lg">
        <img src="${project.image}" class="card-img-top project-img" alt="${project.name}">
        <div class="card-body project-body d-flex flex-column">
          <h5 class="card-title project-title" style="color: #ff5722;">${project.name}</h5>
          <p class="text-muted mb-1 project-duration">${project.duration}</p>
          <p class="card-text project-desc">${project.description}</p>
          <div class="mt-auto project-links">
            ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="btn btn-sm btn-demo me-2">Demo</a>` : ""}
            <a href="${project.githubLink}" target="_blank" class="btn btn-sm btn-github">GitHub</a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

renderProjects();

// filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

const internshipsData = [
  {
    company: "SDAC Infotech",
    role: "Software Intern",
    duration: "December 2024 – February 2025",
    description: "Worked on real-world projects to enhance the knowledge of Java and MVC2 model.",
    icon: "🧑‍💻"
  },
  {
    company: "Codsoft",
    role: "Python Intern",
    duration: "June 2024 – July 2024",
    description: "Worked on real-world projects to enhance knowledge of Python and Tkinter.",
    icon: "🐍"
  },
  {
    company: "Last Moment Tuitions",
    role: "Marketing Intern",
    duration: "May 2024 – June 2024",
    description: "Promoted educational content and increased student engagement.",
    icon: "📈"
  },
  {
    company: "Jagtaran Educational Society",
    role: "Software Intern",
    duration: "December 2023 – January 2024",
    description: "Designed software to support student management.",
    icon: "📊"
  },
  {
    company: "Codingwiz Company",
    role: "Front-end Developer Intern",
    duration: "May 2023 – June 2023",
    description: "Translated design concepts into functional user interfaces in projects.",
    icon: "🎨"
  }
];

const internshipContainer = document.getElementById("internship-cards");

internshipsData.forEach(({ company, role, duration, description, icon }) => {
  const col = document.createElement("div");
  col.className = "col-md-6";

  col.innerHTML = `
    <div class="card internship-card h-100">
      <div class="card-body">
        <div class="d-flex align-items-start gap-3">
          <div class="icon fs-2">${icon}</div>
          <div>
            <h5 class="card-title mb-1">${company} - ${role}</h5>
            <p class="duration small mb-2">${duration}</p>
            <p class="card-text">${description}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  internshipContainer.appendChild(col);
});

