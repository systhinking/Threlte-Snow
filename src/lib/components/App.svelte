<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import { World, Debug } from '@threlte/rapier'
	import { writable } from 'svelte/store';
	import { Button, Folder, Input, Monitor, Pane, Tab } from '@pierogis/svelte-tweakpane';
 
</script>

<Canvas>
  <World>
    <Debug />
    <Scene />
    
  </World>
</Canvas>
