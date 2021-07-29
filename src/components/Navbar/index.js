import { DropdownOption } from "../Dropdown";
import { Products, Developers, Company } from '../Content';
import { Container, DropdownStyles } from "./styles";

function Navbar() {
  return (
    <DropdownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption name="Products" content={Products} />
          </li>
          <li>
            <DropdownOption
              name="Developers"
              content={Developers}
            />
          </li>
          <li>
            <DropdownOption name="Company" content={Company} />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
}

export default Navbar;
