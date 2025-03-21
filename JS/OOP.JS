const pessoa = {
    nome:'franklim',
    canal:'cfbcursos',
    curso:'javascript',
    aulas:{
        aula01:'introducao',
        aula02:'variaveis',
        aula03:'condicional'
    }
}

const string_pessoa = '{"nome":"franklim","canal":"cfbcursos","curso":"javascript","aulas":{"aula01":"introducao","aula02":"variaveis","aula03":"condicional"}}'

const s_json = JSON.stringify(pessoa)
const o_json = JSON.parse(string_pessoa)

console.log(s_json)

console.log(o_json)