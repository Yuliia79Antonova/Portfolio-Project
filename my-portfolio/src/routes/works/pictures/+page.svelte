<script>
  import { goto } from '$app/navigation';

  let selectedImage = null;
  let filter = 'all';

  // About pictures
  const artworks = [
    {
      src: '/images/art1.jpg',
      title: 'It is rain in Ireland',
      year: 2021,
      size: '40x60 sм',
      medium: 'acrylic'
    },
    {
      src: '/images/art2.jpg',
      title: 'Cat',
      year: 2022,
      size: '30x40 sм',
      medium: 'acrylic'
    },
    {
      src: '/images/art3.jpg',
      title: 'Dog',
      year: 2023,
      size: '15x10 sm',
      medium: 'pencil'
    },
    {
      src: '/images/art4.jpg',
      title: 'A little house near the sea',
      year: 2020,
      size: '17x12 sm',
      medium: 'acrylic'
    },
    {
      src: '/images/art5.jpg',
      title: 'Poppies',
      year: 2023,
      size: '40x60 sм',
      medium: 'acrylic'
    },
    {
      src: '/images/art6.jpg',
      title: 'Peacock',
      year: 2023,
      size: '40x60 sм',
      medium: 'acrylic'
    },
    {
      src: '/images/art7.jpg',
      title: 'Apple',
      year: 2024,
      size: '15x12 sм',
      medium: 'pencil'
    },
    {
      src: '/images/art8.jpg',
      title: 'Inside',
      year: 2022,
      size: '352x396',
      medium: 'digital'
    },
    {
      src: '/images/art9.jpg',
      title: 'Seashell',
      year: 2022,
      size: '394x545',
      medium: 'digital'
    },
    {
      src: '/images/art10.jpg',
      title: 'Waterfall',
      year: 2022,
      size: '591x1280',
      medium: 'photo'
    },
   
    {
      src: '/images/art13.jpg',
      title: 'Circle',
      year: 2022,
      size: '591x1280',
      medium: 'photo'
    },
     ];

  // Functions
  function openImage(src) {
    selectedImage = src;
  }

  function closeModal() {
    selectedImage = null;
  }

  function setFilter(type) {
    filter = type;
  }

  $: filteredArtworks = filter === 'all'
    ? artworks
    : artworks.filter(a => a.medium === filter);
</script>

  
<section>
  <h2>Pictures Photos Stamps Baners</h2>
  <p>Here are some of my paintings and illustrations. Grab a cup of tea — it's a colorful ride.</p>

  <!-- Фильтр -->
  <div class="filter-buttons">
    <button on:click={() => setFilter('all')} class={filter === 'all'}>All</button>
    <button on:click={() => setFilter('acrylic')} class={filter === 'acrylic'}>Acrylic</button>
    <button on:click={() => setFilter('pencil')} class={filter === 'pencil'}>Pencil</button>
    <button on:click={() => setFilter('digital')} class={filter === 'digital'}>Digital</button>
    <button on:click={() => setFilter('photo')} class={filter === 'photo'}>Photo</button>
  </div>

  <!-- Gallery -->
  <div class="gallery">
    {#each filteredArtworks as art}
      <div class="card" on:click={() => openImage(art.src)}>
        <img src={art.src} alt={art.title} class="art-image" />
        <div class="info">
          <h3>{art.title}</h3>
          <p><strong>Size:</strong> {art.size}</p>
          <p><strong>Material:</strong> {art.medium}</p>
          <p><strong>Year:</strong> {art.year}</p>
        </div>
      </div>
    {/each}
  </div>

  <button on:click={() => goto('/works')}>← Back to Works</button>

  {#if selectedImage}
    <div class="modal" on:click={closeModal}>
      <div class="modal-content" on:click|stopPropagation>
        <img src={selectedImage} alt="Full view" />
        <button class="close-btn" on:click={closeModal}>×</button>
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
      font-size: 3rem;
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
  
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(30, 30, 30, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      animation: fadeIn 0.3s ease;
    }
  
    .modal-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
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
      font-size: 1.8rem;
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
    background: #f1e0d2;
    border-radius: 0.5rem;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card img.art-image {
    width: 100%;
    height: auto;
    border-radius: 0;
    box-shadow: none;
    animation: none;
  }

  .info {
    padding: 1rem 1rem;
    font-size: 0.5rem;
    color: #2c4436;
    text-align: left;
  }

  .info h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  @media (max-width: 768px) {
  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1rem;
  }

  .info {
    font-size: 0.8rem;
  }
}

@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .filter-buttons {
    gap: 0.5rem;
    padding: 0 1rem;
  }

  .filter-buttons button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .modal-content img {
    max-width: 90vw;
    max-height: 80vh;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.8rem;
  }

  .info h3 {
    font-size: 1rem;
  }

  .card {
    padding: 0.5rem;
  }

  .info {
    font-size: 0.7rem;
  }

  .filter-buttons {
    flex-direction: column;
  }

  .filter-buttons button {
    width: 100%;
    text-align: center;
  }
}
.modal-content {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.art-image {
  object-fit: contain;
}


  </style>
  