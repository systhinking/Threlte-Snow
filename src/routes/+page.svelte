<script lang="ts">

  import { uiControl, UI } from '$lib/ui'
  import { Canvas } from '@threlte/core'
  import Scene from '$lib/components/Scene.svelte'
  import { World, Debug } from '@threlte/rapier'

  let reset: () => any;

  const ui = uiControl({
    debug: false,
    collider_size: {value: 8, min:4, max: 16, step: 1},
    spawn_count: {value: 20, min: 0, max: 50, step: 1},
    spawn_frequency: {value: 100, min:10, max: 200, step:10},
	  particle_longevity: {value: 4000, min: 1000, max: 7000, step: 1000}
    
  })
 // particle_size: {value: 0.2, min:0.05, max:.8, step:.05},
</script>


<div  class="ui">
  <button class="reset_btn" on:click={()=>reset()}>reset</button>

</div>

<pre class="pre">
  {JSON.stringify($ui,null,2)}
</pre>



<div class="main">
  <UI controls = {ui}/>
  <Canvas >
    <World>
    {#if $ui.debug}
    <Debug />
    {/if}
      <Scene 
      count={$ui.spawn_count.value}
      length={$ui.collider_size.value}
      longevity={$ui.particle_longevity.value}
      frequency={$ui.spawn_frequency.value}
      bind:reset
      />
    </World>
  </Canvas>
</div>

  

<style>
  :global(body) {
    margin: 0;
    background: rgb(13, 19, 32);
  }

  .main {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  }


  .pre {
    position: fixed;
    display: flex;
    padding-top: 200px;
    color: azure;
  }


  .reset_btn {
    display: flex;
    position: fixed;
   
  }
  


</style>
