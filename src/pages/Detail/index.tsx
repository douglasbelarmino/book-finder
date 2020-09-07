import React from 'react'
import { useHistory } from 'react-router-dom'
import Container from './styles'

const Detail: React.FC = () => {
  const history = useHistory()
  function navigateToHome() {
    history.push('/')
  }

  return (
    <Container>
      <button type="button" onClick={navigateToHome}>
        Voltar
      </button>

      <article>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div>
          <span>Nome do livro</span>
          <span>Descrição do livro</span>
          <span>Autores do livro</span>
          <span>Editora do livro</span>
          <span>Ano de publicação do livro</span>
          <span>Número de páginas do livro</span>
          <span>Avaliação do livro</span>
        </div>
      </article>
    </Container>
  )
}

export default Detail
