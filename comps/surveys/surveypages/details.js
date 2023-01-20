var tosend = {
  name: "Details",
  elements: [{
    
      "type": "text",
      "name": "Nome da Empresa",
     },
     {
      "type": "text",
      "name": "Nome do Projeto"
     },
     {
      "type": "text",
      "name": "Descrição do Projeto"
     }
    ],
    "description": "Estes são opcionais, o único uso para eles será ajudar a categorizar os resultados que você recebe, por exemplo: título do documento de resultados ETC "

}




const detailsJSON = () => {
    return ( 
    tosend
     );
}
 
export default detailsJSON