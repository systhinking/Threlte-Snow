<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import { World, Debug } from '@threlte/rapier'


  export let ui
  
   let reset: (() => void) | undefined



</script>

  <Canvas>
    
    <World
    >
  
    {#if $ui.debug}
    <Debug />
    {/if}
  
      <Scene bind:reset
      
      />
    </World>
  </Canvas>
  

