<script lang="ts">
    import { T } from '@threlte/core'
    import { OrbitControls, Grid } from '@threlte/extras'
    import { Collider  } from '@threlte/rapier'
    import Emit from './Emit.svelte';

    export const reset = () => {
    length = 0
 
    setTimeout(() => (
    length = 8))
    }
    
    export let length: number
    export let count: number
    export let longevity: number 
    export let frequency: number 
    export let minX: number 
    export let maxX: number 
    export let minY: number 
    export let maxY: number 
    export let minZ: number 
    export let maxZ: number 

  </script>
  
  <T.PerspectiveCamera
    makeDefault
    position={[30, 30, 30]}
    fov={50}
  >
    <OrbitControls 
    enableDamping 
    autoRotate
    
    target={[4,8,4]}
    />
  </T.PerspectiveCamera>
  
  <Grid
  gridSize={[20, 20]}
  position.y={-4}
  position.x={4}
  position.z={4}
  cellColor={'#46536b'}
  sectionThickness={0}
/>

  {#each { length } as _h, x}
    {#each { length} as _v, y}
      {#each {length:12} as _p, z}  
        {#if x % 1 == 0 && y % 1 == 0}
        <T.Group position={[x, z*1.4, y]}>
          <T.Mesh>
              
            <Collider
            shape="ball"
            args={[Math.random()**1.1+.05]}
            mass={.5}
            friction={0}
         
          />
            <T.MeshBasicMaterial
              args={[
                {
                  color: '#ffffff',
                  opacity: 0.5,
                  transparent: false
                }
              ]}
            />
          </T.Mesh>
        </T.Group>
       
      {/if}
      {/each}
    {/each}
  {/each}

<Emit 
minX={minX}
maxX={maxX}
minY={minY}
maxY={maxY}
minZ={minZ}
maxZ={maxZ}
count={count}
longevity={longevity}
frequency={frequency}
/>


