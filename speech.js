// ── Shared Web Speech API helper ──────────────────────────────────────────
// Include this file in any page that needs German TTS.
// Requires a <div id="voiceBar"> and <select id="voiceSel"> in the HTML.

let germanVoice = null;
let _currentBtn = null;

function loadGermanVoice() {
  return new Promise(resolve => {
    function pick() {
      const all = window.speechSynthesis.getVoices();
      if (!all.length) return;
      const de = all.filter(v => v.lang.startsWith('de'));
      if (!de.length) { resolve(null); return; }

      const preferred =
        de.find(v => /neural|enhanced|premium/i.test(v.name)) ||
        de.find(v => v.lang === 'de-DE') ||
        de[0];
      germanVoice = preferred;

      const sel = document.getElementById('voiceSel');
      if (sel) {
        sel.innerHTML = '';
        de.forEach((v, i) => {
          const opt = document.createElement('option');
          opt.value = i;
          opt.textContent = `${v.name} (${v.lang})`;
          if (v === preferred) opt.selected = true;
          sel.appendChild(opt);
        });
        sel.onchange = () => { germanVoice = de[parseInt(sel.value)]; };
      }

      const bar = document.getElementById('voiceBar');
      if (bar) bar.style.display = 'flex';
      resolve(preferred);
    }

    const v = window.speechSynthesis.getVoices();
    if (v.length) pick();
    else window.speechSynthesis.onvoiceschanged = pick;
  });
}

function _utter(text, rate = 0.85) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  u.rate = rate;
  if (germanVoice) u.voice = germanVoice;
  return u;
}

function stopSpeech() {
  window.speechSynthesis.cancel();
  if (_currentBtn) {
    _currentBtn.classList.remove('playing');
    _currentBtn.innerHTML = _playIcon() + (_currentBtn.dataset.label || ' Play');
    _currentBtn = null;
  }
}

function speakText(text, rate = 0.85) {
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(_utter(text, rate));
}

function speakList(words, btn, label = ' Play') {
  if (_currentBtn === btn) { stopSpeech(); return; }
  stopSpeech();
  _currentBtn = btn;
  btn.dataset.label = label;
  btn.classList.add('playing');
  btn.innerHTML = _stopIcon() + ' Stop';

  let i = 0;
  function next() {
    if (i >= words.length || _currentBtn !== btn) { stopSpeech(); return; }
    const u = _utter(words[i++], i <= 1 ? 1.0 : 0.82);
    u.onend = next;
    window.speechSynthesis.speak(u);
  }
  next();
}

function _playIcon() { return '<svg viewBox="0 0 10 10"><polygon points="1,0 9,5 1,10"/></svg>'; }
function _stopIcon() { return '<svg viewBox="0 0 10 10"><rect x="1" y="1" width="3.5" height="8"/><rect x="5.5" y="1" width="3.5" height="8"/></svg>'; }

function makePlayBtn(label = 'Play') {
  const b = document.createElement('button');
  b.className = 'play-btn';
  b.innerHTML = _playIcon() + ' ' + label;
  return b;
}

function makeWordBtn(word) {
  const b = document.createElement('button');
  b.className = 'word-play';
  b.title = `Hear: ${word}`;
  b.innerHTML = '<svg viewBox="0 0 10 10"><polygon points="1,0 9,5 1,10"/></svg>';
  b.onclick = () => speakText(word.split(',')[0].replace(/^(der|die|das|ein|eine)\s+/i,'').trim());
  return b;
}
