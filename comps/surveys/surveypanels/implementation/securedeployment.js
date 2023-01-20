const securedeployment = () => {return ({
    "type": "panel",
    "name": "Implantação segura",
    "elements": [
      {
        "type": "radiogroup",
        "id": "24697d43707b4d83a6a5819a9db9a75d",
        "title": "Você usa processos de implantação repetíveis?",
        "titleLocation": "left",
        "description": "Você tem informações suficientes para executar os processos de implantação",
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
        "id": "7ef6753cda0d4da6ad194e56650f584d",
        "title": "Os processos de implantação são automatizados e empregam verificações de segurança?",
        "titleLocation": "left",
        "description": "Os processos de implantação são automatizados em todas as etapas",
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
        "id": "f87fddbf283a4c38b45a3125d827dd27",
        "title": "Você valida consistentemente a integridade dos artefatos implantados?",
        "titleLocation": "left",
        "description": "Você impede ou reverte a implantação se detectar uma violação de integridade",
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
        "id": "37c6a5618a6344b386eb872619cfe53f",
        "title": "Você limita o acesso aos segredos do aplicativo de acordo com o princípio de privilégio mínimo?",
        "titleLocation": "left",
        "description": "Você armazena segredos de produção protegidos em um local seguro",
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
        "id": "c5f66e97db174d8c9dc2d82fbad9d4e3",
        "title": "Você injeta segredos de produção em arquivos de configuração durante a implantação?",
        "titleLocation": "left",
        "description": "Os arquivos de código-fonte não contêm mais segredos de aplicativos ativos",
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
        "id": "50af7a14ddf2408fb4576e3972cf13e3",
        "title": "Você pratica o gerenciamento adequado do ciclo de vida dos segredos do aplicativo?",
        "titleLocation": "left",
        "description": "Você gera e sincroniza segredos usando uma solução verificada",
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
    "title": "Implantação segura",
    "state": "collapsed"
  });}
export default securedeployment;