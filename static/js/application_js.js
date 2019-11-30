function monta_url_param(){
	//console.log('ESTOU AQUI!')

//BIBLIOTECA QUE RETORNA AS PROPRIEDADES DAS MÍDIAS E CAMPANHAS SELECIONADAS
tradutor_seletor = {
	'midia1':'md1',
	'midia2':'md2',
	'midia3':'md3',
	'campanha1':'cmp1',
	'campanha2':'cmp2',
	'campanha3':'cmp3'
}


tot_values = $('input')
monta_url = ''
for(var ip = 0; ip < tot_values.length; ip++){
	//ABAIXO O VALOR E A PROPRIEDADE ID DOS VALORES DE MÍDIA
	id_valor_midia = tot_values[ip].getAttribute('id')
	valor_midia = tot_values[ip].value

	//RETORNA O VALOR SELECIONADO NA PÁGINA E O TRADUZ DE ACORDO COM AS REGRAS DECLARADAS ACIMA
	id_select_midia = $('#'+String(id_valor_midia.replace('valor_', 'select_'))).val()
	valor_select_midia = tradutor_seletor[String(id_select_midia)]

	if(valor_midia.length>0){
		vl_para_append = String(valor_select_midia)+'='+valor_midia+'&'
		monta_url+=vl_para_append
	}
}

monta_url = monta_url.slice(0, -1)
console.log(monta_url)
return monta_url
}