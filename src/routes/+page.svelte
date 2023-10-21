<script lang="ts">

  import { uiControl, UI } from '$lib/ui'
  import { Canvas } from '@threlte/core'
  import Scene from '$lib/components/Scene.svelte'
  import { World, Debug } from '@threlte/rapier'




  let reset: () => any;
  
  const ui = uiControl({
    
    particle_size: 0.2,
    debug: false,
    range: {value: 0, min: 0, max: 100, step: 0.1},
    count: 50,
  
    
  })

 
</script>

<button class="reset_btn" on:click={()=>reset()}>reset</button>
<div  class="ui">

  <UI  controls = {ui}/>


<pre class="pre">
  {JSON.stringify($ui, null, 2)}
</pre>

</div>


<div class="main">
  <Canvas >
    
    <World
    >
  
    {#if $ui.debug}
    <Debug />
    {/if}
  
      <Scene bind:reset
      
      />
    </World>
  </Canvas>
  
</div>

  



<style>
  :global(body) {
    margin: 0;
  }

  .main {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  }

  .reset_btn{
    
  }
  .ui {
    position: fixed;
    display: flex;
  }


  .pre {
    color: azure;
  }
</style>
