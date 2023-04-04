var nomeAleatorio = 'Breno Kauan'

if (true) {
    var HTML = '<div class="cont-info-turma">';

        HTML += '<ol>';

            HTML += '<li> Nome completo: </li>'
            HTML += '<div class="inp-style">'
                HTML += '<p>' + nomeAleatorio + '</p>'
            HTML += '</div>'
            
            HTML += '<li class="inp-2"> Alguma cooisa: </li>'
            HTML += '<div class="inp-style">'
                HTML += '<p>' + nomeAleatorio + '</p>'
            HTML += '</div>'

            // em uma unica linha

            HTML += '<div class="box-line">'
                HTML += '<div class="info-inp-line">'
                    HTML += '<li class="inp-style-2"> Em uma linha </li>'
                    HTML += '<div class="inp-style">'
                        HTML += '<p>' + nomeAleatorio + '</p>'
                    HTML += '</div>'
                HTML+= '</div>'
            HTML+= '</div>'

            HTML += '<div class="box-line space-line">'
                HTML += '<div class="info-inp-line">'
                    HTML += '<li class="inp-style-2"> Em uma linha </li>'
                    HTML += '<div class="inp-style">'
                        HTML += '<p>' + nomeAleatorio + '</p>'
                    HTML += '</div>'
                HTML+= '</div>'
            HTML+= '</div>'

            // fechado em uma unica linha

            HTML += '<li class="inp-2"> Alguma cooisa: </li>'
            HTML += '<div class="inp-style">'
                HTML += '<p>' + nomeAleatorio + '</p>'
            HTML += '</div>'



        HTML += '</ol>';

    HTML += '</div>';

    var HTML2 = '<div class="cont-uc-turma">';

        HTML2 += '<h3> UCs cadastradas </h3>'

        HTML2 += '<ol>';
            HTML2 += '<li>' + nomeAleatorio + '</li>';
            HTML2 += '<li>' + nomeAleatorio + '</li>';
            HTML2 += '<li>' + nomeAleatorio + '</li>';
            HTML2 += '<li>' + nomeAleatorio + '</li>';
        HTML2 += '</ol>'

    HTML2 += '</div>';

    HTML += HTML2

  
    var conteudo = document.querySelector('.conteudo');
    conteudo.innerHTML =  HTML;

  }
  