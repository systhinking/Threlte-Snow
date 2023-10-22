<script lang="ts">

  import { uiControl, UI } from '$lib/ui'
  import { Canvas } from '@threlte/core'
  import Scene from '$lib/components/Scene.svelte'
  import { World, Debug } from '@threlte/rapier'

  let reset: () => any;

  const ui = uiControl({
    display_colliders: false,
    collider_size: {value: 8, min:4, max: 12, step: 1},
    spawn_count: {value: 20, min: 0, max: 50, step: 1},
    spawn_frequency: {value: 200, min:1, max: 500, step:1},
	  particle_longevity: {value: 4000, min: 1000, max: 6000, step: 1000},
    spawn_range_minX: {value: 2, min: 1, max:10, step:1},
    spawn_range_maxX: {value: 5, min: 1, max:10, step:1},
    spawn_range_minY: {value: 16, min: 14, max:18, step:1},
    spawn_range_maxY: {value: 19, min: 10, max:25, step:1},
    spawn_range_minZ: {value: 2, min: 1, max:10, step:1},
    spawn_range_maxZ: {value: 5, min: 1, max:10, step:1}
  })


</script>


<div  class="ui">
  <button class="reset_btn" on:click={()=>reset()}>reset colliders</button>
  <UI controls = {ui}/>
</div>

<pre class="pre">
  {JSON.stringify($ui,null,2)}
</pre>


<div class="main">
 
  <Canvas >
    <World>
    {#if $ui.display_colliders}
    <Debug />
    {/if}
      <Scene 
      count={$ui.spawn_count.value}
      length={$ui.collider_size.value}
      longevity={$ui.particle_longevity.value}
      frequency={$ui.spawn_frequency.value}
      minX={$ui.spawn_range_minX.value}
      maxX={$ui.spawn_range_maxX.value}
      minY={$ui.spawn_range_minY.value}
      maxY={$ui.spawn_range_maxY.value}
      minZ={$ui.spawn_range_minZ.value}
      maxZ={$ui.spawn_range_maxZ.value}
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
    top:2rem;
    left: 100rem;
    color: azure;
  }


  .reset_btn {
    top: 3rem;
    left: 5rem;
    display: flex;
    position: fixed;
   
  }
  


</style>
