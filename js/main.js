// ── Mobile Nav Toggle ──
document.querySelector('.nav-toggle')?.addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ── Scroll Animations ──
if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  document.querySelectorAll('section').forEach(function(s) {
    s.style.opacity = '0';
    s.style.transform = 'translateY(20px)';
    s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(s);
  });

  // Don't animate hero or page-header
  var hero = document.getElementById('hero');
  if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'none';
  }
  var pageHeader = document.querySelector('.page-header');
  if (pageHeader) {
    pageHeader.style.opacity = '1';
    pageHeader.style.transform = 'none';
  }
}

// ── Pentagon Interaction (framework.html) ──
var vertexData = [
  {
    name: 'Security',
    desc: 'Can the network resist attack? Measured by hash rate and cost of 51% attack. Today: strong (subsidy provides ~$20B/year). 2036: whatever the fee market provides.',
    tensions: ['0-1','0-2','0-3','0-4']
  },
  {
    name: 'Sustainability',
    desc: 'Can the network pay for itself after the subsidy ends? Today: subsidy-dependent, fees ~15-25% of revenue. 2036: fees must be 100%. No safety net.',
    tensions: ['0-1','1-2','1-3','1-4']
  },
  {
    name: 'Accessibility',
    desc: 'Can a regular human use L1? Today: marginal, fees spike to $50+. 2036: if AI agents fill blocks, humans may be permanently priced out.',
    tensions: ['0-2','1-2','2-3','2-4']
  },
  {
    name: 'Decentralization',
    desc: 'Can anyone run a node? Today: under pressure (~600GB chain). 2036: at current growth, 1.5-2TB. Consumer hardware barely keeps up.',
    tensions: ['0-3','1-3','2-3','3-4']
  },
  {
    name: 'Sovereignty',
    desc: 'Can Bitcoin resist capture by nation states? Today: moderate (mining concentrated in US ~40%). 2036: mining follows cheap power, cheap power follows governments.',
    tensions: ['0-4','1-4','2-4','3-4']
  }
];

function showVertex(idx) {
  var v = vertexData[idx];
  var info = document.getElementById('pentagon-info');
  if (!info) return;
  info.innerHTML = '<h4>' + v.name + '</h4><p>' + v.desc + '</p>';

  // Reset all edges
  document.querySelectorAll('.pentagon-edge').forEach(function(e) {
    e.classList.remove('active');
  });

  // Highlight connected edges
  v.tensions.forEach(function(id) {
    var el = document.getElementById('edge-' + id);
    if (el) el.classList.add('active');
  });
}

// ── FAQ Accordion (faq.html) ──
document.querySelectorAll('.faq-q').forEach(function(q) {
  q.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
  });
});
