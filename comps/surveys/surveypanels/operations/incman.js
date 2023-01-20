const incman = () => {return ({
    "type": "panel",
    "name": "Gerenciamento de Incidentes",
    "elements": [
      {
        "type": "radiogroup",
        "id": "1e005e11997f4929a12fdb939599e77e",
        "title": "Você analisa dados de log para incidentes de segurança periodicamente?",
        "titleLocation": "left",
        "description": "Você tem um ponto de contato para a criação de incidentes de segurança",
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
        "id": "13b9816c06444ba99584e657bfa5833d",
        "title": "Você segue um processo documentado para detecção de incidentes?",
        "titleLocation": "left",
        "description": "O processo tem um proprietário dedicado",
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
        "id": "09744a244f8d4076bec35130da92ea2b",
        "title": "Você revisa e atualiza o processo de detecção de incidentes regularmente?",
        "titleLocation": "left",
        "description": "Você realiza revisões pelo menos anualmente",
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
        "id": "0d889a913d484eb39b80f096f3a66019",
        "title": "Você responde a incidentes detectados?",
        "titleLocation": "left",
        "description": "Você tem uma pessoa ou função definida para lidar com incidentes",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, para alguns incidentes"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, em pelo menos metade dos incidentes"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, para a maioria ou todos os incidentes"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "dbb83b0d5b504db6a170710df4df347f",
        "title": "Você usa um processo repetível para tratamento de incidentes?",
        "titleLocation": "left",
        "description": "Você tem uma classificação de incidente acordada",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, para alguns tipos de incidentes"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, para pelo menos metade dos tipos de incidentes"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, para a maioria ou todos os tipos de incidentes"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "91bd2bdc1c734d8dbffc30e37158ab00",
        "title": "Você tem uma equipe dedicada de resposta a incidentes disponível?",
        "titleLocation": "left",
        "description": "A equipe realiza a análise de causa raiz para todos os incidentes de segurança, a menos que haja um motivo específico para não fazê-lo",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, algumas vezes"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos metade das vezes"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, na maioria ou o tempo todo"
          }
        ]
      }
    ],
    "title": "Gerenciamento de Incidentes",
    "state": "expanded"
  });}
export default incman;