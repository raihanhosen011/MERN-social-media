import styled from "styled-components";
import { SProfile } from "../Sidebar/style";

export const SCreatePost = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  background: var(--color-white);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  position: relative;

  input{
    flex: auto;
    background: transparent;
    padding-left: 1rem;
    color: var(--color-dark);
    margin-right: 1rem;  
  }
`

export const SPostModal = styled.form`
  ${SProfile}{
    padding: 8px;
    padding-left: 0;
    width: fit-content;

    select{
      background: var(--color-light);
      padding: 2px 3px;
      border-radius: 5px;
      cursor: pointer;
      color: hsl(207deg 7% 42%);

      option{
        cursor: pointer;
      }
    }
  }
  textarea{
    width: 100%;
    min-height: 90px;
    font-size: var(--normal-font-size);
    min-width: 420px;
    padding: 5px 9px;
    background: var(--color-light);
    border-radius: 4px;
    margin-bottom: 10px;

    &::placeholder{
      font-size: var(--h3-font-size);
    }
  }
`

export const SPostOptionsBar = styled.div``


export const SComposeOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  
  .compose-option {
    display: flex;
    width: fit-content;
    padding: 5px 12px;
    background: var(--color-light);
    border-radius: 24px;
    cursor: pointer;
    gap: 5px;

    span{
      font-weight: 500;
    }
  }
`

export const SMedia = styled.div`
  position: relative;
  overflow: hidden;

  input{
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }
`

export const SActivity = styled.div``

export const SEmojiPicker = styled.div`
    background: var(--color-light);
    padding: 5px 7px;
    border-radius: 8px;
    position: absolute;
    top: 167px;
    z-index: 100;

    svg{
        cursor: pointer;
        display: flex;
        margin-left: auto;
        margin-bottom: 4px;
    }
`

export const SComposeSubmit = styled.button`
    padding: 4px 14px;
    border-radius: 17px;
    cursor: pointer;
    color: white;
    background: var(--color-primary);
    font-size: var(--normal-font-size);

    &:disabled{
      opacity: 0.8;
      background: var(--color-gray);
      cursor: no-drop;  
    }
`

export const SSingleMedia = styled.div`
  width: 75px;
  height: 75px;
  background: var(--color-light);
  border-radius: 6px;
  position: relative;

  svg{
    position: absolute;
    background: #0e0e0e85;
    min-width: 19px;
    max-width: 19px;
    color: white;
    height: 19px;
    border-radius: 50%;
    padding: 2px;
    cursor: pointer;
    top: -5px;
    right: -5px;
  }

  img, video{
    height: 75px;
    width: 75px;
    object-fit: contain;
  }
`

export const SMediaShow = styled.div`
  display: flex;
  align-itmes: center;
  gap: 10px;
  margin-bottom: var(--mb-1);
`
