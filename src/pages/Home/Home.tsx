import * as Styled from './style'
import { useState, useEffect } from 'react'

import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

export default () => {

    const [slide, setSlide] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setSlide(v => (v + 1) % 4);
        }, 5000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        
        <Styled.Banner>
            <div>
                <h1> No Highed você encontra </h1>
                <Typewriter
                    options={{
                        strings: ["Sua música favorita", "Seu artista favorito", "Seu álbum favorito", "Seu melhor momento"],
                        autoStart: true,
                        loop: true,
                        delay: 100
                    }}
                />
            </div>

            <button> VEJA O QUE ESTÁ EM ALTA </button>

            <div className="slides-container">
                <div className={`slide ${slide === 0 ? "active" : ""}`}>
                    <video autoPlay muted loop>
                        <source src={`${process.env.PUBLIC_URL}/assets/videos/video1.mp4`}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`slide ${slide === 1 ? "active" : ""}`}>
                    <video autoPlay muted loop>
                        <source src={`${process.env.PUBLIC_URL}/assets/videos/video2.mp4`}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`slide ${slide === 2 ? "active" : ""}`}>
                    <video autoPlay muted loop>
                        <source src={`${process.env.PUBLIC_URL}/assets/videos/video3.mp4`}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`slide ${slide === 3 ? "active" : ""}`}>
                    <video autoPlay muted loop>
                        <source src={`${process.env.PUBLIC_URL}/assets/videos/video4.mp4`}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </Styled.Banner>

        <Styled.Payment img={`${process.env.PUBLIC_URL}/assets/images/pattern.png`}>
            <h1> Cheque os planos e junte-se a nós </h1>
            <p> Teste qualquer plano por 30 dias, sem compromisso </p>

            <div>
                <Styled.PaymentPlan className='basic' price={0}>
                    <h2> Grátis </h2>
                    <p> Plano mínimo </p>

                    <div>
                        <h1> R$ 0,00 </h1>
                        <p> por mês </p>
                    </div>

                    <Link to={"/plans#basic"}> SAIBA MAIS </Link>
                </Styled.PaymentPlan>
                <Styled.PaymentPlan className='student' price={12}>
                    <h2> Estudante </h2>
                    <p> Mais popular </p>

                    <div>
                        <h1> R$ 12,00 </h1>
                        <p> por mês </p>
                    </div>

                    <Link to={"/plans#student"}> SAIBA MAIS </Link>
                </Styled.PaymentPlan>
                <Styled.PaymentPlan className='premium' price={23}>
                    <h2> Premium </h2>
                    <p> Mais vantagens </p>

                    <div>
                        <h1> R$ 23,00 </h1>
                        <p> por mês </p>
                    </div>

                    <Link to={"/plans#premium"}> SAIBA MAIS </Link>
                </Styled.PaymentPlan>
                <Styled.PaymentPlan className='family' price={35}>
                    <h2> Família </h2>
                    <p> Mais completo </p>

                    <div>
                        <h1> R$ 35,00 </h1>
                        <p> por mês </p>
                    </div>

                    <Link to={"/plans#family"}> SAIBA MAIS </Link>
                </Styled.PaymentPlan>
            </div>
        </Styled.Payment>
                    
        <Styled.Teste>

        </Styled.Teste>

        <Styled.Footer>
            
        </Styled.Footer>
        </>
    )
}