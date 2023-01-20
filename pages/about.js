import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect } from 'react'

const About = () => {
    
    useEffect(()=> {
        var userState = JSON.parse(sessionStorage.getItem('userState'));
        userState['page'] = "aboutPage";
        userState['has_switched_page'] = true;
        sessionStorage.setItem('userState', JSON.stringify(userState));
    })
    
    return ( 
        <>
            <Head>
                <title>SAMMWise | About </title>
                <meta name = "keywords" content = "owassp-calc"/>

            </Head>
            <div>
                
                <h2 className = {styles.title} >Sobre esta ferramenta</h2>
                <p className = {styles.paragraph}>O aplicativo da web SAMMwise fornece uma alternativa conveniente para o 
                     OWASP SAMM Toolkit (Excel Toolkit) para capturar suas respostas de avaliação SAMM.
                     Aproveitando várias estruturas JavaScript de código aberto, o aplicativo SAMMwise 
                     fornece um fluxo de trabalho intuitivo e orientado a páginas para concluir uma avaliação SAMM, 
                     juntamente com gráficos dinâmicos para visualizar os resultados da avaliação.
                    </p>

                <h2 className = {styles.title} >Capacidades Atuais</h2>  
                    <li className = {styles.paragraph}>		Avaliar as práticas de segurança de software existentes em uma organização;</li>
                    <li className = {styles.paragraph}>		Construindo em direção a um programa de garantia de segurança de software equilibrado em iterações bem definidas;</li>
                    <li className = {styles.paragraph}>		Demonstrar melhorias concretas em um programa de garantia de segurança; e </li>
                    <li className = {styles.paragraph}>		Definir e medir as atividades relacionadas à segurança em toda a organização.  </li>  
                <h2 className = {styles.title}>Aprimoramentos futuros</h2>  
                    <li className = {styles.paragraph}>			Roteiros multifásicos - Linha de base, mais até 5 fases de implementação</li>
                    <li className = {styles.paragraph}>			Comparação com várias avaliações anteriores</li>
                    <li className = {styles.paragraph}>			Comparação com os dados do Benchmark SAMM</li>
                    <li className = {styles.paragraph}>			Contribuição dos resultados da avaliação não identificada para o Projeto de Referência SAMM   </li>  
                <h2 className = {styles.title} >Version History</h2>
                <div style={{float:"right"}}>
                    <Image src = "/DatacomLogo.png" width = {321} height = {61}/>
                </div>
                <p className = {styles.paragraph}>Version 1.0 - The initial release of SAMMwise was developed in July - October 2021 by the Application Security Services Team at Datacom New Zealand. 
                    The tool was released as an open-source project and donated to the OWASP SAMM project. 
                </p>
            </div>
        </>
        );
}
 
export default About;