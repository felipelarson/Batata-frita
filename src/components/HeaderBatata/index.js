import styled from 'styled-components'
import ButtonBatata from './../ButtonBatata'
import Logo from './../Logo'
import container from './../../tools/container'

export const HeaderBatata = styled.header`
  
  padding: 30px 40px;
  background-color: var(--color-black-dark);
  border-bottom: 2px solid var(--color-primary-medium);
  
  @media(max-width: 800px){
    justify-content: center;
    padding: 15px 16px;

    & > ${Logo} {
      height: 35px;
    }

    & > ${ButtonBatata} {
      background-color: var(--color-primary-medium);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container};
    @media(max-width: 800px) {
        justify-content: center;
        & > ${Logo} {
            height: 35px;
        }
        & > ${ButtonBatata} {
            background-color: var(--color-primary-medium);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
`