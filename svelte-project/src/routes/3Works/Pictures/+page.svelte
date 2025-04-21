<script>
  import { goto } from '$app/navigation';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter&display=swap');

  main {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(to bottom, #c2e8e3, #f4f9f8);
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
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 3rem;
  }

  .art-image {
    width: 100%;
    border-radius: 1.5rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeIn 1s forwards;
  }

  .art-image:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
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
  <h2>Pictures</h2>
  <p>Here are some of my paintings and illustrations. Grab a cup of tea — it's a colorful ride.</p>

  <div class="gallery">
    <img src="/images/art1.jpg" alt="Artwork 1" class="art-image" style="animation-delay: 0.1s;" />
    <img src="/images/art2.jpg" alt="Artwork 2" class="art-image" style="animation-delay: 0.2s;" />
    <img src="/images/art3.jpg" alt="Artwork 3" class="art-image" style="animation-delay: 0.3s;" />
    <img src="/images/art4.jpg" alt="Artwork 4" class="art-image" style="animation-delay: 0.4s;" />
  </div>

  <button on:click={() => goto('/3Works')}>← Back to Works</button>
</main>
