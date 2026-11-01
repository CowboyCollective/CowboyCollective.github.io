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
  const notice = chat.querySelector('[data-notice]');
  const shareDialog = document.querySelector('[data-share-dialog]');
  const shareInput = shareDialog.querySelector('[data-share-link]');
  const shareNotice = shareDialog.querySelector('[data-share-notice]');

  function setupScrollbar() {
    const frame = document.createElement('div');
    frame.className = 'frontier-chat__scroll-frame';
    thread.before(frame);
    frame.append(thread);
    const bar = document.createElement('div');
    bar.className = 'frontier-scroll';
    bar.innerHTML = '<button type="button" class="frontier-scroll__up" aria-label="Scroll conversation up"></button><div class="frontier-scroll__track"><div class="frontier-scroll__thumb"></div></div><button type="button" class="frontier-scroll__down" aria-label="Scroll conversation down"></button>';
    frame.append(bar);
    const [up, track, down] = bar.children;
    const thumb = track.firstElementChild;
    thread.id ||= 'frontier-conversation';
    thumb.tabIndex = 0;
    thumb.setAttribute('role', 'scrollbar');
    thumb.setAttribute('aria-label', 'Conversation scroll position');
    thumb.setAttribute('aria-controls', thread.id);
    thumb.setAttribute('aria-orientation', 'vertical');
    thumb.setAttribute('aria-valuemin', '0');
    let pending = false;
    let revealTimer = null;
    let revealReady = false;
    let lastMax = 0;
    let followBottom = true;
    let drag = null;
    let repeat;
    const clamp = (value, max) => Math.max(0, Math.min(value, max));
    function geometry() {
      const max = Math.max(0, thread.scrollHeight - thread.clientHeight);
      const height = track.getBoundingClientRect().height;
      const size = Math.min(height, Math.max(32, height * thread.clientHeight / Math.max(1, thread.scrollHeight)));
      return { max, size, travel: height - size };
    }
    function update() {
      pending = false;
      const overflowing = thread.scrollHeight > thread.clientHeight + 1;
      if (!overflowing) {
        clearTimeout(revealTimer);
        revealTimer = null;
        revealReady = false;
      } else if (!revealReady && revealTimer === null) {
        revealTimer = setTimeout(() => {
          revealTimer = null;
          revealReady = true;
          schedule();
        }, 500);
      }
      const visible = overflowing && revealReady;
      frame.classList.toggle('has-scrollbar', visible);
      bar.inert = !visible;
      bar.setAttribute('aria-hidden', String(!visible));
      const { max, size, travel } = geometry();
      if (followBottom && !drag) thread.scrollTop = max;
      lastMax = max;
      const position = clamp(thread.scrollTop, max);
      bar.classList.toggle('at-top', position <= 1);
      bar.classList.toggle('at-bottom', position >= max - 1);
      thumb.style.height = `${size}px`;
      thumb.style.transform = `translateY(${max ? position / max * travel : 0}px)`;
      thumb.setAttribute('aria-valuemax', String(Math.round(max)));
      thumb.setAttribute('aria-valuenow', String(Math.round(position)));
      up.setAttribute('aria-disabled', String(position <= 0));
      down.setAttribute('aria-disabled', String(position >= max - 1));
    }
    function schedule() {
      if (!pending) { pending = true; requestAnimationFrame(update); }
    }
    function move(amount) {
      thread.scrollTop += amount;
      followBottom = thread.scrollTop >= geometry().max - 2;
      schedule();
    }
    thread.addEventListener('scroll', () => {
      followBottom = thread.scrollTop >= lastMax - 2;
      schedule();
    }, { passive: true });
    new MutationObserver(schedule).observe(thread, { childList: true, subtree: true, characterData: true });
    const observer = new ResizeObserver(schedule);
    observer.observe(thread);
    observer.observe(frame);
    // Font loading changes text height without necessarily resizing the viewport.
    if (document.fonts) document.fonts.ready.then(schedule);
    thumb.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      event.preventDefault();
      thumb.focus({ preventScroll: true });
      const { max, travel } = geometry();
      drag = { y: event.clientY, fraction: max ? thread.scrollTop / max : 0, travel };
      thumb.setPointerCapture(event.pointerId);
    });
    thumb.addEventListener('pointermove', event => {
      if (!drag) return;
      const { max } = geometry();
      thread.scrollTop = clamp(drag.fraction + (event.clientY - drag.y) / Math.max(1, drag.travel), 1) * max;
      followBottom = thread.scrollTop >= max - 2;
      schedule();
    });
    thumb.addEventListener('lostpointercapture', () => { drag = null; });
    track.addEventListener('pointerdown', event => {
      if (event.target !== track || event.button !== 0) return;
      event.preventDefault();
      move((event.clientY < thumb.getBoundingClientRect().top ? -1 : 1) * thread.clientHeight * .9);
    });
    function stopRepeat() { clearTimeout(repeat); }
    [up, down].forEach((button, index) => {
      const step = index ? 40 : -40;
      button.addEventListener('click', event => { if (event.detail === 0) move(step); });
      button.addEventListener('pointerdown', event => {
        if (event.button !== 0) return;
        event.preventDefault();
        stopRepeat();
        button.setPointerCapture(event.pointerId);
        move(step);
        const tick = () => { move(step); repeat = setTimeout(tick, 60); };
        repeat = setTimeout(tick, 350);
      });
      ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(name => button.addEventListener(name, stopRepeat));
    });
    window.addEventListener('blur', stopRepeat);
    thumb.addEventListener('keydown', event => {
      const amounts = { ArrowUp: -40, ArrowDown: 40, PageUp: -thread.clientHeight * .9, PageDown: thread.clientHeight * .9, Home: -thread.scrollHeight, End: thread.scrollHeight };
      if (!(event.key in amounts)) return;
      event.preventDefault();
      move(amounts[event.key]);
    });
    update();
  }
  setupScrollbar();
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
  let originalSamples = [];
  let sampleIDs = new Map();
  let sampleDeck = [];
  let busy = true;
  let lastSample = null;
  let lastPrompt = '';
  // One entry per exchange: the user's prompt and the story id that answered it.
  let conversation = [];
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

  function message(speaker, text, user = false, animate = user) {
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
    if (user && animate && !reducedMotion && row.animate) {
      // Animate a visual copy in a clipped sibling layer. The actual bubble
      // keeps its final layout, so its flight cannot inflate scrollHeight.
      requestAnimationFrame(() => {
        const frame = thread.parentElement;
        const origin = prompt.getBoundingClientRect();
        const destination = row.getBoundingClientRect();
        const bounds = frame.getBoundingClientRect();
        const layer = document.createElement('div');
        layer.className = 'frontier-chat__flight';
        layer.setAttribute('aria-hidden', 'true');
        layer.inert = true;
        const copy = row.cloneNode(true);
        copy.style.cssText = `position:absolute;box-sizing:border-box;margin:0;max-width:none;width:${destination.width}px;left:${destination.left - bounds.left}px;top:${destination.top - bounds.top}px`;
        layer.append(copy);
        frame.append(layer);
        row.style.visibility = 'hidden';
        const animation = copy.animate([
          { transform: `translateY(${origin.top - destination.top}px)`, opacity: .25 },
          { transform: 'translateY(0)', opacity: 1 }
        ], { duration: 420, easing: 'cubic-bezier(.22, 1, .36, 1)' });
        const cleanup = () => { row.style.visibility = ''; layer.remove(); };
        animation.finished.then(cleanup, cleanup);
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
      sampleDeck = shuffled(samples);
      // Avoid repeating the last story across the reshuffle boundary, too.
      const end = sampleDeck.length - 1;
      if (end > 0 && sampleDeck[end] === lastSample) {
        [sampleDeck[0], sampleDeck[end]] = [sampleDeck[end], sampleDeck[0]];
      }
    }
    lastSample = sampleDeck.pop();
    return lastSample;
  }

  function shuffled(items) {
    const deck = [...items];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  // Share links are fixed-width base64url, so they need no separators:
  // ?SS then PSS for each later exchange, where SS is a story id (2 chars,
  // up to 4096 stories) and P is the follow-up prompt's index (1 char).
  // Append to followUps and the literature, never reorder, or old links break.
  const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  const storyKey = id => digits[id >> 6] + digits[id & 63];
  const storyKeyID = key => digits.indexOf(key[0]) * 64 + digits.indexOf(key[1]);

  // prompt is an index into followUps; the first exchange (-1) is standardized.
  const promptText = entry => entry.prompt < 0 ? firstPrompt : followUps[entry.prompt];

  function storyURL(turn) {
    const url = new URL(window.location.href);
    let code = storyKey(conversation[0].id);
    for (const entry of conversation.slice(1, turn + 1)) {
      code += digits[entry.prompt] + storyKey(entry.id);
    }
    url.search = code;
    url.hash = '';
    return url.href;
  }

  function smartQuotes(text) {
    return text.replace(/"([^"]*)"/g, '“$1”');
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
      }
    } catch (error) { /* Try the selection fallback when permission is denied. */ }
    const active = document.activeElement;
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    // A modal dialog makes the rest of the document inert.
    (shareDialog.open ? shareDialog : document.body).append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (active) active.focus({ preventScroll: true });
    if (!copied) throw new Error('Clipboard unavailable');
  }

  function openShare(turn) {
    const url = storyURL(turn);
    const transcript = conversation.slice(0, turn + 1).map(entry =>
      `YOU: ${promptText(entry)}\n\nCOWBAI 2.0: ${smartQuotes(originalSamples[entry.id])}`).join('\n\n');
    shareInput.value = url;
    clearTimeout(noticeTimer);
    shareNotice.textContent = '';
    shareDialog.dataset.storyId = storyKey(conversation[turn].id);
    shareDialog.querySelector('[data-share-post]').hidden = true;
    shareDialog.querySelector('[data-share-usenet]').setAttribute('aria-expanded', 'false');
    shareDialog.querySelector('[data-share-plaintext]').value =
      `Subject: A little cowboy literature from CowbAI 2.0\n\n${transcript}\n\n-- \nCowbAI 2.0 / The Cowboy Collective\n${url}`;
    shareDialog.querySelector('[data-share-linkedin]').href =
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    shareDialog.querySelector('[data-share-email]').href =
      `mailto:?subject=${encodeURIComponent('A little cowboy literature from CowbAI 2.0')}&body=${encodeURIComponent(url)}`;
    shareDialog.showModal();
  }

  let noticeTimer;
  const showShareNotice = message => {
    clearTimeout(noticeTimer);
    shareNotice.textContent = '';
    void shareNotice.offsetWidth; // restart the fade animation
    shareNotice.textContent = message;
    noticeTimer = setTimeout(() => { shareNotice.textContent = ''; }, 2000);
  };

  shareDialog.querySelector('[data-share-copy]').addEventListener('click', async () => {
    try {
      await copyText(shareInput.value);
      showShareNotice('Link copied!');
    } catch (error) {
      showShareNotice('Select the link above and copy it manually.');
      shareInput.focus();
      shareInput.select();
    }
  });
  shareInput.addEventListener('click', () => shareInput.select());
  shareDialog.querySelector('[data-share-usenet]').addEventListener('click', event => {
    const post = shareDialog.querySelector('[data-share-post]');
    post.hidden = !post.hidden;
    event.currentTarget.setAttribute('aria-expanded', String(!post.hidden));
  });
  shareDialog.querySelector('[data-share-copy-post]').addEventListener('click', async () => {
    const field = shareDialog.querySelector('[data-share-plaintext]');
    try { await copyText(field.value); showShareNotice('Plain-text post copied!'); }
    catch (error) {
      showShareNotice('Select the post above and copy it manually.');
      field.focus(); field.select();
    }
  });
  shareDialog.querySelector('[data-share-download]').addEventListener('click', () => {
    const text = shareDialog.querySelector('[data-share-plaintext]').value;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `cowbai-${shareDialog.dataset.storyId}.txt`;
    document.body.append(link);
    link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  shareDialog.addEventListener('click', event => {
    if (event.target !== shareDialog) return;
    const rect = shareDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      shareDialog.close();
    }
  });

  const icons = {
    copy: '<rect x="8" y="8" width="12" height="12" rx="1"/><path d="M16 8V4H4v12h4"/>',
    share: '<path d="M12 15V3m-4 4 4-4 4 4M5 12v8h14v-8"/>',
    up: '<path d="M7 10v11H3V10zm0 0 5-8c3 0 2 5 1 8h6a2 2 0 0 1 2 2l-2 7a2 2 0 0 1-2 2H7"/><path class="frontier-chat__thumb-divider" d="M7 9v13"/>',
    down: '<path d="M7 14V3H3v11zm0 0 5 8c3 0 2-5 1-8h6a2 2 0 0 0 2-2l-2-7a2 2 0 0 0-2-2H7"/><path class="frontier-chat__thumb-divider" d="M7 2v13"/>',
    regenerate: '<path d="M16 10l4 2 2-4M8 14l-4-2-2 4"/><path d="M6 7a7 7 0 0 1 12-1l2 6M4 12l2 6a7 7 0 0 0 12-1"/>'
  };

  function addActions(body, text) {
    const id = sampleIDs.get(text);
    const row = body.parentElement;
    row.dataset.storyId = storyKey(id);
    const actions = document.createElement('div');
    actions.className = 'frontier-chat__actions';
    actions.setAttribute('role', 'group');
    actions.setAttribute('aria-label', 'Response actions');
    const actionNotice = document.createElement('span');
    actionNotice.className = 'frontier-chat__action-notice';
    actionNotice.setAttribute('role', 'status');
    const buttons = {};
    const labels = { copy: 'Copy response', share: 'Share response', up: 'Thumbs up', down: 'Thumbs down', regenerate: 'Regenerate response' };
    Object.keys(labels).forEach(name => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'frontier-chat__action';
      button.dataset.action = name;
      button.setAttribute('aria-label', labels[name]);
      button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
      actions.append(button);
      buttons[name] = button;
    });
    let feedbackTimer;
    let feedbackButton;
    const showFeedback = (button, message) => {
      clearTimeout(feedbackTimer);
      if (feedbackButton) delete feedbackButton.dataset.feedback;
      feedbackButton = button;
      button.dataset.feedback = message;
      actionNotice.textContent = message;
      feedbackTimer = setTimeout(() => {
        delete button.dataset.feedback;
        actionNotice.textContent = '';
      }, 2000);
    };
    let rating = null;
    try { rating = localStorage.getItem(`cowbai-rating-${id}`); } catch (error) { /* Storage is optional. */ }
    const updateRating = () => {
      ['up', 'down'].forEach(value => buttons[value].setAttribute('aria-pressed', String(rating === value)));
    };
    updateRating();
    ['up', 'down'].forEach(value => buttons[value].addEventListener('click', () => {
      rating = rating === value ? null : value;
      try {
        if (rating) localStorage.setItem(`cowbai-rating-${id}`, rating);
        else localStorage.removeItem(`cowbai-rating-${id}`);
      } catch (error) { /* Keep feedback usable without storage. */ }
      updateRating();
      showFeedback(buttons[value], rating
        ? (value === 'up' ? 'Glad you liked it, partner!'
          : (Math.random() < .2 ? 'Okay asshole. I liked it' : 'Sorry to disappoint, partner.'))
        : 'Feedback removed.');
    }));
    buttons.copy.addEventListener('click', async () => {
      try { await copyText(smartQuotes(text)); showFeedback(buttons.copy, 'Copied!'); }
      catch (error) { showFeedback(buttons.copy, 'Could not copy. Select the text to copy it.'); }
    });
    buttons.share.addEventListener('click', () => openShare(Number(row.dataset.turn)));
    buttons.regenerate.disabled = busy;
    buttons.regenerate.addEventListener('click', () => generateReply(body));
    actions.append(actionNotice);
    row.append(actions);
    scrollIfNearBottom();
  }

  function setBusy(value) {
    busy = value;
    send.disabled = value;
    thread.setAttribute('aria-busy', String(value));
    chat.querySelectorAll('[data-action="regenerate"]').forEach(button => { button.disabled = value; });
  }

  function parseSharedConversation(query) {
    if (query.length % 3 !== 2) return null;
    const turns = [];
    for (let i = 0; i < query.length; i += 3) {
      const prompt = i ? digits.indexOf(query[i - 1]) : -1;
      const id = storyKeyID(query.slice(i, i + 2));
      if (id >= originalSamples.length || prompt >= followUps.length) return null;
      turns.push({ prompt, id });
    }
    return turns;
  }

  function showSharedStory() {
    const query = window.location.search.slice(1);
    if (![...query].length || ![...query].every(char => digits.includes(char))) return;
    const turns = parseSharedConversation(query);
    if (!turns) {
      notice.textContent = 'That story is not on this trail. Send a message to find another.';
      return;
    }
    thread.querySelector('[data-welcome]')?.remove();
    conversation = turns;
    turns.forEach((entry, turn) => {
      const text = originalSamples[entry.id];
      message('YOU', promptText(entry), true, turn === 0);
      const body = message('COWBAI 2.0', smartQuotes(text));
      body.parentElement.dataset.turn = turn;
      addActions(body, text);
    });
    // Shared stories count as seen in this visit's shuffled deck.
    const seen = new Set(turns.map(entry => originalSamples[entry.id]));
    lastSample = originalSamples[turns[turns.length - 1].id];
    sampleDeck = shuffled(samples.filter(sample => !seen.has(sample)));
    prompt.value = choose(followUps);
    fitPrompt();
    requestAnimationFrame(() => chat.scrollIntoView({ block: 'start' }));
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
      originalSamples = data;
      sampleIDs = new Map();
      data.forEach((text, id) => { if (!sampleIDs.has(text)) sampleIDs.set(text, id); });
      samples = [...sampleIDs.keys()];
      sampleDeck = [];
    } catch (error) {
      status.textContent = disclosure + ' The supply wagon got lost. Press send to try loading the stories again.';
    } finally {
      setBusy(false);
    }
  }

  async function generateReply(existingBody = null) {
    if (busy) return;
    if (!samples.length) { await loadSamples(); return; }
    setBusy(true);
    const welcome = thread.querySelector('[data-welcome]');
    if (welcome) welcome.remove();
    let turn;
    if (existingBody) turn = Number(existingBody.parentElement.dataset.turn);
    else {
      turn = conversation.length;
      conversation.push({ prompt: turn ? Math.max(0, followUps.indexOf(prompt.value)) : -1, id: null });
      message('YOU', prompt.value, true);
    }
    prompt.value = '';
    fitPrompt();
    const body = existingBody || message('COWBAI 2.0', '');
    body.parentElement.dataset.turn = turn;
    body.parentElement.querySelector('.frontier-chat__actions')?.remove();
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
      conversation[turn].id = sampleIDs.get(text);
      const displayText = smartQuotes(text);
      body.textContent = '';
      if (reducedMotion) body.textContent = displayText;
      else {
        const words = displayText.match(/\S+\s*|\s+/g) || [];
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
        body.textContent = displayText;
      }
      scrollIfNearBottom();
      addActions(body, text);
      const options = followUps.filter(text => text !== lastPrompt);
      lastPrompt = choose(options);
      prompt.value = lastPrompt;
      fitPrompt();
    } finally {
      setBusy(false);
    }
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    await generateReply();
  });
  loadSamples().then(() => { if (samples.length) showSharedStory(); });
})();
