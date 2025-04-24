<script>
  import { goto } from '$app/navigation';
  let isModalOpen = false;
  let selectedImage = '';
  let selectedTitle = '';

  const openModal = (image, title) => {
    selectedImage = image;
    selectedTitle = title;
    isModalOpen = true;
  };

  const closeModal = () => {
    isModalOpen = false;
    selectedImage = '';
    selectedTitle = '';
  };
</script>

<section>
  <h2>Programs</h2>
  <p>Here you’ll find some of the applications and tools I’ve created — useful, fun, or just experimental!</p>

  <div class="gallery">
    <div class="program-tile" style="animation-delay: 0.1s;" on:click={() => openModal('/images/program1.png', 'Flower Topia')}>
      <img src="/images/program1.png" alt="Program 1" class="program-image" />
      <div class="program-title">Flower Topia</div>
    </div>

    <div class="program-tile" style="animation-delay: 0.2s;" on:click={() => openModal('/images/program2.png', 'To Do App')}>
      <img src="/images/program2.png" alt="Program 2" class="program-image" />
      <div class="program-title">To Do App</div>
    </div>
  </div>

  <button on:click={() => goto('/works')}>← Back to Works</button>

  {#if isModalOpen}
    <div class="modal">
      <div class="modal-content">
        <span class="close-btn" on:click={closeModal}>×</span>
        <img src={selectedImage} alt={selectedTitle} class="modal-image" />
        <div class="modal-title">{selectedTitle}</div>
      </div>
    </div>
  {/if}
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
    cursor: pointer;
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

  /* Modal Styles */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    overflow: hidden;
  }

  .modal-image {
    width: 100%;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2f3b5a;
    text-align: center;
    margin-top: 1rem;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: #333146;
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
