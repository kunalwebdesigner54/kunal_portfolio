// Portfolio Projects Data extracted from Kunal Manchanda's Resume
const projectsData = [
  // Video Editing & Motion Graphics Portfolio
  {
    title: "YouTube Video Editing Channel",
    category: "video",
    typeBadge: "YouTube Channel",
    badgeClass: "badge-video",
    description: "Official YouTube video portfolio featuring post-production video editing, video promos, color grading, and cinematic cuts.",
    tags: ["Adobe Premiere Pro", "After Effects", "YouTube", "Video Editing"],
    link: "https://www.youtube.com/@kunalmanchanda3460"
  },
  {
    title: "Facebook Video & Reels Showcase",
    category: "video",
    typeBadge: "Facebook Portfolio",
    badgeClass: "badge-video",
    description: "Facebook video page presenting creative short-form video reels, promotional ad edits, social media video campaigns, and dynamic visual edits.",
    tags: ["CapCut", "DaVinci Resolve", "Social Media Video", "Reels & Shorts", "Facebook Video"],
    link: "https://www.facebook.com/profile.php?id=61586676636591"
  },

  // Client Websites & Web Apps
  {
    title: "Nexus 3D Web Application",
    category: "web",
    typeBadge: "Live 3D Web App",
    badgeClass: "badge-live",
    description: "Interactive 3D web application with modern web animations, immersive experience, and high-performance frontend UI.",
    tags: ["Three.js", "3D Web", "React.js", "Interactive UI"],
    link: "https://nexus-3d-website.netlify.app/"
  },
  {
    title: "Technogrep Portal",
    category: "web",
    typeBadge: "Client Website",
    badgeClass: "badge-web",
    description: "Modern, responsive IT corporate website built with interactive UI/UX and clean frontend architecture.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    link: "https://www.technogrep.com/"
  },
  {
    title: "TTStars Platform",
    category: "web",
    typeBadge: "Web Application",
    badgeClass: "badge-live",
    description: "Table Tennis sports application dashboard & marketplace interface built for active engagement.",
    tags: ["React.js", "MERN Stack", "Figma Design"],
    link: "https://app-dev.ttstars.ai/home"
  },
  {
    title: "SSP Production Website",
    category: "web",
    typeBadge: "Live Web App",
    badgeClass: "badge-live",
    description: "Sleek web platform featuring high-converting product layouts and responsive web standards.",
    tags: ["HTML5", "Bootstrap", "JavaScript"],
    link: "https://ssp-website.netlify.app/"
  },
  {
    title: "Xpertmyy Platform",
    category: "web",
    typeBadge: "Live Netlify App",
    badgeClass: "badge-live",
    description: "Professional service management portal with user-centric interface design.",
    tags: ["UI/UX", "JavaScript", "Responsive Design"],
    link: "https://xpertmyy.netlify.app/"
  },
  {
    title: "TryMasaj Portal",
    category: "web",
    typeBadge: "Client Website",
    badgeClass: "badge-web",
    description: "Wellness and massage booking client portal crafted with interactive UI components.",
    tags: ["UI/UX Design", "HTML/CSS", "JavaScript"],
    link: "https://trymasaj.com/"
  },
  {
    title: "GetProspa Platform",
    category: "web",
    typeBadge: "Client Website",
    badgeClass: "badge-web",
    description: "Business growth and finance client application with clean modern aesthetics.",
    tags: ["MERN Stack", "UI Design", "Responsive Layout"],
    link: "https://getprospa.com/"
  },
  {
    title: "Kitlabs US Platform",
    category: "web",
    typeBadge: "Client Portal",
    badgeClass: "badge-web",
    description: "Tech solutions company portal designed for high speed and mobile responsiveness.",
    tags: ["Web Design", "UI Development", "Speed Optimized"],
    link: "https://www.kitlabs.us/"
  },
  {
    title: "RingCentral Web Interface",
    category: "web",
    typeBadge: "Enterprise Web",
    badgeClass: "badge-web",
    description: "Enterprise communication platform marketing & UI interface development.",
    tags: ["UI Development", "HTML5", "CSS3", "JS"],
    link: "https://www.ringcentral.com"
  },
  {
    title: "Chartize Analytics Dashboard",
    category: "web",
    typeBadge: "Web Application",
    badgeClass: "badge-live",
    description: "Interactive analytics visualization web app with dark theme charts and user metrics.",
    tags: ["React.js", "Chart.js", "Dashboard UI"],
    link: "https://chartize.netlify.app/"
  },
  {
    title: "Finyogi Finance Web Platform",
    category: "web",
    typeBadge: "Finance Web App",
    badgeClass: "badge-web",
    description: "Financial planning and management web app featuring clean data visualization UI.",
    tags: ["MERN Stack", "React", "Node.js"],
    link: "https://www.finyogi.com/"
  },
  {
    title: "Shirgul Travels Portal",
    category: "web",
    typeBadge: "Travel Website",
    badgeClass: "badge-web",
    description: "Travel & tourism booking application UI designed for seamless travel discovery.",
    tags: ["Bootstrap", "UI/UX", "Travel UI"],
    link: "https://www.shirgultravels.com/"
  },
  {
    title: "Recipe Web Application",
    category: "web",
    typeBadge: "Live Web App",
    badgeClass: "badge-live",
    description: "Culinary web app with recipe discovery, filter search, and interactive cards.",
    tags: ["JavaScript", "HTML5/CSS3", "UI Design"],
    link: "https://recipewebsiteapp.netlify.app/"
  },
  {
    title: "Golf Web App",
    category: "web",
    typeBadge: "Sports Web App",
    badgeClass: "badge-live",
    description: "Interactive golf score and community application design with custom icons.",
    tags: ["Sports UI", "Mobile First", "JS"],
    link: "https://golfwebappdesign.netlify.app/"
  },
  {
    title: "Dolphin Food Delivery Website",
    category: "web",
    typeBadge: "Food Web App",
    badgeClass: "badge-live",
    description: "Food ordering and restaurant menu showcase website with cart experience.",
    tags: ["UI/UX Design", "Web App", "Netlify"],
    link: "https://dolphinfoodwebsite.netlify.app/"
  },
  {
    title: "Finance Dashboard App",
    category: "web",
    typeBadge: "FinTech App",
    badgeClass: "badge-live",
    description: "Clean dark-mode financial dashboard app prototype built with MERN stack principles.",
    tags: ["React", "Express", "Node.js"],
    link: "https://financewebsiteapp.netlify.app/"
  },
  {
    title: "Bernard Luxury Watch Website",
    category: "web",
    typeBadge: "E-Commerce UI",
    badgeClass: "badge-live",
    description: "Luxury watch showcase and catalog web application with elegant typography.",
    tags: ["Luxury UI", "Product Showcase", "CSS3"],
    link: "https://bernard-watch.netlify.app/"
  },
  {
    title: "Dream Villa Real Estate App",
    category: "web",
    typeBadge: "Real Estate App",
    badgeClass: "badge-live",
    description: "Property listing and villa booking portal with interactive image galleries.",
    tags: ["Real Estate UI", "React", "CSS Grid"],
    link: "https://dreamvillawebsite.netlify.app/"
  },
  {
    title: "House of Mubarak E-Commerce",
    category: "web",
    typeBadge: "Lifestyle Web App",
    badgeClass: "badge-live",
    description: "Greetings & lifestyle retail platform with rich mobile-first interactive design.",
    tags: ["Figma to Web", "Netlify", "Mobile First"],
    link: "https://house-of-mubarak.netlify.app/"
  },
  {
    title: "Twice Dating Web Application",
    category: "web",
    typeBadge: "Dating Platform",
    badgeClass: "badge-live",
    description: "Social networking and dating web application design with card swipe interface.",
    tags: ["Mobile Web App", "UI/UX", "JavaScript"],
    link: "https://twice-dating-app.netlify.app/"
  },
  {
    title: "Life Activated Fitness App",
    category: "web",
    typeBadge: "Health & Fitness",
    badgeClass: "badge-live",
    description: "Fitness coaching and workout tracker application with dynamic stats display.",
    tags: ["Fitness UI", "React", "Mobile App"],
    link: "https://lifeactivatedmobileapp.netlify.app/"
  },

  // Figma Mobile App Prototypes & UI Designs
  {
    title: "TTStars Table Tennis App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Dark theme mobile app prototype designed in Figma for table tennis tournament tracking.",
    tags: ["Figma", "UI/UX", "Dark Theme", "Mobile App"],
    link: "https://www.figma.com/proto/XHPJifX0DCgNKOPxdKzM5p/TTStars-dark-theme?node-id=1397-56800"
  },
  {
    title: "Food Mobile App UI",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Modern food delivery iOS/Android app UI design with custom vectors and micro-interactions.",
    tags: ["Figma", "Food App UI", "User Research"],
    link: "https://www.figma.com/proto/TAp8WKDCR3COgIc8SfoWZc/food-app?page-id=0%3A1&node-id=115-3"
  },
  {
    title: "House of Mubarak Mobile App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Festive greetings and gift booking mobile app prototype with vibrant color system.",
    tags: ["Figma", "Mobile UI", "Prototyping"],
    link: "https://www.figma.com/proto/EdlfTRvq6BL81d1YPQICrB/Mobile-App---House-of-Mubarak-Greetings-Ver-2?page-id=0%3A1&node-id=1-7756"
  },
  {
    title: "Squabblur V2 Mobile App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Next-gen social video and media sharing app layout designed in Figma.",
    tags: ["Figma", "Social App UI", "Wireframing"],
    link: "https://www.figma.com/proto/4FlAnUYQJ4ADqQzsXneKUw/Mobile-App---Squabblur-V_2?page-id=0%3A1&node-id=1-3"
  },
  {
    title: "Twice Dating Mobile App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "High-fidelity mobile dating app UI/UX design with custom user profile cards.",
    tags: ["Figma", "Mobile App UI", "User Personas"],
    link: "https://www.figma.com/proto/egHMrzG6WCtouJB8WTAPrK/Dating-App?page-id=0%3A1&node-id=1-7755"
  },
  {
    title: "Who Delivers Mobile App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "On-demand courier and delivery service mobile app UI design with map integration screens.",
    tags: ["Figma", "Delivery App", "Mobile Design"],
    link: "https://www.figma.com/proto/Wchx3XyOClD8iqts3WctZR/Mobile-App---WHO-DELIVERS-APP?page-id=0%3A1&node-id=1-35"
  },
  {
    title: "Turn Up Ver 2.0 Mobile App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Event booking and nightlife discovery mobile app interface design.",
    tags: ["Figma", "Event App UI", "Prototyping"],
    link: "https://www.figma.com/proto/8qbIwSksZ37nt6L0d4rDBP/Mobile-App---Turn-up-Ver-2.0?page-id=0%3A1&node-id=1-32"
  },
  {
    title: "Punjabi Maa Mobile App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Regional cultural & learning mobile application high-fidelity prototype.",
    tags: ["Figma", "UI/UX Design", "Mobile Prototype"],
    link: "https://www.figma.com/proto/mMUpKv8KeAjXAX9zelXIjV/Punjabi-Maa?page-id=0%3A1&node-id=1-2"
  },
  {
    title: "Meevo Ver 2.2 Mobile App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Comprehensive salon and spa appointment booking mobile app interface.",
    tags: ["Figma", "Beauty & Salon UI", "Mobile App"],
    link: "https://www.figma.com/proto/OLJyxRXes0RZfI3klp96ad/Mobile-App---Meevo-Ver-2.2?page-id=0%3A1&node-id=0-1343"
  },
  {
    title: "Awaken Ver 7 Fitness App",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Mindfulness and daily meditation mobile application interface prototype.",
    tags: ["Figma", "Wellness App UI", "Dark Mode"],
    link: "https://www.figma.com/proto/Vg9r4CTSQ5Op7209bbsLFa/Mobile-App---Awaken-Ver-7?page-id=0%3A1&node-id=1-8"
  },
  {
    title: "Fitness Mobile App UI",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Personal training and workout tracking iOS/Android application concept.",
    tags: ["Figma", "Fitness UI", "Prototyping"],
    link: "https://www.figma.com/proto/0P4dFri54dzs5XgOKtIx87/Mobile-App---fitness?page-id=0%3A1&node-id=1-2"
  },
  {
    title: "SSP Production App UI",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "E-Commerce mobile application design system and high-fidelity screens.",
    tags: ["Figma", "Design System", "Mobile App"],
    link: "https://www.figma.com/proto/RPPmM250lGLu5NZw3F1q2h/ssp-production?page-id=0%3A1&node-id=38-2"
  },
  {
    title: "Plant Dog Mobile App UI",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Pet care & plant care tracker combined mobile application UI design.",
    tags: ["Figma", "Pet Tech", "UI Design"],
    link: "https://www.figma.com/proto/jtt4WZrlkKsosmoVjI4rRZ/plant-dog?page-id=0%3A1&node-id=5-2"
  },
  {
    title: "Beemaids App UI Design",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Home services and cleaning maid booking mobile application UI prototype.",
    tags: ["Figma", "Home Services", "UI/UX"],
    link: "https://www.figma.com/proto/F4KfhdOqmkkO7nvf5Aye7e/beemaids?page-id=0%3A1&node-id=0-3"
  },
  {
    title: "Mansa Infotech Prototype",
    category: "figma",
    typeBadge: "Figma Prototype",
    badgeClass: "badge-figma",
    description: "Corporate IT agency web application and mobile branding interface design.",
    tags: ["Figma", "Agency UI", "Branding"],
    link: "https://www.figma.com/proto/ZIeSgNfZjSC9d0qgN0uK4R/mansa-infotech?page-id=0%3A1&node-id=7-2"
  }
];

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  let currentCategory = 'all';
  let searchQuery = '';

  // Render Projects Function
  function renderProjects() {
    projectsGrid.innerHTML = '';

    const filtered = projectsData.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="ri-search-line" style="font-size: 3rem; color: var(--primary-cyan); margin-bottom: 12px; display: block;"></i>
          <h3>No matching projects found</h3>
          <p>Try refining your search query or switching filters.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      
      const tagsHtml = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

      let iconClass = 'ri-global-line';
      let linkText = 'Visit Live Project';

      if (project.category === 'figma') {
        iconClass = 'ri-figma-line';
        linkText = 'Open Figma Prototype';
      } else if (project.category === 'video') {
        if (project.link.includes('youtube.com')) {
          iconClass = 'ri-youtube-fill';
          linkText = 'Watch YouTube Portfolio';
        } else if (project.link.includes('facebook.com')) {
          iconClass = 'ri-facebook-box-fill';
          linkText = 'View Facebook Portfolio';
        } else {
          iconClass = 'ri-film-line';
          linkText = 'Watch Video Portfolio';
        }
      }

      card.innerHTML = `
        <div class="project-header-bar">
          <span class="project-type-badge ${project.badgeClass}">${project.typeBadge}</span>
          <i class="${iconClass}" style="color: ${project.category === 'video' ? 'var(--accent-pink)' : 'var(--text-muted)'}; font-size: 1.25rem;"></i>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="skill-tags" style="margin-bottom: 16px;">
            ${tagsHtml}
          </div>
          <div class="project-footer">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
              ${linkText}
              <i class="ri-external-link-line"></i>
            </a>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }

  // Initial Render
  renderProjects();

  // Filter Buttons Event Listener
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  // Search Input Event Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Sticky Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'ri-close-line';
      } else {
        icon.className = 'ri-menu-line';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.querySelector('i').className = 'ri-menu-line';
      });
    });
  }

  // Contact Form Mailto Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const mailtoLink = `mailto:Kunalwebdesigner54@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;

      window.location.href = mailtoLink;
      showToast("Opening email client to send message...");
      contactForm.reset();
    });
  }
});

// Toast Notification Helper
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="ri-checkbox-circle-fill" style="color: var(--primary-cyan); font-size: 1.2rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Copy to Clipboard Utility
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`);
  }).catch(err => {
    showToast(`Copied: ${text}`);
  });
}
