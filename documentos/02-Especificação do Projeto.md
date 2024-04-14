# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Viajante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">João, 37 anos, é vendedor em uma empresa que vende
produtos de limpeza para supermercados, por isso, ele está
sempre na estrada, pois, precisa oferecer seus produtos para
os possíveis clientes, como faz viagens longas, sempre
precisa de um local para dormir. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Encontrar serviços básicos confiáveis, como alimentação,
banheiros, hospedagens, farmácias, acesso à internet (Wi-Fi), postos de
gasolina entre outros.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2: Migrante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Ana, 25 anos, conseguiu um emprego em uma Multinacional
em São Paulo, por isso, teve que mudar de estado e ainda
está se adaptando à nova cidade e precisa saber onde pegar o metrô, para se locomover pela cidade. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Encontrar serviços básicos de uso diário, como a localização
das linhas do metrô, supermercados e locais de lazer.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 3: Turista </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Ana Clara, 30 anos, gosta muito de viajar em suas férias e
procura sempre economizar com a alimentação em suas
viagens, para que a alimentação não pese em seu orçamento,
procura restaurantes que oferecem a alimentação mais em
conta. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Ter com antecedência informações como média de
preços dos restaurantes.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO "USUÁRIO" | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO`                 |
|--------------------|-------------------------------------|----------------------------------|
| Maria              | Como turista preciso encontrar durante meu trajeto, lojas de conveniência, para algumas comprinhas básicas.                            | Poder fazer algumascompras durante a viagem.                              |
| Ana                | Me mudei de Minas para São Paulo e preciso saber onde pegar o metrô.     | Para se locomover na cidade, pois, além de ser mais econômico é mais rápido.
|João  | Como estou viajando a trabalho e minha viagem é longa, preciso de um lugar para me hospedar durante a noite, bem como vários outros serviços básicos como: banheiros, acesso à internet, alimentação, farmácias entre outros. |Continuar o trajeto com segurança e sem sono.  
|Pedro|Estou em viagem e preciso ter um panorama geral das principais paradas pelo caminho, para me alimentar e usar o banheiro.|Programar quais serão as melhores paradas durante meu trajeto.|
|Luísa|Sou turista e estou na estrada, desejo saber onde encontro um serviço de mecânico mais próximo|Apesar da revisão, meu carro está apresentando mau funcionamento.|
|Carlos |Trabalho com vendas e sempre estou na estrada, por isso, preciso saber os horários de funcionamento dos postos de gasolina, pois viajo sempre à noite|Saber onde posso abastecer durante o trajeto, no período noturno.|
|Jean |Estou de passagem pelo Rio de Janeiro e desejo ir a um ponto turístico e bem movimentado à noite. |Conhecer o local, pessoas novas e me divertir.|
|Felipe|Recentemente me mudei de São Paulo para Pernambuco e preciso saber qual o melhor supermercado próximo a minha residência. |fazer  as minhas compras com o melhor custo-benefício possível, e com variedades de opções.|
|Ana Clara|Estou em viagem de férias e quero saber as opções de restaurantes próximos ao hotel onde estou hospedada, para escolher um para almoçar|Como o gasto com as minhas refeições irão impactar diretamente em minhas finanças, preciso de restaurantes com preços acessíveis. |  
|Eduardo |Estou me mudando para o Rio Grande do Sul e desejo saber onde ficam os locais de lazer no bairro onde vou morar.|Gosto de locais abertos para me exercitar e me divertir. |




## Requisitos do Projeto



### Requisitos Funcionais


|ID | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | Na aplicação deve conter um campo de pesquisa.| Alta  | 
| RF-02   |A aplicação deverá ter um filtro para mostrar média de preço por estabelecimento.|Média|
|RF-03 |A aplicação deve fornecer horário de funcionamento dos estabelecimentos.|Alta|
|RF-04 |A aplicação deve permitir fazer avaliação dos estabelecimentos.|Média|
|RF-05 |A aplicação deve permitir ao usuário criar uma conta. |Alta |
|RF-06 |A aplicação deve ter a funcionalidade de salvar as pesquisas.|Média|
|RF-07 |A aplicação deve fazer filtro por tipo de estabelecimento. |Alta |
|RF-08 |A aplicação deve permitir inserção de fotos das cidades e estabelecimentos. |Baixa |
|RF-09 |A aplicação deve permitir fazer avaliações das cidades e estabelecimentos.|Baixa |
|RF-10 |A aplicação deve permitir criar senha quando esquecida clicando em “esqueci a senha”. |Alta |
|RF-11|A aplicação deve permitir a geolocalização do usuário. |Alta |
|RF-12 |A aplicação deve conter um campo de busca por avaliações.|Média|
|RF-13 |A aplicação deve permitir alterar o idioma de português para inglês e vice-versa. |Alta |

**Prioridade: Alta / Média / Baixa.



### Requisitos não Funcionais



| ID   | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF-01 |A aplicação deve ser responsiva executando de forma consistente em dispositivos móveis. |Alta |
|RNF-02 |A aplicação deve ser compatível com os seguintes navegadores: Google Chrome, Firefox e Microsoft Edge. |Média|
|RNF-03 |A aplicação deve atender o mínimo de 200 acessos simultâneos sem a degradação do desempenho. |Alta |
|RNF-04 |A aplicação deve ser compatível com os sistemas Android e iOS. |Alta |
|RNF-05 |A aplicação deve apresentar-se disponível 24h por dia, 7 dias por semana. |Alta |
|RNF-06 |A aplicação deve manter os dados em segurança. |Alta |
|RNF-07 |A aplicação deve ser escalável, aumentar ou diminuir sua capacidade conforme a necessidade. |Alta |
|RNF-08 |A aplicação deve ser de fácil manutenção. |Média |

**Prioridade: Alta / Média / Baixa.


