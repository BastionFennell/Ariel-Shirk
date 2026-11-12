// Tail-shaped scroll progress
const bar = document.querySelector('.tail-progress__bar');
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
};
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();

// Gentle reveal on scroll
const targets = document.querySelectorAll('.stat, .card, .job, .learning__col, .beyond__block, .neo, .contact');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}

// Boop the lemur
const head = document.querySelector('.peek__head');
if (head) {
  head.addEventListener('click', () => {
    head.classList.remove('boop');
    void head.offsetWidth;
    head.classList.add('boop');
  });
  head.addEventListener('animationend', () => head.classList.remove('boop'));
}

// Lemur facts
const facts = [
  'Ring-tailed lemur troops are led by females.',
  'A ring-tailed lemur’s tail is longer than its body.',
  'Lemurs sunbathe sitting upright with their arms out, like tiny yogis.',
  'A group of lemurs is called a conspiracy.',
  'Ring-tailed lemurs hold their tails straight up so the troop can stay together.',
  'Lemurs are found in the wild only on Madagascar.',
];
const factBtn = document.querySelector('.fact');
const factText = document.querySelector('.fact__text');
let factIndex = 0;
factBtn.addEventListener('click', () => {
  factIndex = (factIndex + 1) % facts.length;
  factText.textContent = facts[factIndex];
});

document.getElementById('year').textContent = new Date().getFullYear();
