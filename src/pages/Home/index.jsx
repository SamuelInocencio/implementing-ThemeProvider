import { useNavigate } from 'react-router-dom';

import { Button } from '../../Components/Button/styles';
import MaintTitle from '../../Components/Title';
import TopBackground from '../../Components/TopBackground';
import { Container, ContainerInputs, Form, Input, InputLabel } from './styles';

function Home() {

  const navigate = useNavigate();

  return (
    <Container>
      <TopBackground />

      <Form>
        <MaintTitle>Cadastrar Usuários</MaintTitle>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" />

            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuário" />
        </div>
        <Button type="button"  topic="primary">
          Cadastrar Usuário
        </Button>
      </Form>
      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
    </Container>
  );
}

export default Home;
