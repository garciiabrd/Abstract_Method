$(document).ready(function(){
  $("#lanches").hide();
  class LancheBuilder{
    constructor(){
        this.lanche = {};
    }
    
    addPao(pao){
        this.lanche.pao = pao;
        return this;
    }

    addQueijo(queijo){
        this.lanche.queijo = queijo;
        return this;
    }

    addCarne(carne){
        this.lanche.carne = carne;
        return this;
    }

    addVegetais(vegetais){
        this.lanche.vegetais = vegetais;
        return this;
    }

    addMolho(molho){
      this.lanche.molho=molho;
      return this;
    }

    build(){
        return this.lanche;
    }
}

$('#fazerPedido').click(function (){
if(document.getElementById('radio-2').checked || document.getElementById('radio-3').checked ||document.getElementById('radio-1').checked){

var pao=' ';
var carne=' ';
var queijo=' ';
var vegetais=' ';
var molho=' ';

  var msn=document.getElementById('mensagem')
  if(document.getElementById('radio-1').checked){
   pao='Parmezão e Orégano';
  }else if(document.getElementById('radio-2').checked){
    pao='Nove Grãos';
  }else if(document.getElementById('radio-3').checked){
    pao='Italiano';
  }
  if(document.getElementById('checkbox-2').checked){
     carne= carne + ' Frango';
  }
  if(document.getElementById('checkbox-3').checked){
    carne= carne + ' Linguiça';
  }
  if(document.getElementById('checkbox-4').checked){
  carne= carne + ' Vegetariano';
  }
  if(document.getElementById('checkbox-1').checked){
  carne= carne + ' Carne';
  }
  if(document.getElementById('checkbox-5').checked){
    queijo= queijo + ' Cheddar';
  }
  if(document.getElementById('checkbox-6').checked){
    queijo= queijo + ' Suiço';
  }
  if(document.getElementById('checkbox-7').checked){
    queijo= queijo + ' Mussarela';
  }
  if(document.getElementById('checkbox-8').checked){
    molho= molho + ' BBQ';
  }
  if(document.getElementById('checkbox-9').checked){
    molho= molho + ' Chipotle';
  }
  if(document.getElementById('checkbox-10').checked){
    molho= molho + ' Supreme';
  }
  if(document.getElementById('checkbox-11').checked){
    vegetais= vegetais + ' Azeitona';
  }
  if(document.getElementById('checkbox-12').checked){
    vegetais= vegetais + ' Alface';
  }
  if(document.getElementById('checkbox-13').checked){
    vegetais= vegetais + ' Tomate';
  }

 const burger = new LancheBuilder().addPao(pao).addCarne(carne).addQueijo(queijo).addVegetais(vegetais).addMolho(molho).build();

msn.textContent="seu pedido: "+ JSON.stringify(burger);
}
$('#cancelar').click(function(){
  document.getElementById('radio-1').checked=false;
  document.getElementById('radio-2').checked=false;
  document.getElementById('radio-3').checked=false;
  document.getElementById('checkbox-1').checked=false;
  document.getElementById('checkbox-2').checked=false;
  document.getElementById('checkbox-3').checked=false;
  document.getElementById('checkbox-4').checked=false;
  document.getElementById('checkbox-5').checked=false;
  document.getElementById('checkbox-6').checked=false;
  document.getElementById('checkbox-7').checked=false;
  document.getElementById('checkbox-8').checked=false;
  document.getElementById('checkbox-9').checked=false;
  document.getElementById('checkbox-10').checked=false;
  document.getElementById('checkbox-11').checked=false;
  document.getElementById('checkbox-12').checked=false;
  document.getElementById('checkbox-13').checked=false;
}); 
  
  
  
});
});
class Pessoa {
    constructor() {
      this.nome = "";
      this.cargo = "";
      this.cod = "";
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getCargo() {
      return this.cargo;
    }
  
    setCargo(cargo) {
      this.cargo = cargo;
    }
  
    getCod() {
      return this.cod;
    }
  
    setCod(cod) {
      this.cod = cod;
    }
  
    relacao() {
      throw new Error("O método relacao() deve ser implementado por uma subclasse.");
    }
}

class Administrativo extends Pessoa {
    relacao() {
        var nome = document.getElementById("inputNome").value;
        var resultado = document.getElementById("resultado");
        resultado.textContent = nome + " tem relação com a instituição como: Administrativo";
    }
}

class Vestibulando extends Pessoa {
    relacao() {
        var nome = document.getElementById("inputNome").value;
        var resultado = document.getElementById("resultado");
        resultado.textContent = nome + " tem relação com a instituição como: Vestibulando";
    }
}

class Aluno extends Pessoa {
    relacao() {
        var nome = document.getElementById("inputNome").value;
        var resultado = document.getElementById("resultado");
        resultado.textContent = nome + " tem relação com a instituição como: Aluno";
        $('#lanches').show();
    }
}

class Coordenador extends Pessoa {
    relacao() {
        var nome = document.getElementById("inputNome").value;
        var resultado = document.getElementById("resultado");
        resultado.textContent = nome + " tem relação com a instituição como: Coordenador";
    }
}

class Diretor extends Pessoa {
    relacao() {
        var nome = document.getElementById("inputNome").value;
        var resultado = document.getElementById("resultado");
        resultado.textContent = nome +  " tem relação com a instituição como: Diretor";
    }
}

class Professor extends Pessoa {
    relacao() {
        var nome = document.getElementById("inputNome").value;
        var resultado = document.getElementById("resultado");
        resultado.textContent = nome + " tem relação com a instituição como: Professor";
    }
}

function validar() {
        var relacao = document.getElementById("inputTipo").value;
        var resultado = document.getElementById("resultado");
        var nome = document.getElementById("inputNome").value;
      if (relacao === "administrador") {
        const adm = new Administrativo();
        return adm.relacao();
      } else if (relacao === "aluno") {
        const aluno = new Aluno();
        return aluno.relacao();
      } else if (relacao === "coordenador") {
        const coord = new Coordenador();
        return coord.relacao();
      } else if (relacao === "diretor") {
        const diretor = new Diretor();
        return diretor.relacao();
      } else if (relacao === "professor") {
        const prof = new Professor();
        return prof.relacao();
      } else if (relacao === "vestibulando") {
        const vest = new Vestibulando();
        return vest.relacao();
      } else {
        resultado.textContent = nome + " não tem nenhuma relação com a instituição, acompanhar até a secretaria";
      }


    }

    



