<script>
  import { Router, Route, navigate } from 'svelte-navigator';

  import Home from './routes/1Home/+page.svelte';
  import About from './routes/2About/+page.svelte';
  import Works from './routes/3Works/Works.svelte';
  import Contacts from './routes/4Contacts/Contacts.svelte';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/works" component={Works} />
  <Route path="/contacts" component={Contacts} />
</Router>

<style>
  main {
    font-family: sans-serif;
    background: linear-gradient(to bottom, #ccffcc, #ffffff);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    border: 1px solid #333;
    width: 800px;
    padding: 2rem;
    background-color: #f8fff8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    flex: 1;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #245b1d;
    text-shadow: 4px 4px 0 #a0cc89;
  }

  .nav-button {
    background-color: #a8db8e;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
    border: none;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
    cursor: pointer;
    width: 80%;
  }

  .right {
    flex: 1;
    font-size: 1rem;
    line-height: 1.6;
    font-style: italic;
    padding-left: 2rem;
    position: relative;
  }

  .brush {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
  }
</style>

<main>
  <div class="container">
    <div class="left">
      <h1>Pirunya</h1>
      <button class="nav-button" on:click={() => navigate('/about')}>About</button>
      <button class="nav-button" on:click={() => navigate('/works')}>Works</button>
      <button class="nav-button" on:click={() => navigate('/contacts')}>Contacts</button>
    </div>

    <div class="right">
      <p>
        Welcome to my website.<br>
        Here you can find my works as a painter,<br>
        designer and programmer.<br>
        You also find information about me.
      </p>
      <img class="brush" src="/brush.png" alt="Brush" />
    </div>
  </div>
</main>
