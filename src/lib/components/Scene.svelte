<script lang="ts">
    import { T } from '@threlte/core'
    import { OrbitControls } from '@threlte/extras'
    import { Attractor } from '@threlte/rapier'
    import Particles from './Particles.svelte'
  import Emit from './Emit.svelte';
    let count: number = 500
    let length = 16
    export const reset = () => {
    count = 0
    setTimeout(() => (count = 50))
  }
  </script>
  
  
  <T.PerspectiveCamera
    makeDefault
    position={[50, 50, 50]}
    fov={36}
    target={[0, 0, 0]}
  >
    <OrbitControls />
  </T.PerspectiveCamera>
  
  {#each { length } as _h, x}
    {#each { length} as _v, y}
      {#each {length:8} as _p, z}  
        {#if x % 2 == 0 && y % 2 == 0}
        <T.Group position={[x, z*2, y]}>
          <T.Mesh>
            <T.BoxGeometry args={[.1,.1,.1]} />
            <T.MeshBasicMaterial
              args={[
                {
                  color: '#ffffff',
                  opacity: 0.9,
                  transparent: true
                }
              ]}
            />
          </T.Mesh>
            <Attractor
            range={Math.random()**2}
            gravityType={'linear'}
            strength={-1}
            position={[0, 0, 0]}
            />
            <T.MeshBasicMaterial
              args={[
                {
                  color: 0x00F000
                
                }
              ]}
            />
          
        </T.Group>
       
      {/if}
      {/each}
    {/each}
  {/each}
  
<Emit />

  <!-- <Particles
  {count}
  rangeX={[0, 15]}
  rangeY={[16, 17]}
  rangeZ={[0, 15]}
/> 

Math.sin(Math.abs(count - x) * 0.1) * Math.sin(Math.abs(count - y) * 0.1) * 10 +
                Math.random() * 0.1-->