<script lang="ts">
	import { T, useFrame } from '@threlte/core'
	import type { Euler, Vector3 } from 'three'
	import Particles from './Particles.svelte'

	export let count: any
	 
	
	const getId = () => {
		return Math.random().toString(16).slice(2)
	}

	const getRandomPosition = (): Parameters<Vector3['set']> => {
		return [Math.random() * 1, - Math.random() * 1 + 10, 0.5 - Math.random() * 1]
	}

	const getRandomRotation = (): Parameters<Euler['set']> => {
		return [Math.random() * 10, Math.random() * 10, Math.random() * 10]
	}

	type Body = {
		id: string
		mounted: number
		position: Parameters<Vector3['set']>
		rotation: Parameters<Euler['set']>
	}

	let bodies: Body[] = []

	let lastBody: number = 0
	export let frequency:number
	export let longevity:number

	useFrame((state, delta) => {
		if (lastBody + frequency < Date.now()) {
			const body: Body = {
				id: getId(),
				mounted: Date.now(),
				position: getRandomPosition(),
				rotation: getRandomRotation()
			}
			bodies.unshift(body)
			lastBody = Date.now()
			bodies = bodies
		}
		const deleteIds: string[] = []
		bodies.forEach((body) => {
			if (body.mounted + longevity < Date.now()) {
				deleteIds.push(body.id)
			}
		})

		if (deleteIds.length) {
			deleteIds.forEach((id) => {
				const index = bodies.findIndex((body) => body.id === id)
				if (index !== -1) bodies.splice(index, 1)
			})
			bodies = bodies
		}
	
  })
    

</script>

{#each bodies as body (body.id)}
	
    <T.Group>


        <Particles 
		
		count={count}
        rangeX={[2, 5]}
        rangeY={[16, 19]}
        rangeZ={[2, 5]}
		
      />

    </T.Group>

{/each}
