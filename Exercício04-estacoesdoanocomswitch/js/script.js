        function estacao() {

            let mes = prompt('Digite o mês em extenso(ex:setembro)');
            let saida = document.querySelector('section#saida')
            let estacao
            
            
            switch (mes.toUpperCase()){
            case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
                estacao = 'INVERNO'
            break
            case 'ABRIL': case 'MAIO': case 'JUNHO':
                estacao = 'PRIMAVERA'
            break
            case 'JULHO': case'AGOSTO': case 'SETEMBRO':
                estacao = 'VERÃO 8)'
            break
            case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
                estacao = 'OUTONO'
            break
            default: 
            estacao = 'Estação indefinida'
            break
            }
            saida.innerHTML = `<p>No mês de ${mes}, estaremos na estação <strong>${estacao}</strong></p>`
        }
   