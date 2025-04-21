<script>
  import { goto } from '$app/navigation';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter&display=swap');

  main {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(to bottom, #d8f0e3, #f7fdfb);
    min-height: 100vh;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1e3d2f;
    border-radius: 2rem;
  }

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 5rem;
    font-weight: 600;
    color: #333146;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
    color: #3a4a42;
    max-width: 600px;
    margin-bottom: 3rem;
    text-align: center;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 3rem;
  }

  .logo-image {
    width: 100%;
    max-height: 180px;
    object-fit: contain;
    border-radius: 1rem;
    background: white;
    padding: 1rem;
    box-shadow: 0 6px 18px rgba(0,0,0,0.05);
    opacity: 0;
    animation: fadeIn 1s forwards;
    transition: transform 0.3s ease;
  }

  .logo-image:hover {
    transform: scale(1.05);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  button {
    background: #f9eee5;
    border-radius: 1.2rem;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    box-shadow: 2px 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    color: #4a695a;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 4px 6px 14px rgba(0, 0, 0, 0.1);
    background-color: #f5e4d5;
  }

  button:active {
    transform: scale(0.97);
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
</style>

<main>
  <h2>Logos</h2>
  <p>This is a gallery of logos I have designed. Clean, bold, and full of character.</p>

  <div class="gallery">
    <img src="/images/logo1.png" alt="Logo 1" class="logo-image" style="animation-delay: 0.1s;" />
    <img src="/images/logo2.png" alt="Logo 2" class="logo-image" style="animation-delay: 0.2s;" />
    <img src="/images/logo3.png" alt="Logo 3" class="logo-image" style="animation-delay: 0.3s;" />
    <img src="/images/logo4.png" alt="Logo 4" class="logo-image" style="animation-delay: 0.4s;" />
  </div>

  <button on:click={() => goto('/3Works')}>← Back to Works</button>
</main>
