import styled from 'styled-components'
import container from './../../tools/container'
import TagBatata from './../TagBatata'
import TitleBatata from './../TitleBatata'

export const Text = styled.div`
    padding-top: 10rem;
    max-width: 45%;
    
    ${TagBatata} {
        margin-bottom: 40rem;
    }
    ${TitleBatata} {
        margin-bottom: 20rem;
    }
`;

export const BannerBatata = styled.section`
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70vh;
    height: 100vh;
`;