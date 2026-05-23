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
      verificationAttempts: 0
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

    const filtered = this.state.schedule.filter(item => trackFilter === "all" || item.track === trackFilter);

    if (filtered.length === 0) {
      timeline.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No workshops in this track.</p>`;
      return;
    }

    timeline.innerHTML = filtered.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-panel">
          <div class="timeline-time-track">
            <span>📅 ${item.id >= 200 ? "Day 2: May 29" : "Day 1: May 28"} @ ${item.time}</span>
            <span style="text-transform: uppercase; color: var(--color-purple); font-weight: 700;">
              ${item.track === "ai" ? "AI & Data Science" : item.track === "web" ? "Web Architecture" : "Hackathon Strategy"}
            </span>
          </div>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-desc">${item.desc}</p>
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
    `).join("");
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
      this.renderAdminLogin();
      return;
    }

    // Authenticated Admin Dashboard
    main.innerHTML = `
      <div class="admin-header-row">
        <div>
          <h2 class="section-title">Admin Management console</h2>
          <p class="section-subtitle">Real-time cohort telemetry, approval pipelines, scanner control, and announcements.</p>
        </div>
        <div>
          <button class="btn btn-danger btn-sm" id="admin-logout-btn"><i data-lucide="log-out"></i> Logout Console</button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="admin-stats-grid">
        <div class="stat-widget glass-panel">
          <div class="stat-widget-icon icon-purple-bg"><i data-lucide="users"></i></div>
          <div class="stat-widget-info">
            <h4 id="stat-total-reg">0</h4>
            <p>Total Registered</p>
          </div>
        </div>
        
        <div class="stat-widget glass-panel">
          <div class="stat-widget-icon icon-cyan-bg"><i data-lucide="check-circle2"></i></div>
          <div class="stat-widget-info">
            <h4 id="stat-approved">0</h4>
            <p>Approved passes</p>
          </div>
        </div>
        
        <div class="stat-widget glass-panel">
          <div class="stat-widget-icon icon-green-bg"><i data-lucide="log-in"></i></div>
          <div class="stat-widget-info">
            <h4 id="stat-scanned">0</h4>
            <p>Checked-In</p>
          </div>
        </div>

        <div class="stat-widget glass-panel">
          <div class="stat-widget-icon icon-yellow-bg"><i data-lucide="percent"></i></div>
          <div class="stat-widget-info">
            <h4 id="stat-attendance-rate">0%</h4>
            <p>Gate Checked %</p>
          </div>
        </div>
      </div>

      <!-- Telemetry Charts -->
      <div class="admin-charts-grid">
        <div class="chart-card glass-panel">
          <h4>Cohort Skill distribution</h4>
          <div class="chart-container-inner">
            <canvas id="skills-chart"></canvas>
          </div>
        </div>
        
        <div class="chart-card glass-panel">
          <h4>Department breakdown</h4>
          <div class="chart-container-inner">
            <canvas id="departments-chart"></canvas>
          </div>
        </div>
      </div>

      <!-- Admin Tab System -->
      <div class="admin-tabs">
        <button class="admin-tab-btn active" id="tab-applicants" data-tab="applicants">Applicants Manager</button>
        <button class="admin-tab-btn" id="tab-scanner" data-tab="scanner">Gate Scanner</button>
        <button class="admin-tab-btn" id="tab-broadcast" data-tab="broadcast">Broadcaster</button>
      </div>

      <!-- Tab Content 1: Applicants List -->
      <div class="admin-tab-content active" id="panel-applicants">
        <div class="applicants-controls-row">
          <div style="display: flex; gap: 1rem; align-items: center; flex-grow: 1;">
            <div class="search-input-wrap">
              <i data-lucide="search"></i>
              <input type="text" id="admin-search-applicant" class="search-input" placeholder="Search by name, college, email..." style="padding: 0.6rem 1rem 0.6rem 2.5rem; font-size: 0.85rem;">
            </div>
            <select class="filter-select" id="admin-filter-status" style="padding: 0.6rem 1.25rem; font-size: 0.85rem;">
              <option value="all">All Applicants</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="checkedin">Checked-In</option>
            </select>
          </div>
          <div>
            <button class="btn btn-secondary btn-sm" id="export-csv-btn"><i data-lucide="download"></i> Export CSV</button>
            <button class="btn btn-glow btn-sm" id="seed-applicants-btn"><i data-lucide="refresh-cw"></i> Reset Seed Data</button>
          </div>
        </div>

        <div class="leaderboard-table-card glass-panel">
          <div class="app-table-wrap">
            <table class="app-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student Info</th>
                  <th>College & Dept</th>
                  <th>Passcode</th>
                  <th>Status</th>
                  <th>Attendance</th>
                  <th style="width: 210px; text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody id="admin-applicants-table-body">
                <!-- Loaded dynamically -->
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Tab Content 2: QR Scanner -->
      <div class="admin-tab-content" id="panel-scanner" style="display: none;">
        <div class="scanner-grid">
          <div class="scanner-video-panel glass-panel">
            <h4 style="margin-bottom: 1rem; color: var(--color-cyan);">Dynamic Camera Scanner</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; margin-bottom: 1.5rem;">
              Activate the webcam reader below to read and verify registrant QR passes at the campus gates.
            </p>
            
            <div class="scanner-viewport">
              <div class="scanner-overlay-line"></div>
              <div id="camera-reader" style="width: 100%; height: 100%; object-fit: cover;"></div>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
              <button class="btn btn-outline btn-sm" id="start-camera-btn"><i data-lucide="video"></i> Start Camera</button>
              <button class="btn btn-danger btn-sm" id="stop-camera-btn" style="display: none;"><i data-lucide="video-off"></i> Stop Camera</button>
            </div>
          </div>

          <div class="scanner-manual-panel glass-panel">
            <h4 style="margin-bottom: 1rem; color: var(--color-purple);">Simulate Gateway Check-In</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1.5rem;">
              If camera access is restricted in the sandbox, select an active registrant from the simulated portal list to mark their check-in logs manually.
            </p>

            <form id="sim-scanner-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div class="form-group">
                <label for="sim-select-applicant">Select Registered Student</label>
                <select id="sim-select-applicant" class="form-control" required>
                  <option value="" disabled selected>Select from list...</option>
                  <!-- Populated dynamically -->
                </select>
              </div>

              <div class="form-group">
                <label for="sim-text-code">Or Type Ticket Code manually</label>
                <input type="text" id="sim-text-code" class="form-control" placeholder="FS26-XXXX">
              </div>

              <button type="submit" class="btn btn-glow" style="margin-top: 1rem;">
                <i data-lucide="check-square"></i> Perform Gateway Scan Check-in
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Tab Content 3: Broadcaster Panel -->
      <div class="admin-tab-content" id="panel-broadcast" style="display: none;">
        <div class="broadcaster-panel glass-panel">
          <h4 style="margin-bottom: 0.5rem;">Announcements Broadcaster</h4>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 2rem;">Update the ticker banner shown globally in the header for all site users.</p>
          
          <form id="admin-broadcast-form">
            <div class="form-group">
              <label for="broadcast-message">Banner Message Text</label>
              <input type="text" id="broadcast-message" class="form-control" placeholder="Type banner message here..." required>
            </div>

            <div class="checkbox-group" style="margin-top: 0.5rem;">
              <input type="checkbox" id="broadcast-is-active" checked>
              <label for="broadcast-is-active">Enable Broadcast Banner</label>
            </div>

            <button type="submit" class="btn btn-glow" style="align-self: flex-start; margin-top: 1rem;">
              <i data-lucide="megaphone"></i> Broadcast Update
            </button>
          </form>
        </div>
      </div>
    `;

    lucide.createIcons();

    // Attach listeners
    document.getElementById("admin-logout-btn").addEventListener("click", () => {
      this.updateState("admin_auth", false);
      this.showToast("Logged out of administrative session.", "info");
      this.navigateTo("admin");
    });

    // Tab buttons logic
    main.querySelectorAll(".admin-tab-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const tab = e.target.getAttribute("data-tab");
        main.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");

        main.querySelectorAll(".admin-tab-content").forEach(content => {
          content.style.display = "none";
        });
        document.getElementById(`panel-${tab}`).style.display = "block";
        
        // Stop camera scanner if moving away from scanner tab
        if (tab !== "scanner") {
          this.stopCameraScanner();
        }
      });
    });

    // Setup sub module inputs
    this.refreshAdminStats();
    this.drawAdminCharts();
    this.renderAdminApplicantsList();
    this.initAdminScannerControls();
    
    // Broadcast Form trigger
    const bForm = document.getElementById("admin-broadcast-form");
    if (bForm) {
      document.getElementById("broadcast-message").value = this.state.announcement.text;
      document.getElementById("broadcast-is-active").checked = this.state.announcement.active;

      bForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const textVal = document.getElementById("broadcast-message").value.trim();
        const activeVal = document.getElementById("broadcast-is-active").checked;
        
        const annObj = { text: textVal, active: activeVal };
        this.updateState("announcement", annObj);
        this.refreshAnnouncement();
        this.showToast("Global announcement ticker updated successfully!", "success");
      });
    }

    // Applicant list filtering
    const searchInput = document.getElementById("admin-search-applicant");
    const statusSelect = document.getElementById("admin-filter-status");

    if (searchInput) searchInput.addEventListener("input", () => this.renderAdminApplicantsList());
    if (statusSelect) statusSelect.addEventListener("change", () => this.renderAdminApplicantsList());

    // Export CSV click
    document.getElementById("export-csv-btn").addEventListener("click", () => this.exportApplicantsCSV());

    // Seed Reset Click
    document.getElementById("seed-applicants-btn").addEventListener("click", () => {
      if (confirm("This will overwrite all active registrations and restore default seed data. Proceed?")) {
        this.updateState("applicants", DEFAULT_APPLICANTS);
        this.updateState("current_user", null);
        this.showToast("Database seed records successfully restored.", "success");
        this.renderAdmin();
      }
    });
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
            borderColor: "#ffffff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { color: "#334155", font: { family: "Plus Jakarta Sans", size: 10 } }
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
            backgroundColor: "rgba(59, 130, 246, 0.25)",
            borderColor: "#3b82f6",
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, ticks: { color: "#334155" } },
            y: { grid: { color: "rgba(15, 23, 42, 0.08)" }, ticks: { precision: 0, color: "#334155" } }
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
