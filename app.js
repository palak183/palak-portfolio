/* ==============================================================
   Hardik Panchal — Data Scientist Portfolio (Interactive Layer)
   Vanilla JS + Tailwind + ApexCharts + Remix Icons
   ============================================================== */

/* ---------- Data ---------- */
const TYPING_PHRASES = [
  "> Data Scientist · ML Engineer",
  "> Python · SQL · TensorFlow",
  "> Turning raw data into decisions",
  "> Open to Data Scientist & ML roles"
];

const SKILLS = {
  lang: [
    { name:'Python',     level:90, icon:'ri-code-s-slash-line',   color:'from-brand-500 to-purple-500' },
    { name:'SQL',        level:85, icon:'ri-database-2-line',     color:'from-sky-500 to-blue-500' },
    { name:'JavaScript', level:70, icon:'ri-javascript-line',     color:'from-amber-500 to-orange-500' },
    { name:'Java',       level:65, icon:'ri-cup-line',            color:'from-rose-500 to-pink-500' },
  ],
  lib: [
    { name:'Pandas',       level:90, icon:'ri-table-line',        color:'from-brand-500 to-purple-500' },
    { name:'NumPy',        level:88, icon:'ri-function-line',     color:'from-emerald-500 to-teal-500' },
    { name:'Scikit-learn', level:85, icon:'ri-flashlight-line',   color:'from-amber-500 to-orange-500' },
    { name:'TensorFlow',   level:78, icon:'ri-brain-line',        color:'from-pink-500 to-rose-500' },
    { name:'Keras',        level:78, icon:'ri-magic-line',        color:'from-rose-500 to-red-500' },
    { name:'Matplotlib',   level:85, icon:'ri-line-chart-line',   color:'from-purple-500 to-pink-500' },
    { name:'Seaborn',      level:82, icon:'ri-bar-chart-2-line',  color:'from-cyan-500 to-sky-500' },
    { name:'OpenCV',       level:70, icon:'ri-camera-lens-line',  color:'from-slate-500 to-slate-700' },
  ],
  db: [
    { name:'MySQL',      level:85, icon:'ri-database-line', color:'from-blue-500 to-indigo-500' },
    { name:'PostgreSQL', level:75, icon:'ri-database-2-line', color:'from-sky-500 to-blue-500' },
    { name:'MongoDB',    level:70, icon:'ri-server-line', color:'from-emerald-500 to-teal-500' },
  ],
  viz: [
    { name:'Power BI', level:85, icon:'ri-pie-chart-2-line',  color:'from-amber-500 to-orange-500' },
    { name:'Tableau',  level:75, icon:'ri-bar-chart-fill',    color:'from-sky-500 to-blue-500' },
    { name:'Excel',    level:88, icon:'ri-file-excel-2-line', color:'from-emerald-500 to-teal-500' },
  ],
  tools: [
    { name:'Git',              level:85, icon:'ri-git-branch-line',   color:'from-rose-500 to-red-500' },
    { name:'GitHub',           level:90, icon:'ri-github-fill',       color:'from-slate-600 to-slate-800' },
    { name:'VS Code',          level:92, icon:'ri-code-box-line',     color:'from-blue-500 to-indigo-500' },
    { name:'Jupyter Notebook', level:90, icon:'ri-book-open-line',    color:'from-amber-500 to-orange-500' },
    { name:'Google Colab',     level:88, icon:'ri-cloud-line',        color:'from-amber-500 to-yellow-500' },
    { name:'Docker',           level:60, icon:'ri-ship-2-line',       color:'from-sky-500 to-blue-500' },
    { name:'Linux',            level:75, icon:'ri-terminal-box-line', color:'from-slate-500 to-slate-700' },
    { name:'Streamlit',        level:82, icon:'ri-window-line',       color:'from-rose-500 to-pink-500' },
  ],
  ml: [
    { name:'Regression',            level:88, icon:'ri-line-chart-line',      color:'from-brand-500 to-purple-500' },
    { name:'Classification',        level:88, icon:'ri-scales-3-line',        color:'from-emerald-500 to-teal-500' },
    { name:'Clustering',            level:80, icon:'ri-bubble-chart-line',    color:'from-purple-500 to-pink-500' },
    { name:'NLP',                   level:75, icon:'ri-chat-quote-line',      color:'from-amber-500 to-orange-500' },
    { name:'Deep Learning',         level:78, icon:'ri-brain-line',           color:'from-pink-500 to-rose-500' },
    { name:'Recommendation Systems',level:76, icon:'ri-lightbulb-flash-line', color:'from-cyan-500 to-sky-500' },
    { name:'Time Series',           level:74, icon:'ri-time-line',            color:'from-blue-500 to-indigo-500' },
    { name:'Feature Engineering',   level:85, icon:'ri-tools-line',           color:'from-emerald-500 to-lime-500' },
    { name:'Model Deployment',      level:75, icon:'ri-rocket-2-line',        color:'from-rose-500 to-red-500' },
  ]
};

const PROJECTS = [
  {
    id:1, title:'Customer Churn Prediction',
    category:'Machine Learning',
    desc:'End-to-end ML pipeline predicting telecom customer churn with feature engineering, class-imbalance handling, and Streamlit deployment.',
    tech:['Python','Pandas','Scikit-learn','XGBoost','Streamlit'],
    features:['SMOTE for class imbalance','Model comparison (LR / RF / XGB)','ROC-AUC 0.83','Interactive Streamlit demo'],
    result:'86% accuracy, 0.83 ROC-AUC',
    github:'https://github.com/hardik198', demo:'#',
    gradient:'from-brand-500 via-purple-500 to-pink-500',
    icon:'ri-user-follow-line'
  },
  {
    id:2, title:'Sales Analytics Dashboard',
    category:'Business Intelligence',
    desc:'Interactive Power BI dashboard on 100K+ retail transactions covering revenue, profit, and regional trends with drill-through.',
    tech:['Power BI','SQL','DAX','Python'],
    features:['KPIs & YoY / MoM','Drill-through pages','Customer segmentation','Executive summary page'],
    result:'Identified top 10 SKUs = 62% revenue',
    github:'https://github.com/hardik198', demo:'#',
    gradient:'from-amber-500 via-orange-500 to-rose-500',
    icon:'ri-bar-chart-box-line'
  },
  {
    id:3, title:'Movie Recommendation System',
    category:'NLP',
    desc:'Content-based recommender on MovieLens using TF-IDF and cosine similarity, deployed as a Streamlit app.',
    tech:['Python','NLP','TF-IDF','Cosine Similarity','Streamlit'],
    features:['Text vectorization','Metadata fusion (cast, genre, keywords)','Real-time top-5 recs','Deployed on Streamlit Cloud'],
    result:'Top-5 recs in < 200ms',
    github:'https://github.com/hardik198', demo:'#',
    gradient:'from-sky-500 via-cyan-500 to-teal-500',
    icon:'ri-film-line'
  },
  {
    id:4, title:'Handwritten Digit Recognition',
    category:'Deep Learning',
    desc:'Convolutional Neural Network on MNIST achieving ~99% test accuracy with an OpenCV real-time interface for user-drawn digits.',
    tech:['TensorFlow','Keras','OpenCV','NumPy'],
    features:['Data augmentation','Dropout & batch norm','Real-time inference','CNN architecture'],
    result:'~99% test accuracy',
    github:'https://github.com/hardik198', demo:'#',
    gradient:'from-emerald-500 via-teal-500 to-cyan-500',
    icon:'ri-pencil-ruler-2-line'
  },
  {
    id:5, title:'House Price Prediction',
    category:'Machine Learning',
    desc:'Regression pipeline predicting housing prices with feature engineering, ensemble models, and SHAP-based explainability.',
    tech:['Python','Scikit-learn','XGBoost','SHAP','Pandas'],
    features:['Missing-value imputation','Log-transform on skewed features','Stacked ensemble','Explainability with SHAP'],
    result:'RMSE reduced by 22%',
    github:'https://github.com/hardik198', demo:'#',
    gradient:'from-rose-500 via-pink-500 to-fuchsia-500',
    icon:'ri-home-4-line'
  },
  {
    id:6, title:'Sentiment Analyzer',
    category:'NLP',
    desc:'Twitter sentiment classifier using classical ML + a lightweight LSTM, exposed via a Flask API.',
    tech:['Python','NLTK','Scikit-learn','LSTM','Flask'],
    features:['Text cleaning pipeline','TF-IDF + Logistic Regression baseline','LSTM upgrade','REST API deployment'],
    result:'F1 0.88 on test set',
    github:'https://github.com/hardik198', demo:'#',
    gradient:'from-indigo-500 via-blue-500 to-cyan-500',
    icon:'ri-emotion-happy-line'
  }
];

const CERTS = [
  { title:'Google Data Analytics', provider:'Coursera · Google', year:'2025', icon:'ri-google-fill', color:'from-sky-500 to-blue-500', link:'#' },
  { title:'Machine Learning Specialization', provider:'Coursera · DeepLearning.AI', year:'2025', icon:'ri-brain-line', color:'from-purple-500 to-pink-500', link:'#' },
  { title:'Python for Data Science', provider:'IBM · Coursera', year:'2024', icon:'ri-code-s-slash-line', color:'from-emerald-500 to-teal-500', link:'#' },
  { title:'SQL for Data Science', provider:'Coursera · UC Davis', year:'2024', icon:'ri-database-2-line', color:'from-amber-500 to-orange-500', link:'#' },
  { title:'Kaggle Intro to ML', provider:'Kaggle', year:'2024', icon:'ri-trophy-line', color:'from-cyan-500 to-sky-500', link:'#' },
  { title:'Power BI Essentials', provider:'Microsoft Learn', year:'2025', icon:'ri-bar-chart-2-line', color:'from-yellow-500 to-orange-500', link:'#' },
];

const ACHIEVEMENTS = [
  { title:'Consistent Academic Excellence', desc:'10th: 93% · 12th: 86% · BSc IT CGPA 8.07', icon:'ri-medal-line', color:'from-amber-500 to-orange-500' },
  { title:'Kaggle Learner', desc:'Active participant in Kaggle micro-courses & competitions', icon:'ri-trophy-line', color:'from-cyan-500 to-sky-500' },
  { title:'Open-Source Contributor', desc:'Active GitHub profile (@hardik198) with 12+ public repos', icon:'ri-github-fill', color:'from-slate-500 to-slate-700' },
  { title:'Hackathon Enthusiast', desc:'Participated in student-level ML hackathons and coding challenges', icon:'ri-fire-line', color:'from-rose-500 to-pink-500' }
];

const SERVICES = [
  { title:'Data Analysis',            desc:'Turn raw data into insights with Python, SQL, and statistics.', icon:'ri-search-eye-line',        color:'from-brand-500 to-purple-500' },
  { title:'Machine Learning',         desc:'Design, train, and evaluate models for classification, regression, and forecasting.', icon:'ri-brain-line', color:'from-pink-500 to-rose-500' },
  { title:'Power BI Dashboards',      desc:'Executive-grade dashboards with drill-through, DAX, and storytelling.', icon:'ri-pie-chart-2-line',  color:'from-amber-500 to-orange-500' },
  { title:'Dashboard Development',    desc:'Interactive web dashboards using Streamlit / Dash / custom stack.', icon:'ri-dashboard-3-line',    color:'from-sky-500 to-blue-500' },
  { title:'Python Automation',        desc:'Automate repetitive workflows — scraping, reporting, ETL.', icon:'ri-terminal-box-line',       color:'from-emerald-500 to-teal-500' },
  { title:'SQL & Business Intelligence', desc:'From schema design to complex analytical queries and BI pipelines.', icon:'ri-database-2-line', color:'from-purple-500 to-fuchsia-500' },
];

const REPOS = [
  { name:'churn-prediction',  desc:'End-to-end churn ML pipeline with Streamlit demo.',  lang:'Python',   stars:12, forks:3, updated:'2 weeks ago' },
  { name:'movie-recommender', desc:'Content-based recommender on MovieLens dataset.',    lang:'Python',   stars:8,  forks:2, updated:'1 month ago' },
  { name:'sales-dashboard',   desc:'Power BI + SQL retail analytics with 100K+ rows.',   lang:'DAX',      stars:5,  forks:1, updated:'3 weeks ago' },
  { name:'digit-recognition', desc:'MNIST CNN + real-time OpenCV interface.',            lang:'Python',   stars:3,  forks:0, updated:'6 weeks ago' },
  { name:'sentiment-api',     desc:'Twitter sentiment analysis with Flask REST API.',    lang:'Python',   stars:6,  forks:1, updated:'5 weeks ago' },
  { name:'sql-practice',      desc:'50+ SQL solutions on LeetCode & HackerRank.',        lang:'SQL',      stars:4,  forks:0, updated:'1 week ago' },
];

const TESTIMONIALS = [
  { name:'Prof. R. Shah', role:'Faculty, MSc IT — Data Science', text:'Hardik shows exceptional curiosity and rigor in machine learning projects. He learns fast and communicates results clearly.' },
  { name:'A. Mehta', role:'Peer, Kaggle collaborator', text:'Great teammate for hackathons — brings both the coding skill and the analytical mindset to the table.' },
  { name:'S. Patel', role:'Mentor', text:'Consistently delivers polished, deployable ML projects — not just notebooks. That mindset makes him ready for industry.' }
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
  <a href="https://github.com/hardik198" target="_blank" class="glass card rounded-2xl p-5 block">
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

  // Model accuracy bar
  const modelOpts = {
    chart:{...baseChart, type:'bar', height:320},
    series:[{ name:'Accuracy %', data:[86, 99, 88, 92, 84, 90] }],
    xaxis:{ categories:['Churn','Digit CNN','Sentiment','House Price','Recommender','Sales Model'], labels:{style:{colors:t.text}, rotate:-20} },
    yaxis:{ min:70, max:100, labels:{style:{colors:t.text}, formatter:v=>v+'%'} },
    plotOptions:{ bar:{ borderRadius:6, columnWidth:'55%', distributed:true } },
    colors:['#6366f1','#a855f7','#ec4899','#0ea5e9','#10b981','#f59e0b'],
    dataLabels:{enabled:true, formatter:v=>v+'%', style:{colors:['#fff']}},
    legend:{show:false},
    grid:{borderColor:t.grid, strokeDashArray:4},
    tooltip:{theme:t.mode}
  };

  const skillOpts = {
    chart:{...baseChart, type:'donut', height:320},
    series:[35, 20, 15, 15, 15],
    labels:['Python & ML','Data Analysis','Visualization','SQL & DB','Deployment'],
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
  const mailto = `mailto:panchalhardik183@gmail.com?subject=${encodeURIComponent(data.subject||'Portfolio inquiry')}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
  window.location.href = mailto;
  $('#formMsg').textContent = 'Opening your email client…';
  e.target.reset();
});

/* ---------- Visitor counter (localStorage mock) ---------- */
(function(){
  const key = 'hp_visits';
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
