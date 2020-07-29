import styled from 'styled-components'

export const Avatar = styled.img`
  position: absolute;
  top: var(--space);
  left: var(--space);
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  border: 2rem solid var(--color-frontend);
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
`

export const Thumb = styled.img`
  width: 100%;
`

export const WrapperThumb = styled.figure`
  --space: -10rem;
  position: relative;
  border: 4rem solid var(--color-mobile);
  width: 640px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear, box-shadow 100ms linear;

  &:hover{
    --move: calc(var(--space) * -1);
    --move-2x: calc(var(--space) * -2);
    transform: translate(var(--move), var(--space));
    box-shadow: -1rem 1rem 0 var(--color-red),
                -2rem 2rem 0 var(--color-red),
                -3rem 3rem 0 var(--color-red),
                -4rem 4rem 0 var(--color-red),
                -5rem 5rem 0 var(--color-mobile),
                -6rem 6rem 0 var(--color-mobile),
                -7rem 7rem 0 var(--color-mobile),
                -8rem 8rem 0 var(--color-mobile),
                -9rem 9rem 0 var(--color-red),
                -10rem 10rem 0 var(--color-red),
                -11rem 11rem 0 var(--color-red),
                -12rem 12rem 0 var(--color-red);
    transition: transform 100ms linear, box-shadow 200ms linear;

    & > ${Avatar} {
      transform: translate(var(--move-2x), var(--move-2x));
      opacity: 1;
      transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
    }
  }
`