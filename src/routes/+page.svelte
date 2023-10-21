<script lang="ts">

  import { uiControl, UI } from '$lib/ui'
  import { Canvas } from '@threlte/core'
  import Scene from '$lib/components/Scene.svelte'
  import { World, Debug } from '@threlte/rapier'
  import Particles from '$lib/components/Particles.svelte';
  import { onMount } from 'svelte';

  let reset: () => any;



 
  
  const ui = uiControl({
    debug: false,
    collider_size: {value: 8, min:4, max: 16, step: 1},
    particle_size: {value: 0.2, min:0.05, max:.8, step:.05},
    spawn_count: {value: 15, min: 0, max: 50, step: 1},
    spawn_frequency: {value: 100, min:10, max: 200, step:10},
	  particle_longevity: {value: 6000, min: 1000, max: 20000, step: 1000}
    
  })

    
  onMount(() => {
		console.log($ui.spawn_count.value);
	});

  function handleTest() {
    console.log($ui.spawn_count.value);
  }


</script>


<div  class="ui">
  <!-- <button class="reset_btn" on:click={()=>reset()}>reset</button> -->
  <button class="reset_btn" on:click={handleTest}>debug</button>
  <UI controls = {ui}/>
</div>





<div class="main">
  <Canvas >
    <World
    >
    {#if $ui.debug}
    <Debug />
    {/if}
      <Scene 
      count={$ui.spawn_count}
      length={$ui.collider_size}
      longevity={$ui.particle_longevity}
      frequency={$ui.spawn_frequency}
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




  .reset_btn {
    display: flex;
    position: fixed;
  }
  


</style>
