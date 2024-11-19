document.getElementById('resumeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Coleta os dados do formulário
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const cep = document.getElementById('cep').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const nationality = document.getElementById('nationality').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const relationship = document.getElementById('relationship').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;
  const languages = document.getElementById('languages').value;
  const courses = document.getElementById('courses').value;
  const skills = document.getElementById('skills').value;
  const projects = document.getElementById('projects').value;

  // Gera o conteúdo do currículo com quebras de linha
  const resumeContent = `
      Informações Pessoais\n
      Nome: ${name}\n
      Profissão: ${profession}\n
      Email: ${email}\n
      Telefone: ${phone}\n
      CEP: ${cep}\n
      Endereço: ${address}\n
      Cidade: ${city}\n
      Estado: ${state}\n
      Nacionalidade: ${nationality}\n
      Idade: ${age}\n
      Gênero: ${gender}\n
      Relacionamento: ${relationship}\n
      Experiência Profissional\n
      ${experience}\n
      Formação Acadêmica\n
      ${education}\n
      Idiomas\n
      ${languages}\n
      Cursos\n
      ${courses}\n
      Habilidades\n
      ${skills}\n
      Projetos\n
      ${projects}
  `;

  // Substitui as quebras de linha por <br> no conteúdo
  const formattedContent = resumeContent.replace(/\n/g, '<br>');

  // Exibe o conteúdo formatado na página
  document.getElementById('resumeContent').innerHTML = formattedContent;

  // Exibe a div do currículo e o botão de download
  document.getElementById('resume').style.display = 'block';
  document.getElementById('downloadBtn').style.display = 'block';
});

// Função para baixar o currículo estilizado em PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
  const element = document.getElementById('resume'); // Pega o conteúdo da div "resume"

  // Opções básicas para o PDF
  const options = {
      margin: 0.3,
      filename: 'curriculo.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Converte o HTML estilizado em PDF
  html2pdf().from(element).set(options).save();
});
