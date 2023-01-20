const securebuild = () => {return ({
    "type": "panel",
    "name": "Construção Segura",
    "elements": [
      {
        "type": "radiogroup",
        "id": "70d6044a223b402c8e2b6f9d1e936641",
        "title": "Seu processo de construção completo é formalmente descrito?",
        "titleLocation": "left",
        "description": "Você tem informações suficientes para recriar os processos de construção",
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
        "id": "b5d33583538b4878bb4674a5f838b8ea",
        "title": "O processo de compilação é totalmente automatizado?",
        "titleLocation": "left",
        "description": "O processo de construção em si não requer nenhuma interação humana",
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
        "id": "ee775955bf7f48d294c75f6384232f48",
        "title": "Você aplica verificações de segurança automatizadas em seus processos de construção?",
        "titleLocation": "left",
        "description": "As compilações falham se o aplicativo não atende a uma linha de base de segurança predefinida",
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
        "id": "1e28b82cc3ba4e4ea2552746e17c25af",
        "title": "Você tem um conhecimento sólido sobre as dependências nas quais está contando?",
        "titleLocation": "left",
        "description": "Você tem uma lista de materiais atual para cada aplicação",
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
        "id": "ef798e60155d453186364c94a8f8935d",
        "title": "Você lida com o risco de dependência de terceiros por um processo formal?",
        "titleLocation": "left",
        "description": "Você mantém uma lista de dependências aprovadas que atendem a critérios predefinidos",
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
        "id": "418e98e2939546e69a24d0c3c4c8d217",
        "title": "Você impede a construção de software se for afetado por vulnerabilidades em dependências?",
        "titleLocation": "left",
        "description": "Seu sistema de compilação está conectado a um sistema para rastrear o risco de dependência de terceiros, fazendo com que a compilação falhe, a menos que a vulnerabilidade seja avaliada como um falso positivo ou o risco seja explicitamente aceito",
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
      }
    ],
    "title": "Construção Segura",
    "state": "expanded"
  });}
export default securebuild;