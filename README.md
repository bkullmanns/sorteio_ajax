# sorteio_ajax
Simples algoritmo de sorteio de número usando Ajax. Responsivo usando Tailwind.

Pra rodar: Clonar o repositório e rodar "npm install" pra instalar as dependências node_modules.
Inicializar servidor PHP.
"npm run start" roda o projeto com o CSS em tamanho normal e "npm run build" minimiza o CSS.

<ul>Das dependências:
  <li>CSS Nano minifica o CSS;</li>
  <li>Tailwind como lib CSS;</li>
<li>PurgeCSS mapeia o HTML procurando pelo que foi usado do Tailwind e gera o CSS só baseado no que foi usado (não carrega todo CSS), otimizando tamanho do CSS;</li>
  <li>PostCSS pra uso do Tailwind  e do Purge;</li>
  <li>Autoprefixer reseta propriedades CSS;</li>
</ul>

