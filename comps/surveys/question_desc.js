const question_desc = ()=>{ 
    return (
      {
         "Você entende o vetor de risco em toda a empresa para seus aplicativos?":[
            "Você captura o vetor de risco da liderança executiva da sua organização",
            "A liderança da organização examina e aprova o conjunto de riscos",
            "Você identifica as principais ameaças comerciais e técnicas aos seus ativos e dados",
            "Você documenta os riscos e os armazena em um local acessível"
         ],
         "Você usa um conjunto de métricas para medir a eficácia e a eficiência do programa de segurança de aplicativos em todos os aplicativos?":[
            "Você documenta cada métrica, incluindo uma descrição das fontes, cobertura de medição e orientação sobre como usá-la para explicar as tendências de segurança do aplicativo",
            "As métricas incluem medidas de esforços, resultados e as categorias de medição do ambiente",
            "A maioria das métricas são frequentemente medidas, fáceis ou baratas de coletar e expressas como um número cardinal ou uma porcentagem",
            "Equipes de desenvolvimento e segurança de aplicativos publicam métricas"
         ],
         "Você tem um plano estratégico de segurança de aplicativos e o utiliza para tomar decisões?":[
            "O plano reflete as prioridades de negócios e o apetite de risco da organização",
            "O plano inclui marcos mensuráveis ​​e um orçamento",
            "O plano é consistente com os drivers e riscos de negócios da organização",
            "O plano traça um roteiro para iniciativas estratégicas e táticas",
            "Você tem adesão das partes interessadas, incluindo equipes de desenvolvimento"
         ],
         "Você definiu Indicadores Chave de Desempenho (KPI) a partir das métricas de segurança de aplicativos disponíveis?":[
            "Você definiu os KPIs após reunir informações suficientes para estabelecer objetivos realistas",
            "Você desenvolveu KPIs com a adesão da liderança e das equipes responsáveis ​​pela segurança do aplicativo",
            "Os KPIs estão disponíveis para as equipes de aplicativos e incluem limites de aceitabilidade e orientações caso as equipes precisem tomar medidas",
            "O sucesso do programa de segurança de aplicativos é claramente visível com base em KPIs definidos"
         ],
         "Você revisa e atualiza regularmente o Plano Estratégico de Segurança de Aplicativos?":[
            "Você revisa e atualiza o plano em resposta a mudanças significativas no ambiente de negócios, na organização ou em seu apetite por risco",
            "As etapas de atualização do plano incluem a revisão do plano com todas as partes interessadas e a atualização dos direcionadores e estratégias de negócios",
            "Você ajusta o plano e o roteiro com base nas lições aprendidas com as atividades concluídas do roteiro",
            "Você publica informações sobre o andamento das atividades do roteiro, certificando-se de que estejam disponíveis para todas as partes interessadas"
         ],
         "Você atualiza a estratégia e o roteiro de segurança de aplicativos com base em métricas de segurança de aplicativos e KPIs?":[
            "Você revisa KPIs pelo menos anualmente para sua eficiência e eficácia",
            "KPIs e métricas de segurança de aplicativos acionam a maioria das mudanças na estratégia de segurança de aplicativos"
         ],
         "Você tem e aplica um conjunto comum de políticas e padrões em toda a sua organização?":[
            "Você adaptou os padrões existentes apropriados para o setor da organização para levar em consideração considerações específicas do domínio",
            "Seus padrões estão alinhados com suas políticas e incorporam orientação de implementação específica de tecnologia"
         ],
         "Você tem uma visão completa de suas obrigações externas de compliance?":[
            "Você identificou todas as fontes de obrigações externas de compliance",
            "Você capturou e reconciliou as obrigações de conformidade de todas as fontes"
         ],
         "Você publica as políticas da organização como scripts de teste ou livros de execução para fácil interpretação pelas equipes de desenvolvimento?":[
            "Você cria checklists de verificação e scripts de teste quando aplicável, alinhados com os requisitos da política e as orientações de implementação nos padrões associados",
            "Você cria versões adaptadas a cada metodologia de desenvolvimento e tecnologia que a organização utiliza"
         ],
         "Você tem um conjunto padrão de requisitos de segurança e procedimentos de verificação que tratam das obrigações externas de conformidade da organização?":[
            "Você mapeia cada obrigação de conformidade externa para um conjunto bem definido de requisitos de aplicativos",
            "Você define procedimentos de verificação, incluindo testes automatizados, para verificar a conformidade com os requisitos relacionados à conformidade"
         ],
         "Você relata regularmente sobre conformidade com políticas e padrões e usa essas informações para orientar os esforços de melhoria da conformidade?":[
            "Você tem procedimentos (automatizados, se possível) para gerar regularmente relatórios de compliance",
            "Você entrega relatórios de conformidade a todas as partes interessadas relevantes",
            "As partes interessadas usam as informações de status de conformidade relatadas para identificar áreas de melhoria"
         ],
         "Você relata regularmente a adesão às obrigações externas de conformidade e usa essas informações para orientar os esforços para fechar as lacunas de conformidade?":[
            "Você tem métricas de conformidade estabelecidas e bem definidas",
            "Você mede e relata as métricas de conformidade dos aplicativos regularmente",
            "As partes interessadas usam as informações de status de conformidade relatadas para identificar lacunas de conformidade e priorizar os esforços de correção de lacunas"
         ],
         "Você exige que os funcionários envolvidos com o desenvolvimento de aplicativos façam o treinamento SDLC?":[
            "O treinamento é repetível, consistente e disponível para qualquer pessoa envolvida com o ciclo de vida do desenvolvimento de software",
            "O treinamento inclui o mais recente OWASP Top 10, se apropriado, e inclui conceitos como Menor Privilégio, Defesa em Profundidade, Fail Secure (Seguro), Mediação Completa, Gerenciamento de Sessão, Design Aberto e Aceitabilidade Psicológica",
            "O treinamento requer uma aprovação ou reconhecimento dos participantes",
            "Você atualizou o treinamento nos últimos 12 meses",
            "O treinamento é necessário durante o processo de integração dos funcionários"
         ],
         "Você identificou um Campeão de Segurança para cada equipe de desenvolvimento?":[
            "Campeões de segurança recebem treinamento adequado",
            "As equipes de Segurança e Desenvolvimento de Aplicativos recebem briefings periódicos dos Campeões de Segurança sobre o status geral das iniciativas e correções de segurança",
            "O Security Champion analisa os resultados dos testes externos antes de adicionar ao backlog do aplicativo"
         ],
         "O treinamento é personalizado para funções individuais, como desenvolvedores, testadores ou defensores da segurança?":[
            "O treinamento inclui todos os tópicos do nível de maturidade 1 e adiciona ferramentas, técnicas e demonstrações mais específicas",
            "O treinamento é obrigatório para todos os empregados e contratados",
            "A formação inclui contributos das PME internas e dos formandos",
            "O treinamento inclui demonstrações de ferramentas e técnicas desenvolvidas internamente",
            "Você usa o feedback para aprimorar e tornar o treinamento futuro mais relevante"
         ],
         "A organização possui um Centro de Excelência em Software Seguro (SSCE)?":[
            "O SSCE tem um estatuto que define o seu papel na organização",
            "Equipes de desenvolvimento revisam todas as mudanças arquitetônicas significativas com o SSCE",
            "O SSCE publica padrões SDLC e diretrizes relacionadas à segurança de aplicativos",
            "Product Champions são responsáveis ​​por promover o uso de ferramentas de segurança específicas"
         ],
         "Você implementou um Sistema de Gerenciamento de Aprendizagem ou equivalente para acompanhar os processos de treinamento e certificação de funcionários?":[
            "Um Learning Management System (LMS) é usado para acompanhar treinamentos e certificações",
            "O treinamento é baseado em normas, políticas e procedimentos internos",
            "Você usa programas de certificação ou registros de atendimento para determinar o acesso a sistemas e recursos de desenvolvimento"
         ],
         "Existe um portal centralizado onde desenvolvedores e profissionais de segurança de aplicativos de diferentes equipes e unidades de negócios possam se comunicar e compartilhar informações?":[
            "A organização promove o uso de um único portal entre diferentes equipes e unidades de negócios",
            "O portal é usado para informações oportunas, como notificação de incidentes de segurança, atualizações de ferramentas, alterações de padrão de arquitetura e outros anúncios relacionados",
            "O portal é amplamente reconhecido por desenvolvedores e arquitetos como um repositório centralizado de informações de segurança de aplicativos específicos da organização",
            "Todo o conteúdo é considerado persistente e pesquisável",
            "O portal fornece acesso a métricas de segurança específicas do aplicativo"
         ],
         "Você classifica os aplicativos de acordo com o risco comercial com base em um conjunto simples e predefinido de perguntas?":[
            "Existe uma classificação de risco acordada",
            "A equipe de aplicação entende a classificação de risco",
            "A classificação de risco abrange aspectos críticos dos riscos de negócios que a organização enfrenta",
            "A organização tem um inventário para os aplicativos no escopo"
         ],
         "Você identifica e gerencia falhas de projeto arquitetônico com modelagem de ameaças?":[
            "Você realiza modelagem de ameaças para aplicativos de alto risco",
            "Você usa listas de verificação de ameaças simples, como STRIDE",
            "Você persiste o resultado de um modelo de ameaça para uso posterior"
         ],
         "Você usa perfis de risco de aplicativos centralizados e quantificados para avaliar o risco comercial?":[
            "O perfil de risco do aplicativo está alinhado com o padrão de risco organizacional",
            "O perfil de risco do aplicativo cobre o impacto na segurança e na privacidade",
            "Você valida a qualidade do perfil de risco manualmente e/ou automaticamente",
            "Os perfis de risco de aplicativos são armazenados em um inventário central"
         ],
         "Você usa uma metodologia padrão, alinhada aos seus níveis de risco de aplicação?":[
            "Você treina seus arquitetos, defensores da segurança e outras partes interessadas sobre como fazer modelagem prática de ameaças",
            "Sua metodologia de modelagem de ameaças inclui pelo menos diagramação, identificação de ameaças, mitigação de falhas de design e como validar seus artefatos de modelo de ameaça",
            "Mudanças no aplicativo ou contexto de negócios desencadeiam uma revisão dos modelos de ameaças relevantes",
            "Você captura os artefatos de modelagem de ameaças com ferramentas usadas por suas equipes de aplicativos"
         ],
         "Você revisa e atualiza regularmente os perfis de risco de seus aplicativos?":[
            "O padrão de risco organizacional considera o feedback histórico para aprimorar o método de avaliação",
            "Mudanças significativas na aplicação ou contexto de negócios desencadeiam uma revisão dos perfis de risco relevantes"
         ],
         "Você revisa e atualiza regularmente a metodologia de modelagem de ameaças para seus aplicativos?":[
            "A metodologia do modelo de ameaças considera o feedback histórico para melhorias",
            "Você revisa regularmente (por exemplo, anualmente) os modelos de ameaças existentes para verificar se nenhuma nova ameaça é relevante para seus aplicativos",
            "Você automatiza partes de seu processo de modelagem de ameaças com ferramentas de modelagem de ameaças"
         ],
         "As equipes de projeto especificam os requisitos de segurança durante o desenvolvimento?":[
            "As equipes derivam os requisitos de segurança dos requisitos funcionais e das preocupações do cliente ou da organização",
            "Os requisitos de segurança são específicos, mensuráveis ​​e razoáveis",
            "Os requisitos de segurança estão alinhados com a linha de base organizacional"
         ],
         "As partes interessadas revisam as colaborações do fornecedor quanto aos requisitos e metodologia de segurança?":[
            "Você considera incluir requisitos, atividades e processos de segurança específicos ao criar contratos de terceiros",
            "Um questionário de fornecedor está disponível e é usado para avaliar os pontos fortes e fracos de seus fornecedores"
         ],
         "Você define, estrutura e inclui priorização nos artefatos do processo de coleta de requisitos de segurança?":[
            "Os requisitos de segurança levam em consideração o conhecimento específico do domínio ao aplicar políticas e orientações para o desenvolvimento do produto",
            "Especialistas de domínio estão envolvidos no processo de definição de requisitos",
            "Você tem uma notação estruturada acordada para requisitos de segurança",
            "As equipes de desenvolvimento têm um defensor da segurança dedicado a revisar os requisitos e resultados de segurança"
         ],
         "Os fornecedores atendem às responsabilidades de segurança e medidas de qualidade dos acordos de nível de serviço definidos pela organização?":[
            "Você discute os requisitos de segurança com o fornecedor ao criar contratos de fornecedor",
            "Os contratos de fornecedores fornecem orientação específica sobre a correção de defeitos de segurança dentro de um prazo acordado",
            "A organização tem um acordo modelo de responsabilidades e níveis de serviço para os principais processos de segurança do fornecedor",
            "Você mede os principais indicadores de desempenho"
         ],
         "Você usa uma estrutura de requisitos padrão para simplificar a elicitação de requisitos de segurança?":[
            "Uma estrutura de requisitos de segurança está disponível para equipes de projeto",
            "A estrutura é categorizada por requisitos comuns e requisitos baseados em padrões",
            "A estrutura fornece orientações claras sobre a qualidade dos requisitos e como descrevê-los",
            "A estrutura é adaptável a requisitos de negócios específicos"
         ],
         "Os fornecedores estão alinhados com os controles de segurança padrão e as ferramentas e processos de desenvolvimento de software que a organização utiliza?":[
            "O fornecedor tem um SDLC seguro que inclui construção segura, implantação segura, gerenciamento de defeitos e gerenciamento de incidentes que se alinham aos usados ​​em sua organização",
            "Você verifica se a solução atende aos objetivos de qualidade e segurança antes de cada lançamento principal",
            "Quando os processos de verificação padrão não estão disponíveis, você usa controles de compensação, como análise de composição de software e teste de penetração independente"
         ],
         "As equipes usam princípios de segurança durante o design?":[
            "Você tem uma lista de verificação acordada de princípios de segurança",
            "Você guarda seu checklist em um local acessível",
            "As partes interessadas relevantes entendem os princípios de segurança"
         ],
         "Você avalia a qualidade de segurança de tecnologias importantes usadas para desenvolvimento?":[
            "Você tem uma lista das tecnologias mais importantes usadas em ou no suporte de cada aplicativo",
            "Você identifica e rastreia riscos tecnológicos",
            "Você garante que os riscos para essas tecnologias estejam alinhados com a linha de base organizacional"
         ],
         "Você usa serviços de segurança compartilhados durante o projeto?":[
            "Você tem uma lista documentada de serviços de segurança reutilizáveis, disponível para as partes interessadas relevantes",
            "Você revisou a postura de segurança de linha de base para cada serviço selecionado",
            "Seus designers são treinados para integrar cada serviço selecionado seguindo as orientações disponíveis"
         ],
         "Você tem uma lista de tecnologias recomendadas para a organização?":[
            "A lista é baseada em tecnologias utilizadas no portfólio de software",
            "Arquitetos e desenvolvedores líderes revisam e aprovam a lista",
            "Você compartilha a lista em toda a organização",
            "Você revisa e atualiza a lista pelo menos anualmente"
         ],
         "Você baseia seu design em arquiteturas de referência disponíveis?":[
            "Você tem uma ou mais arquiteturas de referência aprovadas documentadas e disponíveis para as partes interessadas",
            "Você melhora as arquiteturas de referência continuamente com base em insights e melhores práticas",
            "Você fornece um conjunto de componentes, bibliotecas e ferramentas para implementar cada arquitetura de referência"
         ],
         "Você aplica o uso de tecnologias recomendadas dentro da organização?":[
            "Você monitora aplicativos regularmente para o uso correto das tecnologias recomendadas",
            "Você resolve violações contra a lista de acordo com as políticas organizacionais",
            "Você toma medidas se o número de violações estiver fora dos objetivos anuais"
         ],
         "Seu processo de construção completo está formalmente descrito?":[
            "Você tem informações suficientes para recriar os processos de compilação",
            "Sua documentação de construção atualizada",
            "Sua documentação de compilação é armazenada em um local acessível",
            "As somas de verificação de artefatos produzidos são criadas durante a compilação para suportar a verificação posterior",
            "Você fortalece as ferramentas usadas no processo de construção"
         ],
         "Você tem conhecimento sólido sobre as dependências nas quais está contando?":[
            "Você tem uma lista de materiais (BOM) atual para cada aplicação",
            "Você pode descobrir rapidamente quais aplicativos são afetados por um determinado CVE",
            "Você analisou, abordou e documentou descobertas de dependências pelo menos uma vez nos últimos três meses"
         ],
         "O processo de compilação é totalmente automatizado?":[
            "O processo de construção em si não requer nenhuma interação humana",
            "Suas ferramentas de construção são fortalecidas de acordo com as melhores práticas e orientação do fornecedor",
            "Você criptografa os segredos exigidos pelas ferramentas de compilação e controla o acesso com base no princípio do menor privilégio"
         ],
         "Você lida com o risco de dependência de terceiros por meio de um processo formal?":[
            "Você mantém uma lista de dependências aprovadas que atendem a critérios predefinidos",
            "Você avalia automaticamente as dependências para novos CVEs e alerta a equipe responsável",
            "Você detecta e alerta automaticamente sobre alterações de licença com possível impacto no uso de aplicativos legais",
            "Você rastreia e alerta sobre o uso de dependências não mantidas",
            "Você detecta e remove de forma confiável dependências desnecessárias do software"
         ],
         "Você impõe verificações de segurança automatizadas em seus processos de compilação?":[
            "As compilações falham se o aplicativo não atende a uma linha de base de segurança predefinida",
            "Você tem uma gravidade máxima aceita para vulnerabilidades",
            "Você registra avisos e falhas em um sistema centralizado",
            "Você seleciona e configura ferramentas para avaliar cada aplicativo em relação a seus requisitos de segurança pelo menos uma vez por ano"
         ],
         "Você impede a compilação de software se for afetado por vulnerabilidades nas dependências?":[
            "Seu sistema de compilação está conectado a um sistema para rastrear o risco de dependência de terceiros, fazendo com que a compilação falhe, a menos que a vulnerabilidade seja avaliada como um falso positivo ou o risco seja explicitamente aceito",
            "Você verifica suas dependências usando uma ferramenta de análise estática",
            "Você relata as descobertas aos autores de dependência usando um processo de divulgação responsável estabelecido",
            "O uso de uma nova dependência não avaliada quanto a riscos de segurança faz com que a compilação falhe"
         ],
         "Você usa processos de implantação repetíveis?":[
            "Você tem informações suficientes para executar os processos de implantação",
            "Sua documentação de implantação atualizada",
            "Sua documentação de implantação está acessível às partes interessadas relevantes",
            "Você garante que apenas pessoal qualificado definido possa acionar uma implantação",
            "Você fortalece as ferramentas usadas no processo de implantação"
         ],
         "Você limita o acesso aos segredos do aplicativo de acordo com o princípio de privilégio mínimo?":[
            "Você armazena segredos de produção protegidos em um local seguro",
            "Desenvolvedores não têm acesso a segredos de produção",
            "Segredos de produção não estão disponíveis em ambientes de não produção"
         ],
         "Os processos de implantação são automatizados e empregam verificações de segurança?":[
            "Os processos de implantação são automatizados em todas as etapas",
            "A implantação inclui procedimentos de teste de segurança automatizados",
            "Você alerta a equipe responsável sobre vulnerabilidades identificadas",
            "Você tem logs disponíveis para suas implantações anteriores por um período de tempo definido"
         ],
         "Você injeta segredos de produção em arquivos de configuração durante a implantação?":[
            "Os arquivos de código-fonte não contêm mais segredos de aplicativos ativos",
            "Sob circunstâncias normais, nenhum ser humano acessa segredos durante os procedimentos de implantação",
            "Você registra e alerta sobre qualquer acesso anormal a segredos"
         ],
         "Você valida consistentemente a integridade dos artefatos implantados?":[
            "Você impede ou reverte a implantação se detectar uma violação de integridade",
            "A verificação é feita contra assinaturas criadas durante o tempo de compilação",
            "Se a verificação de assinaturas não for possível (por exemplo, software construído externamente), você introduz medidas de compensação"
         ],
         "Você pratica o gerenciamento adequado do ciclo de vida dos segredos do aplicativo?":[
            "Você gera e sincroniza segredos usando uma solução verificada",
            "Os segredos são diferentes entre diferentes instâncias de aplicativos",
            "Os segredos são atualizados regularmente"
         ],"Você rastreia todos os defeitos de segurança conhecidos em locais acessíveis?":[
            "Você pode facilmente obter uma visão geral de todos os defeitos de segurança que afetam um aplicativo",
            "Você tem pelo menos um esquema de classificação rudimentar",
            "O processo inclui uma estratégia para lidar com falsos positivos e entradas duplicadas",
            "O sistema de gerenciamento de defeitos cobre defeitos de várias fontes e atividades"
         ],
         "Você usa métricas básicas sobre defeitos de segurança registrados para realizar atividades de melhoria rápida?":[
            "Você analisou suas métricas registradas pelo menos uma vez no último ano",
            "Pelo menos informações básicas sobre esta iniciativa estão registradas e disponíveis",
            "Você identificou e realizou pelo menos uma atividade de ganho rápido com base nos dados"
         ],
         "Você mantém uma visão geral do estado dos defeitos de segurança em toda a organização?":[
            "Um único esquema de gravidade é aplicado a todos os defeitos em toda a organização",
            "O esquema inclui SLAs para corrigir classes de gravidade específicas",
            "Você relata regularmente a conformidade com os SLAs"
         ],
         "Você melhora seu programa de garantia de segurança com base em métricas padronizadas?":[
            "Você documenta métricas para classificação e categorização de defeitos e as mantém atualizadas",
            "A gerência executiva recebe regularmente informações sobre defeitos e agiu sobre isso no último ano",
            "Você compartilha regularmente detalhes técnicos sobre defeitos de segurança entre as equipes"
         ],
         "Você impõe SLAs para corrigir defeitos de segurança?":[
            "Você alerta automaticamente sobre violações de SLA e transfere os respectivos defeitos para o processo de gerenciamento de riscos",
            "Você integra ferramentas relevantes (por exemplo, monitoramento, construção, implantação) com o sistema de gerenciamento de defeitos"
         ],
         "Você avalia regularmente a eficácia de suas métricas de segurança para que suas informações ajudem a orientar sua estratégia de segurança?":[
            "Você analisou a eficácia das métricas de segurança pelo menos uma vez no último ano",
            "Sempre que possível, você verifica automaticamente a exatidão dos dados",
            "As métricas são agregadas a outras fontes, como inteligência de ameaças ou gerenciamento de incidentes",
            "Você derivou pelo menos uma atividade estratégica das métricas no último ano"
         ],
         "Você revisa a arquitetura do aplicativo para os principais objetivos de segurança de forma ad hoc?":[
            "Você tem um modelo acordado da arquitetura geral do software",
            "Você inclui componentes, interfaces e integrações no modelo de arquitetura",
            "Você verifica o fornecimento correto dos mecanismos gerais de segurança",
            "Você registra os controles de segurança ausentes como defeitos"
         ],
         "Você revisa a arquitetura do aplicativo para mitigação de ameaças típicas de forma ad hoc?":[
            "Você tem um modelo acordado da arquitetura geral do software",
            "Equipe experiente em segurança conduz a revisão",
            "Você considera diferentes tipos de ameaças, incluindo informações internas e relacionadas a dados"
         ],
         "Você revisa regularmente os mecanismos de segurança de sua arquitetura?":[
            "Você revisa a conformidade com os requisitos internos e externos",
            "Você revisa sistematicamente cada interface do sistema",
            "Você usa um método de revisão formalizado e validação estruturada",
            "Você registra os mecanismos de segurança ausentes como defeitos"
         ],
         "Você avalia regularmente as ameaças à sua arquitetura?":[
            "Você revisa sistematicamente cada ameaça identificada na Avaliação de Ameaças",
            "Pessoas treinadas ou experientes conduzem exercício de revisão",
            "Você identifica recursos atenuantes em nível de design para cada ameaça identificada",
            "Você registra ameaças não tratadas como defeitos"
         ],
         "Você revisa regularmente a eficácia dos controles de segurança?":[
            "Você avalia as capacidades de prevenção, detecção e resposta dos controles de segurança",
            "Você avalia o alinhamento da estratégia, o suporte adequado e a escalabilidade dos controles de segurança",
            "Você avalia a eficácia pelo menos anualmente",
            "Você registra deficiências identificadas como defeitos"
         ],
         "Você atualiza regularmente suas arquiteturas de referência com base nos resultados da avaliação de arquitetura?":[
            "Você avalia suas arquiteturas de maneira padronizada e documentada",
            "Você usa descobertas recorrentes para acionar uma revisão de arquiteturas de referência",
            "Você analisa de forma independente a qualidade das avaliações de arquitetura de forma ad hoc",
            "Você usa atualizações de arquitetura de referência para acionar análises de soluções compartilhadas relevantes, de maneira baseada em risco"
         ],
         "Você testa aplicativos para o funcionamento correto do padrãocontroles de segurança?":[
            "O teste de segurança verifica pelo menos a implementação de autenticação, controle de acesso, validação de entrada, codificação e escape de dados e controles de criptografia",
            "O teste de segurança é executado sempre que o aplicativo altera o uso dos controles"
         ],
         "Você testa aplicativos usando técnicas de randomização ou fuzzing?":[
            "O teste abrange a maioria ou todos os principais parâmetros de entrada do aplicativo",
            "Você registra e inspeciona todas as falhas de aplicativos quanto ao impacto na segurança com base no melhor esforço"
         ],
         "Você escreve e executa consistentemente scripts de teste para verificar a funcionalidade dos requisitos de segurança?":[
            "Você adapta os testes para cada aplicativo e afirma a funcionalidade de segurança esperada",
            "Você captura os resultados do teste como uma condição de aprovação ou reprovação",
            "Os testes usam uma estrutura padronizada ou DSL"
         ],
         "Você cria casos de abuso a partir de requisitos funcionais e os usa para conduzir testes de segurança?":[
            "Funcionalidades comerciais importantes têm casos de abuso correspondentes",
            "Você constrói histórias de abuso em torno de personagens relevantes com motivações e características bem definidas",
            "Você captura as fraquezas identificadas como requisitos de segurança"
         ],
         "Você testa aplicativos automaticamente para regressões de segurança?":[
            "Você consistentemente escreve testes para todos os bugs identificados (possivelmente excedendo um limite de gravidade pré-definido)",
            "Você coleta testes de segurança em um conjunto de testes que faz parte da estrutura de teste de unidade existente"
         ],
         "Você realiza negação de serviço e testes de estresse de segurança?":[
            "Testes de estresse visam recursos de aplicativos específicos (por exemplo, exaustão de memória ao salvar grandes quantidades de dados em uma sessão do usuário)",
            "Você projeta testes em torno de personas relevantes com capacidades bem definidas (conhecimento, recursos)",
            "Você alimenta os resultados de volta para as práticas de Design"
         ],
         "Você verifica aplicativos com ferramentas automatizadas de teste de segurança?":[
            "Você gera entradas dinamicamente para testes de segurança usando ferramentas automatizadas",
            "Você escolhe as ferramentas de teste de segurança de acordo com a arquitetura e a pilha de tecnologia da organização e equilibra a profundidade e a precisão da inspeção com a usabilidade das descobertas para a organização"
         ],
         "Você revisa manualmente a qualidade de segurança de componentes de alto risco selecionados?":[
            "Existem critérios para ajudar o revisor a se concentrar em componentes de alto risco",
            "Pessoal qualificado realiza revisões seguindo diretrizes documentadas",
            "Você aborda as descobertas de acordo com a política de gerenciamento de defeitos da organização"
         ],
         "Você personaliza as ferramentas de segurança automatizadas para seus aplicativos e pilhas de tecnologia?":[
            "Você ajusta e seleciona os recursos da ferramenta que correspondem à sua aplicação ou pilha de tecnologia",
            "Você minimiza falsos positivos silenciando ou filtrando automaticamente avisos irrelevantes ou descobertas de baixa probabilidade",
            "Você minimiza falsos negativos aproveitando extensões de ferramentas ou DSLs para personalizar ferramentas para seu aplicativo ou padrões organizacionais"
         ],
         "Você realiza testes de penetração para seus aplicativos em intervalos regulares?":[
            "O teste de penetração usa casos de teste de segurança específicos do aplicativo para avaliar a segurança",
            "O teste de penetração procura problemas técnicos e lógicos no aplicativo",
            "As partes interessadas revisam os resultados do teste e os tratam de acordo com o gerenciamento de riscos da organização",
            "Pessoal qualificado realiza testes de penetração"
         ],
         "Você integra testes de segurança automatizados no processo de criação e implantação?":[
            "As partes interessadas de gerenciamento e negócios rastreiam e revisam os resultados dos testes durante todo o ciclo de desenvolvimento",
            "Você mescla os resultados do teste em um painel central e os alimenta no gerenciamento de defeitos"
         ],
         "Você usa os resultados dos testes de segurança para melhorar o ciclo de vida do desenvolvimento?":[
            "Você usa os resultados de outras atividades de segurança para melhorar o teste de segurança integrado durante o desenvolvimento",
            "Você revisa os resultados dos testes e os incorpora em treinamentos de conscientização de segurança e manuais de testes de segurança",
            "As partes interessadas revisam os resultados do teste e os tratam de acordo com o gerenciamento de riscos da organização"
         ],
         "Você analisa dados de log para incidentes de segurança periodicamente?":[
            "Você tem um ponto de contato para a criação de incidentes de segurança",
            "Você analisa os dados de acordo com os períodos de retenção de dados de log",
            "A frequência dessa análise está alinhada com a criticidade de suas aplicações"
         ],
         "Você responde a incidentes detectados?":["Você tem uma pessoa definida ou função de tratamento de incidentes",
         "Você documenta incidentes de segurança"
      ],
      "Você segue um processo documentado para detecção de incidentes?":[
         "O processo tem um proprietário dedicado",
         "Você armazena a documentação do processo em um local acessível",
         "O processo considera um caminho de escalonamento para análise posterior",
         "Você treina os funcionários responsáveis pela detecção de incidentes neste processo",
         "Você tem uma lista de verificação de possíveis ataques para simplificar a detecção de incidentes"
      ],
      "Você usa um processo repetível para tratamento de incidentes?":[
         "Você tem uma classificação de incidente acordada",
         "O processo considera Root Case Analysis para incidentes de alta gravidade",
         "Os funcionários responsáveis pela resposta a incidentes são treinados neste processo",
         "Ferramentas de análise forense estão disponíveis"
      ],
      "Você revisa e atualiza o processo de detecção de incidentes regularmente?":[
         "Você realiza revisões pelo menos anualmente",
         "Você atualiza a lista de verificação de possíveis ataques com dados externos e internos"
      ],
      "Você tem uma equipe dedicada de resposta a incidentes disponível?":[
         "A equipe realiza a análise de causa raiz para todos os incidentes de segurança, a menos que haja um motivo específico para não fazê-lo",
         "Você revisa e atualiza o processo de resposta pelo menos anualmente"
      ],
      "Você fortalece as configurações dos principais componentes de suas pilhas de tecnologia?":[
         "Você identificou os principais componentes em cada pilha de tecnologia usada",
         "Você tem um padrão de configuração estabelecido para cada componente-chave"
      ],
      "Você identifica e corrige componentes vulneráveis?":[
         "Você tem uma lista atualizada de componentes, incluindo informações de versão",
         "Você revisa regularmente as fontes públicas em busca de vulnerabilidades relacionadas aos seus componentes"
      ],
      "Você tem linhas de base de proteção para seus componentes?":[
         "Você atribuiu um proprietário para cada linha de base",
         "O proprietário mantém suas linhas de base atribuídas atualizadas",
         "Você armazena linhas de base em um local acessível",
         "Você treina os funcionários responsáveis pelas configurações nessas linhas de base"
      ],
      "Você segue um processo estabelecido para atualizar componentes de suas pilhas de tecnologia?":[
         "O processo inclui informações do fornecedor para patches de terceiros",
         "O processo considera fontes externas para coletar informações sobre ataques de dia zero e inclui etapas apropriadas de mitigação de risco",
         "O processo inclui orientação para priorizar atualizações de componentes"
      ],
      "Você monitora e reforça a conformidade com linhas de base de endurecimento?":[
         "Você realiza verificações de conformidade regularmente, de preferência usando automação",
         "Você armazena os resultados da verificação de conformidade em um local acessível",
         "Você segue um processo estabelecido para lidar com não conformidades relatadas",
         "Você revisa cada linha de base pelo menos anualmente e a atualiza quando necessário"
      ],
      "Você avalia regularmente os componentes e analisa o status do nível do patch?":[
         "Você atualiza a lista com componentes e versões",
         "Você identifica e atualiza as atualizações ausentes de acordo com o SLA existente",
         "Você revisa e atualiza o processo com base no feedback das pessoas que realizam o patch"
      ],
      "Você protege e trata as informações de acordo com os requisitos de proteção dos dados armazenados e processados em cada aplicativo?":[
         "Você conhece os elementos de dados processados e armazenados por cada aplicativo",
         "Você conhece o tipo e o nível de sensibilidade de cada elemento de dados identificado",
         "Você tem controles para impedir a propagação de dados confidenciais não higienizados da produção para ambientes inferiores"
      ],
      "Você identifica e remove sistemas, aplicativos, dependências de aplicativos ou serviços que não são mais usados, chegaram ao fim da vida útil ou não são mais desenvolvidos ou suportados ativamente?":[
         "Você não usa aplicativos ou dependências sem suporte",
         "Você gerencia a migração de clientes/usuários de versões anteriores para cada produto e grupo de clientes/usuários"
      ],
      "Você mantém um catálogo de dados, incluindo tipos, níveis de sensibilidade e locais de processamento e armazenamento?":[
         "O catálogo de dados é armazenado em um local acessível",
         "Você sabe quais elementos de dados estão sujeitos a regulamentação específica",
         "Você tem controles para proteger e preservar os dados ao longo de sua vida útil",
         "Você tem requisitos de retenção de dados e destrói backups em tempo hábil após o término do período de retenção relevante"
      ],
      "Você segue um processo estabelecido para remover todos os recursos associados, como parte do descomissionamento de sistemas não utilizados,aplicativos, dependências de aplicativos ou serviços?":[
         "Você documenta o status do suporte para todas as versões lançadas de seus produtos, em um local acessível",
         "O processo inclui substituição ou atualização de aplicativos de terceiros, ou dependências de aplicativos, que atingiram o fim da vida útil",
         "Ambientes operacionais não contêm contas órfãs, regras de firewall ou outros artefatos de configuração"
      ],
      "Você revisa e atualiza regularmente o catálogo de dados e suas políticas e procedimentos de proteção de dados?":[
         "Você automatizou o monitoramento para detectar tentativas ou violações reais da Política de Proteção de Dados",
         "Você tem ferramentas para prevenção de perda de dados, controle de acesso e rastreamento ou detecção de comportamento anômalo",
         "Você audita periodicamente a operação de mecanismos automatizados, incluindo backups e exclusões de registros"
      ],
      "Você avalia regularmente o estado do ciclo de vida e o status do suporte de cada ativo de software e componente de infraestrutura subjacente e estima o fim de sua vida útil?":[
         "Seu processo de gerenciamento de fim de vida é acordado",
         "Você informa os clientes e grupos de usuários sobre os cronogramas de produtos para evitar a interrupção do serviço ou suporte",
         "Você revisa o processo pelo menos anualmente"
         ]
      }
   );
}

export default question_desc