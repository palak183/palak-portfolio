/* ==============================================================
   Palak Panchal — Full-Stack Developer Portfolio (Interactive Layer)
   Vanilla JS + Tailwind + ApexCharts + Remix Icons
   ============================================================== */

/* ---------- Data ---------- */
const TYPING_PHRASES = [
  "> Full-Stack Developer · Software Developer",
  "> React · Angular · Node.js · Laravel",
  "> Building scalable web applications",
  "> Open to Full-Stack & Software Developer roles"
];

const SKILLS = {
  lang: [
    { name:'JavaScript', level:88, icon:'ri-javascript-line',     color:'from-amber-500 to-orange-500' },
    { name:'HTML5',      level:92, icon:'ri-html5-line',          color:'from-orange-500 to-red-500' },
    { name:'CSS3',       level:90, icon:'ri-css3-line',           color:'from-blue-500 to-indigo-500' },
    { name:'Java',       level:70, icon:'ri-code-s-slash-line',   color:'from-rose-500 to-pink-500' },
    { name:'PHP',        level:75, icon:'ri-php-line',             color:'from-violet-500 to-purple-500' },
    { name:'SQL',        level:82, icon:'ri-database-2-line',     color:'from-sky-500 to-blue-500' },
  ],
  lib: [
    { name:'React',       level:88, icon:'ri-reactjs-line',       color:'from-cyan-500 to-blue-500' },
    { name:'Angular',     level:80, icon:'ri-angularjs-line',     color:'from-red-500 to-rose-500' },
    { name:'Node.js',     level:85, icon:'ri-nodejs-line',        color:'from-emerald-500 to-green-500' },
    { name:'Express.js',  level:83, icon:'ri-server-line',        color:'from-slate-500 to-slate-700' },
    { name:'Laravel',     level:78, icon:'ri-code-box-line',      color:'from-rose-500 to-red-500' },
    { name:'Bootstrap',   level:90, icon:'ri-bootstrap-line',     color:'from-purple-500 to-violet-500' },
    { name:'Tailwind CSS',level:88, icon:'ri-palette-line',       color:'from-sky-500 to-cyan-500' },
  ],
  db: [
    { name:'MySQL',      level:85, icon:'ri-database-line',     color:'from-blue-500 to-indigo-500' },
    { name:'PostgreSQL', level:72, icon:'ri-database-2-line',   color:'from-sky-500 to-blue-500' },
    { name:'MongoDB',    level:70, icon:'ri-server-line',       color:'from-emerald-500 to-teal-500' },
  ],
  viz: [
    { name:'REST APIs',    level:88, icon:'ri-api-line',           color:'from-emerald-500 to-teal-500' },
    { name:'Postman',      level:82, icon:'ri-send-plane-line',    color:'from-orange-500 to-amber-500' },
    { name:'Swagger',      level:72, icon:'ri-file-code-line',     color:'from-green-500 to-emerald-500' },
  ],
  tools: [
    { name:'Git',         level:88, icon:'ri-git-branch-line',    color:'from-rose-500 to-red-500' },
    { name:'GitHub',      level:90, icon:'ri-github-fill',        color:'from-slate-600 to-slate-800' },
    { name:'VS Code',     level:92, icon:'ri-code-box-line',      color:'from-blue-500 to-indigo-500' },
    { name:'npm',         level:85, icon:'ri-terminal-box-line',  color:'from-red-500 to-rose-500' },
    { name:'XAMPP',       level:80, icon:'ri-stack-line',         color:'from-amber-500 to-orange-500' },
    { name:'Docker',      level:60, icon:'ri-ship-2-line',        color:'from-sky-500 to-blue-500' },
    { name:'Linux',       level:72, icon:'ri-terminal-line',      color:'from-slate-500 to-slate-700' },
    { name:'Figma',       level:70, icon:'ri-figma-line',         color:'from-pink-500 to-purple-500' },
  ],
  ml: [
    { name:'Responsive Design',  level:92, icon:'ri-layout-responsive-line', color:'from-brand-500 to-purple-500' },
    { name:'REST API Design',    level:88, icon:'ri-api-line',              color:'from-emerald-500 to-teal-500' },
    { name:'MVC Architecture',   level:85, icon:'ri-stack-line',            color:'from-purple-500 to-pink-500' },
    { name:'Authentication',     level:82, icon:'ri-shield-check-line',     color:'from-amber-500 to-orange-500' },
    { name:'CRUD Operations',    level:92, icon:'ri-database-line',         color:'from-sky-500 to-blue-500' },
    { name:'Version Control',    level:88, icon:'ri-git-branch-line',       color:'from-rose-500 to-red-500' },
    { name:'Debugging',          level:85, icon:'ri-bug-line',              color:'from-cyan-500 to-sky-500' },
    { name:'Testing',            level:75, icon:'ri-test-tube-line',        color:'from-emerald-500 to-lime-500' },
  ]
};

const PROJECTS = [
  {
    id:1, title:'E-Commerce Web Application',
    category:'Full-Stack',
    desc:'A complete e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard built with React and Node.js.',
    tech:['React','Node.js','Express.js','MongoDB','Stripe API'],
    features:['JWT authentication & authorization','Product search & filtering','Shopping cart with session management','Admin panel for inventory management'],
    result:'Full CRUD with payment integration',
    github:'https://github.com/palak183', demo:'#',
    gradient:'from-brand-500 via-purple-500 to-pink-500',
    icon:'ri-shopping-cart-2-line'
  },
  {
    id:2, title:'Task Management System',
    category:'Full-Stack',
    desc:'A collaborative task management app with real-time updates, drag-and-drop boards, team assignments, and progress tracking using Angular and Laravel.',
    tech:['Angular','Laravel','MySQL','Bootstrap','REST API'],
    features:['Kanban-style drag & drop boards','Team collaboration & role management','Real-time task status updates','Email notifications & reminders'],
    result:'Real-time collaboration platform',
    github:'https://github.com/palak183', demo:'#',
    gradient:'from-amber-500 via-orange-500 to-rose-500',
    icon:'ri-task-line'
  },
  {
    id:3, title:'Portfolio Website',
    category:'Frontend',
    desc:'A modern, responsive portfolio website with dark/light theme toggle, smooth animations, interactive charts, and a contact form with glassmorphism design.',
    tech:['HTML5','CSS3','JavaScript','Tailwind CSS','ApexCharts'],
    features:['Dark & light theme toggle','Scroll animations & transitions','Interactive analytics dashboard','Responsive on all devices'],
    result:'Fully responsive & animated',
    github:'https://github.com/palak183', demo:'#',
    gradient:'from-sky-500 via-cyan-500 to-teal-500',
    icon:'ri-palette-line'
  },
  {
    id:4, title:'Student Management System',
    category:'Backend',
    desc:'A comprehensive student management system with attendance tracking, grade management, timetable scheduling, and report generation using PHP and MySQL.',
    tech:['PHP','MySQL','Bootstrap','JavaScript','jQuery'],
    features:['Student enrollment & profiles','Attendance tracking system','Grade management & report cards','Timetable scheduling module'],
    result:'Complete academic management',
    github:'https://github.com/palak183', demo:'#',
    gradient:'from-emerald-500 via-teal-500 to-cyan-500',
    icon:'ri-graduation-cap-line'
  },
  {
    id:5, title:'Blog Platform',
    category:'Full-Stack',
    desc:'A full-featured blog platform with rich text editing, user roles, comments, categories, tags, and SEO-friendly URLs built with React and Express.js.',
    tech:['React','Express.js','MongoDB','Node.js','REST API'],
    features:['Rich text editor for posts','User roles: admin, author, reader','Comment system with moderation','Category & tag-based navigation'],
    result:'Multi-user blog with CMS',
    github:'https://github.com/palak183', demo:'#',
    gradient:'from-rose-500 via-pink-500 to-fuchsia-500',
    icon:'ri-quill-pen-line'
  },
  {
    id:6, title:'Weather Dashboard',
    category:'Frontend',
    desc:'A dynamic weather dashboard that fetches real-time data from OpenWeather API, displays forecasts, and saves favorite locations using JavaScript and CSS.',
    tech:['JavaScript','HTML5','CSS3','OpenWeather API','LocalStorage'],
    features:['Real-time weather data fetching','5-day forecast display','Save & manage favorite cities','Geolocation-based weather lookup'],
    result:'Live API integration',
    github:'https://github.com/palak183', demo:'#',
    gradient:'from-indigo-500 via-blue-500 to-cyan-500',
    icon:'ri-cloud-line'
  }
];

const CERTS = [
  { title:'Full-Stack Web Development', provider:'Udemy · Colt Steele', year:'2025', icon:'ri-code-s-slash-line', color:'from-brand-500 to-purple-500', link:'#' },
  { title:'React - The Complete Guide', provider:'Udemy · Maximilian Schwarzmüller', year:'2025', icon:'ri-reactjs-line', color:'from-cyan-500 to-blue-500', link:'#' },
  { title:'JavaScript Algorithms & DS', provider:'freeCodeCamp', year:'2024', icon:'ri-javascript-line', color:'from-amber-500 to-orange-500', link:'#' },
  { title:'Node.js & Express.js Masterclass', provider:'Udemy', year:'2024', icon:'ri-nodejs-line', color:'from-emerald-500 to-teal-500', link:'#' },
  { title:'PHP with Laravel for Beginners', provider:'Udemy', year:'2024', icon:'ri-php-line', color:'from-violet-500 to-purple-500', link:'#' },
  { title:'MySQL Complete Course', provider:'Udemy · MySQL', year:'2024', icon:'ri-database-2-line', color:'from-sky-500 to-blue-500', link:'#' },
];

const ACHIEVEMENTS = [
  { title:'Consistent Academic Excellence', desc:'10th: 93% · 12th: 75% · BSc IT CGPA 8.01', icon:'ri-medal-line', color:'from-amber-500 to-orange-500' },
  { title:'Open-Source Contributor', desc:'Active GitHub profile (@palak183) with 12+ public repos', icon:'ri-github-fill', color:'from-slate-500 to-slate-700' },
  { title:'Full-Stack Project Builder', desc:'Built 8+ real-world full-stack and frontend projects', icon:'ri-rocket-2-line', color:'from-brand-500 to-purple-500' },
  { title:'Continuous Learner', desc:'Completed 6+ certifications in web development & frameworks', icon:'ri-award-line', color:'from-rose-500 to-pink-500' }
];

const SERVICES = [
  { title:'Frontend Development',     desc:'Build responsive, interactive UIs with React, Angular, HTML, CSS, and JavaScript.', icon:'ri-layout-line',          color:'from-brand-500 to-purple-500' },
  { title:'Backend Development',      desc:'Develop robust server-side applications with Node.js, Express.js, PHP, and Laravel.', icon:'ri-server-line',         color:'from-pink-500 to-rose-500' },
  { title:'Full-Stack Web Apps',      desc:'End-to-end web application development from database design to deployment.', icon:'ri-stack-line',              color:'from-amber-500 to-orange-500' },
  { title:'REST API Development',     desc:'Design and build secure, scalable RESTful APIs with proper documentation.', icon:'ri-api-line',                  color:'from-sky-500 to-blue-500' },
  { title:'Database Design',          desc:'Create efficient database schemas, queries, and optimizations for MySQL and MongoDB.', icon:'ri-database-2-line',   color:'from-emerald-500 to-teal-500' },
  { title:'Responsive Web Design',    desc:'Pixel-perfect, mobile-first responsive designs using Bootstrap, Tailwind CSS, and modern CSS.', icon:'ri-layout-responsive-line', color:'from-purple-500 to-fuchsia-500' },
];

const REPOS = [
  { name:'ecommerce-app',       desc:'Full-stack e-commerce with React, Node.js & MongoDB.',     lang:'JavaScript', stars:10, forks:4, updated:'2 weeks ago' },
  { name:'task-manager',        desc:'Angular + Laravel collaborative task management system.',    lang:'TypeScript', stars:7,  forks:2, updated:'1 month ago' },
  { name:'portfolio-website',   desc:'Modern portfolio with Tailwind CSS & ApexCharts.',           lang:'HTML',       stars:5,  forks:1, updated:'3 weeks ago' },
  { name:'student-management',  desc:'PHP & MySQL student management system.',                     lang:'PHP',        stars:4,  forks:1, updated:'6 weeks ago' },
  { name:'blog-platform',       desc:'React & Express.js multi-user blog platform.',               lang:'JavaScript', stars:6,  forks:2, updated:'5 weeks ago' },
  { name:'weather-dashboard',   desc:'JavaScript weather app with OpenWeather API.',               lang:'JavaScript', stars:3,  forks:0, updated:'1 week ago' },
];

const TESTIMONIALS = [
  { name:'Prof. R. Shah', role:'Faculty, BSc IT — HNGU Patan', text:'Palak shows exceptional dedication and skill in full-stack development. She builds clean, well-structured code and learns new technologies quickly.' },
  { name:'A. Mehta', role:'Peer, Project Collaborator', text:'Great teammate for web development projects — brings both frontend creativity and backend logic to the table. Always delivers on time.' },
  { name:'S. Patel', role:'Mentor', text:'Consistently delivers polished, deployable web applications — not just assignments. That mindset makes her ready for industry-level full-stack roles.' }
];

/* ---------- Utils ---------- */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

/* ---------- Typing effect ---------- */
(function typing(){
  const el = $('#typing');
  let i=0, j=0, deleting=false;
  const tick = () => {
    const cur = TYPING_PHRASES[i];
    if (!deleting){
      el.textContent = cur.slice(0, ++j);
      if (j===cur.length){ deleting=true; return setTimeout(tick, 1600); }
    } else {
      el.textContent = cur.slice(0, --j);
      if (j===0){ deleting=false; i=(i+1)%TYPING_PHRASES.length; }
    }
    setTimeout(tick, deleting ? 35 : 65);
  };
  tick();
})();

/* ---------- Counters ---------- */
function animateCounters(){
  $$('[data-counter]').forEach(el=>{
    if (el.dataset.done) return; el.dataset.done='1';
    const end = +el.dataset.counter;
    const suffix = el.dataset.suffix || '';
    const dur = 1400; const t0 = performance.now();
    const step = t => {
      const p = Math.min(1,(t-t0)/dur);
      const eased = 1-Math.pow(1-p,3);
      const v = Math.round(end*eased);
      el.textContent = v.toLocaleString() + suffix;
      if (p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ---------- Skills render ---------- */
function renderSkills(tab='lang'){
  const grid = $('#skillsGrid');
  const list = SKILLS[tab];
  grid.innerHTML = list.map((s,i)=>`
    <div class="glass card rounded-2xl p-4 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center text-xl shadow-lg">
        <i class="${s.icon}"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-center">
          <div class="font-semibold">${s.name}</div>
          <div class="font-mono text-xs text-slate-500">${s.level}%</div>
        </div>
        <div class="skill-bar mt-2"><div class="skill-fill" data-w="${s.level}"></div></div>
      </div>
    </div>
  `).join('');
  // animate bars after paint
  requestAnimationFrame(()=>{
    $$('#skillsGrid .skill-fill').forEach(f=>{ f.style.width = f.dataset.w+'%'; });
  });
}
renderSkills('lang');

$$('#skillTabs .tab-btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    $$('#skillTabs .tab-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderSkills(b.dataset.tab);
  });
});

/* ---------- Projects ---------- */
const projCats = ['All', ...new Set(PROJECTS.map(p=>p.category))];
const filtersEl = $('#projFilters');
filtersEl.innerHTML = projCats.map((c,i)=>
  `<button class="tab-btn ${i===0?'active':''} px-4 py-2 rounded-full text-xs font-semibold border border-slate-300 dark:border-slate-700" data-cat="${c}">${c}</button>`
).join('');

let currentCat='All'; let searchQ='';
function renderProjects(){
  const grid = $('#projectsGrid');
  const rows = PROJECTS.filter(p=>{
    const catOK = currentCat==='All' || p.category===currentCat;
    const q = searchQ.trim().toLowerCase();
    const qOK = !q || [p.title,p.desc,p.category,...p.tech].join(' ').toLowerCase().includes(q);
    return catOK && qOK;
  });
  if (!rows.length){ grid.innerHTML = `<div class="col-span-full text-center text-sm text-slate-500 py-10">No projects match your search.</div>`; return; }
  grid.innerHTML = rows.map((p,i)=>`
    <article class="glass card rounded-2xl overflow-hidden flex flex-col" style="animation-delay:${i*60}ms">
      <div class="relative h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white overflow-hidden">
        <i class="${p.icon} text-6xl opacity-90"></i>
        <div class="absolute inset-0 opacity-30" style="background:radial-gradient(circle at 30% 20%, rgba(255,255,255,.5), transparent 40%)"></div>
        <span class="absolute top-3 left-3 chip bg-white/25 text-white backdrop-blur">${p.category}</span>
        <span class="absolute top-3 right-3 chip bg-black/25 text-white backdrop-blur">${p.result}</span>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <h3 class="font-display font-bold text-lg">${p.title}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 flex-1">${p.desc}</p>
        <div class="flex flex-wrap gap-1.5 mt-3">
          ${p.tech.map(t=>`<span class="chip chip-outline">${t}</span>`).join('')}
        </div>
        <div class="flex gap-2 mt-4">
          <a href="${p.github}" target="_blank" class="btn flex-1 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 inline-flex items-center justify-center gap-1 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"><i class="ri-github-fill"></i>Code</a>
          <a href="${p.demo}" target="_blank" class="btn flex-1 text-xs font-semibold px-3 py-2 rounded-lg btn-primary text-white inline-flex items-center justify-center gap-1"><i class="ri-external-link-line"></i>Demo</a>
          <button class="btn text-xs font-semibold px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 inline-flex items-center justify-center gap-1 hover:bg-slate-100/60 dark:hover:bg-slate-800/60" data-open="${p.id}"><i class="ri-eye-line"></i></button>
        </div>
      </div>
    </article>
  `).join('');
  bindProjectOpen();
}
renderProjects();

filtersEl.addEventListener('click', e=>{
  const b = e.target.closest('.tab-btn'); if (!b) return;
  filtersEl.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  currentCat = b.dataset.cat;
  renderProjects();
});
$('#projSearch').addEventListener('input', e=>{ searchQ = e.target.value; renderProjects(); });

/* Project drill-down modal */
function bindProjectOpen(){
  $$('#projectsGrid [data-open]').forEach(b=>{
    b.addEventListener('click', ()=>openProject(+b.dataset.open));
  });
}
function openProject(id){
  const p = PROJECTS.find(x=>x.id===id); if(!p) return;
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="max-w-2xl w-full glass rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-700/60" style="animation:floatUp .35s ease-out both">
      <div class="relative h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white">
        <i class="${p.icon} text-7xl opacity-90"></i>
        <button class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center" id="mClose"><i class="ri-close-line text-lg"></i></button>
      </div>
      <div class="p-6 space-y-3">
        <div class="flex flex-wrap gap-2">
          <span class="chip chip-brand">${p.category}</span>
          <span class="chip chip-outline">${p.result}</span>
        </div>
        <h3 class="font-display text-2xl font-bold">${p.title}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300">${p.desc}</p>
        <div>
          <div class="text-xs uppercase tracking-wider text-slate-500 mb-1">Key Features</div>
          <ul class="text-sm list-disc pl-5 space-y-1">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-slate-500 mb-1">Tech Stack</div>
          <div class="flex flex-wrap gap-1.5">${p.tech.map(t=>`<span class="chip chip-outline">${t}</span>`).join('')}</div>
        </div>
        <div class="flex gap-2 pt-2">
          <a href="${p.github}" target="_blank" class="btn flex-1 text-sm font-semibold px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 inline-flex items-center justify-center gap-2"><i class="ri-github-fill"></i>View Code</a>
          <a href="${p.demo}" target="_blank" class="btn flex-1 text-sm font-semibold px-4 py-2.5 rounded-lg btn-primary text-white inline-flex items-center justify-center gap-2"><i class="ri-external-link-line"></i>Live Demo</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.addEventListener('click', e=>{ if(e.target===modal) close(); });
  modal.querySelector('#mClose').addEventListener('click', close);
}

/* ---------- Certifications ---------- */
$('#certGrid').innerHTML = CERTS.map((c,i)=>`
  <a href="${c.link}" target="_blank" class="glass card rounded-2xl p-5 flex items-center gap-4 group" style="animation-delay:${i*50}ms">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center text-xl shadow-lg">
      <i class="${c.icon}"></i>
    </div>
    <div class="min-w-0 flex-1">
      <div class="font-semibold truncate">${c.title}</div>
      <div class="text-xs text-slate-500 truncate">${c.provider} · ${c.year}</div>
    </div>
    <i class="ri-arrow-right-up-line text-slate-400 group-hover:text-brand-500"></i>
  </a>
`).join('');

/* ---------- Achievements ---------- */
$('#achGrid').innerHTML = ACHIEVEMENTS.map(a=>`
  <div class="glass card rounded-2xl p-5">
    <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${a.color} text-white flex items-center justify-center text-lg shadow-lg mb-3"><i class="${a.icon}"></i></div>
    <div class="font-semibold">${a.title}</div>
    <div class="text-sm text-slate-500 mt-1">${a.desc}</div>
  </div>
`).join('');

/* ---------- Services ---------- */
$('#servicesGrid').innerHTML = SERVICES.map(s=>`
  <div class="glass card rounded-2xl p-6">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center text-xl shadow-lg mb-3"><i class="${s.icon}"></i></div>
    <div class="font-display text-lg font-bold">${s.title}</div>
    <div class="text-sm text-slate-500 mt-1">${s.desc}</div>
  </div>
`).join('');

/* ---------- GitHub repos ---------- */
$('#repoGrid').innerHTML = REPOS.map(r=>`
  <a href="https://github.com/palak183" target="_blank" class="glass card rounded-2xl p-5 block">
    <div class="flex items-center gap-2">
      <i class="ri-git-repository-line text-brand-500"></i>
      <div class="font-semibold truncate">${r.name}</div>
    </div>
    <p class="text-sm text-slate-500 mt-1">${r.desc}</p>
    <div class="flex items-center gap-4 mt-3 text-xs text-slate-500">
      <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-brand-500"></span>${r.lang}</span>
      <span><i class="ri-star-line"></i> ${r.stars}</span>
      <span><i class="ri-git-branch-line"></i> ${r.forks}</span>
      <span class="ml-auto">Updated ${r.updated}</span>
    </div>
  </a>
`).join('');

/* ---------- Contribution graph (mock) ---------- */
(function(){
  const el = $('#contribGrid');
  const weeks = 20;
  let html = '';
  for (let w=0; w<weeks; w++){
    html += '<div class="flex flex-col gap-[3px]">';
    for (let d=0; d<7; d++){
      const r = Math.random();
      let cls = '';
      if (r>0.85) cls='cc-4';
      else if (r>0.6) cls='cc-3';
      else if (r>0.35) cls='cc-2';
      else if (r>0.15) cls='cc-1';
      html += `<div class="contribution-cell ${cls}"></div>`;
    }
    html += '</div>';
  }
  el.innerHTML = html;
})();

/* ---------- Testimonials ---------- */
$('#testGrid').innerHTML = TESTIMONIALS.map(t=>`
  <div class="glass card rounded-2xl p-5">
    <i class="ri-double-quotes-l text-3xl text-brand-500"></i>
    <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">${t.text}</p>
    <div class="mt-4 flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm">${t.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div>
      <div>
        <div class="font-semibold text-sm">${t.name}</div>
        <div class="text-xs text-slate-500">${t.role}</div>
      </div>
    </div>
  </div>
`).join('');

/* ---------- Charts ---------- */
function chartTheme(){
  const dark = document.documentElement.classList.contains('dark');
  return { mode: dark?'dark':'light', text: dark?'#cbd5e1':'#475569', grid: dark?'#1e293b':'#e2e8f0' };
}
let CHARTS = {};
function renderCharts(){
  const t = chartTheme();
  const baseChart = { background:'transparent', foreColor:t.text, toolbar:{show:false}, fontFamily:'Inter, sans-serif', animations:{enabled:true, speed:600} };

  // Project tech distribution bar
  const modelOpts = {
    chart:{...baseChart, type:'bar', height:320},
    series:[{ name:'Proficiency %', data:[88, 85, 80, 78, 85, 82] }],
    xaxis:{ categories:['React','Node.js','Angular','Laravel','JavaScript','MySQL'], labels:{style:{colors:t.text}, rotate:-20} },
    yaxis:{ min:60, max:100, labels:{style:{colors:t.text}, formatter:v=>v+'%'} },
    plotOptions:{ bar:{ borderRadius:6, columnWidth:'55%', distributed:true } },
    colors:['#6366f1','#a855f7','#ec4899','#0ea5e9','#10b981','#f59e0b'],
    dataLabels:{enabled:true, formatter:v=>v+'%', style:{colors:['#fff']}},
    legend:{show:false},
    grid:{borderColor:t.grid, strokeDashArray:4},
    tooltip:{theme:t.mode}
  };

  const skillOpts = {
    chart:{...baseChart, type:'donut', height:320},
    series:[35, 25, 15, 15, 10],
    labels:['Frontend','Backend','Database','Tools & DevOps','API & Testing'],
    colors:['#6366f1','#a855f7','#ec4899','#0ea5e9','#10b981'],
    legend:{position:'bottom', labels:{colors:t.text}},
    stroke:{width:2, colors:['transparent']},
    plotOptions:{ pie:{ donut:{ size:'70%', labels:{show:true, total:{show:true, label:'Skill Mix', color:t.text}} } } },
    tooltip:{theme:t.mode}
  };

  if (CHARTS.model){ CHARTS.model.destroy(); CHARTS.skill.destroy(); }
  CHARTS.model = new ApexCharts($('#modelChart'), modelOpts); CHARTS.model.render();
  CHARTS.skill = new ApexCharts($('#skillPie'),   skillOpts); CHARTS.skill.render();
}

/* ---------- Theme toggle ---------- */
$('#themeToggle').addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark');
  renderCharts();
});

/* ---------- Mobile menu ---------- */
$('#menuBtn').addEventListener('click', ()=>{ $('#mobileMenu').classList.toggle('hidden'); });
$$('#mobileMenu a').forEach(a=>a.addEventListener('click', ()=>$('#mobileMenu').classList.add('hidden')));

/* ---------- Nav active on scroll ---------- */
const sections = ['about','skills','education','projects','certifications','services','github','contact'];
window.addEventListener('scroll', ()=>{
  const y = window.scrollY + 120;
  sections.forEach(id=>{
    const s = document.getElementById(id); if(!s) return;
    const link = document.querySelector(`nav a[href="#${id}"]`); if(!link) return;
    if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) link.classList.add('active');
    else link.classList.remove('active');
  });
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
},{threshold:0.12});
$$('.fade-in').forEach(el=>io.observe(el));

/* ---------- Contact form (mock) ---------- */
$('#contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const mailto = `mailto:palakpanchal182@gmail.com?subject=${encodeURIComponent(data.subject||'Portfolio inquiry')}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
  window.location.href = mailto;
  $('#formMsg').textContent = 'Opening your email client…';
  e.target.reset();
});

/* ---------- Visitor counter (localStorage mock) ---------- */
(function(){
  const key = 'pp_visits';
  let n = +localStorage.getItem(key) || 1247;
  n += 1; localStorage.setItem(key, n);
  $('#visitorCount').textContent = n.toLocaleString();
})();

/* ---------- Particles ---------- */
(function(){
  const layer = $('#particles');
  const N = 22;
  for (let i=0;i<N;i++){
    const p = document.createElement('div');
    p.className='particle animate-floatY';
    const size = 4 + Math.random()*10;
    p.style.width=size+'px'; p.style.height=size+'px';
    p.style.left = (Math.random()*100)+'%';
    p.style.top  = (Math.random()*100)+'%';
    p.style.animationDelay = (Math.random()*4)+'s';
    p.style.animationDuration = (4+Math.random()*4)+'s';
    p.style.opacity = 0.15 + Math.random()*0.25;
    layer.appendChild(p);
  }
})();

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  animateCounters();
  renderCharts();
});
