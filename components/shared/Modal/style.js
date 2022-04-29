import styled from "styled-components";

export const SModal = styled.div`
    background: var(--body-white);
    padding: 10px;
    border-radius: 8px;
    position: relative;
    padding-top: 25px;
    min-width: 330px;

    &>svg{
        position: absolute;
        top: 5px;
        right: 5px;
        height: 21px;
        width: 21px;
        color: var(--text-color);
        cursor: pointer;
        background: #0000001a;
        border-radius: 50%;
        padding: 2px;
    }
`

export const SModalButton = styled.button``

export const SModalBackdrop = styled.div`
    background: #00000054;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`