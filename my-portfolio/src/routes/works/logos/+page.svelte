<script>
  import { goto } from '$app/navigation';

  let selectedImage = null;
  let filter = 'all';

  const logos = [
    {
      src: '/images/logo1.png',
      title: 'TwoU',
      year: 2022,
      note: 'Logo for company',
      type: 'label'
    },
    {
      src: '/images/logo2.png',
      title: 'Fluffy Head',
      year: 2023,
      note: 'Logo for salon',
      type: 'logo'
    },
    {
      src: '/images/logo3.png',
      title: 'Microbian',
      year: 2021,
      note: 'Hero',
      type: 'game'
    },
    {
      src: '/images/logo4.png',
      title: 'SuperMariia',
      year: 2024,
      note: 'Hero',
      type: 'cartoon'
    }
  ];

  function openImage(src) {
    selectedImage = src;
  }

  function closeModal() {
    selectedImage = null;
  }

  function setFilter(type) {
    filter = type;
  }

  $: filteredLogos = filter === 'all' ? logos : logos.filter(l => l.type === filter);
</script>

  
  <section>
    <h2>Logos Heroes</h2>
<p>This is a gallery of logos I have designed. Clean, bold, and full of character.</p>

<!-- Фильтр -->
<div class="filter-buttons">
  <button on:click={() => setFilter('all')} class={filter === 'all' ? 'selected' : ''}>All</button>
  <button on:click={() => setFilter('label')} class={filter === 'label' ? 'selected' : ''}>Label</button>
  <button on:click={() => setFilter('game')} class={filter === 'game' ? 'selected' : ''}>Game</button>
  <button on:click={() => setFilter('logo')} class={filter === 'logo' ? 'selected' : ''}>Logo</button>
  <button on:click={() => setFilter('cartoon')} class={filter === 'cartoon' ? 'selected' : ''}>Cartoon</button>
</div>

<div class="gallery">
  {#each filteredLogos as logo}
    <div class="card" on:click={() => openImage(logo.src)}>
      <img src={logo.src} alt={logo.title} class="logo-image" />
      <div class="info">
        <h3>{logo.title}</h3>
        <p><strong>Год:</strong> {logo.year}</p>
        <p>{logo.note}</p>
      </div>
    </div>
  {/each}
</div>

<button on:click={() => goto('/works')}>← Back to Works</button>

{#if selectedImage}
  <div class="modal" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
      <img src={selectedImage} alt="Full view" />
      <button class="close-btn" on:click={closeModal}>X</button>
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
      
    padding-right: 2rem; 
    box-sizing: border-box; 
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
  
    @media (max-width: 768px) {
    .gallery {
      padding-left: 0.5rem; 
      padding-right: 0.5rem;
    }
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
  
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(30, 30, 30, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      animation: fadeIn 0.3s ease;
    }
  
    .modal-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      border-radius: 1rem;
      overflow: hidden;
    }
  
    .modal-content img {
      max-width: 100vw;
      max-height: 90vh;
      width: auto;
      height: auto;
      border-radius: 1rem;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      object-fit: contain;
    }
  
    .close-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.8rem;
      background: transparent;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    }

    .filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.filter-buttons button {
  background: #dcefe9;
  border-radius: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: #2d4a3d;
  transition: all 0.25s ease;
}

.filter-buttons button:hover,
.filter-buttons button.selected {
  background-color: #b2d9c5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card {
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  transform: translateY(-5px);
}

.card .logo-image {
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: contain;
  background: white;
  padding: 1rem;
  border-radius: 0;
  animation: fadeIn 1s forwards;
  opacity: 0;
  box-shadow: none;
}

.info {
  padding: 1rem;
  font-size: 0.95rem;
  color: #2c4436;
  text-align: center;
}

.info h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
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
  