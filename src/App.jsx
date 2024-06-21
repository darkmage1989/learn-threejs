import {Physics} from "@react-three/rapier";
import { Environment, PointerLockControls, useEnvironment } from '@react-three/drei'
import { Ground } from './Components/Ground/Ground.jsx'
import { Player } from './Components/Player/Player.jsx'
import {Buildings} from "../public/models/buildings/Buildings.jsx";

export const App = () => {
  const envMap = useEnvironment({files: '/assets/kloppenheim.hdr'})
  return (
    <>
      <PointerLockControls />
      <Environment map={envMap} background/>
      <ambientLight intensity={1.5} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <Buildings/>
      </Physics>
    </>
  )
}

export default App
