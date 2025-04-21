<script>
  import { goto } from '$app/navigation';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter&display=swap');
  

  main {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(to bottom, #c2e8e3, #f4f9f8);
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

  .text {
    text-align: center;
    font-style: italic;
    font-size: 2rem;
    color: #505260;
    margin-bottom: 3rem;
  }

  .screen {
    background: #f7fbfa;
    border-radius: 2rem;
    padding: 3rem;
    max-width: 1200px;
    width: 100%;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    align-items: stretch;
  }

  .icon-button {
    background: #f9eee5;
    border-radius: 1.2rem;
    padding: 2rem;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    box-shadow: 2px 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    height: 320px; /* вертикальный прямоугольник */
    text-align: center;
    animation: fadeIn 1s ease forwards;
    opacity: 0;
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
    to {
      opacity: 1;
    }
  }

  .icon-svg {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;
    fill: #6c6884;
  }

  .icon-label {
    font-size: 1.3rem;
    font-weight: 500;
    color: #5e4b6e;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 5rem;
    }

    .screen {
      padding: 2rem;
      grid-template-columns: 1fr;
    }

    .icon-button {
      height: 280px;
    }

    .icon-svg {
      width: 80px;
      height: 80px;
    }
  }
</style>

<main>
  <h1>
    <span>P</span>
    <span>i</span>
    <span>r</span>
    <span>u</span>
    <span>n</span>
    <span>y</span>
    <span>a</span>
  </h1>

  <div class="text">
    My work reflects harmony, thoughtful aesthetics,<br>
    and the connection between nature, design and code.
  </div>

  <div class="screen">
    <button class="icon-button" on:click={() => goto('/2About')}>
      <svg class="icon-svg" viewBox="0 0 100 100" style="margin-top: 8px;">
        <circle cx="50" cy="28" r="10" />
        <path d="M35,70 Q50,45 65,70" fill="none" stroke="#4a695a" stroke-width="4" />
        <path d="M45,52 
                 C42,48 38,48 38,52 
                 C38,56 50,62 50,62 
                 C50,62 62,56 62,52 
                 C62,48 58,48 55,52" 
              fill="none" stroke="#4a695a" stroke-width="2" />
      </svg>
            <div class="icon-label" style="margin-top: -8px;" >About</div>
    </button>

    <button class="icon-button" on:click={() => goto('/3Works')}>
      <svg class="icon-svg" viewBox="0 0 100 100">
        <!-- Холст -->
        <rect x="20" y="25" width="60" height="50" rx="6" fill="none" stroke="#4a695a" stroke-width="3" />
        <!-- Кисть -->
        <path d="M75,75 Q80,70 78,65 Q76,60 70,65 Q72,70 75,75 Z" fill="#4a695a" />
        <line x1="72" y1="66" x2="65" y2="58" stroke="#4a695a" stroke-width="3" />
      </svg>
      <div class="icon-label">Works</div>
    </button>

    <button class="icon-button" on:click={() => goto('/4Contacts')}>
      <svg class="icon-svg" viewBox="0 0 100 100">
        <!-- Лист -->
        <rect x="20" y="25" width="50" height="50" rx="4" fill="none" stroke="#4a695a" stroke-width="3" />
        <!-- Линии текста -->
        <line x1="25" y1="35" x2="60" y2="35" stroke="#4a695a" stroke-width="2" />
        <line x1="25" y1="45" x2="60" y2="45" stroke="#4a695a" stroke-width="2" />
        <!-- Карандаш -->
        <polygon points="70,70 85,85 80,90 65,75" fill="#4a695a" />
      </svg>
      <div class="icon-label">Contacts</div>
    </button>
  </div>
</main>
