export default class assessmentCalculator{
    constructor(answerValues){
        this.answerValues = answerValues;
        this.sammModel = {
            "Governança":{
                "totalScore":0,
                "practices":{
                    "Estratégia e Métricas":{
                        "answers": this.getAnswerMap(1),
                        "score":0
                    },
                    "Política e Conformidade":{
                            "answers":this.getAnswerMap(7),
                            "score":0
                        },
                    "Educação e Orientação":{
                        "answers":this.getAnswerMap(13),
                        "score":0
                    }
                }
            
            },
            "Design":{
                "totalScore":0,
                "practices":{
                    "Avaliação de Ameaça":{
                        "answers": this.getAnswerMap(19),
                        "score":0
                    },
                    "Requisitos de Segurança":{
                            "answers":this.getAnswerMap(25),
                            "score":0
                        },
                    "Arquitetura de Segurança":{
                        "answers":this.getAnswerMap(31),
                        "score":0
                    }
                }
            },
            "Implementação":{
                "totalScore":0,
                "practices":{
                    "Construção Segura":{
                        "answers": this.getAnswerMap(37),
                        "score":0
                    },
                    "Implantação Segura":{
                            "answers":this.getAnswerMap(43),
                            "score":0
                        },
                    "Gerenciamento de Defeitos":{
                        "answers":this.getAnswerMap(49),
                        "score":0
                    }
                }
            },
            "Verificação":{
                "totalScore":0,
                "practices":{
                    "Avaliação de Arquitetura":{
                        "answers": this.getAnswerMap(55),
                        "score":0
                    },
                    "Teste de Requisitos":{
                            "answers":this.getAnswerMap(61),
                            "score":0
                        },
                    "Teste de Segurança":{
                        "answers":this.getAnswerMap(67),
                        "score":0
                    }
                }
            },
            "Operações":{
                "totalScore":0,
                "practices":{
                    "Gerenciamento de Incidentes":{
                        "answers": this.getAnswerMap(73),
                        "score":0
                    },
                    "Gestão de Ambiente":{
                            "answers":this.getAnswerMap(79),
                            "score":0
                        },
                    "Gerenciamento de Operações":{
                        "answers":this.getAnswerMap(85),
                        "score":0
                    }
                }
            }
        }
        this.overallScore = null;
        this.responseCount = {
            "Não":0,
            "Sim, para alguns":0,
            "Sim, para a maioria": 0,
            "Sim, para todos":0}
        this.businessFunctionNames = ["Governance", "Design", "Implementação", "Verificação", "Operações"]
        this.practiceNames = []
        this.businessFunctionScores = []
        this.practiceScores = []
    }
    

    getAnswerMap(start){
        // start is the question number in the assessment - this is so it stays consistent with the answerValues data struct
        const answerMap = new Map()
            for(let i =start; i<start+6;i++){
                var key = 'question' + i;
                // answerMap[key] = this.answerValues[key];
                answerMap.set(key, this.answerValues[key]);
            }
        return answerMap;
    }

    
    isPracticeCompleted(values){
        // Checks if value array has null values which means user hasn't completed a practice
        if(values.some(el=>el == null)){
            return false
        } else{
            return true
        }
    }

    sortResponseCount(values){
        for(let i =0; i<values.length;i++){
            if(values[i] == 0){
                this.responseCount["Não"]++
            }
            if(values[i] == 0.25){
                this.responseCount["Sim, para alguns"]++
            }
            if(values[i] == 0.5){
                this.responseCount["Sim, para a maioria"]++
            }
            if(values[i] == 1){
                this.responseCount["Sim, para todos"]++
            }
        }
    }
    

    computeResults(){
        for (const bussFunc in this.sammModel){
            
            for (const practice in this.sammModel[bussFunc]["practices"]){
                this.practiceNames.push(practice);
                // Answers is map containing assessmentState data only for that practice
                var answers = this.sammModel[bussFunc]["practices"][practice]["answers"];
                // get answer keys (this is the question range for the practice)
                var questions = Array.from( answers.keys());
                var question_values = Array.from( answers.values());
                if (this.isPracticeCompleted(question_values)){
                    this.sortResponseCount(question_values);
                    var lvl1 = (question_values[0] + question_values[3]) / 2
                    var lvl2 = (question_values[1] + question_values[4]) / 2
                    var lvl3 = (question_values[2] + question_values[5]) / 2
                    var score = lvl1 + lvl2 + lvl3;
                    if (bussFunc === "Implementation"){
                        console.log('practice',practice, 'score', score);
                    }
                    this.sammModel[bussFunc]["practices"][practice]["score"] = score
                    this.sammModel[bussFunc]["totalScore"] += score / 3
                    // this.overallScore += this.sammModel[bussFunc]["totalScore"]
                    this.practiceScores.push(score)
                } else{
                    this.practiceScores.push(0);
                }
                
            }
            this.businessFunctionScores.push(this.sammModel[bussFunc]["totalScore"]);
            this.overallScore += this.sammModel[bussFunc]["totalScore"] / 5;
        }

    }



}
