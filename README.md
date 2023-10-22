# Svelte/Threlte Flow Fields

A small project aimed at learning Threlte during the Warp2023 hackathon (<https://threlte.xyz/hackathon>).

## Objective

Use Threlte for the first time without too much pressure. Mainly interested in testing out a few things and learning a bit more by doing vs. watching.

## Plan

Simple and clean interactive gravity based flow fields, or maybe water simulator.

## Expectations

I don't expect to finish.

## Current Functionality

Physics based simulator, wanted to play with physics and I enjoy flow fields. I did also try to add in Attractors, but they were way too laggy.
Light UI on the left, with some ranges.

- "reset colliders": (*find your perfect scene*) Button randomizes the sizes of the colliders.
- "collider_size": (*because why not*) Range scales the length and width of the collider grouping, skewed to one side a little, in case you like waterfalls.
- "spawn_count": <Mark>(*The laggy one*)</Mark> Range that scales the number of spawned in particles, each being its own Rigid Body + Collider w/ a mesh. The color of the mesh does cycle awkwardly. Wanted to do more opacity tweaking.
- "spawn_frequency": (*lower is faster*) Range related to how quickly the particles are emitted, longer the range is the more time in between spawns.
- "particle_longevity": (*limits*) Range that dictates how long the particles will last.
  