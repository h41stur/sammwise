const strategy =()=>{
    return({
      "type": "panel",
      "name": "Estratégia e Métricas",
      "elements": [
        {
          name:"question1",
          "type": "radiogroup",
          "id": "64f49a28334e4a40a04e534225a941d2",
          "title": "Você entende o apetite de risco em toda a empresa para seus aplicativos?",
          "titleLocation": "left",
          "description": "Você captura o apetite de risco da liderança executiva da sua organização",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, cobre riscos gerais"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, cobre riscos específicos da organização"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, cobre riscos e oportunidades"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "8fd0374f0b63476eacb3cadca99b1538",
          "title": "Você tem um plano estratégico para segurança de aplicativos e o utiliza para tomar decisões?",
          "titleLocation": "left",
          "description": "O plano reflete as prioridades de negócios da organização e o apetite ao risco",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, revisamos anualmente"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, consultamos o plano antes de tomar decisões importantes"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, consultamos o plano com frequência e ele está alinhado com nossa estratégia de segurança de aplicativos"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "74eaee0cbf454a46adeb2619850bbcb3",
          "title": "Você revisa e atualiza regularmente o Plano Estratégico para Segurança de Aplicativos?",
          "titleLocation": "left",
          "description": "Você revisa e atualiza o plano em resposta a mudanças significativas no ambiente de negócios, na organização ou em seus vetores de risco",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, mas a revisão é ad hoc"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, revisamos em horários regulares"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, revisamos pelo menos anualmente"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "6aa85d5f3c03428aa064447fa50fa66b",
          "title": "Você usa um conjunto de métricas para medir a eficácia e a eficiência do programa de segurança de aplicativos entre os aplicativos?",
          "titleLocation": "left",
          "description": "Você documenta cada métrica, incluindo uma descrição das fontes, cobertura de medição e orientação sobre como usá-la para explicar as tendências de segurança do aplicativo",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, para uma categoria de métricas"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, para duas categorias de métricas"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, para todas as três categorias de métricas"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "26f12b057f2b44f386d9af391383b590",
          "title": "Você definiu indicadores-chave de desempenho (KPI) a partir das métricas de segurança de aplicativos disponíveis??",
          "titleLocation": "left",
          "description": "Você definiu os KPIs após coletar informações suficientes para estabelecer objetivos realistas",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, para algumas das métricas"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, para pelo menos metade das métricas"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, para a maioria ou todas as métricas"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "efdc34fbb75b405b8107d63d58fa7286",
          "title": "Você atualiza a estratégia e o roteiro de segurança de aplicativos com base em métricas de segurança de aplicativos e KPIs?",
          "titleLocation": "left",
          "description": "Você revisa os KPIs pelo menos anualmente quanto à sua eficiência e eficácia",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, mas a revisão é ad hoc"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, revisamos em horários regulares"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, revisamos pelo menos anualmente"
            }
          ]
        }
      ],
      "title": "Estratégia e Métricas",
      "state": "expanded"
    });
}

export default strategy;