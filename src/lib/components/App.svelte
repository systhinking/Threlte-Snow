<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import { World, Debug } from '@threlte/rapier'
  import reset from '$lib/components/Scene.svelte'

  export let ui
  




</script>

  <Canvas>
    
    <World
    >
  
    {#if $ui.debug}
    <Debug />
    {/if}
  
      <Scene 
      
      />
    </World>
  </Canvas>
  

