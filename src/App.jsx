import { useState } from 'react'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {
  const [submittedValues, setSubmittedValues] = useState('')

  function handleSubmit(values) {
    setSubmittedValues({
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
      {submittedValues && <Card values={submittedValues} />}
    </>
  )
}
export default App
