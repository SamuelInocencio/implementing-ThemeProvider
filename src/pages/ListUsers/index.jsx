import { useNavigate } from 'react-router-dom';

import Trash from '../../assets/trash.svg';
import DefaultButton from '../../components/Button';
import MainTitle from '../../components/Title';
import TopBackground from '../../components/TopBackground';
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  TrashIcon,
} from './styles';

function ListUsers() {
  const navigate = useNavigate();

  return (
    <Container>
      <TopBackground />
      <MainTitle>Listagem de Usuarios</MainTitle>
      <ContainerUsers>
        <CardUsers>
          <AvatarUser
            src={`https://avatar.iran.liara.run/public?username=4516451654}`}
          />
          <div>
            <h3>Nome</h3>
            <p>Idade do Usuário</p>
            <p>Email do usuário</p>
          </div>
          <TrashIcon src={Trash} alt="Lixeira" />
        </CardUsers>
      </ContainerUsers>
      <DefaultButton type="button" onClick={() => navigate('/')}>
        Voltar
      </DefaultButton>
    </Container>
  );
}

export default ListUsers;
