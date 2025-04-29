<script>
    import { goto } from '$app/navigation';
    import { tick, onMount } from 'svelte';
    let showWho = false;
    let showCV = false;
  
    async function navigateTo(path) {
      await tick();
      goto(path);
    }
  
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        showWho = false;
        showCV = false;
      }
    }
  
    onMount(() => {
      window.addEventListener('keydown', handleKeydown);
      return () => window.removeEventListener('keydown', handleKeydown);
    });
  </script>
  
  <style>
   
  
    main {
      font-family: 'Inter', sans-serif;
    
      min-height: 100vh;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #1e3d2f;
      border-radius: 2rem;
      
    }
  
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 9rem;
      font-weight: 600;
      color: #333146;
      letter-spacing: 0.05em;
      margin: 0 0 1.5rem 0;
      display: flex;
      justify-content: center;
      gap: 0.1em;
      text-transform: uppercase;
    }
    h1 span {
      display: inline-block;
      animation: wave 2s ease-in-out infinite;
    }
  
    h1 span:nth-child(1) { animation-delay: 0.2s; }
    h1 span:nth-child(2) { animation-delay: 0.4s; }
    h1 span:nth-child(3) { animation-delay: 0.6s; }
    h1 span:nth-child(4) { animation-delay: 0.8s; }
    h1 span:nth-child(5) { animation-delay: 1.0s; }
    h1 span:nth-child(6) { animation-delay: 1.2s; }
    h1 span:nth-child(7) { animation-delay: 1.4s; }
  
    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  
    .screen {
      background: #f7fbfa;
      border-radius: 2rem;
      padding: 3rem;
      max-width: 1200px;
      width: 100%;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      display: flex;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
    }
  
    .icon-button {
      background: #f1e0d2;
      border-radius: 1.2rem;
      padding: 2rem;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 2px 12px rgba(0,0,0,0.06);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      width: 100%;
      height: 320px;
      max-width: 320px;
      text-align: center;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
      font-size: 3rem; 
      color: #333146;
    }
  
    .icon-button:nth-child(1) {
      animation-delay: 0.3s;
    }
  
    .icon-button:nth-child(2) {
      animation-delay: 0.6s;
    }
  
    .icon-button:hover {
      transform: translateY(-4px);
      box-shadow: 4px 6px 14px rgba(0, 0, 0, 0.1);
    }
  
    .icon-button:active {
      transform: scale(0.97);
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  
   
      .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(30, 61, 47, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(4px);
      animation: backdropFade 0.3s ease;
    }
  
    @keyframes backdropFade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  
    .modal-content {
      background: white;
      padding: 1rem;
      border-radius: 1.5rem;
      max-width: 600px;
      width: 90%;
      max-height: 80vh; 
      overflow-y: auto;  
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      position: relative;
      text-align: left;
      color: #2e4b3c;
      font-size: 1.1rem;
      animation: modalZoom 0.3s ease;
    }
  
    @keyframes modalZoom {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
  
    .modal-content h2 {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #1e3d2f;
      display: center;
      align-items: center;
      gap: 1rem;
    }
  
   
  
    .close-button {
      position: absolute;
      top: 1rem;
      right: 1.2rem;
      background: none;
      border: none;
      font-size: 1.8rem;
      cursor: pointer;
      color: #78025e;
    }
  
    .close-button:hover {
      color: #333;
    }
  
     
    @media (max-width: 768px) {
      h1 { font-size: 5rem; }
      .screen {
        padding: 2rem;
      }
  
      .icon-button {
        height: 280px;
      }
  
      }
  </style>
  
  <main>
    <div class="home-icon" on:click={() => goto('/')}>
      
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    
    </div>
  
    <h1>
      <span>P</span><span>i</span><span>r</span><span>u</span><span>n</span><span>y</span><span>a</span>
    </h1>
  
    <div class="screen">
      <button class="icon-button" on:click={() => showWho = true}>
        
          <text x="25" y="55" font-size="20" ></text>
          <text x="55" y="85" font-size="20" ></text>
        
        <div class="icon-label">Who am I</div>
      </button>
  
      <button class="icon-button" on:click={() => showCV = true}>
        
          <rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="#4a695a" stroke-width="4"/>
          <line x1="30" y1="35" x2="70" y2="35" stroke="#4a695a" stroke-width="3" />
          <line x1="30" y1="50" x2="70" y2="50" stroke="#4a695a" stroke-width="2.5" />
          <line x1="30" y1="65" x2="60" y2="65" stroke="#4a695a" stroke-width="2.5" />
        
        <div class="icon-label">CV</div>
      </button>
    </div>
  
    {#if showWho}
      <div class="modal-backdrop" role="dialog" aria-modal="true" on:click={() => showWho = false}>
        <div class="modal-content" tabindex="0" on:click|stopPropagation>
          <button class="close-button" aria-label="Close" on:click={() => showWho = false}>&times;</button>
          <h2>
            
              <text x="15" y="45" font-size="60" ></text>
              <text x="45" y="75" font-size="60" ></text>
          
            Who am I
          </h2>
          <p>
            Hello! My name is Yuliia — a passionate painter, designer, and programmer.<br>
            I love combining visual creativity with digital technology to express ideas and solve problems.<br>
            I've been drawing ever since I realized a pencil could do more than just help you cheat on a test.<br>
  No fancy art schools — just me, my eyes, and a pair of suspiciously observant eyebrows.<br>
  Everything I’ve learned comes from the world around me: the way light hugs a teacup,<br>
  the drama in a coat’s wrinkle, or how trees whisper with the wind. Yes, I notice these things.<br>
  
  I've always been surrounded by talented, wildly creative people.<br>
  They made art, and I thought, “Well, guess I’m heading that way too.”<br>
  So I did. My own way. Sometimes sideways. Sometimes in leaps.<br>
  
  There’s this strange gravitational pull I feel — toward beauty.<br>
  Not the obvious kind. The kind that glimmers quietly,<br>
  that you almost miss… but it makes you go “huh.” And then “whoa.”<br>
  
  I’m deeply curious about all things beautiful.<br>
  And even more curious about the things that are weird and beautiful.<br>
  So if you ever catch me staring lovingly at a rusty fence —<br>
  don’t worry. It’s just the texture.
          </p>
        </div>
      </div>
    {/if}
  
    {#if showCV}
      <div class="modal-backdrop" role="dialog" aria-modal="true" on:click={() => showCV = false}>
        <div class="modal-content" tabindex="0" on:click|stopPropagation>
          <button class="close-button" aria-label="Close" on:click={() => showCV = false}>&times;</button>
          <h2>
            
              <rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="#4a695a" stroke-width="4"/>
              <line x1="30" y1="35" x2="70" y2="35" stroke="#4a695a" stroke-width="3" />
              <line x1="30" y1="50" x2="70" y2="50" stroke="#4a695a" stroke-width="2.5" />
              <line x1="30" y1="65" x2="60" y2="65" stroke="#4a695a" stroke-width="2.5" />
            
            CV
          </h2>
          <p>
            - 🎓 Degree in Fine Arts and Computer Science<br>
            - 💼 5+ years experience in UI/UX design<br>
            - 🖌️ Exhibited works in local galleries<br>
            - 💻 Skilled in JavaScript, Svelte, and Web Design
          </p>
        </div>
      </div>
    {/if}
  </main>
  