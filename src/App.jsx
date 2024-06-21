import {Physics, RigidBody} from "@react-three/rapier";
import { Environment, PointerLockControls, useEnvironment } from '@react-three/drei'
import { Ground } from './Components/Ground/Ground.jsx'
import { Player } from './Components/Player/Player.jsx'
import {Cabrera} from "./Components/Cabrera/Cabrera.jsx";

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
            <Cabrera/>
      </Physics>
    </>
  )
}

export default App
