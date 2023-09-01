var listaProdutos = [    
    {id: 1,
     Nome: "Suco",
     Preco: 4.50
    },
    {id: 2,
     Nome: "Leite",
     Preco: 5.50
    },
    {id: 3,
     Nome: "Arroz",
     Preco: 25.00
    },
    {id: 4,
     Nome: "Feijão Carioquinha",
     Preco: 7.00
    }          
   
];

var novoProduto = function (id, Nome, Preco){
    this.id = id;
    this.Nome = Nome;
    this.Preco = Preco
};

renderizaTabela();
   

function renderizaTabela(){

    var fProdutos = document.getElementById("produtos").innerHTML;
    fProdutos = "";

    for (i=0;i <= listaProdutos.length -1;i++){
        fProdutos += "<tr  id=" +'item-Produto' + " value=" + listaProdutos[i].id + "> ";
        fProdutos += "<td  id=" +'"primeiraColuna"' + " value=" + listaProdutos[i].id + ">" + listaProdutos[i].id + " </td> ";    
        fProdutos += "<td  id=" +'"demaisColunas"' + " value='" + listaProdutos[i].Nome + "'>" + listaProdutos[i].Nome + "</td> ";        
        fProdutos += "<td  id=" +'"demaisColunas"' + " value=" + listaProdutos[i].Preco  + ">" +  listaProdutos[i].Preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "</td> ";            
        fProdutos += "<td id=" +'"colunaBotao"' + " value=" + listaProdutos[i].id + " <button class=" + 'button1' + 
        " type="+ 'button' + " onclick=" + 'removeItem(event)' + " >Exclui Item</button> </td>";    
        fProdutos += "</tr> ";    
    }
    
    document.getElementById("produtos").innerHTML = fProdutos;    
    
};

function limpaCampos(){
    const formulario = document.querySelector('#formAdiciona');
    formulario.reset();
}

function mostraFormulario(){
    document.getElementById("formAdiciona").removeAttribute("hidden");

    document.getElementById("fid").value = retornaMaiorId(listaProdutos) + 1;

}

function fechaFormulario(){
    document.getElementById("formAdiciona").setAttribute("hidden","");
}
function salvaProduto(){
    let ok = true;

    const produto = document.getElementById("fnome");        
    ok = (produto.value != "");   

    const preco = document.getElementById("fpreco");    

    ok = (preco.value != "");    

    if (ok==true){

        let novoitem = new novoProduto;

        console.log(novoitem);                        
        console.log(novoProduto);                                

        novoitem["id"] = parseInt(document.getElementById("fid").value) ;
        novoitem["Nome"] = produto.value;
        novoitem["Preco"] = preco.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});        

        console.log(novoitem.length);

        listaProdutos.push(novoitem);

        renderizaTabela();
        limpaCampos();
        document.getElementById("fid").value = retornaMaiorId(listaProdutos) + 1;        

    }
    else
    {
        if (produto.value == ""){
            alert("Nome do Produto esta vazio.");
            produto.focus();
        }
        else if (preoco.value == ""){ 
            alert("Preço do Produto esta vazio.");
            produto.focus();
        }   
    } 

  
}

function removeItem(r){
    let resultado = confirm("Deseja excluir o Produto Selecionado ? ");    

//    x[3].getAttribute("value")

    var elementoClicado = r.target;

    var paiElementoclicado = elementoClicado.parentNode;    
    
    if (resultado == true){
        paiElementoclicado.remove();
        alert("Item excluído com sucesso!");
    }
}

function retornaMaiorId(produtos){
    const maxid = produtos.reduce(function(prev, current) { 
	return prev.id > current.id ? prev : current; 
    });
    
    return maxid.id;
}