<script>
  import { goto } from '$app/navigation';

  let isModalOpen = false;
  let selectedImage = '';
  let selectedTitle = '';

  let filter = 'all';

  const programs = [
    {
      src: '/images/program1.png',
      title: 'Flower Topia',
      year: 2023,
      type: 'game',
      note: 'mini-game'
    },
    {
      src: '/images/program2.png',
      title: 'To Do App',
      year: 2022,
      type: 'app',
      note: 'easy-to-use application'
    },
    {
      src: '/images/program3.png',
      title: 'Pixel Warrior',
      year: 2024,
      type: 'game',
      note: 'mini-game'
    },
    {
      src: '/images/program4.png',
      title: 'Budget Buddy',
      year: 2021,
      type: 'app',
      note: 'financial friend'
    }
  ];

  function openModal(image, title) {
    selectedImage = image;
    selectedTitle = title;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    selectedImage = '';
    selectedTitle = '';
  }

  function setFilter(type) {
    filter = type;
  }

  $: filteredPrograms = filter === 'all' ? programs : programs.filter(p => p.type === filter);
</script>


<section>
  <h2>Programs</h2>
  <p>Here you’ll find some of the applications and tools I’ve created — useful, fun, or just experimental!</p>

  
  <div class="filter-buttons">
    <button on:click={() => setFilter('all')} class={filter === 'all' ? 'selected' : ''}>All</button>
    <button on:click={() => setFilter('game')} class={filter === 'game' ? 'selected' : ''}>Game</button>
    <button on:click={() => setFilter('app')} class={filter === 'app' ? 'selected' : ''}>App</button>
  </div>

  
  <div class="gallery">
    {#each filteredPrograms as program}
      <div class="program-tile" on:click={() => openModal(program.src, program.title)}>
        <img src={program.src} alt={program.title} class="program-image" />
        <div class="program-card">
          <div class="program-title">{program.title}</div>
          <div class="program-meta"><strong>{program.year}</strong> • {program.type}</div>
          <p class="program-note">{program.note}</p>
        </div>
      </div>
    {/each}
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

  .filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.filter-buttons button {
  background: #d4edea;
  border-radius: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: #2e4a41;
  transition: all 0.25s ease;
}

.filter-buttons button:hover,
.filter-buttons button.selected {
  background-color: #a6d9cc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.program-card {
  margin-top: 1rem;
  text-align: center;
}

.program-meta {
  font-size: 0.9rem;
  color: #666f80;
  margin: 0.3rem 0;
}

.program-note {
  font-size: 0.9rem;
  color: #4a5468;
  margin-top: 0.3rem;
}
@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .filter-buttons {
    gap: 0.8rem;
  }

  .filter-buttons button {
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
  }

  .info h3 {
    font-size: 1.1rem;
  }

  .info {
    font-size: 0.85rem;
  }

  .modal-content img {
    max-width: 90vw;
    max-height: 80vh;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 2.4rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .filter-buttons {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .filter-buttons button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .card {
    padding: 0.5rem;
  }

  .info h3 {
    font-size: 1rem;
  }

  .info {
    font-size: 0.75rem;
  }

  .modal-content img {
    max-width: 85vw;
    max-height: 75vh;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 0.95rem;
  }

  .gallery {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .filter-buttons {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .filter-buttons button {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  .info h3 {
    font-size: 0.95rem;
  }

  .info {
    font-size: 0.7rem;
  }

  .modal-content img {
    max-width: 90vw;
    max-height: 70vh;
  }
}

</style>
