import styled from "styled-components";

export const HeaderContainer = styled.header `
    position: absolute;
    top: 0;
    width: 100dvw;
    height: 70px;
    border-bottom: 1px solid var(--bg-secondary);
    z-index: 5;

    main {
        display: flex;
        align-items: center;
        width: 70dvw;
        height: 100%;
        margin: 0 auto;
        gap: 50px;

        a {
            display: flex;
            align-items: center;
            gap: 15px;
            user-select: none;

            img {
                width: 45px;
            }

            h2 {
                color: var(--text-primary);
                font-style: italic;
            }
        }
    }
`

export const Searchbar = styled.div `
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
    height: 40px;
    border-radius: 10px;
    background: var(--bg-primary);

    svg {
        position: absolute;
        left: 15px;
        min-width: 20px;
        width: 0;
    }

    input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        border-radius: 10px;
        overflow: hidden;
        padding-inline: 50px 20px;
        caret-color: var(--text-primary);
        color: var(--text-primary);
        font-size: 15px;

        &::placeholder {
            font-size: 15px;
            font-weight: 500;
        }

        &:focus {
            outline: 1px solid var(--primary);
        }
    }
`

export const Buttons = styled.div `
    display: flex;
    align-items: center;
    gap: 15px;
    user-select: none;
    
    a {
        padding-inline: 12px;
        border-radius: 5px;
        height: 35px;
        font-size: 14px;
        color: white;
        filter: brightness(100%);
        transition: filter .2s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            filter: brightness(90%);
            transition: filter .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }

    .login {
        background-color: var(--bg-primary);
    }

    .register {
        background-color: var(--secondary);
    }
`