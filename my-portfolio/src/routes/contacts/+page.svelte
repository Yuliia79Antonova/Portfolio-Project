<script>
  import { goto } from '$app/navigation';
</script>

<main>
  <div class="home-icon" on:click={() => goto('/')}>
    <svg viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  </div>

  <h1>
    <span>P</span><span>i</span><span>r</span><span>u</span><span>n</span><span>y</span><span>a</span>
  </h1>

  <div class="screen">
    <div class="contact-box">
      <p class="label">Address</p>
      <p>yleaan2005@gmail.com</p>
      <p>0000012proverka@gmail.com</p>
      <p>C00301432@setu.ie</p>

      <p class="label">Links</p>
      <p><a href="https://facebook.com" target="_blank">Facebook</a></p>
      <p><a href="https://instagram.com" target="_blank">Instagram</a></p>
      <p><a href="https://TikTok.com" target="_blank">TikTok</a></p>
    </div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter&display=swap');
  
  main {
    
    
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1e3d2f;
    border-radius: 2rem;
    position: relative;
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
    justify-content: center;
    align-items: center;
  }

  .contact-box {
    background: #f1e0d2;
    padding: 2rem;
    border-radius: 1.2rem;
    border: none;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    font-size: 1.1rem;
    width: fit-content;
    text-align: left;
    opacity: 0;
    animation: fadeIn 1.2s ease forwards;
    animation-delay: 0.6s;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .contact-box p {
    margin: 0.5rem 0;
    color: #5e4b6e;
  }

  .label {
    font-weight: bold;
    margin-top: 1.5rem;
    color: #5e4b6e;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 5rem;
    }

    .screen {
      padding: 2rem;
    }

    .contact-box {
      padding: 1.5rem;
    }
  }
</style>
