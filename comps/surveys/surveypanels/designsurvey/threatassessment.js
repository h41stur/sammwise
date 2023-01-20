const threatassessment = () => {return ({
    "type": "panel",
    "name": "Avaliação de ameaça",
    "elements": [
      {
        "type": "radiogroup",
        "id": "71c02652a9ba4b10a0cc0179c7ce869f",
        "title": "Você classifica os aplicativos de acordo com o risco comercial com base em um conjunto simples e predefinido de perguntas?",
        "titleLocation": "left",
        "description": "Existe uma classificação de risco acordada",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, alguns deles"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos metade deles"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, a maioria ou todos eles"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "897306b66f16454eab7b5a2355d31c11",
        "title": "Você usa perfis de risco de aplicativo centralizados e quantificados para avaliar o risco de negócios?",
        "titleLocation": "left",
        "description": "O perfil de risco do aplicativo está alinhado com o padrão de risco organizacional",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, para algumas aplicações"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, em pelo menos metade das aplicações"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, para a maioria ou todas as aplicações"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "7e541611f3c749f285ac27f0a9ba7d55",
        "title": "Você revisa e atualiza regularmente os perfis de risco de seus aplicativos?",
        "titleLocation": "left",
        "description": "O padrão de risco organizacional considera o feedback histórico para melhorar o método de avaliação",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, esporadicamente"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, mediante alteração da aplicação"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, pelo menos anualmente"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "e9dcf4f79e2e487fb74df5e15a14a91b",
        "title": "Você identifica e gerencia falhas de projeto arquitetônico com modelagem de ameaças?",
        "titleLocation": "left",
        "description": "Você executa modelagem de ameaças para aplicativos de alto risco",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, alguns deles"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos metade deles"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, a maioria ou todos eles"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "42cfabd13db34fd0b35e92af917eb1b8",
        "title": "Você usa uma metodologia padrão, alinhada aos seus níveis de risco de aplicativo?",
        "titleLocation": "left",
        "description": "Você treina seus arquitetos, defensores da segurança e outras partes interessadas sobre como fazer modelagem prática de ameaças",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, para algumas aplicações"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, em pelo menos metade das aplicações"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, para a maioria ou todas as aplicações"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "cd639e5458ca4f60be60bc9d47314648",
        "title": "Você revisa e atualiza regularmente a metodologia de modelagem de ameaças para seus aplicativos?",
        "titleLocation": "left",
        "description": "A metodologia do modelo de ameaças considera o feedback histórico para melhoria",
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
    "title": "Avaliação de ameaça",
    "state": "expanded"
  });}
export default threatassessment;