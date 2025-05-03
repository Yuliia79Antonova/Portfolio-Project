<script>
    import { goto } from '$app/navigation';
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter&display=swap');
  
    main {
      font-family: 'Inter', sans-serif;
     
      min-height: 100vh;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #1e3d2f;
      border-radius: 2rem;
      position: relative;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: stretch;
  }
  
  .icon-button {
    background: #f1e0d2;
    border-radius: 1.5rem;
    padding: 2rem;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    box-shadow: 2px 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    width: 100%;
    max-width: 320px;
    height: 320px;
    text-align: center;
    opacity: 0;
    animation: fadeIn 1.2s ease forwards;
  }
  
  
  
    .icon-button:nth-child(1) { animation-delay: 0.3s; }
    .icon-button:nth-child(2) { animation-delay: 0.6s; }
    .icon-button:nth-child(3) { animation-delay: 0.9s; }
  
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
  
    .icon-svg {
      width: 110px;
      height: 110px;
      margin-bottom: 1.5rem;
      fill:#2e4b3c;
    }
  
    .icon-label {
      font-size: 1.4rem;
      font-weight: 500;
      color: #5e4b6e;
    }
  
    .home-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
      z-index: 1000;
    }
  
    
  
    .home-icon:hover svg {
      transform: scale(1.1);
    }
  
    @media (max-width: 768px) {
      h1 {
        font-size: 5rem;
      }
  
      .screen {
        flex-direction: column;
        padding: 2rem;
      }
  
      .icon-button {
        height: 300px;
      }
  
      .icon-svg {
        width: 90px;
        height: 90px;
      }
    }
    @media (max-width: 1024px) {
  .screen {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
    gap: 1.5rem;
  }

  .icon-button {
    height: auto;
    max-width: 100%;
    padding: 1.5rem;
  }

  .icon-svg {
    width: 80px;
    height: 80px;
  }

  .icon-label {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .screen {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1rem;
  }

  .icon-button {
    height: auto;
    padding: 1.2rem;
  }

  .icon-svg {
    width: 70px;
    height: 70px;
  }

  .icon-label {
    font-size: 1rem;
  }

  .home-icon {
    top: 1rem;
    right: 1rem;
  }
}

@media (max-width: 480px) {
  .icon-label {
    font-size: 0.9rem;
  }

  .icon-svg {
    width: 60px;
    height: 60px;
  }

  h1 {
    font-size: 2.2rem;
    text-align: center;
    flex-wrap: wrap;
  }

  .screen {
    gap: 0.8rem;
  }

  .icon-button {
    padding: 1rem;
  }
}

  </style>
  
  <main>
    <div class="home-icon" on:click={() => goto('/')}>
      <svg viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    </div>
  
    <h1>
      <span>P</span><span>I</span><span>R</span><span>U</span><span>N</span><span>Y</span><span>A</span>
    </h1>
  
    <div class="screen">
      <button class="icon-button" on:click={() => goto('/works/pictures')}>
        <svg class="icon-svg" viewBox="0 0 24 24">
          <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4 4 4 4-4 6 6z"/>
        </svg>
        <div class="icon-label">Pictures<br> Photos<br> Stamps<br> Baners</div>
      </button>
  
      <button class="icon-button" on:click={() => goto('/works/logos')}>
        <svg class="icon-svg" viewBox="0 0 24 24">
          <path d="M12 2L2 7h20L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 9v10h4V9H4zm6 0v10h10V9H10z"/>
        </svg>
        <div class="icon-label">Logos<br> Heroes</div>
      </button>
  
      <button class="icon-button" on:click={() => goto('/works/programs')}>
        <svg class="icon-svg" viewBox="0 0 24 24">
          <path d="M3 4h18v2H3V4zm0 4h18v2H3V8zm0 4h12v2H3v-2zm0 4h12v2H3v-2z"/>
        </svg>
        <div class="icon-label">Games<br> Apps</div>
      </button>
    </div>
  </main>
  