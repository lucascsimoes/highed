import styled from "styled-components";

export const Banner = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    position: relative;
    width: 100%;
    min-height: calc(50dvh + 70px);
    padding-top: 70px;

    & > *:not(.slides-container) {
        position: relative;
        z-index: 1;
    }

    .slides-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: brightness(20%);

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 3s cubic-bezier(0.075, 0.82, 0.165, 1);

            &.active {
                opacity: 1;
                transition: opacity 3s cubic-bezier(0.075, 0.82, 0.165, 1);
            }

            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
                -o-object-fit: cover;
                object-position: center;
                -o-object-position: center;
            }
        }
    }

    .Typewriter {
        min-height: 74px;
        height: 0;
        transform: translateY(-10px);
    }

    * {
        text-transform: uppercase;
        text-align: center;
    }

    h1 {
        font-size: 30px;
        font-weight: 300;
    }

    .Typewriter__wrapper {
        font-size: 60px;
        font-weight: 700;
        font-family: "Oswald", sans-serif;
        background: linear-gradient(to right, var(--primary) 0%, var(--secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .Typewriter__cursor {
        display: none;
    }

    & > button {
        user-select: none;
        cursor: pointer;
        height: 45px;
        padding-inline: 30px;
        border-radius: 5px;
        border: none;
        color: white;
        background: linear-gradient(to right, var(--primary) 0%, var(--secondary) 100%);
        font-weight: 500;
        filter: brightness(100%);
        transition: filter .2s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            filter: brightness(80%);
            transition: filter .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000000 5%, transparent 40%);
    }
`

interface PaymentProps {
    img: string
}

export const Payment = styled.section<PaymentProps> `
    position: relative;
    margin: 0 auto;
    padding: 50px 50px 200px;
    background: #000000;

    & * {
        position: relative;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${({ img }) => img});
        background-size: 200px;
        z-index: 0;
        opacity: .02;
    }

    & > h1 {
        text-align: center;
        font-size: 35px;
        font-weight: 400;
        margin-top: 40px;
    }

    & > p {
        text-align: center;
        margin-block: 10px 70px;
        font-size: 15px;
        opacity: .4;
    }

    & > div {
        display: flex;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
    }
`

interface PaymentPlanProps {
    price: number
}

export const PaymentPlan = styled.div<PaymentPlanProps> `
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 50px 20px;
    background: #000000;

    h2 {
        text-align: center;
        font-weight: 400;
        font-size: 25px;
    }

    & > p {
        text-align: center;
        margin-top: 5px;
        font-size: 14px;
        font-weight: 500;
    }

    &.basic {
        border: 1px solid var(--bg-secondary);
        box-shadow: var(--bg-secondary) 0px 2px 10px;

        & > p {
            color: #ffffff;
            opacity: .5;
        }

        a {
            background-color: var(--bg-secondary);
        }
    }

    &.student {
        border: 1px solid var(--secondary);
        box-shadow: var(--secondary) 0px 2px 10px;

        & > p {
            color: var(--secondary);
        }

        a {
            background-color: var(--secondary);
        }
    }

    &.premium {
        border: 1px solid var(--primary);
        box-shadow: var(--primary) 0px 2px 10px;

        & > p {
            color: var(--primary);
        }

        a {
            background-color: var(--primary);
        }
    }

    &.family {
        border: 1px solid #c0ae4a;
        box-shadow: #c0ae4a 0px 2px 10px;

        & > p {
            color: #c0ae4a;
        }

        a {
            background-color: #c0ae4a;
        }
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        width: 100%;
        height: 150px;

        &::after{
            content: 'R$ ${({ price }) => price}';
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            font-size: 90px;
            font-weight: 800;
            background: linear-gradient(to top, #000000 0%, #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            opacity: .04;
        }

        h1 {
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 35px;
        }

        p {
            opacity: .5;
            margin-bottom: 30px;
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
        height: 45px;
        padding-inline: 30px;
        border-radius: 5px;
        border: none;
        color: white;
        font-weight: 500;
        filter: brightness(100%);
        transition: filter .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        margin-top: 10px;
        font-size: 13px;

        &:hover {
            filter: brightness(80%);
            transition: filter .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }
`

export const Teste = styled.section `
    background-color: #ffffff;
    min-height: 500px;
`

export const Footer = styled.footer `
    background-color: #000000;
    min-height: 600px;
`