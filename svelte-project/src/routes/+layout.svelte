<script>
  import { goto } from '$app/navigation';
</script>

<style>
  main {
    font-family: sans-serif;
    background: url('1.png') no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
</style>

<main>
  <slot />
</main>
