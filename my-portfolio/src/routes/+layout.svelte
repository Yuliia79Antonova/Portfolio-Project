<script>
  import { goto } from '$app/navigation';
  export let title = ''; 
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter&display=swap');
  
  main {
    font-family: 'Inter', sans-serif;
    background: url('/1.png') no-repeat center center fixed; 
    background-size: cover;
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
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

  .home-icon svg {
    width: 32px;
    height: 32px;
    fill: #5b1301;
    transition: transform 0.2s ease;
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
</style>

<main>
  <div class="home-icon" on:click={() => goto('/')}>
    <svg viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  </div>

  {#if title}
    <h1>
      {#each title.split('') as letter}
        <span>{letter}</span>
      {/each}
    </h1>
  {/if}

  <slot></slot> 
</main>
