// scripts.js - máscaras simples
document.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  if(cpfInput) {
    cpfInput.addEventListener('input', () => {
      cpfInput.value = cpfInput.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    });
  }

  if(telInput) {
    telInput.addEventListener('input', () => {
      telInput.value = telInput.value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    });
  }

  if(cepInput) {
    cepInput.addEventListener('input', () => {
      cepInput.value = cepInput.value
        .replace(/\D/g, '')
        .replace(/^(\d{5})(\d{3})$/, '$1-$2');
    });
  }
});
