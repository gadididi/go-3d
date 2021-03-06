/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/man.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    console.log(actions)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.Bottoms.geometry}
          material={materials.Bottommat}
          skeleton={nodes.Bottoms.skeleton}
        />
        <skinnedMesh geometry={nodes.Hair.geometry} material={materials.Hairmat} skeleton={nodes.Hair.skeleton} />
        <skinnedMesh geometry={nodes.Shoes.geometry} material={materials.Shoesmat} skeleton={nodes.Shoes.skeleton} />
        <skinnedMesh geometry={nodes.Tops.geometry} material={materials.Topmat} skeleton={nodes.Tops.skeleton} />
        <skinnedMesh
          name="Body"
          geometry={nodes.Body.geometry}
          material={nodes.Body.material}
          skeleton={nodes.Body.skeleton}
          morphTargetDictionary={nodes.Body.morphTargetDictionary}
          morphTargetInfluences={nodes.Body.morphTargetInfluences}
        />
        <skinnedMesh
          name="Eyelashes"
          geometry={nodes.Eyelashes.geometry}
          material={nodes.Eyelashes.material}
          skeleton={nodes.Eyelashes.skeleton}
          morphTargetDictionary={nodes.Eyelashes.morphTargetDictionary}
          morphTargetInfluences={nodes.Eyelashes.morphTargetInfluences}
        />
        <skinnedMesh
          name="Eyes"
          geometry={nodes.Eyes.geometry}
          material={nodes.Eyes.material}
          skeleton={nodes.Eyes.skeleton}
          morphTargetDictionary={nodes.Eyes.morphTargetDictionary}
          morphTargetInfluences={nodes.Eyes.morphTargetInfluences}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/man.glb')
