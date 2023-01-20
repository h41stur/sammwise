const reqtest = () => {return ({
    "type": "panel",
    "name": "Teste orientado a requisitos",
    "elements": [
      {
        "type": "radiogroup",
        "id": "cb085e0a25724700bc10c73cfcc8f6a5",
        "title": "Você testa aplicativos para o funcionamento correto dos controles de segurança padrão?",
        "titleLocation": "left",
        "description": "O teste de segurança pelo menos verifica a implementação de autenticação, controle de acesso, validação de entrada, codificação e escape de dados e controles de criptografia",
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
        "id": "d6b26a63243d4142bd2a8317e2875a03",
        "title": "Você escreve e executa consistentemente scripts de teste para verificar a funcionalidade dos requisitos de segurança?",
        "titleLocation": "left",
        "description": "Você adapta os testes para cada aplicativo e afirma a funcionalidade de segurança esperada",
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
        "id": "35413be30d9f415dbde45edbe3b17f31",
        "title": "Você testa aplicativos automaticamente para regressões de segurança?",
        "titleLocation": "left",
        "description": "Você consistentemente escreve testes para todos os bugs identificados (possivelmente excedendo um limite de gravidade pré-definido)",
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
        "id": "749893a53df24c32bc887b6d5f7b3f7b",
        "title": "Você testa aplicativos usando técnicas de randomização ou fuzzing?",
        "titleLocation": "left",
        "description": "O teste abrange a maioria ou todos os principais parâmetros de entrada do aplicativo",
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
        "id": "b2afb33fe6ef4b6e90e029059f7a7124",
        "title": "Você cria casos de abuso a partir de requisitos funcionais e os usa para conduzir testes de segurança?",
        "titleLocation": "left",
        "description": "Funcionalidades comerciais importantes têm casos de abuso correspondentes",
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
      },
      {
        "type": "radiogroup",
        "id": "814caca2fc5241dcb90c48302ac031b2",
        "title": "Você realiza negação de serviço e testes de estresse de segurança?",
        "titleLocation": "left",
        "description": "Os testes de estresse visam recursos específicos do aplicativo (por exemplo, esgotamento da memória ao salvar grandes quantidades de dados em uma sessão do usuário)",
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
    "title": "Teste orientado a requisitos",
    "state": "collapsed"
  });}
export default reqtest;