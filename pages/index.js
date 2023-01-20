import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{

    var testStorage = sessionStorage.getItem('assessmentState');
    if(testStorage == null){
      // Initialise variables to keep track of user state across pages
      console.log('defualts set');
      var assessmentStateData = new Map();
      initialiseAssessmentState(assessmentStateData)
      sessionStorage.setItem('assessmentState', JSON.stringify(assessmentStateData));
      var userState = {};
      var page = 'page';
      var page_boolean = 'has_switched_page';
      var currentPageName = 'homePage';
      userState[page] = currentPageName;
      userState[page_boolean] = true;
      var navbarState = 'Governance';
      sessionStorage.setItem('userState', JSON.stringify(userState));
      sessionStorage.setItem('navbarState', navbarState);
    } else{
      var uState = JSON.parse(sessionStorage.getItem('userState'));
      uState['has_switched_page'] = true;
      uState['page'] = 'homePage';
      sessionStorage.setItem('userState', JSON.stringify(uState));
    } 
  })
  
  
  function initialiseAssessmentState(statePointer){
    //Fill assessment state as 0 (all qs are initially empty)
    for(let i = 1; i < 91; i++){
        var key_name = 'question' + i;
        statePointer[key_name] = null;
    }
    statePointer['Company Name'] = null;
    statePointer['Project name'] = null;
    statePointer['Description of Project'] = null;
  }
  
  return (
    <>
    <Head>
      <title>SAMMWise | Home </title>
      <meta name = "keywords" content = "owassp-calc"/>
    </Head>
    <div>
      <h1 className = {styles.title}>SAMMWise</h1>
      <p className = {styles.paragraph}>SAMMwise fornece uma interface conveniente baseada em navegador para capturar respostas de avaliação SAMM. Com esta ferramenta, os usuários podem: </p>
          <li className = {styles.paragraph}>	Insira as respostas para uma única avaliação</li>
          <li className = {styles.paragraph}>	Visualize os resultados de maturidade com base nas respostas inseridas</li>
          <li className = {styles.paragraph}>	Compare os resultados de maturidade com os de uma avaliação anterior</li>
          <p className = {styles.paragraph}> As respostas da avaliação podem ser salvas no computador local do usuário, em um arquivo de texto no formato JSON. As respostas são retidas apenas no sistema local e não são compartilhadas com nenhum outro sistema ou pessoas.

      </p>

      <h1 className = {styles.title}>Sobre o SAMM</h1>
      <p className = {styles.paragraph}>Modelo de Maturidade de Software Assurance do Open Web Application Security Project (OWASP SAMM) é uma estrutura aberta para ajudar as organizações a formular e implementar uma estratégia de segurança de software, adaptada aos riscos específicos enfrentados pela organização.  </p>
      <p className = {styles.paragraph}>Os recursos disponibilizados pelo SAMM (incluindo esta ferramenta) destinam-se a auxiliar na: </p>
          <li className = {styles.paragraph}>		Avaliar as práticas de segurança de software existentes em uma organização;</li>
          <li className = {styles.paragraph}>		Construindo em direção a um programa de garantia de segurança de software equilibrado em iterações bem definidas;</li>
          <li className = {styles.paragraph}>		Demonstrar melhorias concretas para um programa de garantia de segurança; e </li>
          <li className = {styles.paragraph}>		Definir e medir as atividades relacionadas à segurança em toda a organização.  </li>
      <p className = {styles.paragraph}>O SAMM foi definido com flexibilidade em mente para que possa ser utilizado por organizações de pequeno, médio e grande porte usando qualquer estilo de desenvolvimento. Além disso, esse modelo pode ser aplicado em toda a organização, para uma única linha de negócios ou até mesmo para um projeto individual.  </p>
    </div>
    
    
    </>
  )
}
