import { useState } from 'react'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {
  const [submittedValue, setSubmittedValue] = useState('')

  function handleSubmit(values) {
    setSubmittedValue({
      deporte: values.deporte,
      dni: values.dni
    })
  }

  return (
    <>
      <h2>INGRESO DEPORTISTAS</h2>
      <p>Área exclusiva de deportistas Club Golden</p>
      <hr />
      <Formulario onSubmit={handleSubmit} />
      <br />
      {submittedValue && <Card values={submittedValue} />}
    </>
  )
}
export default App
