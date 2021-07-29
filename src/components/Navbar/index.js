import { DropdownOption } from '../Dropdown';
import { Container } from './styles';

function Navbar() {
  return (
    <Container>
      <ul>
        <li>
          <DropdownOption
            name="Products"
            content={()=><h1>Produtos</h1>}/>
        </li>
        <li>
          <DropdownOption
            name="Developers"
            content={()=><h1>Desenvolvedores</h1>}/>
        </li>
        <li>
          <DropdownOption
            name="Company"
            content={()=><h1>Empresa</h1>}/>
        </li>
      </ul>
    </Container>
  )
}

export default Navbar;