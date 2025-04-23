<script>
  import { goto } from '$app/navigation';

  let selectedImage = null;

  function openImage(src) {
    selectedImage = src;
  }

  function closeModal() {
    selectedImage = null;
  }
</script>

<section>
  <h2>Logos Heroes</h2>
  <p>This is a gallery of logos I have designed. Clean, bold, and full of character.</p>

  <div class="gallery">
    <img src="/images/logo1.png" alt="Logo 1" class="logo-image" style="animation-delay: 0.1s;" on:click={() => openImage('/images/logo1.png')} />
    <img src="/images/logo2.png" alt="Logo 2" class="logo-image" style="animation-delay: 0.2s;" on:click={() => openImage('/images/logo2.png')} />
    <img src="/images/logo3.png" alt="Logo 3" class="logo-image" style="animation-delay: 0.3s;" on:click={() => openImage('/images/logo3.png')} />
    <img src="/images/logo4.png" alt="Logo 4" class="logo-image" style="animation-delay: 0.4s;" on:click={() => openImage('/images/logo4.png')} />
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
    
  padding-right: 2rem; /* Добавлен отступ справа */
  box-sizing: border-box; /* Чтобы отступы учитывались в общей ширине */
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
    padding-left: 0.5rem; /* Уменьшаем отступы для мобильных */
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
</style>
