<script lang="ts">
  import App from '$lib/components/App.svelte'
  import { uiControl, UI } from '$lib/ui'
  import reset from '$lib/components/Scene.svelte'



  const ui = uiControl({
    
    particle_size: 0.2,
    debug: false,
    range: {value: 0, min: 0, max: 100, step: 0.1},
    count: 50,
    reset: reset
    
  })

 
</script>


<div  class="ui">
  <UI  controls = {ui}/>


<pre class="pre">
  {JSON.stringify($ui, null, 2)}
</pre>


</div>

<div class="App">
  <App {ui}/>
</div>



<style>
  :global(body) {
    margin: 0;
  }

  .App {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  }

  .ui {
    position: fixed;
    display: flex;
  }


  .pre {
    color: azure;
  }
</style>
