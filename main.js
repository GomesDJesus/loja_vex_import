$(document).ready(function () {
    


    $('#myForm').validate({
      rules: {
        nome: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
          required: true
        },
        mensagem: {
          required: true
          
        }
      },
      messages: {
        nome: {
            required: 'Nome completo é obrigatório',
            minlength: 'O nome deve ter pelo menos 3 caracteres'
        },
        email: {
            required: 'Por favor, insira um endereço de e-mail válido',
            email: 'Por favor, insira um endereço de e-mail válido'
        },
        telefone: {
            required: 'Por favor, insira um número de telefone'
        },
        mensagem: {
            required: 'Por favor, insira uma mensagem'
            
        }
    },
      
      submitHandler: function (form) {
        alert('envio com sucesso, obrigado!');
        form.submit()
      }
    
    });
  });