import { FormEvent, SetStateAction, useState } from 'react'
import { Formulario } from './styles'
import { BotaoPesquisar } from './styles'
import { NovoCampo } from './styles'



type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

return (
  <Formulario  onSubmit={aoEnviarForm}>
    <NovoCampo
      placeholder="Front-end, fullstack, node, design"
       onChange={(e: { target: { value: SetStateAction<string> } }) => setTermo(e.target.value)}
       type="search"
   />
      <BotaoPesquisar type="submit">
        Pesquisar
      </BotaoPesquisar>
    </Formulario>
  )
}
export default FormVagas

