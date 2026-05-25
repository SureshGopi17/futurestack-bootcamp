/**
 * ==========================================
 * FUTURESTACK BOOTCAMP 2026 CORE LOGIC
 * ==========================================
 */

// Initial Seed Data
const DEFAULT_SPEAKERS = [
  { id: 1, name: "Dr. Samantha Vance", role: "Principal AI Scientist", company: "NeuroTech Labs", github: "samv-ai", linkedin: "samantha-vance-ai" },
  { id: 2, name: "Marcus Chen", role: "Lead Systems Architect", company: "CloudScale Inc", github: "marcuschen-dev", linkedin: "marcus-chen-cloud" },
  { id: 3, name: "Aria Thorne", role: "Developer Advocate", company: "Vercel", github: "aria-codes", linkedin: "aria-thorne-dev" },
  { id: 4, name: "Dr. Rajesh Iyer", role: "Professor of DS & Cybernetics", company: "IIT Madras", github: "riyer-ds", linkedin: "rajesh-iyer-iit" }
];

const DEFAULT_SCHEDULE = [
  { id: 101, track: "ai", time: "10:00 AM - 11:30 AM", title: "Introduction to Large Language Models", desc: "Understanding transformer architectures, attention mechanisms, and basic prompt engineering principles.", speaker: DEFAULT_SPEAKERS[0] },
  { id: 102, track: "web", time: "11:30 AM - 01:00 PM", title: "Modern Web Design & Fluid Layouts", desc: "Deep dive into CSS grid architectures, glassmorphic styling tokens, and React components performance.", speaker: DEFAULT_SPEAKERS[2] },
  { id: 103, track: "hack", time: "02:00 PM - 03:30 PM", title: "Hackathon Prep & Ideation Workshop", desc: "How to frame problems, form high-functioning teams, build rapid MVPs, and pitch your solutions to investors.", speaker: DEFAULT_SPEAKERS[1] },
  { id: 201, track: "ai", time: "10:00 AM - 11:30 AM", title: "Fine-tuning & RAG Implementations", desc: "Advanced session on Retrieval Augmented Generation pipelines, vector databases, and indexing techniques.", speaker: DEFAULT_SPEAKERS[3] },
  { id: 202, track: "web", time: "11:30 AM - 01:00 PM", title: "State Management & Real-time WebSockets", desc: "Implementing real-time state synchronization, caching layers, and client-side database simulators.", speaker: DEFAULT_SPEAKERS[1] },
  { id: 203, track: "hack", time: "02:00 PM - 05:00 PM", title: "Hacking Sprint: Guided Mentorship Session", desc: "Live coding and prototype review sessions with industry professionals to polish team submissions.", speaker: DEFAULT_SPEAKERS[2] }
];

const DEFAULT_LEADERBOARD = [
  { rank: 1, teamName: "Prompt Engineers", track: "AI & DS", points: 985, projectTitle: "DocuSense AI Agent", githubRepo: "github.com/prompt-engineers/docusense" },
  { rank: 2, teamName: "DevDynamos", track: "Web Development", points: 940, projectTitle: "FutureFlow CRM", githubRepo: "github.com/devdynamos/futureflow" },
  { rank: 3, teamName: "ByteCode Bandits", track: "Hackathon", points: 895, projectTitle: "EcoTrack Carbon Calc", githubRepo: "github.com/bytecode-bandits/ecotrack" },
  { rank: 4, teamName: "Neural Ninjas", track: "AI & DS", points: 860, projectTitle: "MedScan Diagnosis Hub", githubRepo: "github.com/neuralninjas/medscan" },
  { rank: 5, teamName: "CSS Masters", track: "Web Development", points: 825, projectTitle: "PixelCanvas Collaboration tool", githubRepo: "github.com/cssmasters/pixelcanvas" },
  { rank: 6, teamName: "Web Wizards", track: "Web Development", points: 790, projectTitle: "StudySphere Portal", githubRepo: "github.com/webwizards/studysphere" }
];

const DEFAULT_APPLICANTS = [
  { id: "AP-1001", fullName: "Aravind Swamy", email: "aravind@gmail.com", phone: "+91 9840123456", collegeName: "IIT Madras", department: "CSE", yearOfStudy: 3, skills: ["Python", "PyTorch"], status: "approved", checkedIn: true, ticketCode: "FS26-A1B2", checkInTime: "2026-05-23T10:05:00Z" },
  { id: "AP-1002", fullName: "Neha Sharma", email: "neha.sharma@bits.edu", phone: "+91 9962098765", collegeName: "BITS Pilani", department: "ECE", yearOfStudy: 4, skills: ["React", "JavaScript", "CSS"], status: "approved", checkedIn: true, ticketCode: "FS26-C3D4", checkInTime: "2026-05-23T10:12:00Z" },
  { id: "AP-1003", fullName: "Rohit Verma", email: "rohit.v@nit.edu", phone: "+91 9789012345", collegeName: "NIT Trichy", department: "IT", yearOfStudy: 2, skills: ["Java", "SQL"], status: "pending", checkedIn: false, ticketCode: "FS26-E5F6" },
  { id: "AP-1004", fullName: "Shreya Ghoshal", email: "shreya@sastra.edu", phone: "+91 9123456789", collegeName: "SASTRA University", department: "CSE", yearOfStudy: 3, skills: ["Python", "Machine Learning"], status: "approved", checkedIn: false, ticketCode: "FS26-G7H8" },
  { id: "AP-1005", fullName: "Vikram Sen", email: "vikram.s@vit.ac.in", phone: "+91 9345678901", collegeName: "VIT Chennai", department: "ECE", yearOfStudy: 3, skills: ["Embedded Systems", "C++"], status: "rejected", checkedIn: false, ticketCode: "FS26-I9J0" },
  { id: "AP-1006", fullName: "Pooja Hegde", email: "pooja.h@srm.edu", phone: "+91 9456789012", collegeName: "SRM University", department: "CSE", yearOfStudy: 1, skills: ["HTML", "CSS"], status: "pending", checkedIn: false, ticketCode: "FS26-K1L2" },
  { id: "AP-1007", fullName: "Karthik Raja", email: "karthik.raja@annauniv.edu", phone: "+91 9567890123", collegeName: "Anna University", department: "CSE", yearOfStudy: 4, skills: ["Node.js", "MongoDB", "React"], status: "approved", checkedIn: true, ticketCode: "FS26-M3N4", checkInTime: "2026-05-23T10:25:00Z" },
  { id: "AP-1008", fullName: "Ananya Panday", email: "ananya@gmail.com", phone: "+91 9678901234", collegeName: "PSG Tech", department: "EEE", yearOfStudy: 2, skills: ["Arduino", "Python"], status: "approved", checkedIn: false, ticketCode: "FS26-O5P6" }
];

const DEFAULT_COURSES = [
  { id: "CRS-101", title: "Advanced Generative AI & Agents", description: "Master Large Language Models, Prompt Engineering, RAG Architectures, and Autonomous AI Agent frameworks.", duration: "6 Weeks", price: 199, published: true, enrolledCount: 42, syllabus: ["Introduction to Foundation Models", "Prompt Engineering Techniques", "Vector Databases & Semantic Search", "Building Autonomous Agents"] },
  { id: "CRS-102", title: "Full-Stack Web Development", description: "Learn modern frontend development using React, state management, backend APIs with Node.js, and database integration.", duration: "8 Weeks", price: 299, published: true, enrolledCount: 28, syllabus: ["Modern JS & React Core", "State Management & Routing", "Express APIs & Node.js Server", "NoSQL Databases & Hosting"] },
  { id: "CRS-103", title: "Data Science & Machine Learning", description: "Statistical analysis, predictive modeling, regression, supervised and unsupervised machine learning algorithms using Python.", duration: "10 Weeks", price: 349, published: false, enrolledCount: 15, syllabus: ["Python for Data Analysis", "Exploratory Data Analysis", "Scikit-Learn Regression Models", "Deep Learning Neural Networks"] }
];

const DEFAULT_SUBJECTS = [
  { id: "SUB-201", name: "Large Language Models Core", courseId: "CRS-101", trainer: "Dr. Samantha Vance", difficulty: "Advanced", completion: 80, materialsCount: 12 },
  { id: "SUB-202", name: "Vector Databases & Search", courseId: "CRS-101", trainer: "Dr. Samantha Vance", difficulty: "Advanced", completion: 60, materialsCount: 8 },
  { id: "SUB-203", name: "React Components & Hook API", courseId: "CRS-102", trainer: "Alex Rivera", difficulty: "Intermediate", completion: 90, materialsCount: 15 },
  { id: "SUB-204", name: "Database Design & SQL/NoSQL", courseId: "CRS-102", trainer: "Marcus Chen", difficulty: "Intermediate", completion: 45, materialsCount: 10 }
];

const DEFAULT_TEAMS = [
  { id: "TRN-301", name: "Dr. Samantha Vance", role: "Trainer", email: "samantha.vance@futurestack.edu", productivity: 95, tasksCount: 3 },
  { id: "TRN-302", name: "Alex Rivera", role: "Mentor", email: "alex.rivera@futurestack.edu", productivity: 88, tasksCount: 5 },
  { id: "TRN-303", name: "Marcus Chen", role: "Trainer", email: "marcus.chen@futurestack.edu", productivity: 92, tasksCount: 2 },
  { id: "TRN-304", name: "Sarah Jenkins", role: "Sales Manager", email: "sarah.j@futurestack.edu", productivity: 84, tasksCount: 6 }
];

const DEFAULT_SALES = [
  { id: "TXN-4001", studentName: "Aravind Swamy", course: "Advanced Generative AI & Agents", amount: 199, date: "2026-05-22", status: "Success", coupon: "AI50" },
  { id: "TXN-4002", studentName: "Neha Sharma", course: "Full-Stack Web Development", amount: 299, date: "2026-05-23", status: "Success", coupon: "WELCOME10" },
  { id: "TXN-4003", studentName: "Karthik Raja", course: "Advanced Generative AI & Agents", amount: 199, date: "2026-05-23", status: "Success", coupon: "NONE" },
  { id: "TXN-4004", studentName: "Ananya Panday", course: "Data Science & Machine Learning", amount: 349, date: "2026-05-24", status: "Success", coupon: "NONE" },
  { id: "TXN-4005", studentName: "Rohit Verma", course: "Full-Stack Web Development", amount: 299, date: "2026-05-24", status: "Pending", coupon: "NONE" }
];

const DEFAULT_BLOGS = [
  { id: "BLG-501", title: "The Rise of Autonomous AI Agents in 2026", slug: "rise-autonomous-ai-agents-2026", excerpt: "A deep dive into how prompt-based workflows are transitioning to autonomous loop architectures.", author: "Dr. Samantha Vance", published: true, metaTitle: "AI Agents Trends 2026", metaDescription: "Discover how AI agents are transforming tech stacks in 2026 in this expert guide." },
  { id: "BLG-502", title: "State Management in Modern Web SPAs", slug: "state-management-modern-web-spas", excerpt: "A critical review of Redux, Zustand, and light-weight local storage models for client applications.", author: "Alex Rivera", published: true, metaTitle: "State Management Review", metaDescription: "An expert comparison of modern front-end state management tools." }
];

const DEFAULT_MEDIA = [
  { id: "MED-601", name: "hero_banner_background.jpg", size: "1.2 MB", type: "Image", url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" },
  { id: "MED-602", name: "syllabus_guide_ai.pdf", size: "3.4 MB", type: "Document", url: "#" },
  { id: "MED-603", name: "promotional_intro_video.mp4", size: "12.8 MB", type: "Video", url: "#" }
];

const DEFAULT_EVENTS = [
  { id: "EVT-701", title: "Generative AI Agents Masterclass", trainer: "Dr. Samantha Vance", date: "2026-05-28", time: "10:00 AM - 1:00 PM", link: "https://meet.google.com/fs26-ai-agents", registrationsCount: 85, status: "Scheduled" },
  { id: "EVT-702", title: "React State & Reducer Workshops", trainer: "Alex Rivera", date: "2026-05-29", time: "11:30 AM - 1:30 PM", link: "https://meet.google.com/fs26-react-state", registrationsCount: 42, status: "Scheduled" }
];

// App State Management
class AppEngine {
  constructor() {
    this.state = {
      applicants: this.loadData("applicants", DEFAULT_APPLICANTS),
      leaderboard: this.loadData("leaderboard", DEFAULT_LEADERBOARD),
      speakers: DEFAULT_SPEAKERS,
      schedule: DEFAULT_SCHEDULE,
      activeTab: "home",
      adminAuth: this.loadData("admin_auth", false),
      currentUser: this.loadData("current_user", null), // Currently registered user session for viewing ticket
      announcement: this.loadData("announcement", { text: "Registrations are flying fast! Secure your FutureStack seat today.", active: true }),
      selectedTrack: "all",
      registrationStep: 1,
      tempRegData: {},
      simulatedVerificationCode: null,
      verificationAttempts: 0,
      
      courses: this.loadData("courses", DEFAULT_COURSES),
      subjects: this.loadData("subjects", DEFAULT_SUBJECTS),
      trainers: this.loadData("trainers", DEFAULT_TEAMS),
      sales: this.loadData("sales", DEFAULT_SALES),
      blogs: this.loadData("blogs", DEFAULT_BLOGS),
      media: this.loadData("media", DEFAULT_MEDIA),
      events: this.loadData("events", DEFAULT_EVENTS),
      adminActiveSubPage: "dashboard",
      adminSettings: this.loadData("admin_settings", { rbacEnabled: true, tfaEnabled: false }),
      adminTheme: this.loadData("admin_theme", "dark")
    };
    
    this.router = {
      home: () => this.renderHome(),
      schedule: () => this.renderSchedule(),
      leaderboard: () => this.renderLeaderboard(),
      register: () => this.renderRegister(),
      tickets: () => this.renderTickets(),
      certificates: () => this.renderCertificates(),
      gallery: () => this.renderGallery(),
      contact: () => this.renderContact(),
      admin: () => this.renderAdmin()
    };
  }

  loadData(key, fallback) {
    try {
      const data = localStorage.getItem(`fs26_${key}`);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.error("Localstorage load error for " + key, e);
      return fallback;
    }
  }

  saveData(key, value) {
    try {
      localStorage.setItem(`fs26_${key}`, JSON.stringify(value));
    } catch (e) {
      console.error("Localstorage save error for " + key, e);
    }
  }

  updateState(key, value) {
    this.state[key] = value;
    this.saveData(key, value);
  }

  init() {
    // Navigation routing listeners
    window.addEventListener("hashchange", () => this.handleRouting());
    
    // Desktop Nav Link clicks
    document.querySelectorAll(".nav-link, .admin-portal-link").forEach(link => {
      link.addEventListener("click", (e) => {
        const target = e.currentTarget.getAttribute("data-target");
        this.navigateTo(target);
      });
    });

    // Mobile Sidebar controls
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("sidebar-open-btn");
    const closeBtnMobile = document.getElementById("sidebar-toggle-btn-mobile");
    
    if (openBtn) openBtn.addEventListener("click", () => sidebar.classList.add("show"));
    if (closeBtnMobile) closeBtnMobile.addEventListener("click", () => sidebar.classList.remove("show"));

    // Global Announcement Banner close
    const banner = document.getElementById("announcement-banner");
    const closeAnn = document.getElementById("close-announcement");
    if (closeAnn) {
      closeAnn.addEventListener("click", () => {
        banner.classList.add("hidden");
        const ann = this.state.announcement;
        ann.active = false;
        this.updateState("announcement", ann);
      });
    }

    // Load Announcement Text
    this.refreshAnnouncement();

    // Trigger initial route
    this.handleRouting();
  }

  refreshAnnouncement() {
    const banner = document.getElementById("announcement-banner");
    const bannerText = document.getElementById("announcement-text");
    if (banner && bannerText) {
      if (this.state.announcement && this.state.announcement.active) {
        bannerText.textContent = this.state.announcement.text;
        banner.classList.remove("hidden");
      } else {
        banner.classList.add("hidden");
      }
    }
  }

  navigateTo(target) {
    window.location.hash = target;
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.remove("show"); // Close mobile sidebar if open
  }

  handleRouting() {
    const hash = window.location.hash.replace("#", "") || "home";
    const renderer = this.router[hash];
    
    if (hash === "admin" && this.state.adminAuth) {
      document.body.classList.add("admin-mode");
    } else {
      document.body.classList.remove("admin-mode");
    }
    
    // Highlight correct link in sidebar
    document.querySelectorAll(".nav-link, .admin-portal-link").forEach(link => {
      if (link.getAttribute("data-target") === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (renderer) {
      this.state.activeTab = hash;
      renderer();
      lucide.createIcons();
      window.scrollTo(0, 0);
    } else {
      this.navigateTo("home");
    }
  }

  // Toasts Utilities
  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let iconName = "info";
    if (type === "success") iconName = "check-circle";
    if (type === "error") iconName = "alert-triangle";
    if (type === "warning") iconName = "alert-circle";

    toast.innerHTML = `
      <i data-lucide="${iconName}"></i>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  /* ========================================================
     VIEW RENDERERS
     ======================================================== */

  // 1. HOME LANDING PAGE RENDERER
  renderHome() {
    const main = document.getElementById("main-content");
    main.innerHTML = `
      <section class="hero">
        <span class="badge-tagline">⚡ Pre-registration Live for 2026</span>
        <h1 class="hero-title">Build Skills for<br>the Future</h1>
        <p class="hero-tagline">Join 500+ developers, tech enthusiasts, and scientists at FutureStack AI Bootcamp 2026. Master LLMs, full-stack architectures, and compete in the legendary live hackathon.</p>
        
        <div class="hero-ctas">
          <a href="#register" class="btn btn-glow"><i data-lucide="user-plus"></i> Claim Your Pass</a>
          <a href="#schedule" class="btn btn-outline"><i data-lucide="calendar"></i> Explore Schedule</a>
        </div>
      </section>

      <!-- Countdown Timer -->
      <section class="countdown-section">
        <h4>Hackathon Kickoff In</h4>
        <div class="countdown-grid">
          <div class="countdown-box glass-panel">
            <div class="countdown-number" id="timer-days">00</div>
            <div class="countdown-label">Days</div>
          </div>
          <div class="countdown-box glass-panel">
            <div class="countdown-number" id="timer-hours">00</div>
            <div class="countdown-label">Hours</div>
          </div>
          <div class="countdown-box glass-panel">
            <div class="countdown-number" id="timer-minutes">00</div>
            <div class="countdown-label">Mins</div>
          </div>
          <div class="countdown-box glass-panel">
            <div class="countdown-number" id="timer-seconds">00</div>
            <div class="countdown-label">Secs</div>
          </div>
        </div>
      </section>

      <!-- Specs details -->
      <section class="event-specs glass-panel">
        <div class="spec-item">
          <i data-lucide="calendar-days"></i>
          <h5>Date & Time</h5>
          <p>May 28 - 30, 2026</p>
        </div>
        <div class="spec-item" style="border-left: 1px solid var(--glass-border); border-right: 1px solid var(--glass-border);">
          <i data-lucide="map-pin"></i>
          <h5>Venue</h5>
          <p>Campus Auditorium & Labs</p>
        </div>
        <div class="spec-item">
          <i data-lucide="users"></i>
          <h5>Cohort Size</h5>
          <p>500 Slots Available</p>
        </div>
      </section>

      <!-- Speakers Highlights -->
      <section style="margin-top: 5rem;">
        <div class="section-title-wrap text-center" style="text-align: center;">
          <h2 class="section-title">Keynote Speakers & Mentors</h2>
          <p class="section-subtitle">Learn from industry leading scientists, developers, and advocates.</p>
        </div>
        
        <div class="speakers-grid">
          ${this.state.speakers.map(speaker => `
            <div class="speaker-card glass-panel glass-panel-hover">
              <div class="speaker-avatar-wrap">
                <div class="speaker-avatar">
                  <i data-lucide="user"></i>
                </div>
              </div>
              <div class="speaker-role">${speaker.role}</div>
              <h3 class="speaker-name">${speaker.name}</h3>
              <div class="speaker-company">${speaker.company}</div>
              <div class="speaker-socials">
                <a href="https://github.com/${speaker.github}" target="_blank"><i data-lucide="github"></i></a>
                <a href="https://linkedin.com/in/${speaker.linkedin}" target="_blank"><i data-lucide="linkedin"></i></a>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;

    this.startCountdown();
  }

  startCountdown() {
    // Target date: May 28, 2026 10:00:00 AM
    const targetDate = new Date("2026-05-28T10:00:00").getTime();
    
    // Clear any previous interval if stored
    if (this.countdownInterval) clearInterval(this.countdownInterval);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const daysEl = document.getElementById("timer-days");
      const hoursEl = document.getElementById("timer-hours");
      const minsEl = document.getElementById("timer-minutes");
      const secsEl = document.getElementById("timer-seconds");

      if (!daysEl) {
        clearInterval(this.countdownInterval);
        return; // Left page
      }

      if (difference < 0) {
        clearInterval(this.countdownInterval);
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minsEl.textContent = "00";
        secsEl.textContent = "00";
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minsEl.textContent = String(minutes).padStart(2, "0");
      secsEl.textContent = String(seconds).padStart(2, "0");
    };

    updateTimer();
    this.countdownInterval = setInterval(updateTimer, 1000);
  }

  // 2. SCHEDULE PAGE RENDERER
  renderSchedule() {
    const main = document.getElementById("main-content");
    
    main.innerHTML = `
      <div class="section-title-wrap">
        <h2 class="section-title">Workshop Timetable & Tracks</h2>
        <p class="section-subtitle">Plan your schedule and align your learning paths across our multi-track event structure.</p>
      </div>

      <div class="schedule-controls">
        <button class="track-btn ${this.state.selectedTrack === "all" ? "active" : ""}" data-track="all">All Tracks</button>
        <button class="track-btn ${this.state.selectedTrack === "ai" ? "active" : ""}" data-track="ai">AI & DS</button>
        <button class="track-btn ${this.state.selectedTrack === "web" ? "active" : ""}" data-track="web">Web Dev</button>
        <button class="track-btn ${this.state.selectedTrack === "hack" ? "active" : ""}" data-track="hack">Hackathon Core</button>
      </div>

      <div class="timeline" id="schedule-timeline">
        <!-- Loaded dynamically -->
      </div>
    `;

    // Add listeners to filter buttons
    main.querySelectorAll(".track-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const track = e.target.getAttribute("data-track");
        main.querySelectorAll(".track-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        this.state.selectedTrack = track;
        this.renderTimelineItems(track);
      });
    });

    this.renderTimelineItems(this.state.selectedTrack);
  }

  renderTimelineItems(trackFilter) {
    const timeline = document.getElementById("schedule-timeline");
    if (!timeline) return;

    // Convert courses to timeline items
    const courseTimelineItems = this.state.courses
      .filter(c => c.published)
      .map(course => {
        let track = "hack";
        const titleLower = (course.title || "").toLowerCase();
        const descLower = (course.description || "").toLowerCase();
        if (titleLower.includes("ai") || titleLower.includes("data") || titleLower.includes("intelligence") || titleLower.includes("learning") || titleLower.includes("agent") ||
            descLower.includes("ai") || descLower.includes("data") || descLower.includes("intelligence") || descLower.includes("learning") || descLower.includes("agent")) {
          track = "ai";
        } else if (titleLower.includes("web") || titleLower.includes("react") || titleLower.includes("html") || titleLower.includes("css") || titleLower.includes("js") || titleLower.includes("frontend") || titleLower.includes("backend") || titleLower.includes("stack") ||
                   descLower.includes("web") || descLower.includes("react") || descLower.includes("html") || descLower.includes("css") || descLower.includes("js") || descLower.includes("frontend") || descLower.includes("backend") || descLower.includes("stack")) {
          track = "web";
        }

        let speaker = DEFAULT_SPEAKERS[1]; // Marcus Chen
        if (track === "ai") {
          speaker = DEFAULT_SPEAKERS[0]; // Dr. Samantha Vance
        } else if (track === "web") {
          speaker = DEFAULT_SPEAKERS[2]; // Aria Thorne
        }

        return {
          id: course.id,
          track: track,
          time: `Duration: ${course.duration || "Self-Paced"}`,
          title: course.title,
          desc: course.description,
          speaker: speaker,
          isCourse: true
        };
      });

    // Combine static schedule and dynamic course items
    const combined = [...this.state.schedule, ...courseTimelineItems];

    const filtered = combined.filter(item => trackFilter === "all" || item.track === trackFilter);

    if (filtered.length === 0) {
      timeline.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No workshops or courses in this track.</p>`;
      return;
    }

    timeline.innerHTML = filtered.map(item => {
      const timeLabel = item.isCourse ? `📚 Course • ${item.time}` : `📅 ${item.id >= 200 ? "Day 2: May 29" : "Day 1: May 28"} @ ${item.time}`;
      const trackLabel = item.track === "ai" ? "AI & Data Science" : item.track === "web" ? "Web Architecture" : "Hackathon Strategy";
      
      return `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card glass-panel" style="${item.isCourse ? 'border-left: 3px solid var(--color-purple);' : ''}">
            <div class="timeline-time-track">
              <span>${timeLabel}</span>
              <span style="text-transform: uppercase; color: var(--color-purple); font-weight: 700;">
                ${trackLabel}
              </span>
            </div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-desc">${item.desc || ''}</p>
            <div class="timeline-speaker">
              <div class="timeline-speaker-avatar">
                <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%232e1065%22/><text y=%2250%22 x=%2250%22 font-size=%2240%22 fill=%22%2306b6d4%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>${item.speaker.name[0]}</text></svg>">
              </div>
              <div>
                <div class="timeline-speaker-name">${item.speaker.name}</div>
                <div class="timeline-speaker-role">${item.speaker.role}, ${item.speaker.company}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 3. LEADERBOARD PAGE RENDERER
  renderLeaderboard() {
    const main = document.getElementById("main-content");
    const sorted = [...this.state.leaderboard].sort((a,b) => b.points - a.points);
    
    // Inject podium avatars
    const first = sorted[0] || { teamName: "TBD", points: 0, track: "TBD" };
    const second = sorted[1] || { teamName: "TBD", points: 0, track: "TBD" };
    const third = sorted[2] || { teamName: "TBD", points: 0, track: "TBD" };

    main.innerHTML = `
      <div class="section-title-wrap">
        <h2 class="section-title">Live Hackathon Leaderboard</h2>
        <p class="section-subtitle">Real-time team points, rankings, and active project codebases.</p>
      </div>

      <!-- Podium Top 3 -->
      <div class="leaderboard-hero-row">
        <!-- 2nd Place -->
        <div class="podium-card glass-panel podium-2nd">
          <div class="podium-rank">2</div>
          <div class="podium-avatar">
            <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%231e1b4b%22/><text y=%2250%22 x=%2250%22 font-size=%2235%22 fill=%22%23a1a1aa%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>2nd</text></svg>">
          </div>
          <div class="podium-name">${second.teamName}</div>
          <div class="podium-track">${second.track}</div>
          <div class="podium-points">${second.points} pts</div>
        </div>

        <!-- 1st Place -->
        <div class="podium-card glass-panel podium-1st">
          <div class="podium-rank">1</div>
          <div class="podium-avatar">
            <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%231e1b4b%22/><text y=%2250%22 x=%2250%22 font-size=%2235%22 fill=%22%23fbbf24%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>1st</text></svg>">
          </div>
          <div class="podium-name">${first.teamName}</div>
          <div class="podium-track">${first.track}</div>
          <div class="podium-points">${first.points} pts</div>
        </div>

        <!-- 3rd Place -->
        <div class="podium-card glass-panel podium-3rd">
          <div class="podium-rank">3</div>
          <div class="podium-avatar">
            <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%231e1b4b%22/><text y=%2250%22 x=%2250%22 font-size=%2235%22 fill=%22%23b45309%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>3rd</text></svg>">
          </div>
          <div class="podium-name">${third.teamName}</div>
          <div class="podium-track">${third.track}</div>
          <div class="podium-points">${third.points} pts</div>
        </div>
      </div>

      <!-- Search Team Bar -->
      <div class="leaderboard-search-bar">
        <div class="search-input-wrap">
          <i data-lucide="search"></i>
          <input type="text" id="leaderboard-search" class="search-input" placeholder="Search by team name or project...">
        </div>
      </div>

      <!-- Leaderboard List Table -->
      <div class="leaderboard-table-card glass-panel">
        <div class="app-table-wrap">
          <table class="app-table">
            <thead>
              <tr>
                <th style="width: 80px;">Rank</th>
                <th>Team Name</th>
                <th>Track</th>
                <th>Project Submission</th>
                <th style="width: 150px; text-align: right;">Points</th>
              </tr>
            </thead>
            <tbody id="leaderboard-table-body">
              <!-- Dynamically populated -->
            </tbody>
          </table>
        </div>
      </div>
    `;

    const searchInput = document.getElementById("leaderboard-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.filterLeaderboard(e.target.value, sorted);
      });
    }

    this.filterLeaderboard("", sorted);
  }

  filterLeaderboard(query, sortedList) {
    const tbody = document.getElementById("leaderboard-table-body");
    if (!tbody) return;

    const filtered = sortedList.filter(team => 
      team.teamName.toLowerCase().includes(query.toLowerCase()) ||
      team.projectTitle.toLowerCase().includes(query.toLowerCase()) ||
      team.track.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No teams match the search query.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((team, idx) => `
      <tr>
        <td>
          <span class="rank-badge ${idx < 3 ? "rank-top" : ""}">#${idx + 1}</span>
        </td>
        <td><strong>${team.teamName}</strong></td>
        <td><span style="color: var(--color-purple); font-weight: 600; font-size: 0.85rem;">${team.track}</span></td>
        <td>
          <div style="font-weight: 500;">${team.projectTitle}</div>
          <a href="https://${team.githubRepo}" target="_blank" style="color: var(--color-cyan); font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.25rem; margin-top: 0.25rem;">
            <i data-lucide="github" style="width: 12px; height: 12px;"></i> ${team.githubRepo.replace("github.com/", "")}
          </a>
        </td>
        <td style="text-align: right;" class="points-val">${team.points} pts</td>
      </tr>
    `).join("");
    lucide.createIcons();
  }

  // 4. REGISTRATION PAGE RENDERER (Multi-step Form)
  renderRegister() {
    const main = document.getElementById("main-content");
    this.state.registrationStep = 1;
    this.state.tempRegData = {};
    this.state.simulatedVerificationCode = null;

    main.innerHTML = `
      <div class="registration-container">
        <div class="section-title-wrap text-center" style="text-align: center; margin-bottom: 3.5rem;">
          <h2 class="section-title">Claim Your Bootcamp Ticket</h2>
          <p class="section-subtitle">Fill in your information to receive a scan-ready QR entrance pass.</p>
        </div>

        <!-- Step Indicator -->
        <div class="step-indicator-bar">
          <div class="step-progress-line" id="step-progress"></div>
          
          <div class="step-bubble active" id="bubble-1" data-step="1">
            1
            <span class="step-label">Personal details</span>
          </div>
          <div class="step-bubble" id="bubble-2" data-step="2">
            2
            <span class="step-label">Academic & Skills</span>
          </div>
          <div class="step-bubble" id="bubble-3" data-step="3">
            3
            <span class="step-label">Verification</span>
          </div>
        </div>

        <!-- Form Steps -->
        <div class="form-step-card glass-panel" id="registration-form-card">
          <form id="bootcamp-reg-form">
            
            <!-- STEP 1: Personal Details -->
            <div class="form-step active" id="step-panel-1">
              <div class="form-step-title">Personal Profile</div>
              <div class="form-step-subtitle">Tell us about yourself. Provide your active contact email for verification.</div>
              
              <div class="form-grid">
                <div class="form-group form-full-width">
                  <label for="reg-name">Full Name *</label>
                  <input type="text" id="reg-name" class="form-control" placeholder="Aravind Swamy" required>
                </div>
                
                <div class="form-group">
                  <label for="reg-email">Email Address *</label>
                  <input type="email" id="reg-email" class="form-control" placeholder="aravind@gmail.com" required>
                </div>
                
                <div class="form-group">
                  <label for="reg-phone">Phone Number *</label>
                  <input type="tel" id="reg-phone" class="form-control" placeholder="+91 98401 23456" required>
                </div>
              </div>
            </div>

            <!-- STEP 2: Academic & Skills -->
            <div class="form-step" id="step-panel-2">
              <div class="form-step-title">College & Technical Background</div>
              <div class="form-step-subtitle">This helps us customize session materials and verify student authenticity.</div>
              
              <div class="form-grid">
                <div class="form-group">
                  <label for="reg-college">College / University Name *</label>
                  <input type="text" id="reg-college" class="form-control" placeholder="IIT Madras" required>
                </div>
                
                <div class="form-group">
                  <label for="reg-dept">Department *</label>
                  <input type="text" id="reg-dept" class="form-control" placeholder="Computer Science" required>
                </div>
                
                <div class="form-group">
                  <label for="reg-year">Year of Study *</label>
                  <select id="reg-year" class="form-control" required>
                    <option value="" disabled selected>Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="reg-skills">Coding Skills (Comma separated) *</label>
                  <input type="text" id="reg-skills" class="form-control" placeholder="Python, HTML, React" required>
                </div>

                <div class="form-group">
                  <label for="reg-linkedin">LinkedIn Link (Optional)</label>
                  <input type="url" id="reg-linkedin" class="form-control" placeholder="https://linkedin.com/in/aravind">
                </div>

                <div class="form-group">
                  <label for="reg-github">GitHub Profile (Optional)</label>
                  <input type="url" id="reg-github" class="form-control" placeholder="https://github.com/aravind-dev">
                </div>

                <div class="form-group form-full-width">
                  <label for="reg-resume">Resume Upload Link (Google Drive / GitHub) *</label>
                  <input type="url" id="reg-resume" class="form-control" placeholder="https://drive.google.com/file/... (Make public link)" required>
                </div>
              </div>
            </div>

            <!-- STEP 3: Verification -->
            <div class="form-step" id="step-panel-3">
              <div class="form-step-title">Simulated Email Verification</div>
              <div class="form-step-subtitle" id="verify-instructions-text">We sent a 4-digit code to your email. Enter it below to complete registration.</div>
              
              <div class="verification-code-container">
                <input type="text" maxlength="1" class="code-input" id="code-1" required>
                <input type="text" maxlength="1" class="code-input" id="code-2" required>
                <input type="text" maxlength="1" class="code-input" id="code-3" required>
                <input type="text" maxlength="1" class="code-input" id="code-4" required>
              </div>

              <div class="verification-hint" id="resend-code-btn">Resend Verification Code</div>
            </div>

            <!-- Form Buttons Row -->
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" id="reg-prev-btn" style="visibility: hidden;">
                <i data-lucide="arrow-left"></i> Back
              </button>
              <button type="button" class="btn btn-glow" id="reg-next-btn">
                Next <i data-lucide="arrow-right"></i>
              </button>
            </div>

          </form>
        </div>
      </div>
    `;

    this.initRegForm();
  }

  initRegForm() {
    const prevBtn = document.getElementById("reg-prev-btn");
    const nextBtn = document.getElementById("reg-next-btn");
    const form = document.getElementById("bootcamp-reg-form");

    // Manage code input focus flow
    const codeInputs = document.querySelectorAll(".code-input");
    codeInputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (e.target.value.length === 1 && index < codeInputs.length - 1) {
          codeInputs[index + 1].focus();
        }
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && e.target.value === "" && index > 0) {
          codeInputs[index - 1].focus();
        }
      });
    });

    const resendBtn = document.getElementById("resend-code-btn");
    if (resendBtn) {
      resendBtn.addEventListener("click", () => {
        this.generateAndSendSimCode();
      });
    }

    prevBtn.addEventListener("click", () => this.handleRegStepChange(-1));
    nextBtn.addEventListener("click", () => this.handleRegStepChange(1));
  }

  handleRegStepChange(direction) {
    if (direction === 1) {
      // Validate inputs for current step before advancing
      const currentPanel = document.getElementById(`step-panel-${this.state.registrationStep}`);
      const inputs = currentPanel.querySelectorAll("input, select");
      let allValid = true;

      for (let input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          allValid = false;
          break;
        }
      }

      if (!allValid) return;

      // Duplicate checking on step 1
      if (this.state.registrationStep === 1) {
        const emailVal = document.getElementById("reg-email").value.trim().toLowerCase();
        const duplicate = this.state.applicants.find(a => a.email.toLowerCase() === emailVal);
        if (duplicate) {
          this.showToast(`Email ${emailVal} is already registered! Please check ticket lookup.`, "error");
          return;
        }
      }

      // Step transition logic
      if (this.state.registrationStep < 3) {
        this.state.registrationStep++;
        this.updateStepUI();
        
        if (this.state.registrationStep === 3) {
          // Entering verification step
          // Capture inputs so far
          this.state.tempRegData = {
            fullName: document.getElementById("reg-name").value.trim(),
            email: document.getElementById("reg-email").value.trim().toLowerCase(),
            phone: document.getElementById("reg-phone").value.trim(),
            collegeName: document.getElementById("reg-college").value.trim(),
            department: document.getElementById("reg-dept").value.trim(),
            yearOfStudy: parseInt(document.getElementById("reg-year").value),
            skills: document.getElementById("reg-skills").value.split(",").map(s => s.trim()).filter(Boolean),
            linkedin: document.getElementById("reg-linkedin").value.trim(),
            github: document.getElementById("reg-github").value.trim(),
            resume: document.getElementById("reg-resume").value.trim(),
          };
          this.generateAndSendSimCode();
        }
      } else {
        // Final submit click - verify code
        this.verifyCodeAndSubmit();
      }
    } else {
      if (this.state.registrationStep > 1) {
        this.state.registrationStep--;
        this.updateStepUI();
      }
    }
  }

  generateAndSendSimCode() {
    this.state.simulatedVerificationCode = String(Math.floor(1000 + Math.random() * 9000));
    this.state.verificationAttempts = 0;
    
    // Simulate SMTP delivery via a delay + toast alert
    setTimeout(() => {
      this.showToast(`[SIMULATION] Verification code sent to ${this.state.tempRegData.email}. CODE IS: ${this.state.simulatedVerificationCode}`, "warning");
      const instructions = document.getElementById("verify-instructions-text");
      if (instructions) {
        instructions.innerHTML = `We sent a code to <strong>${this.state.tempRegData.email}</strong>. <br>Enter the code (Simulated Code: <strong style="color: var(--color-cyan);">${this.state.simulatedVerificationCode}</strong>)`;
      }
    }, 600);
  }

  verifyCodeAndSubmit() {
    const codeVal = Array.from(document.querySelectorAll(".code-input")).map(i => i.value).join("");
    
    if (codeVal.length < 4) {
      this.showToast("Please enter the complete 4-digit code.", "warning");
      return;
    }

    if (codeVal !== this.state.simulatedVerificationCode) {
      this.state.verificationAttempts++;
      this.showToast("Incorrect code. Please check code or request a resend.", "error");
      
      if (this.state.verificationAttempts >= 3) {
        this.showToast("Attempts limit exceeded. Re-generating verification code.", "warning");
        this.generateAndSendSimCode();
        document.querySelectorAll(".code-input").forEach(i => i.value = "");
        document.getElementById("code-1").focus();
      }
      return;
    }

    // Success - Create New Applicant Record
    const ticketIdSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const newReg = {
      id: `AP-${Date.now().toString().slice(-4)}`,
      fullName: this.state.tempRegData.fullName,
      email: this.state.tempRegData.email,
      phone: this.state.tempRegData.phone,
      collegeName: this.state.tempRegData.collegeName,
      department: this.state.tempRegData.department,
      yearOfStudy: this.state.tempRegData.yearOfStudy,
      skills: this.state.tempRegData.skills,
      status: "approved", // Automatically approved for smoother UX demo
      checkedIn: false,
      ticketCode: `FS26-${ticketIdSuffix}`,
      resumeUrl: this.state.tempRegData.resume,
      socialLinks: {
        linkedin: this.state.tempRegData.linkedin,
        github: this.state.tempRegData.github
      }
    };

    const currentApplicants = this.state.applicants;
    currentApplicants.push(newReg);
    this.updateState("applicants", currentApplicants);
    
    // Save current active session
    this.updateState("current_user", newReg);

    this.renderRegistrationSuccess(newReg);
  }

  updateStepUI() {
    // Hide/show panels
    document.querySelectorAll(".form-step").forEach((panel, idx) => {
      if (idx + 1 === this.state.registrationStep) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });

    // Update Bubbles class
    for (let i = 1; i <= 3; i++) {
      const bubble = document.getElementById(`bubble-${i}`);
      if (i < this.state.registrationStep) {
        bubble.className = "step-bubble completed";
      } else if (i === this.state.registrationStep) {
        bubble.className = "step-bubble active";
      } else {
        bubble.className = "step-bubble";
      }
    }

    // Update progress line length
    const line = document.getElementById("step-progress");
    if (line) {
      const percentage = (this.state.registrationStep - 1) * 50;
      line.style.width = `${percentage}%`;
    }

    // Buttons
    const prevBtn = document.getElementById("reg-prev-btn");
    const nextBtn = document.getElementById("reg-next-btn");

    if (this.state.registrationStep === 1) {
      prevBtn.style.visibility = "hidden";
    } else {
      prevBtn.style.visibility = "visible";
    }

    if (this.state.registrationStep === 3) {
      nextBtn.innerHTML = `Submit Registration <i data-lucide="check"></i>`;
    } else {
      nextBtn.innerHTML = `Next <i data-lucide="arrow-right"></i>`;
    }
    
    lucide.createIcons();
  }

  renderRegistrationSuccess(applicantData) {
    const card = document.getElementById("registration-form-card");
    
    card.innerHTML = `
      <div class="success-screen">
        <div class="success-icon-wrap">
          <i data-lucide="check"></i>
        </div>
        <h3>Registration Successful!</h3>
        <p>Congratulations <strong>${applicantData.fullName}</strong>. Your ticket is confirmed. Your entrance passcode code is <strong style="color: var(--color-cyan);">${applicantData.ticketCode}</strong>.</p>
        
        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button class="btn btn-glow" id="view-my-ticket-btn"><i data-lucide="qr-code"></i> View Ticket</button>
          <button class="btn btn-outline" id="success-done-btn"><i data-lucide="home"></i> Back Home</button>
        </div>
      </div>
    `;
    lucide.createIcons();

    document.getElementById("view-my-ticket-btn").addEventListener("click", () => {
      this.navigateTo("tickets");
    });
    
    document.getElementById("success-done-btn").addEventListener("click", () => {
      this.navigateTo("home");
    });
  }

  // 5. TICKET PAGE RENDERER (Look up & Render Ticket)
  renderTickets() {
    const main = document.getElementById("main-content");
    const savedUser = this.state.currentUser;

    if (savedUser) {
      this.renderActualTicket(savedUser);
    } else {
      // Lookup screen
      main.innerHTML = `
        <div class="section-title-wrap text-center" style="text-align: center;">
          <h2 class="section-title">Retrieve Entrance Ticket</h2>
          <p class="section-subtitle">Enter your registered email and ticket passcode code to view/download your gate-pass.</p>
        </div>

        <div class="ticket-lookup-panel glass-panel">
          <form id="ticket-lookup-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div class="form-group">
              <label for="lookup-email">Registered Email</label>
              <input type="email" id="lookup-email" class="form-control" placeholder="aravind@gmail.com" required>
            </div>
            
            <div class="form-group">
              <label for="lookup-code">Ticket Passcode (e.g., FS26-A1B2)</label>
              <input type="text" id="lookup-code" class="form-control" placeholder="FS26-XXXX" required>
            </div>

            <button type="submit" class="btn btn-glow" style="margin-top: 1rem;">
              <i data-lucide="search"></i> Find My Ticket
            </button>
          </form>
        </div>
      `;

      const form = document.getElementById("ticket-lookup-form");
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const email = document.getElementById("lookup-email").value.trim().toLowerCase();
          const code = document.getElementById("lookup-code").value.trim().toUpperCase();

          const found = this.state.applicants.find(a => a.email.toLowerCase() === email && a.ticketCode.toUpperCase() === code);

          if (found) {
            this.updateState("current_user", found);
            this.showToast("Ticket found! Accessing gate-pass...", "success");
            this.renderActualTicket(found);
          } else {
            this.showToast("No record found with those details. Try again.", "error");
          }
        });
      }
    }
  }

  renderActualTicket(userData) {
    const main = document.getElementById("main-content");
    
    main.innerHTML = `
      <div class="section-title-wrap text-center" style="text-align: center;">
        <h2 class="section-title">Your Event Ticket</h2>
        <p class="section-subtitle">Present this QR code at the event gate to check in instantly.</p>
      </div>

      <div class="ticket-container">
        <div class="ticket-card" id="printable-ticket">
          <div class="ticket-stub-cut ticket-stub-left"></div>
          <div class="ticket-stub-cut ticket-stub-right"></div>
          
          <div class="ticket-header">
            <div>
              <span style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Bootcamp Entrance Pass</span>
              <h4 style="color: white; font-size: 1.15rem; font-weight: 800;">FutureStack '26</h4>
            </div>
            <div>
              <span class="status-badge ${userData.checkedIn ? 'status-approved' : 'status-pending'}">
                ${userData.checkedIn ? 'Checked-In' : 'Active'}
              </span>
            </div>
          </div>
          
          <div class="ticket-body">
            <div class="ticket-qr-frame">
              <canvas id="ticket-qr-canvas"></canvas>
            </div>
            
            <h3 class="ticket-name">${userData.fullName}</h3>
            <div class="ticket-code-label">${userData.ticketCode}</div>
            
            <div class="ticket-details-grid">
              <div class="ticket-detail">
                <h5>College</h5>
                <p>${userData.collegeName}</p>
              </div>
              <div class="ticket-detail">
                <h5>Department</h5>
                <p>${userData.department} (${userData.yearOfStudy} Yr)</p>
              </div>
              <div class="ticket-detail">
                <h5>Date</h5>
                <p>May 28-30, 2026</p>
              </div>
              <div class="ticket-detail">
                <h5>Venue</h5>
                <p>Tech Auditorium</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-top: 2rem; justify-content: center;">
          <button class="btn btn-outline" id="print-ticket-btn"><i data-lucide="printer"></i> Print / Save</button>
          <button class="btn btn-secondary" id="logout-ticket-btn"><i data-lucide="log-out"></i> Lookup Another</button>
        </div>
      </div>
    `;

    lucide.createIcons();

    // Render QR Code using cdn canvas renderer
    const canvas = document.getElementById("ticket-qr-canvas");
    if (canvas) {
      // The QR code contains their ticket code for scanning
      QRCode.toCanvas(canvas, userData.ticketCode, {
        width: 160,
        margin: 1,
        color: {
          dark: "#080612",
          light: "#ffffff"
        }
      }, (error) => {
        if (error) console.error("QR Code rendering error", error);
      });
    }

    // Attach listeners
    document.getElementById("print-ticket-btn").addEventListener("click", () => {
      window.print();
    });

    document.getElementById("logout-ticket-btn").addEventListener("click", () => {
      this.updateState("current_user", null);
      this.navigateTo("tickets");
    });
  }

  // 6. CERTIFICATES PAGE RENDERER
  renderCertificates() {
    const main = document.getElementById("main-content");
    
    main.innerHTML = `
      <div class="section-title-wrap text-center" style="text-align: center;">
        <h2 class="section-title">Certificate Center</h2>
        <p class="section-subtitle">Enter your registered email to search, verify, and download your completed bootcamp certificate.</p>
      </div>

      <div class="cert-lookup-panel glass-panel" id="cert-search-panel">
        <form id="cert-lookup-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div class="form-group">
            <label for="cert-email">Registered Email Address</label>
            <input type="email" id="cert-email" class="form-control" placeholder="aravind@gmail.com" required>
          </div>
          
          <button type="submit" class="btn btn-glow" style="margin-top: 1rem;">
            <i data-lucide="award"></i> Verify & Generate Certificate
          </button>
        </form>
      </div>

      <div class="certificate-canvas-wrap hidden" id="certificate-output-panel">
        <canvas id="certificate-canvas" class="certificate-preview-canvas" width="800" height="565"></canvas>
        
        <div style="display: flex; gap: 1.25rem; justify-content: center; width: 100%;">
          <button class="btn btn-glow" id="download-cert-btn"><i data-lucide="download"></i> Download PNG Certificate</button>
          <button class="btn btn-outline" id="reset-cert-btn"><i data-lucide="rotate-ccw"></i> Search Another</button>
        </div>
      </div>
    `;

    lucide.createIcons();

    const form = document.getElementById("cert-lookup-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("cert-email").value.trim().toLowerCase();
        const candidate = this.state.applicants.find(a => a.email.toLowerCase() === email);

        if (!candidate) {
          this.showToast("Email address not found in registration database.", "error");
          return;
        }

        // Must be checked-in to obtain certificate!
        if (!candidate.checkedIn) {
          this.showToast("Attendance check-in not marked for this candidate. Certificates are only issued to checked-in attendees.", "warning");
          return;
        }

        this.showToast("Verification successful! Compiling certificate...", "success");
        document.getElementById("cert-search-panel").classList.add("hidden");
        document.getElementById("certificate-output-panel").classList.remove("hidden");
        this.drawCertificate(candidate);
      });
    }
  }

  drawCertificate(candidate) {
    const canvas = document.getElementById("certificate-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Let's draw a beautiful digital certificate
    // 1. Light background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Neon borders & gradients (Orange to Blue)
    const borderGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    borderGrad.addColorStop(0, "#f97316"); // Orange
    borderGrad.addColorStop(1, "#3b82f6"); // Blue
    
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, canvas.width - 14, canvas.height - 14);

    ctx.strokeStyle = "rgba(15, 23, 42, 0.06)";
    ctx.lineWidth = 2;
    ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

    // 3. Subtle background shapes (decorations)
    ctx.fillStyle = "rgba(249, 115, 22, 0.03)"; // Orange tint
    ctx.beginPath();
    ctx.arc(0, 0, 300, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(59, 130, 246, 0.03)"; // Blue tint
    ctx.beginPath();
    ctx.arc(canvas.width, canvas.height, 250, 0, Math.PI * 2);
    ctx.fill();

    // 4. Header Logo Text
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 26px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("FUTURESTACK AI BOOTCAMP 2026", canvas.width / 2, 70);

    ctx.fillStyle = "#3b82f6"; // Brand Blue
    ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("CERTIFICATE OF COMPLETION", canvas.width / 2, 105);

    // 5. Main Certificate text
    ctx.fillStyle = "#64748b";
    ctx.font = "italic 16px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("This certificate is proudly presented to", canvas.width / 2, 175);

    // Candidate Name
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 36px 'Outfit', sans-serif";
    ctx.fillText(candidate.fullName.toUpperCase(), canvas.width / 2, 230);

    // Middle block
    ctx.fillStyle = "#334155";
    ctx.font = "15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("for successfully attending and completing all specialized labs and training workshops at the", canvas.width / 2, 280);
    ctx.fillText("FutureStack AI Bootcamp & Hackathon, a 3-day intensive development cohort.", canvas.width / 2, 305);

    // 6. Signatures & Details Row
    const sigLineY = 460;
    
    // Left: Technical Lead
    ctx.strokeStyle = "rgba(15, 23, 42, 0.15)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(120, sigLineY);
    ctx.lineTo(290, sigLineY);
    ctx.stroke();

    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Samantha Vance", 120, sigLineY + 20);
    ctx.fillStyle = "#64748b";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Lead Mentor, FutureStack", 120, sigLineY + 36);

    // Right: Date & Verification
    ctx.beginPath();
    ctx.moveTo(canvas.width - 290, sigLineY);
    ctx.lineTo(canvas.width - 120, sigLineY);
    ctx.stroke();

    ctx.fillStyle = "#0f172a";
    ctx.textAlign = "right";
    ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("May 30, 2026", canvas.width - 120, sigLineY + 20);
    ctx.fillStyle = "#64748b";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Date of Issuance", canvas.width - 120, sigLineY + 36);

    // Center: QR verification code
    const qrSize = 75;
    const qrX = canvas.width / 2 - qrSize / 2;
    const qrY = 380;
    
    // Draw white background block for QR code with a subtle border
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(qrX - 4, qrY - 4, qrSize + 8, qrSize + 8);
    ctx.strokeStyle = "rgba(15, 23, 42, 0.08)";
    ctx.lineWidth = 1;
    ctx.strokeRect(qrX - 4, qrY - 4, qrSize + 8, qrSize + 8);

    // Verify hash text
    const certCode = `CERT-FS26-${candidate.ticketCode.split("-")[1]}-${candidate.id.split("-")[1]}`;
    ctx.fillStyle = "#64748b";
    ctx.font = "10px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.fillText(certCode, canvas.width / 2, qrY + qrSize + 22);

    // Generate Verification QR inside the canvas
    const dummyQR = document.createElement("canvas");
    QRCode.toCanvas(dummyQR, `verify-certificate-${certCode}`, { width: qrSize, margin: 0 }, (err) => {
      if (!err) {
        ctx.drawImage(dummyQR, qrX, qrY, qrSize, qrSize);
      }
    });

    // Attach Action Listeners
    document.getElementById("download-cert-btn").onclick = () => {
      const link = document.createElement("a");
      link.download = `Certificate_${candidate.fullName.replace(/\s+/g, "_")}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      this.showToast("Certificate downloaded successfully!", "success");
    };

    document.getElementById("reset-cert-btn").onclick = () => {
      document.getElementById("cert-search-panel").classList.remove("hidden");
      document.getElementById("certificate-output-panel").classList.add("hidden");
    };
  }

  // 7. HIGHLIGHTS GALLERY PAGE
  renderGallery() {
    const main = document.getElementById("main-content");
    const items = [
      { tag: "workshops", title: "Intro keynote session", file: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect width=%22400%22 height=%22300%22 fill=%22%23120f26%22/><text y=%2250%22 x=%2250%22 font-size=%2222%22 fill=%22%238b5cf6%22 font-weight=%22bold%22>Keynote Speech Auditorium</text></svg>" },
      { tag: "hackathon", title: "Hacking Sprint Labs", file: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect width=%22400%22 height=%22300%22 fill=%22%230d091a%22/><text y=%2250%22 x=%2250%22 font-size=%2222%22 fill=%22%2306b6d4%22 font-weight=%22bold%22>Hacking Sprint Labs</text></svg>" },
      { tag: "winners", title: "First Place Winners: Team Prompt", file: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect width=%22400%22 height=%22300%22 fill=%22%2318112e%22/><text y=%2250%22 x=%2250%22 font-size=%2222%22 fill=%22%23ec4899%22 font-weight=%22bold%22>Awards ceremony</text></svg>" },
      { tag: "workshops", title: "Deep learning seminar", file: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect width=%22400%22 height=%22300%22 fill=%22%230a0815%22/><text y=%2250%22 x=%2250%22 font-size=%2222%22 fill=%22%2310b981%22 font-weight=%22bold%22>AI Systems Lab</text></svg>" },
      { tag: "hackathon", title: "Pitch evaluation round", file: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect width=%22400%22 height=%22300%22 fill=%22%23110d24%22/><text y=%2250%22 x=%2250%22 font-size=%2222%22 fill=%22%23f59e0b%22 font-weight=%22bold%22>Jury panel pitch deck</text></svg>" },
      { tag: "winners", title: "Second Place Winners: Team Flow", file: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect width=%22400%22 height=%22300%22 fill=%22%23080514%22/><text y=%2250%22 x=%2250%22 font-size=%2222%22 fill=%22%238b5cf6%22 font-weight=%22bold%22>Award runners up</text></svg>" }
    ];

    main.innerHTML = `
      <div class="section-title-wrap">
        <h2 class="section-title">Gallery & Highlights</h2>
        <p class="section-subtitle">Relive key memories, podium awards, and hackathon presentation sessions.</p>
      </div>

      <div class="gallery-controls">
        <button class="track-btn active" data-filter="all">All Photos</button>
        <button class="track-btn" data-filter="workshops">Workshops</button>
        <button class="track-btn" data-filter="hackathon">Hackathon</button>
        <button class="track-btn" data-filter="winners">Winners</button>
      </div>

      <div class="gallery-grid" id="gallery-items-grid">
        ${items.map(item => `
          <div class="gallery-card glass-panel" data-tag="${item.tag}">
            <img src="${item.file}" alt="${item.title}">
            <div class="gallery-overlay">
              <span class="gallery-tag">${item.tag}</span>
              <div class="gallery-title">${item.title}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    main.querySelectorAll(".track-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const filter = e.target.getAttribute("data-filter");
        main.querySelectorAll(".track-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        
        main.querySelectorAll(".gallery-card").forEach(card => {
          if (filter === "all" || card.getAttribute("data-tag") === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 8. CONTACT & SUPPORT PAGE
  renderContact() {
    const main = document.getElementById("main-content");
    
    main.innerHTML = `
      <div class="section-title-wrap">
        <h2 class="section-title">Contact & Help Desk</h2>
        <p class="section-subtitle">Frequently asked questions and direct communication portals.</p>
      </div>

      <div class="faq-grid">
        <!-- FAQ 1 -->
        <div class="faq-item glass-panel">
          <button class="faq-question">
            <span>Who is eligible to participate in FutureStack?</span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p style="color: var(--text-secondary); line-height: 1.5;">FutureStack is open to all engineering and science undergraduate students enrolled in any department (AI, CSE, IT, ECE, EEE, Mechanical, etc.).</p>
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-item glass-panel">
          <button class="faq-question">
            <span>Is registration free or paid?</span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p style="color: var(--text-secondary); line-height: 1.5;">Registration is entirely free, sponsored by our college department and corporate venture hosts. However, slots are capped at 500 participants due to physical lab capacities.</p>
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="faq-item glass-panel">
          <button class="faq-question">
            <span>What do I need to bring for the hackathon?</span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p style="color: var(--text-secondary); line-height: 1.5;">A laptop, charger, water bottle, and a copy of your verified QR ticket pass. We provide access to high-speed campus Wi-Fi, electricity sockets, and food/refreshments.</p>
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="faq-item glass-panel">
          <button class="faq-question">
            <span>How will I receive my certificate?</span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p style="color: var(--text-secondary); line-height: 1.5;">Once you scan check-in at the entrance gate and submit your hackathon review, your email will automatically unlock verification in our Certificate Center on this portal.</p>
          </div>
        </div>
      </div>

      <div class="whatsapp-widget-row">
        <div class="whatsapp-card glass-panel">
          <div class="whatsapp-icon-box">
            <i data-lucide="message-square"></i>
          </div>
          <div class="whatsapp-card-info">
            <h5>WhatsApp Live Helpdesk</h5>
            <p>Connect immediately with student organizers.</p>
            <a href="https://wa.me/919840123456" target="_blank" class="whatsapp-btn">
              <i data-lucide="message-circle"></i> Chat Now
            </a>
          </div>
        </div>

        <div class="whatsapp-card glass-panel" style="flex-grow: 2; max-width: 100%;">
          <form id="contact-form-widget" style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
            <div class="form-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <input type="text" id="contact-name" class="form-control" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" id="contact-email" class="form-control" placeholder="Email Address" required>
              </div>
            </div>
            <div class="form-group">
              <textarea id="contact-msg" class="form-control" rows="3" placeholder="How can we help you today?" required style="resize: none;"></textarea>
            </div>
            <button type="submit" class="btn btn-glow btn-sm" style="align-self: flex-start;">Send Message</button>
          </form>
        </div>
      </div>
    `;

    lucide.createIcons();

    // Accordions JS trigger
    main.querySelectorAll(".faq-question").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const item = e.currentTarget.parentElement;
        const isActive = item.classList.contains("active");
        
        main.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    });

    // Contact Form Action
    const form = document.getElementById("contact-form-widget");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.showToast("Message received! A volunteer will get back to you shortly.", "success");
        form.reset();
      });
    }
  }

  // 9. ADMIN PORTAL MODULE
  renderAdmin() {
    const main = document.getElementById("main-content");

    if (!this.state.adminAuth) {
      document.body.classList.remove("admin-mode");
      this.renderAdminLogin();
      return;
    }

    document.body.classList.add("admin-mode");

    const isLight = this.state.adminTheme === 'light';
    if (isLight) {
      document.body.classList.add("admin-light-mode");
    } else {
      document.body.classList.remove("admin-light-mode");
    }

    main.innerHTML = `
      <div class="admin-shell ${isLight ? 'light-theme' : ''}">
        <!-- Sidebar -->
        <aside class="admin-sidebar" id="admin-sidebar">
          <div class="admin-sidebar-header">
            <span class="logo-icon">⚡</span>
            <span class="logo-text">Bootcamp Admin</span>
          </div>
          <div class="admin-sidebar-nav">
            <ul>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'dashboard' ? 'active' : ''}" data-subpage="dashboard"><i data-lucide="layout-dashboard"></i> <span>Dashboard</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'courses' ? 'active' : ''}" data-subpage="courses"><i data-lucide="book-open"></i> <span>Courses</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'students' ? 'active' : ''}" data-subpage="students"><i data-lucide="users"></i> <span>Students</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'subjects' ? 'active' : ''}" data-subpage="subjects"><i data-lucide="notebook"></i> <span>Subjects</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'teams' ? 'active' : ''}" data-subpage="teams"><i data-lucide="contact"></i> <span>Teams</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'blogs' ? 'active' : ''}" data-subpage="blogs"><i data-lucide="file-text"></i> <span>Blogs</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'media' ? 'active' : ''}" data-subpage="media"><i data-lucide="image"></i> <span>Media</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'analytics' ? 'active' : ''}" data-subpage="analytics"><i data-lucide="bar-chart-3"></i> <span>Analytics</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'events' ? 'active' : ''}" data-subpage="events"><i data-lucide="calendar"></i> <span>Events</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'certificates' ? 'active' : ''}" data-subpage="certificates"><i data-lucide="award"></i> <span>Certificates</span></a></li>
              <li><a href="javascript:void(0)" class="admin-sidebar-link ${this.state.adminActiveSubPage === 'settings' ? 'active' : ''}" data-subpage="settings"><i data-lucide="settings"></i> <span>Settings</span></a></li>
            </ul>
          </div>
          <div class="admin-sidebar-footer">
            <a href="#home" class="admin-sidebar-link" style="margin-bottom: 0.5rem; color: var(--ad-text-muted);"><i data-lucide="arrow-left-right"></i> <span>Client Portal</span></a>
            <a href="javascript:void(0)" class="admin-sidebar-link" id="admin-logout-btn" style="color: #ef4444;"><i data-lucide="log-out"></i> <span>Logout</span></a>
          </div>
        </aside>

        <!-- Main Content Area -->
        <div class="admin-dashboard-content">
          <!-- Mobile Header -->
          <div class="admin-mobile-topbar">
            <button class="admin-mobile-menu-btn" id="admin-mobile-toggle"><i data-lucide="menu"></i></button>
            <div style="font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1rem;">⚡ Bootcamp Admin</div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <button id="admin-mobile-theme-toggle-btn" class="admin-mobile-menu-btn" style="padding: 0.25rem; display: flex; align-items: center;">
                <i data-lucide="${isLight ? 'moon' : 'sun'}" style="width: 18px; height: 18px;"></i>
              </button>
              <div class="admin-avatar">SA</div>
            </div>
          </div>

          <!-- Top Navigation -->
          <header class="admin-topbar">
            <h2 class="admin-topbar-title" id="admin-topbar-title-text">Dashboard Overview</h2>
            <div class="admin-topbar-actions">
              <button id="admin-theme-toggle-btn" class="btn btn-outline btn-sm" style="padding: 0.35rem 0.5rem; display: flex; align-items: center; justify-content: center; border-color: var(--ad-glass-border); border-radius: 6px; cursor: pointer; background: transparent; color: var(--ad-text-primary);">
                <i id="admin-theme-icon" data-lucide="${isLight ? 'moon' : 'sun'}" style="width: 16px; height: 16px;"></i>
              </button>
              <div class="admin-profile">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--ad-text-secondary);">Super Administrator</span>
                <div class="admin-avatar">SA</div>
              </div>
            </div>
          </header>

          <!-- Active View Wrapper -->
          <div class="admin-view-container" id="admin-view-root">
            <!-- Loaded dynamically -->
          </div>
        </div>
      </div>
    `;

    lucide.createIcons();

    // Attach menu links click handler
    main.querySelectorAll(".admin-sidebar-link[data-subpage]").forEach(link => {
      link.addEventListener("click", (e) => {
        const subpage = e.currentTarget.getAttribute("data-subpage");
        main.querySelectorAll(".admin-sidebar-link").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        // Hide mobile menu if open
        const sidebarEl = document.getElementById("admin-sidebar");
        if (sidebarEl) sidebarEl.classList.remove("show");

        this.updateState("adminActiveSubPage", subpage);
        this.renderAdminSubPage();
      });
    });

    // Mobile menu toggle
    const mToggle = document.getElementById("admin-mobile-toggle");
    if (mToggle) {
      mToggle.addEventListener("click", () => {
        const sidebarEl = document.getElementById("admin-sidebar");
        if (sidebarEl) sidebarEl.classList.toggle("show");
      });
    }

    // Theme Toggle Handler
    const handleThemeToggle = () => {
      const currentTheme = this.state.adminTheme;
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.updateState("adminTheme", nextTheme);
      this.logAdminAction(`Theme switched to ${nextTheme} mode.`);
      this.showToast(`Switched to ${nextTheme === 'light' ? 'Light' : 'Dark'} mode`, "success");
      this.renderAdmin();
    };

    const toggleBtn = document.getElementById("admin-theme-toggle-btn");
    const mobileToggleBtn = document.getElementById("admin-mobile-theme-toggle-btn");
    if (toggleBtn) toggleBtn.onclick = handleThemeToggle;
    if (mobileToggleBtn) mobileToggleBtn.onclick = handleThemeToggle;

    // Logout
    const lBtn = document.getElementById("admin-logout-btn");
    if (lBtn) {
      lBtn.addEventListener("click", () => {
        this.updateState("admin_auth", false);
        document.body.classList.remove("admin-mode");
        document.body.classList.remove("admin-light-mode");
        this.showToast("Logged out of administrative session.", "info");
        this.navigateTo("admin");
      });
    }

    // Render active sub page
    this.renderAdminSubPage();
  }

  renderAdminSubPage() {
    const root = document.getElementById("admin-view-root");
    const titleEl = document.getElementById("admin-topbar-title-text");
    if (!root) return;

    const page = this.state.adminActiveSubPage;
    
    // Set Topbar Title
    if (titleEl) {
      const titles = {
        dashboard: "Dashboard Overview",
        courses: "Course & Syllabus Management",
        students: "Student & Cohort Management",
        subjects: "Subject & Curriculum Management",
        teams: "Team & Trainer Management",
        blogs: "Blog & Content Publishing",
        media: "Media & Asset Library",
        analytics: "Advanced Analytics Telemetry",
        events: "Event & Workshop Management",
        certificates: "Certificate & Placement Module",
        settings: "Security & Console Settings"
      };
      titleEl.textContent = titles[page] || "Admin Console";
    }

    // Trigger router function
    const renderers = {
      dashboard: () => this.renderAdminDashboard(),
      courses: () => this.renderAdminCourses(),
      students: () => this.renderAdminStudents(),
      subjects: () => this.renderAdminSubjects(),
      teams: () => this.renderAdminTeams(),
      blogs: () => this.renderAdminBlogs(),
      media: () => this.renderAdminMedia(),
      analytics: () => this.renderAdminAnalytics(),
      events: () => this.renderAdminEvents(),
      certificates: () => this.renderAdminCertificates(),
      settings: () => this.renderAdminSettings()
    };

    if (renderers[page]) {
      renderers[page]();
      lucide.createIcons();
    } else {
      root.innerHTML = `<div style="padding: 2rem; color: red;">Error: Sub-page renderer "${page}" not found.</div>`;
    }
  }

  showAdminModal(title, bodyHtml, onConfirm) {
    const existing = document.getElementById("admin-modal-overlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "admin-modal-overlay";
    overlay.className = "admin-modal-overlay";
    overlay.innerHTML = `
      <div class="admin-modal-card">
        <div class="admin-modal-header">
          <h3>${title}</h3>
          <button class="admin-modal-close" id="admin-modal-close-btn">&times;</button>
        </div>
        <div class="admin-modal-body">
          ${bodyHtml}
        </div>
        <div class="admin-modal-footer">
          <button class="btn btn-secondary btn-sm" id="admin-modal-cancel-btn">Cancel</button>
          <button class="btn btn-glow btn-sm" id="admin-modal-confirm-btn">Save Changes</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = document.getElementById("admin-modal-close-btn");
    const cancelBtn = document.getElementById("admin-modal-cancel-btn");
    const confirmBtn = document.getElementById("admin-modal-confirm-btn");

    const closeModal = () => overlay.remove();

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    
    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        if (onConfirm(overlay)) {
          closeModal();
        }
      });
    }
  }

  logAdminAction(actionText) {
    const logs = this.loadData("admin_logs", [
      { time: new Date(Date.now() - 3600000 * 2).toISOString(), action: "Admin Session authorized." },
      { time: new Date(Date.now() - 3600000).toISOString(), action: "Default database seeded successfully." }
    ]);
    logs.unshift({ time: new Date().toISOString(), action: actionText });
    this.updateState("admin_logs", logs);
  }

  renderAdminDashboard() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;
    
    const totalStudents = this.state.applicants.length;
    const activeCourses = this.state.courses.length;
    const activeEvents = this.state.events.filter(e => e.status === 'Scheduled').length;
    
    const logs = this.loadData("admin_logs", [
      { time: new Date(Date.now() - 3600000 * 2).toISOString(), action: "Admin Session authorized." },
      { time: new Date(Date.now() - 3600000).toISOString(), action: "Default database seeded successfully." }
    ]);

    root.innerHTML = `
      <div class="admin-grid-3">
        <div class="admin-card admin-stat-card">
          <div class="admin-stat-icon blue"><i data-lucide="book-open"></i></div>
          <div class="admin-stat-info">
            <h4>${activeCourses}</h4>
            <p>Active Courses</p>
          </div>
        </div>
        <div class="admin-card admin-stat-card">
          <div class="admin-stat-icon emerald"><i data-lucide="users"></i></div>
          <div class="admin-stat-info">
            <h4>${totalStudents}</h4>
            <p>Total Students</p>
          </div>
        </div>
        <div class="admin-card admin-stat-card">
          <div class="admin-stat-icon purple"><i data-lucide="calendar"></i></div>
          <div class="admin-stat-info">
            <h4>${activeEvents}</h4>
            <p>Scheduled Events</p>
          </div>
        </div>
      </div>
      
      <div class="admin-grid-main-side">
        <!-- Main: Traffic & Activity -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="admin-card">
            <div class="admin-card-header">
              <h3>Traffic Analytics</h3>
            </div>
            <div style="height: 250px; position: relative;">
              <canvas id="admin-traffic-chart"></canvas>
            </div>
          </div>
          <div class="admin-card">
            <div class="admin-card-header">
              <h3>Recent Activities Console</h3>
            </div>
            <div class="activity-feed">
              ${logs.slice(0, 6).map(l => `
                <div class="activity-item">
                  <div class="activity-dot"></div>
                  <div class="activity-content">
                    <div>${l.action}</div>
                    <span class="activity-time">${new Date(l.time).toLocaleTimeString()} - ${new Date(l.time).toLocaleDateString()}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        
        <!-- Side: Progress & Alerts -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="admin-card">
            <div class="admin-card-header">
              <h3>Course Progress Analytics</h3>
            </div>
            <div class="gamification-stats">
              ${this.state.courses.map(c => {
                const completion = Math.round(40 + Math.random() * 40);
                return `
                  <div style="margin-bottom: 0.75rem;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                      <span style="font-weight: 600; font-size: 0.75rem;">${c.title}</span>
                      <span style="color: var(--ad-orange); font-size: 0.75rem; font-weight: 700;">${completion}%</span>
                    </div>
                    <div style="height: 6px; background-color: var(--ad-bg-tertiary); border-radius: 3px; overflow: hidden;">
                      <div style="width: ${completion}%; height: 100%; background: linear-gradient(90deg, var(--ad-orange), var(--ad-blue));"></div>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
          
          <div class="admin-card">
            <div class="admin-card-header">
              <h3>System Notifications</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${this.state.applicants.filter(a => a.status === 'pending').length > 0 ? `
                <div class="ad-badge ad-badge-pending" style="display: block; padding: 0.75rem; border-radius: 6px;">
                  ⚠️ ${this.state.applicants.filter(a => a.status === 'pending').length} passes pending approval!
                </div>
              ` : `
                <div class="ad-badge ad-badge-success" style="display: block; padding: 0.75rem; border-radius: 6px;">
                  ✅ All applicant passes processed.
                </div>
              `}
              <div class="ad-badge ad-badge-info" style="display: block; padding: 0.75rem; border-radius: 6px;">
                📢 Broadcast ticker is currently active.
              </div>
              <div class="ad-badge ad-badge-purple" style="display: block; padding: 0.75rem; border-radius: 6px;">
                🏆 Leaderboard updated with latest scores.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Draw traffic chart using Chart.js
    const ctx = document.getElementById("admin-traffic-chart");
    if (ctx) {
      if (window.trafficChartObj) window.trafficChartObj.destroy();

      const isLight = this.state.adminTheme === 'light';
      const tickColor = isLight ? "#64748b" : "#9ca3af";
      const gridColor = isLight ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";

      window.trafficChartObj = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{
            label: "Unique Visitors",
            data: [350, 480, 520, 710, 680, 550, 790],
            borderColor: "#f97316",
            backgroundColor: isLight ? "rgba(249, 115, 22, 0.08)" : "rgba(249, 115, 22, 0.15)",
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor } },
            y: { grid: { color: gridColor }, ticks: { color: tickColor } }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  }

  renderAdminCourses() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    root.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Course & Syllabus Inventory</h3>
          <button class="btn btn-glow btn-sm" id="admin-add-course-btn"><i data-lucide="plus"></i> Add New Course</button>
        </div>
        <div class="ad-form-row">
          <div class="ad-input-group">
            <i data-lucide="search"></i>
            <input type="text" id="admin-search-course" class="ad-search" placeholder="Search by title, description, or modules...">
          </div>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table" id="courses-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Title</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Enrolled</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody id="admin-courses-tbody">
              <!-- Loaded dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    `;

    this.renderAdminCoursesList();

    document.getElementById("admin-add-course-btn").onclick = () => this.showCourseModal();
    document.getElementById("admin-search-course").oninput = () => this.renderAdminCoursesList();
  }

  renderAdminCoursesList() {
    const tbody = document.getElementById("admin-courses-tbody");
    if (!tbody) return;

    const query = document.getElementById("admin-search-course").value.trim().toLowerCase();
    
    const filtered = this.state.courses.filter(c => 
      c.title.toLowerCase().includes(query) || 
      c.description.toLowerCase().includes(query) ||
      c.id.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--ad-text-muted); padding: 2rem;">No courses found matching criteria.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(c => `
      <tr>
        <td><strong style="color: var(--ad-blue);">${c.id}</strong></td>
        <td>
          <div style="font-weight: 700; color: var(--ad-text-primary);">${c.title}</div>
          <div style="font-size: 0.75rem; color: var(--ad-text-muted); max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${c.description}</div>
        </td>
        <td>${c.duration}</td>
        <td>
          <span class="ad-badge ${c.published ? 'ad-badge-success' : 'ad-badge-pending'}" style="cursor: pointer;" onclick="window.appEngine.toggleCoursePublish('${c.id}')">
            ${c.published ? 'Published' : 'Draft'}
          </span>
        </td>
        <td>${c.enrolledCount} students</td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button class="btn btn-outline btn-sm" onclick="window.appEngine.showCourseModal('${c.id}')" style="padding: 0.35rem 0.5rem; border-color: rgba(255,255,255,0.1);"><i data-lucide="edit-3" style="width: 14px; height: 14px;"></i></button>
            <button class="btn btn-danger btn-sm" onclick="window.appEngine.deleteCourse('${c.id}')" style="padding: 0.35rem 0.5rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
          </div>
        </td>
      </tr>
    `).join("");

    lucide.createIcons();
  }

  toggleCoursePublish(id) {
    const list = this.state.courses;
    const idx = list.findIndex(c => c.id === id);
    if (idx !== -1) {
      list[idx].published = !list[idx].published;
      this.updateState("courses", list);
      this.showToast(`Course status updated to ${list[idx].published ? 'Published' : 'Draft'}`, "success");
      this.logAdminAction(`Course ${id} status toggled.`);
      this.renderAdminCoursesList();
    }
  }

  deleteCourse(id) {
    if (confirm(`Are you sure you want to delete course ${id}? This cannot be undone.`)) {
      const list = this.state.courses.filter(c => c.id !== id);
      this.updateState("courses", list);
      this.showToast(`Course ${id} deleted successfully.`, "info");
      this.logAdminAction(`Course ${id} deleted.`);
      this.renderAdminCoursesList();
    }
  }

  showCourseModal(courseId = null) {
    const isEdit = courseId !== null;
    const course = isEdit ? this.state.courses.find(c => c.id === courseId) : {
      id: "CRS-" + (100 + this.state.courses.length + 1),
      title: "",
      description: "",
      duration: "6 Weeks",
      price: 199,
      published: true,
      syllabus: []
    };

    const bodyHtml = `
      <div class="ad-form-group">
        <label for="course-title">Course Title</label>
        <input type="text" id="course-title" class="form-control" value="${course.title}" placeholder="e.g. Prompt Engineering Advanced" required>
      </div>
      <div class="ad-form-group">
        <label for="course-description">Description</label>
        <textarea id="course-description" class="form-control" rows="3" placeholder="Core course overview..." required>${course.description}</textarea>
      </div>
      <div class="ad-form-group">
        <label for="course-duration">Duration</label>
        <input type="text" id="course-duration" class="form-control" value="${course.duration}" placeholder="e.g. 6 Weeks">
      </div>
      <div class="ad-form-group">
        <label for="course-syllabus">Syllabus Modules (Comma separated)</label>
        <input type="text" id="course-syllabus" class="form-control" value="${course.syllabus.join(", ")}" placeholder="Module 1, Module 2, Module 3...">
      </div>
      <div class="checkbox-group" style="margin-top: 1rem;">
        <input type="checkbox" id="course-published" ${course.published ? 'checked' : ''}>
        <label for="course-published">Publish Immediately</label>
      </div>
    `;

    this.showAdminModal(
      isEdit ? `Edit Course Details (${course.id})` : "Create New Course",
      bodyHtml,
      (modalOverlay) => {
        const title = document.getElementById("course-title").value.trim();
        const description = document.getElementById("course-description").value.trim();
        const duration = document.getElementById("course-duration").value.trim() || "6 Weeks";
        const price = 0;
        const syllabusText = document.getElementById("course-syllabus").value.trim();
        const published = document.getElementById("course-published").checked;

        if (!title || !description) {
          this.showToast("Please fill in all required fields.", "warning");
          return false;
        }

        const syllabus = syllabusText ? syllabusText.split(",").map(s => s.trim()).filter(Boolean) : [];

        const list = this.state.courses;
        if (isEdit) {
          const idx = list.findIndex(c => c.id === courseId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], title, description, duration, price, syllabus, published };
            this.showToast("Course details updated successfully!", "success");
            this.logAdminAction(`Course ${courseId} details updated.`);
          }
        } else {
          list.push({
            id: course.id,
            title,
            description,
            duration,
            price,
            published,
            enrolledCount: 0,
            syllabus
          });
          this.showToast("New course successfully registered!", "success");
          this.logAdminAction(`New Course ${course.id} registered.`);
        }

        this.updateState("courses", list);
        this.renderAdminCoursesList();
        return true;
      }
    );
  }
  renderAdminStudents() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    root.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Cohort Enrollment Manager</h3>
          <button class="btn btn-glow btn-sm" id="admin-add-student-btn"><i data-lucide="plus"></i> Add Student Manually</button>
        </div>
        <div class="ad-form-row">
          <div class="ad-input-group">
            <i data-lucide="search"></i>
            <input type="text" id="admin-search-student" class="ad-search" placeholder="Search by name, email, college, phone...">
          </div>
          <select class="ad-select" id="admin-filter-student-status">
            <option value="all">All Applicants</option>
            <option value="pending">Pending passes</option>
            <option value="approved">Approved passes</option>
            <option value="rejected">Rejected passes</option>
            <option value="checkedin">Checked-In Gate</option>
          </select>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table" id="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Profile</th>
                <th>University Details</th>
                <th>Passcode</th>
                <th>Status</th>
                <th>Attendance</th>
                <th style="text-align: right; width: 220px;">Actions</th>
              </tr>
            </thead>
            <tbody id="admin-students-tbody">
              <!-- Loaded dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    `;

    this.renderAdminStudentsList();

    document.getElementById("admin-add-student-btn").onclick = () => this.showStudentModal();
    document.getElementById("admin-search-student").oninput = () => this.renderAdminStudentsList();
    document.getElementById("admin-filter-student-status").onchange = () => this.renderAdminStudentsList();
  }

  renderAdminStudentsList() {
    const tbody = document.getElementById("admin-students-tbody");
    if (!tbody) return;

    const query = document.getElementById("admin-search-student").value.trim().toLowerCase();
    const filter = document.getElementById("admin-filter-student-status").value;

    const filtered = this.state.applicants.filter(a => {
      const matchText = a.fullName.toLowerCase().includes(query) ||
                        a.email.toLowerCase().includes(query) ||
                        a.collegeName.toLowerCase().includes(query) ||
                        a.id.toLowerCase().includes(query) ||
                        a.ticketCode.toLowerCase().includes(query);
      
      let matchStatus = false;
      if (filter === "all") matchStatus = true;
      else if (filter === "pending") matchStatus = a.status === "pending";
      else if (filter === "approved") matchStatus = a.status === "approved";
      else if (filter === "rejected") matchStatus = a.status === "rejected";
      else if (filter === "checkedin") matchStatus = a.checkedIn === true;

      return matchText && matchStatus;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--ad-text-muted); padding: 2rem;">No registrants found matching filters.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(a => `
      <tr>
        <td><span style="font-family: monospace; font-weight: 700; color: var(--ad-text-muted);">${a.id}</span></td>
        <td>
          <div style="font-weight: 700; color: var(--ad-text-primary);">${a.fullName}</div>
          <div style="font-size: 0.75rem; color: var(--ad-text-muted);">${a.email}</div>
          <div style="font-size: 0.75rem; color: var(--ad-blue);">${a.phone}</div>
        </td>
        <td>
          <div>${a.collegeName}</div>
          <div style="font-size: 0.75rem; color: var(--ad-text-muted);">${a.department} (${a.yearOfStudy} Yr)</div>
        </td>
        <td><code style="color: var(--ad-orange); font-weight: 700; font-family: monospace; font-size: 0.85rem;">${a.ticketCode}</code></td>
        <td>
          <span class="ad-badge ${a.status === 'approved' ? 'ad-badge-success' : a.status === 'rejected' ? 'ad-badge-danger' : 'ad-badge-pending'}">
            ${a.status}
          </span>
        </td>
        <td>
          <span class="ad-badge ${a.checkedIn ? 'ad-badge-success' : 'ad-badge-pending'}" style="cursor: pointer;" onclick="window.appEngine.toggleStudentCheckIn('${a.id}')">
            ${a.checkedIn ? 'Checked-In' : 'Absent'}
          </span>
        </td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;">
            ${a.status === 'pending' ? `
              <button class="btn btn-glow btn-sm" style="padding: 0.35rem 0.5rem; font-size: 0.75rem;" onclick="window.appEngine.updateStudentStatus('${a.id}', 'approved')">Approve</button>
              <button class="btn btn-outline btn-sm" style="padding: 0.35rem 0.5rem; font-size: 0.75rem; border-color: rgba(239, 68, 68, 0.3); color: #ef4444;" onclick="window.appEngine.updateStudentStatus('${a.id}', 'rejected')">Reject</button>
            ` : ''}
            <button class="btn btn-outline btn-sm" onclick="window.appEngine.showStudentModal('${a.id}')" style="padding: 0.35rem 0.5rem; border-color: rgba(255,255,255,0.1);"><i data-lucide="edit-3" style="width: 14px; height: 14px;"></i></button>
            <button class="btn btn-danger btn-sm" onclick="window.appEngine.deleteStudent('${a.id}')" style="padding: 0.35rem 0.5rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
          </div>
        </td>
      </tr>
    `).join("");

    lucide.createIcons();
  }

  updateStudentStatus(id, newStatus) {
    const list = this.state.applicants;
    const idx = list.findIndex(a => a.id === id);
    if (idx !== -1) {
      list[idx].status = newStatus;
      this.updateState("applicants", list);
      this.showToast(`Student pass has been ${newStatus}.`, "success");
      this.logAdminAction(`Student ${id} status updated to ${newStatus}.`);
      this.renderAdminStudentsList();
    }
  }

  toggleStudentCheckIn(id) {
    const list = this.state.applicants;
    const idx = list.findIndex(a => a.id === id);
    if (idx !== -1) {
      list[idx].checkedIn = !list[idx].checkedIn;
      list[idx].checkInTime = list[idx].checkedIn ? new Date().toISOString() : null;
      this.updateState("applicants", list);
      this.showToast(list[idx].checkedIn ? "Student marked Checked-In" : "Check-In status removed.", "success");
      this.logAdminAction(`Student ${id} gate check-in status toggled.`);
      this.renderAdminStudentsList();
    }
  }

  deleteStudent(id) {
    if (confirm(`Are you sure you want to delete student profile ${id}? This cannot be undone.`)) {
      const list = this.state.applicants.filter(a => a.id !== id);
      this.updateState("applicants", list);
      this.showToast(`Student profile ${id} deleted successfully.`, "info");
      this.logAdminAction(`Student ${id} profile deleted.`);
      this.renderAdminStudentsList();
    }
  }

  showStudentModal(studentId = null) {
    const isEdit = studentId !== null;
    const student = isEdit ? this.state.applicants.find(a => a.id === studentId) : {
      id: "AP-" + (1000 + this.state.applicants.length + 1),
      fullName: "",
      email: "",
      phone: "",
      collegeName: "",
      department: "CSE",
      yearOfStudy: 3,
      skills: [],
      status: "approved",
      checkedIn: false,
      ticketCode: "FS26-" + Math.random().toString(36).substring(2, 6).toUpperCase()
    };

    const bodyHtml = `
      <div class="ad-form-group">
        <label for="student-name">Full Name</label>
        <input type="text" id="student-name" class="form-control" value="${student.fullName}" placeholder="e.g. John Doe" required>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="student-email">Email</label>
          <input type="email" id="student-email" class="form-control" value="${student.email}" placeholder="e.g. john@example.com" required>
        </div>
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="student-phone">Phone</label>
          <input type="text" id="student-phone" class="form-control" value="${student.phone || ''}" placeholder="e.g. +91 9876543210">
        </div>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="student-college">College / University</label>
          <input type="text" id="student-college" class="form-control" value="${student.collegeName}" placeholder="e.g. IIT Madras">
        </div>
        <div class="ad-form-group" style="width: 120px;">
          <label for="student-year">Year</label>
          <select id="student-year" class="form-control">
            <option value="1" ${student.yearOfStudy == 1 ? 'selected' : ''}>1st Yr</option>
            <option value="2" ${student.yearOfStudy == 2 ? 'selected' : ''}>2nd Yr</option>
            <option value="3" ${student.yearOfStudy == 3 ? 'selected' : ''}>3rd Yr</option>
            <option value="4" ${student.yearOfStudy == 4 ? 'selected' : ''}>4th Yr</option>
          </select>
        </div>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="student-dept">Department</label>
          <input type="text" id="student-dept" class="form-control" value="${student.department}" placeholder="e.g. CSE">
        </div>
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="student-skills">Skills (Comma separated)</label>
          <input type="text" id="student-skills" class="form-control" value="${student.skills ? student.skills.join(', ') : ''}" placeholder="e.g. Python, SQL">
        </div>
      </div>
      <div class="ad-form-row" style="margin-top: 0.5rem;">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="student-status">Pass Status</label>
          <select id="student-status" class="form-control">
            <option value="pending" ${student.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="approved" ${student.status === 'approved' ? 'selected' : ''}>Approved</option>
            <option value="rejected" ${student.status === 'rejected' ? 'selected' : ''}>Rejected</option>
          </select>
        </div>
        <div class="checkbox-group" style="flex-grow: 1; align-self: center; margin-top: 1.25rem;">
          <input type="checkbox" id="student-checkedin" ${student.checkedIn ? 'checked' : ''}>
          <label for="student-checkedin">Gate Checked-in</label>
        </div>
      </div>
    `;

    this.showAdminModal(
      isEdit ? `Edit Student Profile (${student.id})` : "Add Student Profile",
      bodyHtml,
      (modalOverlay) => {
        const fullName = document.getElementById("student-name").value.trim();
        const email = document.getElementById("student-email").value.trim();
        const phone = document.getElementById("student-phone").value.trim();
        const collegeName = document.getElementById("student-college").value.trim();
        const yearOfStudy = parseInt(document.getElementById("student-year").value) || 3;
        const department = document.getElementById("student-dept").value.trim() || "CSE";
        const skillsText = document.getElementById("student-skills").value.trim();
        const status = document.getElementById("student-status").value;
        const checkedIn = document.getElementById("student-checkedin").checked;

        if (!fullName || !email) {
          this.showToast("Please fill in required Name and Email.", "warning");
          return false;
        }

        const skills = skillsText ? skillsText.split(",").map(s => s.trim()).filter(Boolean) : [];

        const list = this.state.applicants;
        if (isEdit) {
          const idx = list.findIndex(a => a.id === studentId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], fullName, email, phone, collegeName, yearOfStudy, department, skills, status, checkedIn };
            if (checkedIn && !list[idx].checkInTime) list[idx].checkInTime = new Date().toISOString();
            this.showToast("Student profile updated.", "success");
            this.logAdminAction(`Student profile ${studentId} updated.`);
          }
        } else {
          list.push({
            id: student.id,
            fullName,
            email,
            phone,
            collegeName,
            yearOfStudy,
            department,
            skills,
            status,
            checkedIn,
            ticketCode: student.ticketCode,
            checkInTime: checkedIn ? new Date().toISOString() : null
          });
          this.showToast("New student profile created.", "success");
          this.logAdminAction("New student profile " + student.id + " added.");
        }

        this.updateState("applicants", list);
        this.renderAdminStudentsList();
        return true;
      }
    );
  }

  renderAdminSubjects() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    root.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Subject Curriculum</h3>
          <button class="btn btn-glow btn-sm" id="admin-add-subject-btn"><i data-lucide="plus"></i> Add Subject Module</button>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject Name</th>
                <th>Linked Course</th>
                <th>Assigned Trainer</th>
                <th>Difficulty</th>
                <th>Completion Progress</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody id="admin-subjects-tbody">
              <!-- Dynamically populated -->
            </tbody>
          </table>
        </div>
      </div>
    `;

    this.renderAdminSubjectsList();
    document.getElementById("admin-add-subject-btn").onclick = () => this.showSubjectModal();
  }

  renderAdminSubjectsList() {
    const tbody = document.getElementById("admin-subjects-tbody");
    if (!tbody) return;

    tbody.innerHTML = this.state.subjects.map(s => {
      const course = this.state.courses.find(c => c.id === s.courseId);
      const courseTitle = course ? course.title : "Unassigned";
      
      return `
        <tr>
          <td><strong style="color: var(--ad-orange);">${s.id}</strong></td>
          <td><div style="font-weight: 700;">${s.name}</div></td>
          <td><span style="font-size: 0.8rem; color: var(--ad-text-muted);">${courseTitle}</span></td>
          <td>${s.trainer}</td>
          <td>
            <span class="ad-badge ${s.difficulty === 'Advanced' ? 'ad-badge-danger' : s.difficulty === 'Intermediate' ? 'ad-badge-purple' : 'ad-badge-success'}">
              ${s.difficulty}
            </span>
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 0.5rem; max-width: 150px;">
              <div style="height: 6px; background-color: var(--ad-bg-tertiary); border-radius: 3px; overflow: hidden; flex-grow: 1;">
                <div style="width: ${s.completion}%; height: 100%; background: var(--ad-blue);"></div>
              </div>
              <span style="font-size: 0.75rem; font-weight: 600;">${s.completion}%</span>
            </div>
          </td>
          <td style="text-align: right;">
            <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <button class="btn btn-outline btn-sm" onclick="window.appEngine.showSubjectModal('${s.id}')" style="padding: 0.35rem 0.5rem; border-color: rgba(255,255,255,0.1);"><i data-lucide="edit-3" style="width: 14px; height: 14px;"></i></button>
              <button class="btn btn-danger btn-sm" onclick="window.appEngine.deleteSubject('${s.id}')" style="padding: 0.35rem 0.5rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    lucide.createIcons();
  }

  deleteSubject(id) {
    if (confirm("Delete subject " + id + "?")) {
      const list = this.state.subjects.filter(s => s.id !== id);
      this.updateState("subjects", list);
      this.showToast("Subject " + id + " removed.", "info");
      this.logAdminAction(`Subject ${id} deleted.`);
      this.renderAdminSubjectsList();
    }
  }

  showSubjectModal(subId = null) {
    const isEdit = subId !== null;
    const subject = isEdit ? this.state.subjects.find(s => s.id === subId) : {
      id: "SUB-" + (200 + this.state.subjects.length + 1),
      name: "",
      courseId: this.state.courses[0] ? this.state.courses[0].id : "",
      trainer: this.state.trainers[0] ? this.state.trainers[0].name : "",
      difficulty: "Intermediate",
      completion: 0
    };

    const coursesOptions = this.state.courses.map(c => `<option value="${c.id}" ${subject.courseId === c.id ? 'selected' : ''}>${c.title}</option>`).join("");
    const trainersOptions = this.state.trainers.map(t => `<option value="${t.name}" ${subject.trainer === t.name ? 'selected' : ''}>${t.name}</option>`).join("");

    const bodyHtml = `
      <div class="ad-form-group">
        <label for="sub-name">Subject Name</label>
        <input type="text" id="sub-name" class="form-control" value="${subject.name}" required>
      </div>
      <div class="ad-form-group">
        <label for="sub-course">Linked Course</label>
        <select id="sub-course" class="form-control">${coursesOptions}</select>
      </div>
      <div class="ad-form-group">
        <label for="sub-trainer">Assigned Trainer</label>
        <select id="sub-trainer" class="form-control">${trainersOptions}</select>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="sub-diff">Difficulty Level</label>
          <select id="sub-diff" class="form-control">
            <option value="Beginner" ${subject.difficulty === 'Beginner' ? 'selected' : ''}>Beginner</option>
            <option value="Intermediate" ${subject.difficulty === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
            <option value="Advanced" ${subject.difficulty === 'Advanced' ? 'selected' : ''}>Advanced</option>
          </select>
        </div>
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="sub-completion">Completion Progress (%)</label>
          <input type="number" id="sub-completion" class="form-control" value="${subject.completion}" min="0" max="100">
        </div>
      </div>
    `;

    this.showAdminModal(
      isEdit ? `Edit Subject (${subject.id})` : "Add Subject Module",
      bodyHtml,
      (overlay) => {
        const name = document.getElementById("sub-name").value.trim();
        const courseId = document.getElementById("sub-course").value;
        const trainer = document.getElementById("sub-trainer").value;
        const difficulty = document.getElementById("sub-diff").value;
        const completion = parseInt(document.getElementById("sub-completion").value) || 0;

        if (!name) {
          this.showToast("Please enter a subject name.", "warning");
          return false;
        }

        const list = this.state.subjects;
        if (isEdit) {
          const idx = list.findIndex(s => s.id === subId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], name, courseId, trainer, difficulty, completion };
            this.showToast("Subject details updated.", "success");
            this.logAdminAction(`Subject ${subId} details updated.`);
          }
        } else {
          list.push({ id: subject.id, name, courseId, trainer, difficulty, completion, materialsCount: 0 });
          this.showToast("Subject module added successfully.", "success");
          this.logAdminAction("New Subject " + subject.id + " registered.");
        }

        this.updateState("subjects", list);
        this.renderAdminSubjectsList();
        return true;
      }
    );
  }

  renderAdminTeams() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    root.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Administrative & Trainer Directory</h3>
          <button class="btn btn-glow btn-sm" id="admin-add-team-btn"><i data-lucide="user-plus"></i> Add Team Member</button>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Trainer / Member</th>
                <th>Email Address</th>
                <th>Assigned Role</th>
                <th>Productivity</th>
                <th>Pending Tasks</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody id="admin-teams-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    `;

    this.renderAdminTeamsList();
    document.getElementById("admin-add-team-btn").onclick = () => this.showTeamModal();
  }

  renderAdminTeamsList() {
    const tbody = document.getElementById("admin-teams-tbody");
    if (!tbody) return;

    tbody.innerHTML = this.state.trainers.map(t => `
      <tr>
        <td><strong style="color: var(--ad-blue);">${t.id}</strong></td>
        <td><div style="font-weight: 700;">${t.name}</div></td>
        <td><code>${t.email}</code></td>
        <td>
          <span class="ad-badge ${t.role === 'Admin' || t.role === 'Super Admin' ? 'ad-badge-danger' : t.role === 'Trainer' ? 'ad-badge-success' : 'ad-badge-info'}">
            ${t.role}
          </span>
        </td>
        <td>
          <div style="font-weight: 700; color: ${t.productivity >= 90 ? '#10b981' : '#f59e0b'};">${t.productivity}%</div>
        </td>
        <td>${t.tasksCount} open tasks</td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button class="btn btn-outline btn-sm" onclick="window.appEngine.showTeamModal('${t.id}')" style="padding: 0.35rem 0.5rem; border-color: rgba(255,255,255,0.1);"><i data-lucide="edit-3" style="width: 14px; height: 14px;"></i></button>
            <button class="btn btn-danger btn-sm" onclick="window.appEngine.deleteTeamMember('${t.id}')" style="padding: 0.35rem 0.5rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
          </div>
        </td>
      </tr>
    `).join("");

    lucide.createIcons();
  }

  deleteTeamMember(id) {
    if (confirm(`Remove team member ${id}?`)) {
      const list = this.state.trainers.filter(t => t.id !== id);
      this.updateState("trainers", list);
      this.showToast(`Team member ${id} removed.`, "info");
      this.logAdminAction(`Team member ${id} removed.`);
      this.renderAdminTeamsList();
    }
  }

  showTeamModal(memberId = null) {
    const isEdit = memberId !== null;
    const member = isEdit ? this.state.trainers.find(t => t.id === memberId) : {
      id: "TRN-" + (300 + this.state.trainers.length + 1),
      name: "",
      email: "",
      role: "Trainer",
      productivity: 90,
      tasksCount: 0
    };

    const bodyHtml = `
      <div class="ad-form-group">
        <label for="team-name">Full Name</label>
        <input type="text" id="team-name" class="form-control" value="${member.name}" required>
      </div>
      <div class="ad-form-group">
        <label for="team-email">Email Address</label>
        <input type="email" id="team-email" class="form-control" value="${member.email}" required>
      </div>
      <div class="ad-form-group">
        <label for="team-role">Assigned Role</label>
        <select id="team-role" class="form-control">
          <option value="Super Admin" ${member.role === 'Super Admin' ? 'selected' : ''}>Super Admin</option>
          <option value="Admin" ${member.role === 'Admin' ? 'selected' : ''}>Admin</option>
          <option value="Trainer" ${member.role === 'Trainer' ? 'selected' : ''}>Trainer</option>
          <option value="Mentor" ${member.role === 'Mentor' ? 'selected' : ''}>Mentor</option>
          <option value="Content Creator" ${member.role === 'Content Creator' ? 'selected' : ''}>Content Creator</option>
          <option value="Sales Manager" ${member.role === 'Sales Manager' ? 'selected' : ''}>Sales Manager</option>
        </select>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="team-prod">Productivity Score (%)</label>
          <input type="number" id="team-prod" class="form-control" value="${member.productivity}" min="0" max="100">
        </div>
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="team-tasks">Open Tasks</label>
          <input type="number" id="team-tasks" class="form-control" value="${member.tasksCount}" min="0">
        </div>
      </div>
    `;

    this.showAdminModal(
      isEdit ? `Edit Staff Member (${member.id})` : "Add Staff Member",
      bodyHtml,
      (overlay) => {
        const name = document.getElementById("team-name").value.trim();
        const email = document.getElementById("team-email").value.trim();
        const role = document.getElementById("team-role").value;
        const productivity = parseInt(document.getElementById("team-prod").value) || 90;
        const tasksCount = parseInt(document.getElementById("team-tasks").value) || 0;

        if (!name || !email) {
          this.showToast("Please fill in Name and Email.", "warning");
          return false;
        }

        const list = this.state.trainers;
        if (isEdit) {
          const idx = list.findIndex(t => t.id === memberId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], name, email, role, productivity, tasksCount };
            this.showToast("Staff profile updated.", "success");
            this.logAdminAction(`Staff profile ${memberId} updated.`);
          }
        } else {
          list.push({ id: member.id, name, email, role, productivity, tasksCount });
          this.showToast("Staff profile created.", "success");
          this.logAdminAction(`New staff profile ${member.id} added.`);
        }

        this.updateState("trainers", list);
        this.renderAdminTeamsList();
        return true;
      }
    );
  }

  renderAdminBlogs() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    root.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Blog Content Manager & SEO Console</h3>
          <button class="btn btn-glow btn-sm" id="admin-add-blog-btn"><i data-lucide="plus"></i> Create Article Post</button>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Article Title</th>
                <th>Author</th>
                <th>SEO Slug</th>
                <th>SEO Meta Info</th>
                <th>Status</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody id="admin-blogs-tbody">
              <!-- Dynamically populated -->
            </tbody>
          </table>
        </div>
      </div>
    `;

    this.renderAdminBlogsList();
    document.getElementById("admin-add-blog-btn").onclick = () => this.showBlogModal();
  }

  renderAdminBlogsList() {
    const tbody = document.getElementById("admin-blogs-tbody");
    if (!tbody) return;

    tbody.innerHTML = this.state.blogs.map(b => `
      <tr>
        <td><strong style="color: var(--ad-orange);">${b.id}</strong></td>
        <td>
          <div style="font-weight: 700;">${b.title}</div>
          <div style="font-size: 0.75rem; color: var(--ad-text-muted); max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${b.excerpt}</div>
        </td>
        <td>${b.author}</td>
        <td><code>/${b.slug}</code></td>
        <td>
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--ad-blue);">${b.metaTitle}</div>
          <div style="font-size: 0.65rem; color: var(--ad-text-muted); max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${b.metaDescription}</div>
        </td>
        <td>
          <span class="ad-badge ${b.published ? 'ad-badge-success' : 'ad-badge-pending'}" style="cursor: pointer;" onclick="window.appEngine.toggleBlogPublish('${b.id}')">
            ${b.published ? 'Published' : 'Draft'}
          </span>
        </td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button class="btn btn-outline btn-sm" onclick="window.appEngine.showBlogModal('${b.id}')" style="padding: 0.35rem 0.5rem; border-color: rgba(255,255,255,0.1);"><i data-lucide="edit-3" style="width: 14px; height: 14px;"></i></button>
            <button class="btn btn-danger btn-sm" onclick="window.appEngine.deleteBlogPost('${b.id}')" style="padding: 0.35rem 0.5rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
          </div>
        </td>
      </tr>
    `).join("");

    lucide.createIcons();
  }

  toggleBlogPublish(id) {
    const list = this.state.blogs;
    const idx = list.findIndex(b => b.id === id);
    if (idx !== -1) {
      list[idx].published = !list[idx].published;
      this.updateState("blogs", list);
      this.showToast(`Blog status updated to ${list[idx].published ? 'Published' : 'Draft'}`, "success");
      this.logAdminAction(`Blog ${id} publish state toggled.`);
      this.renderAdminBlogsList();
    }
  }

  deleteBlogPost(id) {
    if (confirm(`Are you sure you want to delete article ${id}?`)) {
      const list = this.state.blogs.filter(b => b.id !== id);
      this.updateState("blogs", list);
      this.showToast(`Article deleted successfully.`, "info");
      this.logAdminAction(`Blog ${id} article deleted.`);
      this.renderAdminBlogsList();
    }
  }

  showBlogModal(blogId = null) {
    const isEdit = blogId !== null;
    const blog = isEdit ? this.state.blogs.find(b => b.id === blogId) : {
      id: "BLG-" + (500 + this.state.blogs.length + 1),
      title: "",
      slug: "",
      excerpt: "",
      author: this.state.trainers[0] ? this.state.trainers[0].name : "Dr. Samantha Vance",
      published: true,
      metaTitle: "",
      metaDescription: ""
    };

    const authorOptions = this.state.trainers.map(t => `<option value="${t.name}" ${blog.author === t.name ? 'selected' : ''}>${t.name}</option>`).join("");

    const bodyHtml = `
      <div class="ad-form-group">
        <label for="blog-title">Article Title</label>
        <input type="text" id="blog-title" class="form-control" value="${blog.title}" placeholder="e.g. Navigating React in 2026" required oninput="document.getElementById('blog-slug').value = this.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')">
      </div>
      <div class="ad-form-group">
        <label for="blog-slug">URL Slug</label>
        <input type="text" id="blog-slug" class="form-control" value="${blog.slug}" placeholder="e.g. navigating-react-2026" required>
      </div>
      <div class="ad-form-group">
        <label for="blog-excerpt">Excerpt / Summary</label>
        <textarea id="blog-excerpt" class="form-control" rows="2" placeholder="Brief summary of the article..." required>${blog.excerpt}</textarea>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="blog-author">Author</label>
          <select id="blog-author" class="form-control">${authorOptions}</select>
        </div>
        <div class="checkbox-group" style="flex-grow: 1; align-self: center; margin-top: 1.25rem;">
          <input type="checkbox" id="blog-published" ${blog.published ? 'checked' : ''}>
          <label for="blog-published">Publish immediately</label>
        </div>
      </div>
      <div style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem;">
        <h4 style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--ad-blue);">SEO Metadata Optimization</h4>
        <div class="ad-form-group">
          <label for="blog-meta-title">Meta Title</label>
          <input type="text" id="blog-meta-title" class="form-control" value="${blog.metaTitle}" placeholder="e.g. Guide to React State Management">
        </div>
        <div class="ad-form-group">
          <label for="blog-meta-desc">Meta Description</label>
          <input type="text" id="blog-meta-desc" class="form-control" value="${blog.metaDescription}" placeholder="Short search snippet preview...">
        </div>
      </div>
    `;

    this.showAdminModal(
      isEdit ? `Edit Article Post (${blog.id})` : "Create Article Post",
      bodyHtml,
      (overlay) => {
        const title = document.getElementById("blog-title").value.trim();
        const slug = document.getElementById("blog-slug").value.trim();
        const excerpt = document.getElementById("blog-excerpt").value.trim();
        const author = document.getElementById("blog-author").value;
        const published = document.getElementById("blog-published").checked;
        const metaTitle = document.getElementById("blog-meta-title").value.trim() || title;
        const metaDescription = document.getElementById("blog-meta-desc").value.trim() || excerpt;

        if (!title || !slug || !excerpt) {
          this.showToast("Please complete all required fields.", "warning");
          return false;
        }

        const list = this.state.blogs;
        if (isEdit) {
          const idx = list.findIndex(b => b.id === blogId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], title, slug, excerpt, author, published, metaTitle, metaDescription };
            this.showToast("Blog article updated.", "success");
            this.logAdminAction(`Blog article ${blogId} updated.`);
          }
        } else {
          list.push({ id: blog.id, title, slug, excerpt, author, published, metaTitle, metaDescription });
          this.showToast("New blog article published.", "success");
          this.logAdminAction("New Blog article " + blog.id + " registered.");
        }

        this.updateState("blogs", list);
        this.renderAdminBlogsList();
        return true;
      }
    );
  }

  renderAdminMedia() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    root.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Media & Content Assets Library</h3>
          <button class="btn btn-glow btn-sm" id="admin-upload-media-btn"><i data-lucide="upload-cloud"></i> Upload New Asset</button>
        </div>
        <div class="media-grid" id="admin-media-grid">
          <!-- Dynamically populated -->
        </div>
      </div>
    `;

    this.renderAdminMediaGrid();
    document.getElementById("admin-upload-media-btn").onclick = () => this.showMediaModal();
  }

  renderAdminMediaGrid() {
    const grid = document.getElementById("admin-media-grid");
    if (!grid) return;

    grid.innerHTML = this.state.media.map(m => {
      let preview = "";
      if (m.type === "Image") {
        preview = `<img src="${m.url}" alt="${m.name}">`;
      } else if (m.type === "Video") {
        preview = `🎬`;
      } else {
        preview = `📄`;
      }

      return `
        <div class="media-card">
          <div class="media-preview-box">
            ${preview}
          </div>
          <div class="media-info-box">
            <span class="media-name" title="${m.name}">${m.name}</span>
            <div class="media-meta">
              <span>${m.size}</span>
              <span class="ad-badge ad-badge-info" style="font-size: 0.55rem; padding: 0.1rem 0.25rem;">${m.type}</span>
            </div>
            <button class="btn btn-danger btn-sm" style="margin-top: 0.5rem; width: 100%; padding: 0.2rem;" onclick="window.appEngine.deleteMediaAsset('${m.id}')">Delete</button>
          </div>
        </div>
      `;
    }).join("");

    lucide.createIcons();
  }

  deleteMediaAsset(id) {
    if (confirm("Remove media asset " + id + "?")) {
      const list = this.state.media.filter(m => m.id !== id);
      this.updateState("media", list);
      this.showToast("Media asset deleted.", "info");
      this.logAdminAction(`Media asset ${id} deleted.`);
      this.renderAdminMediaGrid();
    }
  }

  showMediaModal() {
    const newId = "MED-" + (600 + this.state.media.length + 1);

    const bodyHtml = `
      <div class="ad-form-group">
        <label for="media-filename">Asset Filename</label>
        <input type="text" id="media-filename" class="form-control" placeholder="e.g. course_intro_graphic.jpg" required>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="media-type">Asset Type</label>
          <select id="media-type" class="form-control">
            <option value="Image">Image</option>
            <option value="Video">Video</option>
            <option value="Document">Document</option>
          </select>
        </div>
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="media-size">File Size</label>
          <input type="text" id="media-size" class="form-control" placeholder="e.g. 1.8 MB" required>
        </div>
      </div>
      <div class="ad-form-group" id="media-url-group">
        <label for="media-url">Image URL Placeholder (Optional)</label>
        <input type="text" id="media-url" class="form-control" value="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" required>
      </div>
    `;

    this.showAdminModal(
      "Upload Media Asset",
      bodyHtml,
      (overlay) => {
        const name = document.getElementById("media-filename").value.trim();
        const type = document.getElementById("media-type").value;
        const size = document.getElementById("media-size").value.trim() || "1.0 MB";
        const url = document.getElementById("media-url").value.trim() || "#";

        if (!name) {
          this.showToast("Please enter a filename.", "warning");
          return false;
        }

        const list = this.state.media;
        list.push({ id: newId, name, type, size, url });
        this.updateState("media", list);
        this.showToast("Media asset added successfully.", "success");
        this.logAdminAction(`Media asset ${newId} uploaded.`);
      }
    );
  }

  renderAdminAnalytics() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    // Calculate metrics
    const total = this.state.applicants.length;
    const checkedIn = this.state.applicants.filter(a => a.checkedIn).length;
    const approved = this.state.applicants.filter(a => a.status === 'approved').length;
    const pending = this.state.applicants.filter(a => a.status === 'pending').length;

    root.innerHTML = `
      <div class="admin-grid-4">
        <div class="admin-card admin-stat-card">
          <div class="admin-stat-icon orange"><i data-lucide="bar-chart-2"></i></div>
          <div class="admin-stat-info">
            <h4>${total > 0 ? Math.round((checkedIn / total) * 100) : 0}%</h4>
            <p>Conversion Rate</p>
          </div>
        </div>
        <div class="admin-card admin-stat-card">
          <div class="admin-stat-icon blue"><i data-lucide="activity"></i></div>
          <div class="admin-stat-info">
            <h4>${checkedIn}</h4>
            <p>Checked-In Cohort</p>
          </div>
        </div>
        <div class="admin-card admin-stat-card">
          <div class="admin-stat-icon emerald"><i data-lucide="award"></i></div>
          <div class="admin-stat-info">
            <h4>84.5%</h4>
            <p>Avg Quiz Score</p>
          </div>
        </div>
        <div class="admin-card admin-stat-card">
          <div class="admin-stat-icon purple"><i data-lucide="clock"></i></div>
          <div class="admin-stat-info">
            <h4>42m</h4>
            <p>Session Duration</p>
          </div>
        </div>
      </div>

      <div class="admin-grid-main-side">
        <div class="admin-card">
          <div class="admin-card-header">
            <h3>Student Acquisition Funnel</h3>
          </div>
          <div style="height: 280px; position: relative;">
            <canvas id="analytics-funnel-chart"></canvas>
          </div>
        </div>

        <div class="admin-card">
          <div class="admin-card-header">
            <h3>Retention Ticker</h3>
          </div>
          <div class="admin-table-wrap">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Interval</th>
                  <th style="text-align: right;">Retention %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Week 1 (Onboarding)</td>
                  <td style="text-align: right; font-weight: 700; color: var(--color-green);">100%</td>
                </tr>
                <tr>
                  <td>Week 2 (Core Lectures)</td>
                  <td style="text-align: right; font-weight: 700; color: var(--color-green);">94.8%</td>
                </tr>
                <tr>
                  <td>Week 3 (Assignments)</td>
                  <td style="text-align: right; font-weight: 700; color: var(--color-cyan);">88.2%</td>
                </tr>
                <tr>
                  <td>Week 4 (Hackathon Prep)</td>
                  <td style="text-align: right; font-weight: 700; color: var(--ad-orange);">81.5%</td>
                </tr>
                <tr>
                  <td>Week 5 (Live Hackathon)</td>
                  <td style="text-align: right; font-weight: 700; color: var(--ad-orange);">78.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="admin-card" style="margin-top: 1.5rem;">
        <div class="admin-card-header">
          <h3>Integrations & Tracking Tags</h3>
        </div>
        <form id="analytics-integrations-form" style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="ad-form-row">
            <div class="ad-form-group" style="flex-grow: 1;">
              <label for="ga-tag-id">Google Analytics Measurement ID</label>
              <input type="text" id="ga-tag-id" class="form-control" value="${this.loadData('ga_tag_id', 'G-FS2026BOOTCAMP')}" placeholder="e.g. G-XXXXXXX">
            </div>
            <div class="ad-form-group" style="flex-grow: 1;">
              <label for="hotjar-id">Hotjar Tracking ID</label>
              <input type="text" id="hotjar-id" class="form-control" value="${this.loadData('hotjar_id', 'HJ-890123')}" placeholder="e.g. 1234567">
            </div>
            <div class="ad-form-group" style="flex-grow: 1;">
              <label for="fb-pixel-id">Facebook Pixel ID</label>
              <input type="text" id="fb-pixel-id" class="form-control" value="${this.loadData('fb_pixel_id', 'FB-562910')}" placeholder="e.g. 987654321">
            </div>
          </div>
          <button type="submit" class="btn btn-glow btn-sm" style="align-self: flex-start;">Save Tracking Tags</button>
        </form>
      </div>
    `;

    // Draw charts
    this.drawAnalyticsCharts(total, approved, checkedIn);

    // Save Integrations handler
    const form = document.getElementById("analytics-integrations-form");
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const ga = document.getElementById("ga-tag-id").value.trim();
        const hj = document.getElementById("hotjar-id").value.trim();
        const fb = document.getElementById("fb-pixel-id").value.trim();

        localStorage.setItem("ga_tag_id", ga);
        localStorage.setItem("hotjar_id", hj);
        localStorage.setItem("fb_pixel_id", fb);

        this.showToast("Tracking and analytics integrations updated successfully.", "success");
        this.logAdminAction("Telemetry integrations config modified.");
      };
    }
  }

  drawAnalyticsCharts(total, approved, checkedIn) {
    const ctx = document.getElementById("analytics-funnel-chart");
    if (!ctx) return;

    const isLight = this.state.adminTheme === 'light';
    const tickColor = isLight ? "#64748b" : "#9ca3af";
    const gridColor = isLight ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";

    if (window.analyticsChartObj) window.analyticsChartObj.destroy();

    window.analyticsChartObj = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Total Registered", "Approved Passes", "Checked-in Attendees"],
        datasets: [{
          label: "Conversion Funnel",
          data: [total, approved, checkedIn],
          backgroundColor: ["rgba(59, 130, 246, 0.4)", "rgba(139, 92, 246, 0.4)", "rgba(249, 115, 22, 0.4)"],
          borderColor: ["#3b82f6", "#8b5cf6", "#f97316"],
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { color: tickColor } },
          y: { grid: { color: gridColor }, ticks: { color: tickColor, precision: 0 } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  renderAdminEvents() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    root.innerHTML = `
      <div class="admin-grid-main-side">
        <!-- Event List Column -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3>Workshops & Event Schedule</h3>
            <button class="btn btn-glow btn-sm" id="admin-add-event-btn"><i data-lucide="plus"></i> Add Event</button>
          </div>
          <div class="admin-table-wrap">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Workshop Title</th>
                  <th>Trainer</th>
                  <th>Date & Time</th>
                  <th>Registrations</th>
                  <th>Status</th>
                  <th style="text-align: right;">Actions</th>
                </tr>
              </thead>
              <tbody id="admin-events-tbody">
                <!-- Dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Attendance Scanner Console -->
        <div class="admin-card" style="align-self: flex-start;">
          <div class="admin-card-header">
            <h3>Gateway Attendance Scanner</h3>
          </div>
          
          <div id="camera-reader" style="width: 100%; min-height: 180px; background: #000; border-radius: 8px; overflow: hidden; position: relative; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; border: 1px solid var(--ad-glass-border);">
            <span style="font-size: 0.8rem; color: var(--ad-text-muted); text-align: center; padding: 1rem;">📷 Camera Scanner Stream Off</span>
          </div>

          <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
            <button class="btn btn-glow btn-sm" id="start-camera-btn" style="flex: 1;"><i data-lucide="camera"></i> Start Camera</button>
            <button class="btn btn-danger btn-sm" id="stop-camera-btn" style="flex: 1; display: none;"><i data-lucide="camera-off"></i> Stop Camera</button>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem;">
            <h4 style="font-size: 0.85rem; color: var(--ad-blue); margin-bottom: 0.75rem;">Simulate QR Pass Scan</h4>
            <form id="sim-scanner-form" style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div class="ad-form-group">
                <label for="sim-select-applicant">Select Approved Candidate</label>
                <select id="sim-select-applicant" class="form-control" style="background-color: var(--ad-bg-tertiary);">
                  <!-- Dynamically populated -->
                </select>
              </div>
              <div style="text-align: center; font-size: 0.75rem; color: var(--ad-text-muted); margin: -0.25rem 0;">- OR ENTER MANUAL PASS CODE -</div>
              <div class="ad-form-group">
                <label for="sim-text-code">Manual Ticket Code</label>
                <input type="text" id="sim-text-code" class="form-control" placeholder="e.g. FS26-A1B2">
              </div>
              <button type="submit" class="btn btn-glow btn-sm" style="width: 100%;">Process Check-In</button>
            </form>
          </div>
        </div>
      </div>
    `;

    this.renderAdminEventsList();
    this.initAdminScannerControls();

    document.getElementById("admin-add-event-btn").onclick = () => this.showEventModal();
  }

  renderAdminEventsList() {
    const tbody = document.getElementById("admin-events-tbody");
    if (!tbody) return;

    tbody.innerHTML = this.state.events.map(e => `
      <tr>
        <td><strong style="color: var(--ad-orange);">${e.id}</strong></td>
        <td>
          <div style="font-weight: 700;">${e.title}</div>
          <div style="font-size: 0.75rem; color: var(--ad-blue); max-width: 250px; overflow: hidden; text-overflow: ellipsis;"><a href="${e.link}" target="_blank" style="color: inherit; text-decoration: underline;">${e.link}</a></div>
        </td>
        <td>${e.trainer}</td>
        <td>
          <div>${e.date}</div>
          <div style="font-size: 0.75rem; color: var(--ad-text-muted);">${e.time}</div>
        </td>
        <td><span style="font-weight: 700;">${e.registrationsCount}</span> registered</td>
        <td>
          <span class="ad-badge ${e.status === 'Scheduled' ? 'ad-badge-info' : e.status === 'Completed' ? 'ad-badge-success' : 'ad-badge-danger'}">
            ${e.status}
          </span>
        </td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button class="btn btn-outline btn-sm" onclick="window.appEngine.showEventModal('${e.id}')" style="padding: 0.35rem 0.5rem; border-color: rgba(255,255,255,0.1);"><i data-lucide="edit-3" style="width: 14px; height: 14px;"></i></button>
            <button class="btn btn-danger btn-sm" onclick="window.appEngine.deleteEvent('${e.id}')" style="padding: 0.35rem 0.5rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
          </div>
        </td>
      </tr>
    `).join("");

    lucide.createIcons();
  }

  deleteEvent(id) {
    if (confirm(`Cancel and delete event ${id}?`)) {
      const list = this.state.events.filter(e => e.id !== id);
      this.updateState("events", list);
      this.showToast("Event cancelled and removed from registry.", "info");
      this.logAdminAction(`Event ${id} removed.`);
      this.renderAdminEventsList();
    }
  }

  showEventModal(eventId = null) {
    const isEdit = eventId !== null;
    const event = isEdit ? this.state.events.find(e => e.id === eventId) : {
      id: "EVT-" + (700 + this.state.events.length + 1),
      title: "",
      trainer: this.state.trainers[0] ? this.state.trainers[0].name : "Dr. Samantha Vance",
      date: new Date().toISOString().split('T')[0],
      time: "10:00 AM - 12:00 PM",
      link: "https://meet.google.com/fs26-xxx-xxx",
      registrationsCount: 0,
      status: "Scheduled"
    };

    const trainerOptions = this.state.trainers.map(t => `<option value="${t.name}" ${event.trainer === t.name ? 'selected' : ''}>${t.name}</option>`).join("");

    const bodyHtml = `
      <div class="ad-form-group">
        <label for="event-title">Event Title</label>
        <input type="text" id="event-title" class="form-control" value="${event.title}" placeholder="e.g. LLM Fine-Tuning" required>
      </div>
      <div class="ad-form-group">
        <label for="event-trainer">Assigned Trainer / Host</label>
        <select id="event-trainer" class="form-control">${trainerOptions}</select>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="event-date">Scheduled Date</label>
          <input type="date" id="event-date" class="form-control" value="${event.date}" required>
        </div>
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="event-time">Time slot</label>
          <input type="text" id="event-time" class="form-control" value="${event.time}" placeholder="e.g. 10:00 AM - 12:00 PM" required>
        </div>
      </div>
      <div class="ad-form-group">
        <label for="event-link">Google Meet Link</label>
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="event-link" class="form-control" value="${event.link}" placeholder="https://meet.google.com/..." required style="flex-grow: 1;">
          <button type="button" class="btn btn-outline" onclick="document.getElementById('event-link').value = 'https://meet.google.com/fs26-' + Math.random().toString(36).substring(2, 6) + '-' + Math.random().toString(36).substring(2, 5)" style="white-space: nowrap;">Auto-Gen Link</button>
        </div>
      </div>
      <div class="ad-form-row">
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="event-registrations">Initial Registrants</label>
          <input type="number" id="event-registrations" class="form-control" value="${event.registrationsCount}" min="0">
        </div>
        <div class="ad-form-group" style="flex-grow: 1;">
          <label for="event-status">Status</label>
          <select id="event-status" class="form-control">
            <option value="Scheduled" ${event.status === 'Scheduled' ? 'selected' : ''}>Scheduled</option>
            <option value="Completed" ${event.status === 'Completed' ? 'selected' : ''}>Completed</option>
            <option value="Cancelled" ${event.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </div>
      </div>
    `;

    this.showAdminModal(
      isEdit ? `Edit Event Details (${event.id})` : "Schedule New Workshop",
      bodyHtml,
      (overlay) => {
        const title = document.getElementById("event-title").value.trim();
        const trainer = document.getElementById("event-trainer").value;
        const date = document.getElementById("event-date").value;
        const time = document.getElementById("event-time").value.trim();
        const link = document.getElementById("event-link").value.trim();
        const registrationsCount = parseInt(document.getElementById("event-registrations").value) || 0;
        const status = document.getElementById("event-status").value;

        if (!title || !date || !time || !link) {
          this.showToast("Please fill all required information.", "warning");
          return false;
        }

        const list = this.state.events;
        if (isEdit) {
          const idx = list.findIndex(e => e.id === eventId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], title, trainer, date, time, link, registrationsCount, status };
            this.showToast("Event updated successfully.", "success");
            this.logAdminAction(`Event ${eventId} updated.`);
          }
        } else {
          list.push({ id: event.id, title, trainer, date, time, link, registrationsCount, status });
          this.showToast("New event scheduled successfully.", "success");
          this.logAdminAction(`New event ${event.id} registered.`);
        }

        this.updateState("events", list);
        this.renderAdminEventsList();
        return true;
      }
    );
  }

  renderAdminCertificates() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    const list = this.state.applicants;
    const checkedInCandidates = list.filter(a => a.checkedIn);

    root.innerHTML = `
      <div class="admin-grid-main-side">
        <!-- Certificate Issuance Queue -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3>Gateway Certificate Release Queue</h3>
          </div>
          <div class="admin-table-wrap">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Full Name</th>
                  <th>Department</th>
                  <th>Gateway Code</th>
                  <th>Attendance Status</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${checkedInCandidates.length === 0 ? `
                  <tr><td colspan="6" style="text-align: center; color: var(--ad-text-muted); padding: 2rem;">No candidates currently checked-in at Gateway gate.</td></tr>
                ` : checkedInCandidates.map(c => `
                  <tr>
                    <td><strong style="color: var(--ad-orange);">${c.id}</strong></td>
                    <td>
                      <div style="font-weight: 700;">${c.fullName}</div>
                      <div style="font-size: 0.75rem; color: var(--ad-text-muted);">${c.email}</div>
                    </td>
                    <td>${c.department}</td>
                    <td><code>${c.ticketCode}</code></td>
                    <td>
                      <span class="ad-badge ad-badge-success">Gate Checked-In</span>
                    </td>
                    <td style="text-align: right;">
                      ${c.certificateReleased ? `
                        <span style="font-size: 0.8rem; font-weight: 600; color: #10b981;"><i data-lucide="check-circle" style="display: inline-block; width: 14px; height: 14px; margin-right: 0.25rem;"></i> Released</span>
                      ` : `
                        <button class="btn btn-glow btn-sm" onclick="window.appEngine.releaseCertificate('${c.id}')">Release Cert</button>
                      `}
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Hiring Partnerships & Placement Stats -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="admin-card">
            <div class="admin-card-header">
              <h3>Hiring Partnerships</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="font-size: 1.25rem;">🌐</span>
                  <div>
                    <div style="font-weight: 700; font-size: 0.85rem;">Google Cloud Platform</div>
                    <div style="font-size: 0.7rem; color: var(--ad-text-muted);">Corporate Sponsor</div>
                  </div>
                </div>
                <span class="ad-badge ad-badge-success" style="font-size: 0.6rem;">Active</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="font-size: 1.25rem;">💻</span>
                  <div>
                    <div style="font-weight: 700; font-size: 0.85rem;">Microsoft Academy</div>
                    <div style="font-size: 0.7rem; color: var(--ad-text-muted);">Curriculum Collaborator</div>
                  </div>
                </div>
                <span class="ad-badge ad-badge-success" style="font-size: 0.6rem;">Active</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="font-size: 1.25rem;">🏥</span>
                  <div>
                    <div style="font-weight: 700; font-size: 0.85rem;">NeuroTech Labs</div>
                    <div style="font-size: 0.7rem; color: var(--ad-text-muted);">Incubator Partner</div>
                  </div>
                </div>
                <span class="ad-badge ad-badge-success" style="font-size: 0.6rem;">Active</span>
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3>Placement Dashboard</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="font-size: 0.8rem; display: flex; justify-content: space-between;">
                <span>Total Placements:</span>
                <strong style="color: var(--ad-orange);">24 candidates</strong>
              </div>
              <div style="font-size: 0.8rem; display: flex; justify-content: space-between;">
                <span>Resume Pool:</span>
                <strong style="color: var(--ad-blue);">18 submitted</strong>
              </div>
              <div style="font-size: 0.8rem; display: flex; justify-content: space-between;">
                <span>Placement rate:</span>
                <strong style="color: #10b981;">75%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    lucide.createIcons();
  }

  releaseCertificate(id) {
    const list = this.state.applicants;
    const idx = list.findIndex(a => a.id === id);
    if (idx !== -1) {
      list[idx].certificateReleased = true;
      this.updateState("applicants", list);
      this.showToast(`Certificate released and sent to ${list[idx].fullName}!`, "success");
      this.logAdminAction(`Certificate released for ${id}.`);
      this.renderAdminCertificates();
    }
  }

  renderAdminSettings() {
    const root = document.getElementById("admin-view-root");
    if (!root) return;

    const rbacEnabled = this.loadData("settings_rbac", false);
    const mfaEnabled = this.loadData("settings_2fa", false);
    const autoBackupEnabled = this.loadData("settings_auto_backup", true);

    const logs = this.loadData("admin_logs", [
      { time: new Date(Date.now() - 3600000 * 2).toISOString(), action: "Admin Session authorized." },
      { time: new Date(Date.now() - 3600000).toISOString(), action: "Default database seeded successfully." }
    ]);

    root.innerHTML = `
      <div class="admin-grid-main-side">
        <!-- Settings Form Panel -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="admin-card">
            <div class="admin-card-header">
              <h3>System Security & Security Policies</h3>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem;">
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem;">Enforce Role-Based Access Control (RBAC)</div>
                  <div style="font-size: 0.75rem; color: var(--ad-text-muted);">Restricts trainers from modifying billing and pricing records.</div>
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" id="settings-rbac-toggle" ${rbacEnabled ? 'checked' : ''} onchange="window.appEngine.toggleSetting('settings_rbac', this.checked)">
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem;">
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem;">Require Two-Factor Authentication (2FA)</div>
                  <div style="font-size: 0.75rem; color: var(--ad-text-muted);">Demands TOTP validation during administrative unlock sessions.</div>
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" id="settings-2fa-toggle" ${mfaEnabled ? 'checked' : ''} onchange="window.appEngine.toggleSetting('settings_2fa', this.checked)">
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem;">Automated Database Backups</div>
                  <div style="font-size: 0.75rem; color: var(--ad-text-muted);">Saves encrypted snapshots to localStorage on every state transition.</div>
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" id="settings-backup-toggle" ${autoBackupEnabled ? 'checked' : ''} onchange="window.appEngine.toggleSetting('settings_auto_backup', this.checked)">
                </div>
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3>Maintenance & Database Administration</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <p style="font-size: 0.8rem; color: var(--ad-text-muted); line-height: 1.5; margin: 0;">Export the entire local database state as a JSON file or perform a database reset back to initial seeds.</p>
              <div style="display: flex; gap: 0.75rem;">
                <button class="btn btn-glow btn-sm" onclick="window.appEngine.backupDatabase()"><i data-lucide="download"></i> Download Backup JSON</button>
                <button class="btn btn-danger btn-sm" onclick="window.appEngine.resetDatabase()"><i data-lucide="refresh-cw"></i> Reset Database</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Audit Logger Column -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3>Administrative Audit Logs</h3>
            <button class="btn btn-outline btn-sm" onclick="window.appEngine.clearAuditLogs()" style="border-color: rgba(255,255,255,0.1);"><i data-lucide="trash-2"></i> Clear</button>
          </div>
          <div class="activity-feed" id="settings-audit-feed" style="max-height: 400px; overflow-y: auto; padding-right: 0.5rem;">
            ${logs.map(l => `
              <div class="activity-item">
                <div class="activity-dot blue"></div>
                <div class="activity-content">
                  <div style="font-weight: 600;">${l.action}</div>
                  <span class="activity-time">${new Date(l.time).toLocaleTimeString()} - ${new Date(l.time).toLocaleDateString()}</span>
                </div>
              </div>
            `).reverse().join("")}
          </div>
        </div>
      </div>
    `;

    lucide.createIcons();
  }

  toggleSetting(key, val) {
    localStorage.setItem(key, val);
    this.showToast(`System preference updated.`, "success");
    this.logAdminAction(`Setting ${key} toggled to ${val}.`);
  }

  backupDatabase() {
    const backupData = {
      applicants: this.state.applicants,
      courses: this.state.courses,
      subjects: this.state.subjects,
      trainers: this.state.trainers,
      sales: this.state.sales,
      blogs: this.state.blogs,
      media: this.state.media,
      events: this.state.events
    };

    const str = JSON.stringify(backupData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(str);
    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute("download", `futurestack_bootcamp_db_${Date.now()}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    this.showToast("Database backup file downloaded.", "success");
    this.logAdminAction("Database manually backed up.");
  }

  resetDatabase() {
    if (confirm("WARNING: This will clear all changes and restore original demo database seeds. Are you sure you want to proceed?")) {
      localStorage.clear();
      this.showToast("Database reset successfully! Reloading session...", "warning");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }

  clearAuditLogs() {
    if (confirm("Clear all administrative audit logs?")) {
      const logs = [{ time: new Date().toISOString(), action: "Audit log history cleared." }];
      localStorage.setItem("admin_logs", JSON.stringify(logs));
      this.showToast("Audit logs cleared.", "info");
      this.renderAdminSettings();
    }
  }

  renderAdminLogin() {
    const main = document.getElementById("main-content");
    main.innerHTML = `
      <div class="admin-login-panel glass-panel">
        <div style="text-align: center; margin-bottom: 2rem;">
          <div style="font-size: 2.5rem; filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.4)); margin-bottom: 0.5rem;">🔐</div>
          <h3>Admin Control Center</h3>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">Enter passkey credentials to access analytics.</p>
        </div>

        <form id="admin-login-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div class="form-group">
            <label for="admin-passcode">Access Passkey</label>
            <input type="password" id="admin-passcode" class="form-control" placeholder="••••••••" required>
          </div>

          <button type="submit" class="btn btn-glow" style="margin-top: 1rem;">
            <i data-lucide="unlock"></i> Unlock Session
          </button>
        </form>
      </div>
    `;

    lucide.createIcons();

    const form = document.getElementById("admin-login-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const code = document.getElementById("admin-passcode").value;

        if (code === "admin123") {
          this.updateState("admin_auth", true);
          this.showToast("Access unlocked. Loading Admin telemetry...", "success");
          this.renderAdmin();
        } else {
          this.showToast("Invalid administrative passkey. Please check password.", "error");
        }
      });
    }
  }

  refreshAdminStats() {
    const list = this.state.applicants;
    const total = list.length;
    const approved = list.filter(a => a.status === "approved").length;
    const scanned = list.filter(a => a.checkedIn).length;
    const rate = total > 0 ? Math.round((scanned / total) * 100) : 0;

    const totalEl = document.getElementById("stat-total-reg");
    const approvedEl = document.getElementById("stat-approved");
    const scannedEl = document.getElementById("stat-scanned");
    const rateEl = document.getElementById("stat-attendance-rate");

    if (totalEl) totalEl.textContent = total;
    if (approvedEl) approvedEl.textContent = approved;
    if (scannedEl) scannedEl.textContent = scanned;
    if (rateEl) rateEl.textContent = `${rate}%`;
  }

  drawAdminCharts() {
    const list = this.state.applicants;
    
    // Process Departments Stats
    const depts = {};
    list.forEach(a => {
      depts[a.department] = (depts[a.department] || 0) + 1;
    });

    // Process Skills Distribution
    const skills = {};
    list.forEach(a => {
      if (a.skills && Array.isArray(a.skills)) {
        a.skills.forEach(s => {
          const formatted = s.trim().toUpperCase();
          skills[formatted] = (skills[formatted] || 0) + 1;
        });
      }
    });

    const isLight = this.state.adminTheme === 'light';
    const textColor = isLight ? "#334155" : "#cbd5e1";
    const tickColor = isLight ? "#64748b" : "#9ca3af";
    const gridColor = isLight ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.05)";
    const borderColor = isLight ? "#ffffff" : "#111827";

    // Departments chart rendering
    const deptCtx = document.getElementById("departments-chart");
    if (deptCtx) {
      // Destroy previous chart if it exists
      if (window.deptChartObj) window.deptChartObj.destroy();
      
      window.deptChartObj = new Chart(deptCtx, {
        type: "doughnut",
        data: {
          labels: Object.keys(depts),
          datasets: [{
            data: Object.values(depts),
            backgroundColor: ["#f97316", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"],
            borderWidth: 1.5,
            borderColor: borderColor
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { color: textColor, font: { family: "Plus Jakarta Sans", size: 10 } }
            }
          }
        }
      });
    }

    // Skills Chart Rendering
    const skillsCtx = document.getElementById("skills-chart");
    if (skillsCtx) {
      if (window.skillsChartObj) window.skillsChartObj.destroy();

      // Top 6 skills
      const sortedSkills = Object.entries(skills)
        .sort((a,b) => b[1] - a[1])
        .slice(0, 6);

      window.skillsChartObj = new Chart(skillsCtx, {
        type: "bar",
        data: {
          labels: sortedSkills.map(s => s[0]),
          datasets: [{
            label: "Developers Count",
            data: sortedSkills.map(s => s[1]),
            backgroundColor: isLight ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.25)",
            borderColor: "#3b82f6",
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor } },
            y: { grid: { color: gridColor }, ticks: { precision: 0, color: tickColor } }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  }

  renderAdminApplicantsList() {
    const tbody = document.getElementById("admin-applicants-table-body");
    if (!tbody) return;

    const query = document.getElementById("admin-search-applicant").value.trim().toLowerCase();
    const filter = document.getElementById("admin-filter-status").value;

    const filtered = this.state.applicants.filter(a => {
      // Search match
      const textMatch = a.fullName.toLowerCase().includes(query) ||
                        a.email.toLowerCase().includes(query) ||
                        a.collegeName.toLowerCase().includes(query) ||
                        a.ticketCode.toLowerCase().includes(query);
      
      // Status match
      let statusMatch = false;
      if (filter === "all") statusMatch = true;
      else if (filter === "pending") statusMatch = a.status === "pending";
      else if (filter === "approved") statusMatch = a.status === "approved";
      else if (filter === "rejected") statusMatch = a.status === "rejected";
      else if (filter === "checkedin") statusMatch = a.checkedIn === true;

      return textMatch && statusMatch;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No applicants found matching requirements.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(a => `
      <tr id="applicant-row-${a.id}">
        <td><span style="font-family: var(--font-title); font-size: 0.8rem; color: var(--text-muted);">${a.id}</span></td>
        <td>
          <div style="font-weight: 700;">${a.fullName}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${a.email}</div>
          <div style="font-size: 0.8rem; color: var(--color-cyan);">${a.phone}</div>
        </td>
        <td>
          <div>${a.collegeName}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${a.department} (${a.yearOfStudy} Yr)</div>
        </td>
        <td><code style="color: var(--color-purple); font-weight: 700; font-family: var(--font-title);">${a.ticketCode}</code></td>
        <td>
          <span class="status-badge status-${a.status}">${a.status}</span>
        </td>
        <td>
          <span class="status-badge ${a.checkedIn ? 'status-approved' : 'status-pending'}">
            ${a.checkedIn ? 'Checked-In' : 'Absent'}
          </span>
        </td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            ${a.status === 'pending' ? `
              <button class="btn btn-outline btn-sm action-approve" data-id="${a.id}" style="color: var(--color-green); border-color: rgba(16, 185, 129, 0.25);">Approve</button>
              <button class="btn btn-outline btn-sm action-reject" data-id="${a.id}" style="color: var(--color-red); border-color: rgba(239, 68, 68, 0.25);">Reject</button>
            ` : ""}
            
            ${a.status === 'approved' && !a.checkedIn ? `
              <button class="btn btn-outline btn-sm action-checkin" data-id="${a.id}" style="color: var(--color-cyan); border-color: rgba(6, 182, 212, 0.25);">Check-in</button>
            ` : ""}
            
            <button class="btn btn-danger btn-sm action-delete" data-id="${a.id}" style="padding: 0.4rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
          </div>
        </td>
      </tr>
    `).join("");

    lucide.createIcons();

    // Attach actions to table buttons
    tbody.querySelectorAll(".action-approve").forEach(b => {
      b.onclick = (e) => this.handleApplicantStatus(e.currentTarget.getAttribute("data-id"), "approved");
    });
    tbody.querySelectorAll(".action-reject").forEach(b => {
      b.onclick = (e) => this.handleApplicantStatus(e.currentTarget.getAttribute("data-id"), "rejected");
    });
    tbody.querySelectorAll(".action-checkin").forEach(b => {
      b.onclick = (e) => this.handleApplicantCheckIn(e.currentTarget.getAttribute("data-id"));
    });
    tbody.querySelectorAll(".action-delete").forEach(b => {
      b.onclick = (e) => this.handleApplicantDelete(e.currentTarget.getAttribute("data-id"));
    });
  }

  handleApplicantStatus(id, newStatus) {
    const list = this.state.applicants;
    const index = list.findIndex(a => a.id === id);
    if (index === -1) return;

    list[index].status = newStatus;
    this.updateState("applicants", list);
    this.showToast(`Applicant ${list[index].fullName} status updated to ${newStatus}.`, "success");
    
    // Refresh stats & views
    this.refreshAdminStats();
    this.drawAdminCharts();
    this.renderAdminApplicantsList();
    this.refreshScannerDropdown();
  }

  handleApplicantCheckIn(id) {
    const list = this.state.applicants;
    const index = list.findIndex(a => a.id === id);
    if (index === -1) return;

    list[index].checkedIn = true;
    list[index].checkInTime = new Date().toISOString();
    list[index].status = "approved"; // If pending, approve it on checkin
    this.updateState("applicants", list);
    
    this.showToast(`Gateway Access APPROVED for ${list[index].fullName}! Check-in marked.`, "success");
    
    this.refreshAdminStats();
    this.drawAdminCharts();
    this.renderAdminApplicantsList();
    this.refreshScannerDropdown();
  }

  handleApplicantDelete(id) {
    if (!confirm("Are you sure you want to delete this registration? This cannot be undone.")) return;

    const list = this.state.applicants;
    const index = list.findIndex(a => a.id === id);
    if (index === -1) return;

    const name = list[index].fullName;
    list.splice(index, 1);
    this.updateState("applicants", list);
    this.showToast(`Registration deleted for ${name}.`, "warning");

    this.refreshAdminStats();
    this.drawAdminCharts();
    this.renderAdminApplicantsList();
    this.refreshScannerDropdown();
  }

  exportApplicantsCSV() {
    const list = this.state.applicants;
    if (list.length === 0) {
      this.showToast("No data to export.", "warning");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID,Full Name,Email,Phone,College,Department,Year,Ticket Code,Status,Checked-In,Check-In Time\n";

    list.forEach(a => {
      const row = [
        a.id,
        `"${a.fullName}"`,
        a.email,
        `"${a.phone}"`,
        `"${a.collegeName}"`,
        `"${a.department}"`,
        a.yearOfStudy,
        a.ticketCode,
        a.status,
        a.checkedIn ? "Yes" : "No",
        a.checkInTime || ""
      ].join(",");
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `FutureStack_Bootcamp_Applicants_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast("Registrations database downloaded as CSV.", "success");
  }

  // 10. QR CAMERA SCANNER MODULE CONTROLS
  initAdminScannerControls() {
    this.refreshScannerDropdown();

    const simForm = document.getElementById("sim-scanner-form");
    if (simForm) {
      simForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const dropdown = document.getElementById("sim-select-applicant");
        const manualInput = document.getElementById("sim-text-code");

        let targetCode = "";
        
        if (manualInput && manualInput.value.trim() !== "") {
          targetCode = manualInput.value.trim().toUpperCase();
        } else if (dropdown && dropdown.value !== "") {
          targetCode = dropdown.value;
        }

        if (targetCode === "") {
          this.showToast("Please enter a ticket code or select a student to check in.", "warning");
          return;
        }

        this.processGatewayQRScan(targetCode);
        simForm.reset();
      });
    }

    // Camera scanner start/stop buttons
    const startBtn = document.getElementById("start-camera-btn");
    const stopBtn = document.getElementById("stop-camera-btn");

    if (startBtn && stopBtn) {
      startBtn.onclick = () => this.startCameraScanner();
      stopBtn.onclick = () => this.stopCameraScanner();
    }
  }

  refreshScannerDropdown() {
    const dropdown = document.getElementById("sim-select-applicant");
    if (!dropdown) return;

    // Filter approved students who are not checked-in yet
    const options = this.state.applicants.filter(a => a.status === "approved" && !a.checkedIn);
    
    dropdown.innerHTML = `<option value="" disabled selected>Select from list...</option>` +
      options.map(o => `<option value="${o.ticketCode}">${o.fullName} (${o.ticketCode})</option>`).join("");
  }

  startCameraScanner() {
    const readerDiv = document.getElementById("camera-reader");
    if (!readerDiv) return;

    this.showToast("Initializing webcam scanner...", "info");
    
    const startBtn = document.getElementById("start-camera-btn");
    const stopBtn = document.getElementById("stop-camera-btn");

    // Create Html5QrcodeScanner
    try {
      this.html5QrcodeScanner = new Html5QrcodeScanner("camera-reader", {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      }, /* verbose= */ false);

      const onScanSuccess = (decodedText) => {
        // Stop scanning after success to prevent loop notifications
        this.stopCameraScanner();
        this.processGatewayQRScan(decodedText.trim());
      };

      const onScanFailure = (error) => {
        // Ignore noise in scanning
      };

      this.html5QrcodeScanner.render(onScanSuccess, onScanFailure);
      
      startBtn.style.display = "none";
      stopBtn.style.display = "inline-flex";
    } catch (e) {
      this.showToast("Camera access denied or library loading issue.", "error");
      console.error("QR scanner start failed", e);
    }
  }

  stopCameraScanner() {
    const startBtn = document.getElementById("start-camera-btn");
    const stopBtn = document.getElementById("stop-camera-btn");

    if (this.html5QrcodeScanner) {
      this.html5QrcodeScanner.clear().catch(err => console.error("Error clearing scanner", err));
      this.html5QrcodeScanner = null;
    }

    if (startBtn) startBtn.style.display = "inline-flex";
    if (stopBtn) stopBtn.style.display = "none";
  }

  processGatewayQRScan(scannedCode) {
    const list = this.state.applicants;
    // Match code either in standard format or raw text
    const foundIdx = list.findIndex(a => a.ticketCode.toUpperCase() === scannedCode.toUpperCase());

    if (foundIdx === -1) {
      this.showToast(`GATEWAY DENIED: Code ${scannedCode} is invalid.`, "error");
      return;
    }

    const candidate = list[foundIdx];
    
    if (candidate.status === "rejected") {
      this.showToast(`GATEWAY DENIED: Registration for ${candidate.fullName} has been rejected.`, "error");
      return;
    }

    if (candidate.checkedIn) {
      this.showToast(`GATEWAY WARNING: ${candidate.fullName} already checked in at ${new Date(candidate.checkInTime).toLocaleTimeString()}.`, "warning");
      return;
    }

    // Success check-in
    list[foundIdx].checkedIn = true;
    list[foundIdx].status = "approved"; // Set status to approved if it was pending
    list[foundIdx].checkInTime = new Date().toISOString();
    
    this.updateState("applicants", list);
    
    this.showToast(`GATEWAY ACCESS APPROVED: Check-in complete for ${candidate.fullName} (${candidate.department}).`, "success");
    
    // Refresh stats & drop-down list
    this.refreshAdminStats();
    this.drawAdminCharts();
    this.refreshScannerDropdown();
    this.renderAdminApplicantsList();
  }
}

// Instantiate engine when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.appEngine = new AppEngine();
  window.appEngine.init();
});
