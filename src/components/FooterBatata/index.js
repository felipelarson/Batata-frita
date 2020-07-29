import styled from 'styled-components'
import Logo from './../Logo';

const FooterBatata = styled.footer`
  display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 20rem 0;
    border-top: 2px solid var(--color-mobile);

    & > ${Logo} {
        margin-bottom: 15rem;
    }
`

export default FooterBatata