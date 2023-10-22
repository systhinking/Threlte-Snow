<script
  lang="ts"
  context="module"
> 

  export let particle_size: number = 0.03

  const geometry = new SphereGeometry(particle_size)
  const material = new MeshBasicMaterial()


</script>

<script lang="ts">
  import { T, useFrame } from '@threlte/core'
  import { Collider, RigidBody} from '@threlte/rapier'
  import { MeshBasicMaterial, SphereGeometry, Vector3, Color  } from 'three'
  import { linear } from 'svelte/easing';

  export let count: any
  export let rangeX: [number, number] = [-1, 1]
  export let rangeY: [number, number] = [-1, 1]
  export let rangeZ: [number, number] = [-1, 1]



  const getId = () => {
    return Math.random().toString(16).slice(2)
  }

  const randomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min
  }

  const getRandomPosition = (): Parameters<Vector3['set']> => {
    return new Vector3(
      randomNumber(rangeX[0], rangeX[1]),
      randomNumber(rangeY[0], rangeY[1]),
      randomNumber(rangeZ[0], rangeZ[1])
    ).toArray()
  }

  const generateBodies = (c: number) => {
    return Array(c)
      .fill('x')
      .map((_) => {
        return {
          id: getId(),
          position: getRandomPosition()
        }
      })
  }

  $: bodies = generateBodies(count)



  let color1 = new Color()
  let color2 = new Color()
  let color3 = new Color()
  
  const colors = [
  new Color(0x1a84b8), 
  new Color(0x1a8cb8),
  new Color(0x1a94b8),
  new Color(0x1a9cb8),
  new Color(0x1aa4b8),
  new Color(0x1a9cb8),
  new Color(0x1a94b8),
  new Color(0x1a8cb8)

];

  const gradientCycleTime = 10000;
  const currentTime = Date.now(); 
  const gradientIndex = Math.floor((currentTime % gradientCycleTime) / gradientCycleTime * (colors.length - 1));
  const t = (currentTime % gradientCycleTime) / gradientCycleTime;

  //@ts-ignore
  function smooth(t) {
    return linear(t)
  }

  const smootht = smooth(t);

  useFrame(() => {
    color1 = colors[gradientIndex]
    color2 = colors[gradientIndex + 1]
    color3.lerpColors(color1, color2, smootht);
    material.color.copy(color3);
   
  
  })

</script>


{#each bodies as body (body.id)}

<T.Group position={body.position}>
   
    <RigidBody
    gravityScale={4}
    linearDamping={10}
    lockRotations={true}
    lockTranslations={true}
    userData={body.position}>
      
    <Collider
        shape="ball"
        args={[.03]}
        mass={20}
        friction={0}
        contactForceEventThreshold={0}
        
      />
      <T.Mesh
        {geometry}
        {material}/>

    </RigidBody>

  </T.Group>
{/each}


