(() => {
  'use strict';
  const chat = document.querySelector('[data-frontier-chat]');
  if (!chat) return;
  const thread = chat.querySelector('[data-thread]');
  const form = chat.querySelector('form');
  const prompt = chat.querySelector('textarea');
  const send = chat.querySelector('button');
  const status = chat.querySelector('[data-status]');
  const disclosure = status.textContent;

  async function loadScrollbar() {
    if (!window.URL || !window.Blob) return;
    let objectURL;
    try {
      // Fetch GitHub's current main on each visit; raw files are served as text,
      // so use a JavaScript Blob to give the browser the correct content type.
      const response = await fetch(
        `https://raw.githubusercontent.com/dancing-about-architecture/IE-Scrollbars/main/ie-scrollbar.js?visit=${Date.now()}`,
        { cache: 'no-store' }
      );
      if (!response.ok) throw new Error(`Scrollbar download failed: ${response.status}`);
      const source = await response.text();
      // Load the manual API only: upstream's automatic mounter also replaces
      // the page scrollbar. Fail back to native if that source boundary changes.
      const boundary = source.indexOf('\n  // Automatic mounting\n');
      if (boundary < 0 || !source.slice(0, boundary).includes('global.IEScrollbar = IEScrollbar;')) {
        throw new Error('Scrollbar manual API boundary changed');
      }
      const manualSource = source.slice(0, boundary) + '\n})(window);';
      objectURL = URL.createObjectURL(new Blob([manualSource], { type: 'text/javascript' }));
      const script = document.createElement('script');
      script.src = objectURL;
      const cleanup = () => {
        URL.revokeObjectURL(objectURL);
        script.remove();
      };
      script.onerror = cleanup;
      script.onload = () => {
        cleanup();
        if (!window.IEScrollbar) return;
        let scrollbar;
        const update = () => {
          if (!scrollbar && thread.scrollHeight > thread.clientHeight + 1) {
            scrollbar = new window.IEScrollbar(thread, {
              orientation: 'vertical',
              colors: {
                face: '#f4e3d7', arrow: '#502d16',
                '3dlight': '#f4e3d7', highlight: '#f4e3d7',
                shadow: '#f4e3d7', darkshadow: '#f4e3d7', track: '#e6d3c5'
              }
            });
            scrollbar.wrapper.classList.add('frontier-chat__scroll-frame');
          }
          if (scrollbar) scrollbar.update();
        };
        new MutationObserver(update).observe(thread, { childList: true, subtree: true, characterData: true });
        if (window.ResizeObserver) new ResizeObserver(update).observe(thread);
        update();
      };
      document.head.append(script);
    } catch (error) {
      if (objectURL) URL.revokeObjectURL(objectURL);
      // The native brown scrollbar remains available if GitHub is unreachable.
      console.warn('Could not load IE-Scrollbars; using native scrolling.', error);
    }
  }
  loadScrollbar();
  const firstPrompt = 'Can you generate me some world-class cowboy literature?';
  const followUps = [
    "That's amazing! Can you write more for me?",
    'Hot diggity! Can you rustle up another one?',
    "Now that's some fine writin’! Can I have some more?",
    'Well, butter my biscuit! Tell me another story!',
    'Yeehaw! Keep that world-class cowboy literature comin’!',
    "You're a regular Shakespeare of the sagebrush! Got another one?",
    'Much obliged, partner! Could you write me another?',
    "That's finer than a new pair of boots! Can you keep going?"
  ];
  const thoughts = [
    'lassoin’...', 'saddlin’...', 'wranglin’...', 'rustlin’...', 'moseyin’...',
    'hitchin’...', 'gallopin’...', 'yodelin’...', 'prospectin’...', 'spur polishin’...',
    'tumbleweed consultin’...', 'cattle countin’...', 'campfire stokin’...',
    'trail blazin’...', 'hat tippin’...', 'boot scootin’...', 'beans simmerin’...',
    'bean eatin’...', 'biscuit butterin’...', 'coffee sippin’...', 'banjo pickin’...',
    'harmonica hummin’...', 'porch sittin’...', 'coyote serenadin’...', 'star gazin’...',
    'horseshoe shinin’...', 'saddle dustin’...', 'bandana tyin’...', 'creek wadin’...',
    'cornbread crumblin’...', 'gravy stirrin’...', 'firefly chasin’...', 'fence leanin’...',
    'prairie daydreamin’...', 'poncho swishin’...', 'hay bale loungin’...', 'sunset admirin’...',
    'spittoon spittin’...', 'gold diggin’...'
  ];
  const choose = items => items[Math.floor(Math.random() * items.length)];
  const greetings = [
    'What’s on your mind, partner?',
    'Pull up a hay bale, partner.',
    'Got a hankerin’ for a story?',
    'Where’s the trail takin’ us today?',
    'Well, look what the tumbleweed dragged in.',
    'Care for a little campfire literature?',
    'Your next tall tale starts here.',
    'Howdy, stranger. Stay a spell.',
    'What’s cookin’ in that cowboy hat?',
    'Saddle up. We’ve got words to wrangle.',
    'A penny for your prairie thoughts?',
    'The coffee’s hot and the tales are tall.',
    'Reckon it’s time for a little yarn?'
  ];
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let samples = [];
  let sampleDeck = [];
  let busy = true;
  let lastSample = null;
  let lastPrompt = '';
  prompt.value = firstPrompt;
  const greeting = chat.querySelector('[data-welcome] strong');
  if (greeting) greeting.textContent = choose(greetings);

  function fitPrompt() {
    const lineHeight = parseFloat(window.getComputedStyle(prompt).lineHeight);
    prompt.style.height = 'auto';
    prompt.style.height = `${Math.min(prompt.scrollHeight, lineHeight * 3)}px`;
  }

  fitPrompt();
  if (document.fonts) document.fonts.ready.then(fitPrompt);
  if (window.ResizeObserver) {
    let lastWidth = 0;
    new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      if (width !== lastWidth) {
        lastWidth = width;
        fitPrompt();
      }
    }).observe(prompt);
  } else {
    window.addEventListener('resize', fitPrompt);
  }

  function scrollIfNearBottom() {
    if (thread.scrollHeight - thread.scrollTop - thread.clientHeight < 140) {
      thread.scrollTop = thread.scrollHeight;
    }
  }

  function message(speaker, text, user = false) {
    const row = document.createElement('div');
    row.className = 'frontier-chat__message' + (user ? ' frontier-chat__message--user' : '');
    const label = document.createElement('div');
    label.className = 'frontier-chat__speaker';
    label.textContent = speaker;
    const body = document.createElement('div');
    body.className = 'frontier-chat__text';
    body.textContent = text;
    row.append(label, body);
    thread.append(row);
    thread.scrollTop = thread.scrollHeight;
    if (user && !reducedMotion && row.animate) {
      // Measure after both messages are inserted and the thread has scrolled.
      requestAnimationFrame(() => {
        const origin = prompt.getBoundingClientRect();
        const destination = row.getBoundingClientRect();
        row.animate([
          {
            transform: `translateY(${origin.top - destination.top}px)`,
            opacity: .25
          },
          { transform: 'translateY(0)', opacity: 1 }
        ], {
          duration: 420,
          easing: 'cubic-bezier(.22, 1, .36, 1)'
        });
      });
    }
    return body;
  }

  let thoughtDeck = [];

  function shuffleThoughtDeck() {
    thoughtDeck = thoughts.map(thought => [thought]);
    thoughtDeck.push(['rootin’...', 'tootin’...', 'shootin’...']);
    for (let i = thoughtDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [thoughtDeck[i], thoughtDeck[j]] = [thoughtDeck[j], thoughtDeck[i]];
    }
  }

  // Draw without replacement; the trio is one card and stays together.
  function thinkingSequence() {
    const count = choose([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6]);
    const sequence = [];
    while (sequence.length < count) {
      if (!thoughtDeck.length) shuffleThoughtDeck();
      // Leave the trio in the deck if it won't fit this reply's phrase budget.
      let index = thoughtDeck.findIndex(group => group.length <= count - sequence.length);
      if (index < 0) {
        if (sequence.length) break;
        // If only the trio remains, play it together before reshuffling.
        index = 0;
      }
      const [group] = thoughtDeck.splice(index, 1);
      sequence.push(...group);
    }
    return sequence;
  }

  function showThought(body, thought) {
    body.textContent = '';
    const star = document.createElement('span');
    star.className = 'frontier-chat__thinking-star';
    star.setAttribute('aria-hidden', 'true');
    body.append(star);
    if (reducedMotion) { body.append(document.createTextNode(thought)); return; }
    const action = document.createElement('span');
    action.className = 'frontier-chat__thought-action';
    action.setAttribute('aria-label', thought);
    Array.from(thought.replace(/\.+$/, '')).forEach((letter, index) => {
      const character = document.createElement('span');
      character.className = 'frontier-chat__thought-letter';
      character.textContent = letter;
      character.style.setProperty('--letter-delay', `${index * 45}ms`);
      character.setAttribute('aria-hidden', 'true');
      action.append(character);
    });
    const dots = document.createElement('span');
    dots.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.className = 'frontier-chat__thought-dot';
      dot.style.setProperty('--dot-delay', `${i * 180}ms`);
      dot.textContent = '.';
      dots.append(dot);
    }
    body.append(action, dots);
  }

  function nextSample() {
    if (!sampleDeck.length) {
      sampleDeck = [...samples];
      for (let i = sampleDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sampleDeck[i], sampleDeck[j]] = [sampleDeck[j], sampleDeck[i]];
      }
      // Avoid repeating the last story across the reshuffle boundary, too.
      const end = sampleDeck.length - 1;
      if (end > 0 && sampleDeck[end] === lastSample) {
        [sampleDeck[0], sampleDeck[end]] = [sampleDeck[end], sampleDeck[0]];
      }
    }
    lastSample = sampleDeck.pop();
    return lastSample;
  }

  async function loadSamples() {
    busy = true;
    send.disabled = true;
    status.textContent = disclosure;
    try {
      const response = await fetch(chat.dataset.samples, { cache: 'no-cache' });
      if (!response.ok) throw new Error('Could not load literature');
      const data = await response.json();
      if (!Array.isArray(data) || !data.length || !data.every(text => typeof text === 'string' && text.trim())) {
        throw new Error('Literature must be a nonempty JSON array of strings');
      }
      samples = [...new Set(data)];
      sampleDeck = [];
    } catch (error) {
      status.textContent = disclosure + ' The supply wagon got lost. Press send to try loading the stories again.';
    } finally {
      busy = false;
      send.disabled = false;
    }
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy) return;
    if (!samples.length) { await loadSamples(); return; }
    busy = true;
    send.disabled = true;
    const welcome = thread.querySelector('[data-welcome]');
    if (welcome) welcome.remove();
    message('YOU', prompt.value, true);
    prompt.value = '';
    fitPrompt();
    const body = message('COWBAI 2.0', '');
    body.classList.add('frontier-chat__thinking');
    thread.setAttribute('aria-busy', 'true');
    try {
      for (const thought of thinkingSequence()) {
        showThought(body, thought);
        scrollIfNearBottom();
        await wait(2200 + Math.random() * 600);
        if (!reducedMotion) {
          body.classList.add('frontier-chat__thinking--leaving');
          await wait(400 + Array.from(thought.replace(/\.+$/, '')).length * 22.5);
          body.classList.remove('frontier-chat__thinking--leaving');
        }
      }
      body.classList.remove('frontier-chat__thinking');
      const text = nextSample();
      body.textContent = '';
      if (reducedMotion) body.textContent = text;
      else {
        const words = text.match(/\S+\s*|\s+/g) || [];
        for (const word of words) {
          const chunk = document.createElement('span');
          chunk.textContent = word;
          body.append(chunk);
          if (chunk.animate) {
            chunk.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 100,
              easing: 'ease-out'
            });
          }
          scrollIfNearBottom();
          const pause = /[.!?][”"’']?\s*$/.test(word) ? 150 : /[,;:][”"’']?\s*$/.test(word) ? 70 : 0;
          await wait(35 + Math.random() * 25 + pause);
        }
        // Keep completed replies as plain text once the final fade finishes.
        await wait(100);
        body.textContent = text;
      }
      scrollIfNearBottom();
      const options = followUps.filter(text => text !== lastPrompt);
      lastPrompt = choose(options);
      prompt.value = lastPrompt;
      fitPrompt();
    } finally {
      thread.setAttribute('aria-busy', 'false');
      busy = false;
      send.disabled = false;
    }
  });
  loadSamples();
})();
