<script>
  import { goto } from '$app/navigation';
</script>

<section>
  <h2>Programs</h2>
  <p>Here you’ll find some of the applications and tools I’ve created — useful, fun, or just experimental!</p>

  <div class="gallery">
    <div class="program-tile" style="animation-delay: 0.1s;">
      <img src="/images/program1.png" alt="Program 1" class="program-image" />
      <div class="program-title">Flower Topia</div>
    </div>

    <div class="program-tile" style="animation-delay: 0.2s;">
      <img src="/images/program2.png" alt="Program 2" class="program-image" />
      <div class="program-title">To Do App</div>
    </div>
  </div>

  <button on:click={() => goto('/works')}>← Back to Works</button>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter&display=swap');

  section {
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
    font-size: 4.5rem;
    font-weight: 600;
    color: #2d2b4e;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
    color: #4a5468;
    max-width: 650px;
    margin-bottom: 3rem;
    text-align: center;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1100px;
    margin-bottom: 3rem;
  }

  .program-tile {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    opacity: 0;
    animation: fadeIn 1s forwards;
  }

  .program-tile:hover {
    transform: translateY(-5px);
  }

  .program-image {
    width: 100%;
    height: 160px;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  .program-title {
    font-weight: 600;
    font-size: 1.1rem;
    color: #2f3b5a;
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
    color:#4a695a;
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
