import styled from "styled-components";


export const SSuggestionHome = styled.div`

`

export const SSuggestionHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  svg{
    width: 14px;
    cursor: pointer;
    margin-right: 15px;
  }
`

export const SUserLists = styled.div`
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    overflow: hidden;
`

export const SUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 11px;
    border-bottom: 1px solid lightgrey;

    svg{
      color: var(--color-gray);
      cursor: pointer;
    }
`