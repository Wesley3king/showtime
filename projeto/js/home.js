//main project olnly js
// ordem de allvar nome pequeno/nome grande/nome padrao/img/links/provedor link/provedor name/sinopse
var allvar = [['tsuki ga', 'kimi to boku', 'the tutorial','fukushuu','black kanojo','black clover','apocalyptic','hataraku','gods reb','imamade','empire ro','that I r','kage no','koi ka mah','virus girlf','my yandere','negai o k','parallel p','rakudai k','rein arist','tensei kizo','son in law','son-in-law','tsumi to','the way to','the rise of','ugirareta','tantei wa','kanojo mo','chainsaw','mahouka','I swear that','jungle juice','houkago','koibito wo','naze to boku','my wife is','a perverts d','solo leveling','martial peak','my w is dq','the beginning','kaifuku','build own','gisele blo','strongest d','mushoku t','ouritsu mah','second com','tokyo gh','young bs','wonder n','girl is d','elf who l','n demon g l','Hari dorm','board di','prison l','two house','tales of d','game s bad','seeking t fly','saikyou no maj'],['tsuki ga michibiku isekai douchuu','kimi to boku no saigo no senjou, aruiwa sekai ga hajimaru seisen','the tutorial tower of the advanced player','fukushuu wo koinegau saikyou yuusha wa, yami no chikara de senmetsu musou suru','black kanojo','black clover','apocalyptic super system','hataraku maou-sama!','gods reborn','imamade ichido mo onnaatsukai sareta koto ga nai onna kishi wo onnaatsukai suru manga','is there an empty room?','a world that i rule','kage no jitsuryokusha ni naritakute!','koi ka mahou ka wakaranai!','my girlfriend is a zombie virus girlfriend','my yandere girlfriend wont let me rest in peace','negai o kanaete moraou to akuma o shoukan shitakedo, kawaikattanode kekkonshimashita ~akuma no niidzuma~','parallel paradise','rakudai kenja no gakuin musou: nidome no tensei, s-rank cheat majutsushi boukenroku','reincarnated as an aristocrat with an appraisal skill','tensei kizoku no isekai boukenroku: jichou wo shiranai kamigami no shito','strongest hired son in law','son-in-law above them all','tsumi to kai','the way to protect the female lead s older brother','rise of the demon king','uragirareta s-rank boukensha no ore wa, ai suru dorei no kanojora to tomo ni dorei dake no harem guild wo tsukuru','tantei wa mou, shindeiru','kanojo mo kanojo','chainsaw man edi????o colorida','mahouka koukou no rettousei - nyuugaku-hen','eu juro que te amo i swear that i love you','jungle juice','houkago no goumon shoujo','koibito wo netorare, yuusha party kara tsuihou sa retakedo, ex skill - kotei dameeji - ni mezamete muteki no sonzai ni. Saa, fukushuu o hajimeyou.','naze boku no sekai wo daremo oboeteinai no ka?','my wife is actually the emperor','a pervert???s daily life a perverts daily life','solo leveling','martial peak','my wife is a demon queen','the beginning after the end','kaifuku jutsushi yarinaoshi','building owner','giselle s blood','i, the strongest demon, have regained my youth?!','mushoku tensei: isekai ittara honki dasu','ouritsu mahou gakuen no saikasei: slum agari no saikyou mahoushi, kizoku darake no gakuen de musou suru','the second coming of gluttony','tokyo ghoul','young boss','wonderful new world','my girlfriend is a dragon','elf who likes to be humiliated','i m really not the demon god s lackey','hari dormitory','boarding diary','prison lab','two households','tales of demons and gods','the otome game???s bad ending','seeking the flying sword path','maou-gun saikyou no majutsushi wa ningen datta'],['tsuki ga', 'kimi to boku', 'the tutorial','fukushuu','black kanojo','black clover','apocalyptic','hataraku','gods reb','imamade','empire ro','that i r','kage no','koi ka mah','virus girlf','my yandere','negai o k','parallel p','rakudai k','rein arist','tensei kizo','son in law','son-in-law','tsumi to','the way to','the rise of','ugirareta','tantei wa','kanojo mo','chainsaw','mahouka','I swear that','jungle juice','houkago','koibito wo netorare','naze to boku','my is actually e','a perverts da','solo leveling','martial peak','my wife is de','the beginning after','kaifuku j','build owner','giselles b','strongest demon','mushoku tensei','ouritsu mahou','the second c','tokyo ghoul','young boss','wonder n w','my girlf dragon','elf who l h','demon g lackey','hari dormitory','boarding diary','prison lab','two househol','tales of d and','game???s bad end','seeking the flyi','saikyou no majuts'],['external_cover.jpg','kimitoboku.jpg','thetutorial.jpg','fukushuu.jpg','blackkanojo.jpg','blackclover.jpg','apocaliptic.jpg','hant.jpg','gods.jpg','menina.jpg','empireeoom.jpg','that.jpeg','bruxas.jpg','external.jpg','virus.jpg','mm.jpg','queen.jpg','parallelparadise.jpg','magia.jpg','nemsei.jpg','kkk.jpg','son.jpg','soninlaw.jpg','tsumi.jpg','corea.jpg','riseofdemon.jpg','uragi.jpg','tantei.jpg','kanojo.jpg','chainsaw.jpg','mahouka.jpg','iswear.jpeg','jungle-juice-manga.jpg','houkago.jpg','koibitonetorare.jpg','naze.jpg','mywife.jpg','perverts.jpg','solo.jpg','martial.jpg','demonqueen.jpg','thebenning.jpg','kaif.jpg','building.jpg','giselleb.jpg','furry.jpg','mushoku.jpg','vaisabe.jpg','dontknow.jpg','tokyoghoul.jpg','youngb.jpg','desc0.jpg','loira.jpg','elfdm.jpg','otbs.jpg','hari.jpg','image0.jpg','prison.jpg','Twohouse.jpeg','demongod.jpg','purp.jpg','wind.jpg','somegirls.jpg'],['https://leitor.net/manga/tsuki-ga-michibiku-isekai-douchuu/3446','https://leitor.net/manga/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen/7469','https://leitor.net/manga/the-tutorial-tower-of-the-advanced-player/9733','https://leitor.net/manga/fukushuu-wo-koinegau-saikyou-yuusha-wa-yami-no-chikara-de-senmetsu-musou-suru/7917','https://leitor.net/manga/black-kanojo/4221','https://leitor.net/manga/black-clover/1751','https://leitor.net/manga/apocalyptic-super-system/9885','https://leitor.net/manga/hataraku-maou-sama/1106','https://leitor.net/manga/gods-reborn/10880','https://leitor.net/manga/imamade-ichido-mo-onnaatsukai-sareta-koto-ga-nai-onna-kishi-wo-onnaatsukai-suru-manga/7205','https://leitor.net/manga/is-there-an-empty-room/12233','https://leitor.net/manga/a-world-that-i-rule/3400','https://leitor.net/manga/kage-no-jitsuryokusha-ni-naritakute/7927','https://leitor.net/manga/koi-ka-mahou-ka-wakaranai/11441','https://leitor.net/manga/virus-girlfriend/8433','https://leitor.net/manga/yandere-kanojo-ni-nemura-sete-moraenai/12291','https://leitor.net/manga/negai-wo-kanaete-moraou-to-akuma-o-shoukan-shitakedo-kawaikattanode-kekkonshimashita-akuma-no-niizuma-/10602','https://leitor.net/manga/parallel-paradise/5239','https://leitor.net/manga/rakudai-kenja-no-gakuin-musou-nidome-no-tensei-s-rank-cheat-majutsushi-boukenroku/9171','https://leitor.net/manga/tensei-kizoku-kantei-skill-de-nariagaru-jakushou-ryouchi-wo-uketsuida-node-yuushuu-na-jinzai-wo-fuyashiteitara-saikyou-ryouchi-ni-natteta/10933','https://leitor.net/manga/tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito/7450','https://leitor.net/manga/strongest-hired-son-in-law/11202','https://leitor.net/manga/son-in-law-above-them-all/11327','https://leitor.net/manga/tsumi-to-kai-corrupt-pleasure/6912','https://leitor.net/manga/the-way-to-protect-the-female-leads-older-brother/11870','https://leitor.net/manga/rise-of-the-demon-king/7827','https://leitor.net/manga/uragirareta-s-rank-boukensha-no-ore-wa-ai-suru-dorei-no-kanojora-to-tomo-ni-dorei-dake-no-harem-guild-wo-tsukuru/10360','https://leitor.net/manga/tantei-wa-mou-shindeiru/11424','https://leitor.net/manga/kanojo-mo-kanojo/9386','https://leitor.net/manga/chainsaw-man-edicao-colorida/12288','https://leitor.net/manga/mahouka-koukou-no-rettousei-kyuukousen-hen/11297','https://landwebtoons.site/manga/eu-juro-que-te-amo/','https://leitor.net/manga/jungle-juice/11624','https://leitor.net/manga/houkago-no-goumon-shoujo/8706','https://leitor.net/manga/koibito-wo-netorare-yuusha-party-kara-tsuihou-sa-retakedo-ex-skill---kotei-dameeji---ni-mezamete-muteki-no-sonzai-ni-saa-fukushuu-o-hajimeyou-/10623','https://leitor.net/manga/naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka/7283','https://leitor.net/manga/my-wife-is-actually-the-emperor/12122','https://leitor.net/manga/a-perverts-daily-life/8194','https://leitor.net/manga/solo-leveling/7702','https://leitor.net/manga/martial-peak/7302','https://leitor.net/manga/my-wife-is-a-demon-queen/7969','https://leitor.net/manga/the-beginning-after-the-end/7403','https://leitor.net/manga/kaifuku-jutsushi-yarinaoshi/6854','https://leitor.net/manga/building-owner/13236','https://leitor.net/manga/giselles-blood/8854','https://leitor.net/manga/i-the-strongest-demon-have-regained-my-youth/11545','https://leitor.net/manga/mushoku-tensei-isekai-ittara-honki-dasu/2551','https://leitor.net/manga/ouritsu-mahou-gakuen-no-saikasei-slum-agari-no-saikyou-mahoushi-kizoku-darake-no-gakuen-de-musou-suru/12018','https://leitor.net/manga/the-second-coming-of-gluttony/8993','https://leitor.net/manga/tokyo-ghoul/1171','https://leitor.net/manga/young-boss/10877','https://leitor.net/manga/wonderful-new-world/11479','https://leitor.net/manga/my-girlfriend-is-a-dragon/10073','https://leitor.net/manga/elf-who-likes-to-be-humiliated/14227','https://leitor.net/manga/im-really-not-the-demon-gods-lackey/13460','https://leitor.net/manga/hari-dormitory/4203','https://leitor.net/manga/boarding-diary/10903','https://leitor.net/manga/prison-lab/3989','https://pt.manytoon.com/comic/two-household-toon0018/','https://leitor.net/manga/tales-of-demons-and-gods/2412','https://leitor.net/manga/the-otome-games-bad-ending/14213','https://leitor.net/manga/seeking-the-flying-sword-path/8095','https://leitor.net/manga/maou-gun-saikyou-no-majutsushi-wa-ningen-datta/8504'],['https://leitor.net','https://pt.manytoon.com/','https://mangayabu.top','https://landwebtoons.site'],['leitor.net','manytoon(+18)','mangayabu','wonderland'],['O estudante Misumi Makoto ?? invocado para outro mundo, para ser o her??i. Mas a Deusa do outro mundo n??o gosta desse her??i, por isso o envia para o fim do mundo. Agora Makoto tem de encontrar o seu pr??prio caminho nesse novo mundo de fantasia! Moon-led Journey Across Another World ???????????????????????????','O Imp??rio, uma na????o de m??qunias e ci??ncia avan??ada. A Ag??ncia do Cl?? Real Nebulis, uma terra temida como o ???pa??s dos desejos???. Em meio a essa intermin??vel guerra entre os dois, um garoto e uma menina se encontram. A bruxa do gelo reverenciada como a mais forte: A Princesa Aliceliese O jovem espadachim que est?? entre as mais poderosas for??as do Imp??rio: Iska Os dois s??o inimigos nesta guerra. No entanto, assim como o garoto se encanta pela beleza e nobreza da garota, ela se sente atra??da por sua for??a e seu jeito de viver. A coopera????o ?? imposs??vel e n??o existe caminho a seguir exceto passando por cima um do outro.','Um ca??ador est?? preso na Torre do Tutorial j?? fazem 12 anos! Dizem que ?? devido a algum tipo de maldi????o. Ele tem que conclu??-la v??rias e v??rias vezes, sem poder sair de l??. O que o "pobre coitado" ter?? que fazer para sair desse ciclo sem fim?','Raul, que derrotou o rei dem??nio como o her??i mais poderoso deveria ter se tornado o salvador do mundo. Tendo os seus preciosos companheiros e familiares mortos por aristocratas sedentos por poder, ele foi executado por falsas acusa????es atribu??das a ele pela princesa. Mas, antes de sua vida se esvair, o seu cora????o por fim se encheu de escurid??o.','Estou prestes a ser morto, mas me apaixonei pela primeira vez. Exatamente pela garota que quer me matar???','Em um mundo em que a magia reina, algu??m com um poder t??o limitado n??o ?? absolutamente nada! Este ?? Asta, um jovem que sonha em se tornar o ???Mago Imperador???, o maior de todos os magos. Com esfor??o e trabalho duro, ser?? Asta capaz de alcan??ar seu sonho e corresponder ??s expectativas de seu amigo de inf??ncia, Yuno?','O fim do mundo est?? chegando, O terror cobrir?? o mundo inteiro, e a terra se tornar?? uma ??rea de ca??a para zumbis e mutantes. Zhao Tianlei acidentalmente obteve um misterioso o ???Sistema???. Ap??s ver a situa????o do mundo e a morte de seus colegas, como ele poderia ficar parado e apenas olhar? Humanos com ???sistemas??? e super upgrades poderiam lutar contra os cad??veres e restaurar a humanidade? ??????????????????','Um dem??nio quase conseguiu conquistar o mundo, por??m foi derrotado por um her??i e jogado em T??kyo. Como n??o tem habilidades especiais nesse novo mundo, sua aventura para sobreviver come??a.','Eles eram anjos ou dem??nios? Aparecendo do nada como a ira de Deus sobre a Terra, ningu??m sabe o que s??o os monstros ou por que eles atacam os humanos. Eles os chamam de: Djin. Depois de acordar de um coma de nove meses, os ca??adores de Djin em tempo parcial Lilou e Lux devem matar todos os monstros e coletar a recompensa. Mas por que Lilou tem uma conex??o t??o forte com Djin e poderes t??o extraordin??rios?','A Cavaleira Leo nunca foi tratado como mulher??? at?? que o mago Fooly (? ? ? ?) a trata como uma. Estes dois v??o desafiar a miss??o chamada ???Romance???, que ?? mais dif??cil de completar do que uma dungeon super dif??cil! A story about treating a female knight who has never been treated as a woman as a woman ???????????????????????????????????????????????????????????????????????????????????? How to Treat a Lady Knight Right','Um professor de meio per??odo, morando em um buraco sem condi????es de pagar nada com seu sal??rio. Se muda para uma pens??o com 4 lindas garotas... "S-ser?? esse o lugar certo?" Um professor de meio per??odo, morando em um buraco sem condi????es de pagar nada com seu sal??rio. Se muda para uma pens??o com 4 lindas garotas... "S-ser?? esse o lugar certo?"','Nosso personagem principal ?? sugado para um redemoinho estranho em um rio e de alguma forma acaba em uma ilha em um outro mundo com elfas nativas que usam roupas feitas de folha, com intelig??ncia de um rec??m-nascido e fodem como coelhos??? e que t??m um corpo fraco como manteiga.','Assim como todos adoravam os her??is na inf??ncia, um certo jovem adorava os poderes ocultos nas sombras. Depois de esconder sua for??a e viver a vida med??ocre de um personagem mafioso durante o dia, enquanto passava por um treinamento fren??tico ?? noite, ele finalmente reencarna em um mundo diferente e ganha o poder final. O jovem que est?? apenas brincando de ser um poder nas sombras, seus subordinados mal-entendidos e uma organiza????o gigante nas sombras que ?? pisoteada ... Esta ?? a hist??ria de um jovem que tinha adorado poderes nas sombras, possivelmente, eventualmente reinando o mundo das sombras em outro mundo.','Miyame Kaito n??o consegue usar nada de m??gica! Nesse ritmo, sua promessa com seu amigo de inf??ncia, de se tornarem grandes manipuladores de magia juntos estar?? arruinado??? Ele estava prestes a desistir de seu sonho, quando de repente Kaito sente a magia. Entretanto, era um tipo que magia que fazia com que quem olhasse em seus olhos se apaixonasse por ele, uma ???magia do amor!??? Ser popular ?? legal e tal, mas esse tipo de m??gica ?? realmente bom?! Uma invejosa fantasia de com??dia rom??ntica de sonhos e m??gica ??? a mais sortuda vida acad??mica de harem, come??a!','Diante do apocalypse, o poder especial dentro de Ling Mo foi despertado. Ele descobriu que podia controlar os zumbis. Por causa de seu poder, Ele podia caminhar em seguran??a atrav??s de hordas de zumbis, e, eventualmente, ele se reencontrou com sua amada namorada ??? Ye Lian, Apenas para descobrir que ela j?? havia se transformado em um zumbi. Para ajud??-la a recuperar suas mem??rias, Ling Mo embarca em uma jornada para sobreviver no apocalypse. My Girlfriend is a Zombie ??????????????????','Rei morreu com 17 anos de idade, mas quando ele estava para seguir em frente, ele foi convocado de volta ao reino dos vivos como um ursinho de pel??cia por sua namorada bruxa, que busca ficar com ele para todo o sempre.','Theo Aspel, que pertence a guilda de mercenarios, estava entrando e saindo de v??rias equipes repetidamente por ser muito fraco. Um dia desejando se tornar mais forte ele consegue invocar o diabo que concede qualquer desejo. No momento em que se deparou com o diabo a vontade de ???ficar forte??? desapareceu e ao ser questionado pelo Diabo sobre seu desejo, Theo responde ???Por favor se case comigo!??? Conhe??a a hist??ria de um menino herb??voro e da garota diabo carn??vora que se tornam um casal e vivem felizes enquanto fazem bagun??a por onde passa.','Em um dia na escola Youta v?? algu??m estranho entrando na escola, do nada este ser aparece ao seu lado e o joga do 3?? andar! Por??m ele vai parar em um mundo estranho, onde seres parecidos com drag??es existem! Youta conhece uma jovem paladin, e descobre que ?? o ??nico homem habitando aquele planeta, e que suas habitantes s??o extremamente ???fracas??? a sua presen??a... seria este o para??so?','Depois de reencarnar em um mundo diferente, o grande s??bio Ephthal passou toda a sua vida pesquisando magia. No entanto, aquele que pretendia alcan??ar o cume da magia, conhecia os limites de seus talentos e caiu em desespero, fechando assim a cortina de sua vida. No entanto, 400 anos depois, ele reencarnou pela segunda vez e se matriculou em uma academia de magia usando a feiti??aria e o conhecimento que adquiriu em sua vida anterior. Como se zombasse do estado de magia que estivera em decl??nio nos ??ltimos 400 anos, ele invoca facilmente a lend??ria magia de classe! Com poder avassalador, o mundo inteiro se ajoelhar?? diante dele. ??????????????????????????? ?????????????????????????????????????????????????????????????????? Nome alternativo: Rakudai Kenja No Gakuin Musou Nidome No Tensei S Rank Cheat Majutsushi Boukenroku','Depois de reencarnar, Ars Louvent deveria viver em um mundo diferente como um aristocrata fraco. Tanto sua for??a f??sica quanto sua intelig??ncia eram med??ocres nos dois mundos, mas aqui ele possu??a naturalmente uma habilidade chamada Avalia????o que lhe permitia ver o potencial de qualquer pessoa. Ao reunir pessoas talentosas ao seu lado, Ars usa essa habilidade de Avalia????o para transformar seu territ??rio fraco no mais forte! Mas o caminho a sua frente n??o ser?? t??o simples.','Shiina Kazuya, nosso protagonista que foi morto por um estranho quando ele tentou proteger sua amiga de inf??ncia e irm?? mais nova, reencarnou em Cain Von Silford como o terceiro filho no mundo da espada e da magia. Cain cresceu cercado por Deuses que n??o conhecem a auto-estima, os nobres superiores e as garotas que s??o influenciadas por ele. Sendo dada tanta prote????o dos deuses, Ele superou qualquer obst??culo (aka Flags) enquanto escondia seu status inacredit??vel. A nobre hist??ria de fantasia do caminho de um menino que ??s vezes ?? perverso e desajeitado.','H?? muito tempo, Chien Han passou por "cultivo for??ado" por causa da imperatriz dominadora. Ele cortou parte de sua alma para escapar da cova do tigre! Depois disso, ele renasce em um novo corpo. Nesta vida, ele estudar?? assuntos militares e dominar?? as pr??ticas espirituais.','Depois que Qin Li, recebeu os ensinamantos secretos de um misterioso anci??o, ele come??ou a pr??ticar em sil??ncio durante 10 anos. Qin Li ?? casado com Chu Qingyin, uma linda e sexy esposa, mas por ter um marido "misterioso" ela provou a durante anos a crueldade do mundo. Agora, depois de 10 anos de cultivo, ?? hora de come??ar a contra-atacar!','Muitas pessoas ficam sexualmente excitadas vendo a outros amarrados. Shows de sadomasoquismo bondage virou um entretenimento bem alastrado. Tendo pessoas que decidiram escolher o Bondage como sua ocupa????o, sendo assim chamadas de Especialistas em Bondage. Siga Minedera Zen, jovem estudante tarado que tira foto por de baixo da saia de mulheres ao se deparar em sua vida com uma jovem mulher com fetiche por bondage???','Eu acidentalmente possui algu??m em uma novel de har??m reverso +19. O problema ?? que eu me tornei Roxana Agriche, a irm?? mais nova do sub-vil??o. Meu maldito pai sequestrou o irm??o da hero??na. Agora, a ??nica coisa que me resta ?? encontrar um final terr??vel da vingan??a da hero??na? Mas e se eu puder evitar esse acontecimento? ???Eu tamb??m estou interessada nesse brinquedo.??? ???Eu vou proteg??-lo at?? que possa sair daqui a salvo.??? O irm??o da hero??na, Cassis Pedalian, vai definitivamente conseguir me retribuir depois.','O jovem Xiao Lang despertou com um Esp??rito Divino, mas os outros acreditaram ser um in??til.','Egil ?? um aventureiro de Rank S que viveu odiando os ???escravos???, por??m, durante uma leil??o se apaixonou por uma escrava e a comprou. Seu nome ?? Eleanor, a terceira princesa do reino de Cornelia. Mas essa escrava veio com um pedido ???Por Favor, mate a minha amiga de inf??ncia???, uma traidora que me vendeu para o vendedor de escravos! Com o pensamento de proteger e ajudar suas lindas escravas, ele trar?? paz a este mundo???!','Eu, um estudante normal do ensino m??dio, Kimizuka Kimihiko, que facilmente se envolve nas coisas, fui designado para cuidar de pastas de documentos misteriosas por homens misteriosos em ternos pretos. Depois de conhecer uma linda garota detetive parecida com um anjo, chamada Siesta, em um avi??o sequestrado, tornei-me seu assistente. E de l??- [Voc?? lida com a colmeia e eu contenho o inimigo.][N??o fa??a planos que me tornem a v??tima.] Tivemos esse tipo de conversa tola, enquanto est??vamos completamente quebrados todos os dias e lut??vamos contra . Mesmo quando havia furac??es, a dupla castigada pelo tempo dormia al??m dele. ??s vezes, quando economiz??vamos dinheiro em um cassino, pul??vamos nas camas de um hotel resort, apenas para estarmos quebrados novamente no dia seguinte. Andar??amos por desertos, atravessar??amos selvas, conquistar??amos montanhas, cruzar??amos oceanos - A grande detetive e seu assistente passariam por essas aventuras deslumbrantes - At?? ela morrer. E essa hist??ria come??a 1 ano ap??s esse incidente. Eu sou o ??nico que sobrou, mas eu continuo seus desejos restantes. Esta hist??ria est?? longe de terminar...','Um estudante do ensino m??dio chamado Naoya recebeu uma confiss??o de uma garota na qual se chama Nagisa, uma garota fofa e amig??vel. No entanto, Naoya j?? tem uma namorada chamada Saki, mas a Nagisa ?? boa demais para ser dispensada. O objetivo de Nagisa e Naoya ?? s?? um: Convencer Saki a aceitar que ele namore as duas igualmente. Ser?? que ela ir?? ceder?','Quando seu pai morreu, Denji ficou preso com uma d??vida que era incapaz de pagar. Mas gra??as ?? ajuda de um cachorro dem??nio que ele salvou chamado Pochita, Denji ?? capaz de sobreviver como ca??ador de dem??nios de aluguel. Os poderes de serra el??trica do Pochita s??o bem poderosos contra estes dem??nios. E ent??o, quando o Denji acaba sendo morto por um dem??nio, o Pochita desiste de sua vida para reviv??-lo. Mas, agora o Denji renasceu como um hibrido de dem??nio com humano??? Agora ele ?? o ???Chainsaw Man???! Agora Colorido! ????????????????????? Nome alternativo: Chainsaw Man Edicao Colorida','Magia ?? um produto que existia apenas em lendas ou contos de fadas, mas tornou-se uma tecnologia a cerca de um seculo atr??s. Agora v??rios pa??ses est??o e busca de reunir poderosos magos. Shiba Tatsuya ?? um estudante sem capacidade m??gica na First High School, uma escola de magia de alto n??vel, juntamente com sua irm??, que passa a ser a estudante superior entre os calouros. O que vai acontecer com ele e como ele viver sua vida de escola onde ele ?? um dos muitos reservas, onde ele ?? olhado de cima pelos alunos m??gicos escolhidos?','I swear that','Ele se tornou um inseto humano devido a uma misteriosa subst??ncia para insetos ???Jungle Juice???. Um dia, Su-chan Jang, um jovem estudante universit??rio que vivia escondendo seu segredo, tornou-se vis??vel para todos, e agora ele entra na sociedade dos humanos insetos e luta contra a l??gica da carne fraca???','Depois de anos de azar com as garotas, Ishimaru Daito s?? quer aproveitar a vida no colegial com uma namorada normal e bonita. No entanto, depois de perder um jogo contra suas duas novas senpais, Sasahara Kiyoka e Tomochika Asami, ele ?? for??ado a ingressar no clube de ???estudos human??sticos???, que na verdade ?? um clube de estudos sobre tortura. Ishimaru ser?? capaz de alcan??ar a vida normal do ensino m??dio que ele sempre quis?','Chrome era um mago do (grupo do her??i.)Ele lutou contra o ex??rcito do Lorde Dem??nio ao lado de Irina, a namorada que jurou se casar com ele no futuro; e Yuno, o her??i, que era seu melhor amigo.Eles eram muito pr??ximos. Pelo menos, era isso que o Chrome tinha em mente.Sua namorada, Irina, come??ou a se aproximar cada vez mais de Yuno. e depois Chrome foi sacrificado para dar a Yuno seu poder e torn??-lo mais forte. Como resultado, os poderes m??gicos do Chrome foram retirados dele e ele foi expulso da equipe. Os dem??nios, que o encontraram ?? beira da morte, o levaram para um canto.Naquele momento, o Chrome ressurgiu com uma ???escurid??o??? dentro de si.Em meio ao desespero, ele adquiriu uma habilidade "incompar??vel".Agora, com esse poder, ele poderia se vingar.','???Por que ningu??m se lembra do mundo verdadeiro???!??? A ??poca em que a grande corrida das cinco tribos competindo pela hegemonia no solo terminou com a vit??ria da humanidade liderada pelo her??i Sid. No entanto, o mundo foi de repente ???sobrescrito ??? na frente de um menino chamado Kai. No mundo reescrito, Kai viu a cena onde os seres humanos perderam para as cinco tribos por causa da aus??ncia de her??i Sid. Aqui drag??es e dem??nios dominam o solo, e Kai ?? uma exist??ncia esquecida por todos os seres humanos. No entanto, depois de encontrar a misteriosa menina Rinne, Kai decide quebrar este destino reescrito. Em um mundo sem her??is, ele herda a espada do her??i e a arte marcial e desafia as ra??as inimigas poderosas que reinam.','Minha esposa ?? t??o bonita, nem mesmo a nova imperadora se compara a ela! As habilidades culin??rias da minha esposa s??o incr??veis, nem mesmo o melhor chef imperial se compara a ela! Minha esposa me ama e se preocupa muito comigo, mesmo que a nova imperador goste de mim, eu jamais vou deixar minha esposa! O qu??? Minha esposa ?? a nova imperadora?!',' Vamos apenas dizer que Jinwoo e Seyoung tiveram um come??o dif??cil. N??o sabendo que Seyoung estaria morando em um dormit??rio da companhia com um empregado do sexo masculino, seu superior direto, invadiu seu quarto pensando que era dela. Seu timing n??o poderia ter sido mais inadequado, j?? que Jinwoo estava no meio de uma bronha. Envergonhado e sem lugar para se esconder, a vida de Jinwoo estava caminhando para a mis??ria. No entanto, pouco ele sabia que Seyoung n??o era um novata comum. Ela tinha seu pr??prio segredinho...','10 anos atr??s, depois que o ???Port??o??? que conectou o mundo real com o mundo dos monstros foi aberto, algumas pessoas comuns receberam o poder de ca??ar monstros dentro do Port??o. Eles s??o conhecidos como ???Ca??adores???. No entanto, nem todos os ca??adores s??o poderosos. Meu nome ?? Sung Jin-Woo, um ca??ador de Rank E. Eu sou algu??m que tem que arriscar sua vida no mais baixo dos calabou??os, o ???mundo mais fraco???. N??o tendo nenhuma habilidade para mostrar, eu mal ganhei o dinheiro necess??rio para minha sobreviv??ncia lutando em masmorras de baixo n??vel??? pelo menos at?? eu encontrar uma masmorra escondida com a dificuldade mais dif??cil dentro das masmorras Rank D! No final, quando eu estava aceitando a morte, de repente eu recebi um poder estranho, um registro de busca que s?? eu podia ver, um segredo para subir de n??vel que s?? eu sei! Se eu treinasse de acordo com minhas miss??es e monstros ca??ados, meu n??vel subiria.','A jornada para o Pico Marcial ?? algo longo e solit??rio. Indo de encontro com a adversidade, voc?? deve sobreviver e permanecer vivo. Apenas aqueles que superarem os limites continuar??o a jornada rumo ao objetivo de se tornar o mais forte. A Sky Tower testa seus disc??pulos de maneiras bem complexas para esta jornada. Um dia, o menosprezado Yang Kai conseguiu obter um livro negro, fazendo-o tomar rumo ao pico do mundo marcial!','Prestem aten????o, pessoal! Eu viverei a minha vida com a rainha dos dem??nios!',`Rei Grey conquistou for??a, riquezas e prest??gio sem iguais em um mundo governado pela habilidade marcial. Entretanto, a solid??o acompanha de perto aqueles de grande poder. Por detr??s da m??scara de um glorioso e poderoso rei, reside a casca vazia de um homem destitu??do de prop??sito e vontade. Renascido em um novo mundo repleto de magia e monstros, o Rei Grey ter?? a chance de refazer sua vida. Corrigir os erros do passado n??o ser?? seu ??nico desafio, pois um perigo oculto cresce a cada instante, amea??ando destruir tudo que ele trabalhou para criar, o fazendo questionar a verdadeira raz??o de ter recebido uma nova vida???`,'Magos de cura n??o podem lutar sozinhos.Keare, que estava vinculado por esse conhecimento comum, foi explorado uma vez ou outra pelos outros. Mas um dia, ele notou o que estava al??m da magia de cura e estava convencido de que um mago de cura era a classe mais forte. No entanto, quando percebeu esse potencial, ele estava privado de tudo. Assim, ele usou a magia de cura no pr??prio mundo para voltar quatro anos, decidindo refazer tudo. Este ?? um conto heroico de um mago de cura que se tornou o mais forte usando o conhecimento de sua vida passada e magia de cura.','A bela e gentil Hari sempre cuida de Minwoo, que mora na casa dela. Minwoo tem a ignorado e chamado de ???ajumma???, ao inv??s de irm????? Seu orgulho ?? ferido quando ela diz que n??o o v?? como um homem. Ent??o ele agarra impulsivamente os peitos de Hari! Que? Por que voc?? t?? fazendo isso?','Giselle, que se tornou a esposa fantoche da fam??lia Nathan, come??a a levar sangue para uma linda crian??a que encontra no por??o de sua nova casa. Um vampiro chamado "Uma flor cresce atrav??s do sangue". Em sua vida infeliz, Giselle come??a a ter encontros inapropriados e perigosos para escapar dos olhos do marido.','A fim de manter seu governo, Xin Sheng, o eterno rei dem??nio que governou o mundo, foi fundo no reino dos dem??nios para encontrar o maior e mais forte poder. Mil anos depois, ele se tornou mais forte e mais jovem, e o mundo tamb??m se tornou completamente diferente. Como o mais forte rei dem??nio, mesmo que eu tenha apenas o corpo de um garotinho fofo, mais uma vez irei restaurar a gl??ria do antigo imp??rio!','Um NEET de 34 anos ?? expulso de casa pelos seus irm??os. Quando se via sem dinheiro ou lugar pra dormir, ele lembra que sua vida poderia ter sido muito melhor se ele tivesse se esfor??ado. Ent??o vendo um caminh??o vindo em alta velocidade prestes a atropelar 3 estudantes, ele tenta salva-los e acaba morrendo atropelado. Quando ele decide abrir os olhos mais uma vez, ele percebe que renasceu em um mundo de Espadas e Magia como Rudeus Greyrat. Nascido em um novo mundo, numa nova vida, Rudeus decide: ???Dessa vez, eu vou viver minha vida ao m??ximo pra n??o ter nenhum arrependimento!???. Assim come??a a jornada de um homem recome??ando a sua vida. Mushoku Tensei: Jobless Reincarnation ???????????? ??????????????????????????????????????? Nome alternativo: Mushoku Tensei Isekai Ittara Honki Dasu','Adapta????o em mang?? do Light Novel ???O Irregular da Royal Academy of Magic???, serializado na Weekly Young Jump. ???Magia.??? Um mist??rio sagrado utiliz??vel apenas pelos escolhidos. Um dia, uma crian??a da favela chamada Ars descobre que tem o poder de usar magia. Um feiticeiro chamado Genos Wilzard descobre seu talento e o cria, transformando-o no maior dos assassinos. Um dia, Genos lhe deu uma ordem: Para se inscrever na Academia de Magia ???!? Ouritsu Mahou Gakuen no Saikasei ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????? ??? ?????????????????????????????????????????????????????????????????????????????? ??? Oritsu Maho Gakuen no Saika-sei~ Hinkon-gai (Suramu) Agari no Saikyo Maho-Shi, Kizoku-darake no Gakuen de Muso Suru~ O Irregular da Academia Real de Magia The Irregular of the Royal Academy of Magic ~The Strongest Sorcerer From the Slums is Unrivaled in the School of Royals','Ele era um viciado, um perdedor, um ser desprez??vel. Mas, um sonho passageiro que poderia n??o ser apenas um sonho reativa os seus sentidos e sentimentos antes perdidos. Possuindo uma habilidade ??nica, ele ir?? us??-la para forjar o seu caminho no mundo conhecido agora como O Para??so Perdido.','Pense numa hist??ria em que voc?? ?? o protagonista. Provavelmente seria uma trag??dia, n??o? Pois essa ?? a hist??ria de Kaneki??? Estranhos assassinatos est??o acontecendo em Tokyo. Devido a evid??ncia l??quida na cena, a pol??cia concluiu que os ataques s??o resultados de um ???comedor??? de um tipo ghoul. Kaneki ?? um jovem de 18 anos cursando a faculdade, apaixonado por romances japoneses, ele e seu amigo Hide, criam a teoria de que os ghouls est??o imitando os humanos, por isso nunca foram vistos. Mau eles sabem que essa teoria pode ser verdade.','Seung-ho mora com sua namorada, que ?? mais velha que ele. Ela ?? uma mulher muito sexy, mas ele est?? ficando cansado de suas discuss??es constantes. Depois de ficar desempregado por um longo tempo, Seung-ho finalmente consegue um emprego e vai trabalhar com um objetivo claro. ?? medida que ele se aproxima da sua nova chefe, come??a a tremer de sentimentos em rela????o ??s duas mulheres...','Ho-Seung, um trabalhador de escrit??rio impopular que trabalha para uma das maiores corpora????es da Coreia, est?? taxado como um pervertido porque foi acusado de instalar uma c??mera escondida no banheiro feminino. Contudo, ele provou ser inocente. Ent??o, um dia, ele foi repentinamente notificado de sua transfer??ncia pela gerente da equipe. Parecia que ela seria a vitoriosa, at??...','Essa aventura come??ou com um jovem alquimista, que tentou resgatar uma princesa, mas essa princesa era na verdade um drag??o. O que resultar?? nesse encontro estranho, mas engra??ado?','Theorard, o chefe da fam??lia Deham, compra uma elfa como escrava sexual. Mas??? ???Voc?? quer dizer que comprou uma elfa como escrava?! Est?? maluco, Visconde???? Quando ele ouve isso, ele ent??o percebe que a elfa que ele comprou ?? um ser assustador??? Theorard vai conseguir satisfazer o desejo daquela elfa assustadora????','Lin Jie ?? um ser de outro mundo que cuida de uma loja de livros. Ele ?? gentil e sempre recomenda livros sobre cura da alma para os seus clientes mais abatidos. ??s vezes ele at?? compartilha seus pr??prios trabalhos. Ao passar dos anos, esses clientes come??aram a lhe respeitar bastante. Eles levam produtos simples, todos os dias, para mostrar sua gratid??o, e pedir pelas suas recomenda????es de livros. Eles at?? come??aram a contar hist??rias sobre esse lojista comum.','Won-Yeoung tem 20 anos. Ele ?? cheio de energia e tem curiosidade sobre mulheres. Ele decidiu trabalhar no dormit??rio/alojamento Hari para ganhar dinheiro devido a necessidade de comprar livros pro vestibular. Mas, as mulheres nesse dormit??rio deixam seus desejos sexuais tomarem controle devido ao segredo desse dormit??rio...','Junwoo ?? um rapaz que est??, no momento, se hospedando na pens??o de um amigo que fica perto de sua universidade. Certa noite, quando ele estava indo beber ??gua, percebeu que a dona da pens??o, Mi-kyung estava em seu quarto vendo um video secreto??? ???Madame??? Ser?? que eu vi certo?!???','Eyama Aito, um estudante do ensino m??dio, ?? v??tima de bully diariamente. Um dia, uma chega uma carta estranha o convidando ao???jogo do cativeiro.??? Ele pode escolher uma pessoa para manter em cativeiro por um m??s com uma chance de ganhar uma grande quantidade de dinheiro. Ele escolhe a l??der dos valent??es,Kirishima Aya, e a ??nica regra do jogo ?? n??o mat??-la. Todo o resto no jogo ?? permitido. A vingan??a de Eyama come??a...','Seonghyun mora sozinha com sua jovem e sexy madrasta, e um dia, um homem com uma impress??o desagrad??vel se muda para a pr??xima porta. Hoshi Tam Tam O homem ao lado apontando para o corpo da madrasta, o filho cuja madrasta ?? cada vez mais vista como uma mulher, e essa rela????o que vai at?? o fim pode ser calma novamente...?','Nie Li, o mais poderoso Espiritualista Demon??aco e estando no topo do mundo marcial, perde sua vida durante a batalha com o Imperador S??bio e as seis bestas de n??vel divino, e sua alma volta ao passado para quando ele tinha 13 anos. Embora ele seja o mais fraco em sua classe, com o talento mais baixo no reino da alma Vermelho ??? o mais fraco dos reinos ??? com a ajuda de seu vasto conhecimento acumulado na sua vida passada, cresce mais r??pido do que todos.Agora, ele ir?? tentar proteger a cidade que no futuro ser?? invadida pelas bestas e que acabou sendo destru??da, assim como sua amada, seus amigos e sua fam??lia que morreram pelo ataque das mesmas, e destruir a fam??lia Sagrada que abandonaram seus deveres e tra??ram a cidade em sua vida passada.','A hero??na do jogo teve um tempo limitado de vida. Enquanto isso, eu desempenhei o papel da amiga vil?? que disputa a aten????o dos protagonistas masculinos antes de ser eliminado pelo jogador. No entanto, depois que aquela garota morreu, tomei a decis??o sozinha de sair dessa hist??ria. Mas o que eu fa??o? As rea????es das pessoas ao meu redor s??o um pouco estranhas. "Eu vim para a propriedade do marqu??s porque Ophelia precisava de uma amiga da sua idade. E agora, Ophelia est?? morta." Seu olhar parecia estar me perguntando por que eu estava afirmando o ??bvio. Eu disse isso claramente. "Ent??o, eu devo sair agora." Por alguma raz??o, os dois homens fizeram uma express??o como se estivessem sem palavras. Eles costumavam me considerar uma mosca que grudava ao lado de Ophelia, ent??o por qu???','Neste mundo, existem esp??ritos raposas, deuses, dem??nios poderosos... e cultivadores que buscam os segredos da longevidade. Se um cultivador abrir seu Verdadeiro Olho do Dharma, eles poder??o ver dem??nios e esp??ritos ocultos. Se um cultivador refinar uma espada voadora, eles poder??o derrotar seus inimigos a centenas de metros de dist??ncia. Seu discernimento e audi????o agu??ada facilitam a explora????o do mundo... E o Jovem Mestre Qin Yun, da Fam??lia Qin ?? um desses cultivadores...','"O mago mais forte do Ex??rcito do Rei Dem??nio", Ike, um dem??nio capaz de capturar um forte sozinho. Eliminando os inimigos com imensa magia, ele ?? sem d??vida um monstro admirado pelo aliado e inimigo. No entanto, ele tem um segredo que n??o pode dizer aos outros dem??nios. "Eu, na verdade, sou humano". Usando o conhecimento moderno para manter seu segredo, ele foi tratado como um grande comandante e a for??a motriz do ex??rcito do Rei Dem??nio.']];
  
  var prov;
  var provname;
  function prover(k){
    if(k == 31){
      prov = 3;
      provname = 3;
    }else if(k === 58){
      prov = 1;
      provname = 1;
    }else{
      prov = 0;
      provname = 0;
    }
  }
  var di2 = [];
   var img2 = [];
   var caminho2 = './posters/'
   var capa2 = [null]
   var at2 = [];
   var at2 = [];
const local = window.document.querySelector('#zero')
const lugar = window.document.querySelector('#ibod')
var hrs = window.document.createElement('hr')
var hr1 = window.document.createElement('hr')
var hr2 = window.document.createElement('hr')
hr2.setAttribute('class','mgtop')
var listmore = window.document.createElement('div')
var mainblock = []
  var listd = []
  var listi = []
  var listp = []
 
  var maisb = window.document.createElement('button')
  var classd = []
  var classzone = window.document.createElement('div')
  classzone.setAttribute('id','areaclass')
  var classi = []
  var classp = []
var classmaindiv = window.document.createElement('section')
  classmaindiv.setAttribute('class','linec')
  var classdiv = window.document.createElement('div');
  classdiv.setAttribute('class','divclass');
  var marca2 = window.document.createElement('span');
  var category = [];
  var marcation = 0;
  var markank = 0;
  var alignsearch;
  var showarea = window.document.createElement('div');
  var clone = [];
  var alll_Active = null,cont = 1,num2 = 9,allnum = 0;
  //armazena o cabecalho
  var cabecalho = window.document.createElement('header');
  cabecalho.setAttribute('class','center');
  //menul o local de despejo do menu
   var menulc = window.document.createElement('div');
   //localiza onde est?? para o exit main menu
   var localizador,localizador2;
   
    //fun????o do apresentar
     var maindv = window.document.createElement('div');
     var pdr = window.document.createElement('section');
     pdr.setAttribute('class','onekiss');
     var maindi = window.document.createElement('div');
     var mainp = window.document.createElement('h2');
 var mtd = {
   rnd: function () {
     let vlr;
     do{
     vlr = (Math.round(Math.random()*10)) * (Math.round(Math.random()*10));
     console.log('vlr value = ' + vlr);
     if(vlr === 63){
       vlr = 0;
     }
      }while(vlr > 63);
      console.log('vlr FINAL value = ' + vlr);
     return vlr;
   },
   mud: function () {
     maindv.style.animation=`trocar2 2s linear 1`;
     let slc = mtd.rnd();
     mainp.innerText = '';
     mainp.innerText = `${allvar[2][slc]}`;
     mainp.setAttribute('class','tituloresponsivo')
     let mainmangaf = caminho2 + allvar[3][slc];
     maindi.style.backgroundImage=`url(./${mainmangaf})`;
     maindi.setAttribute('class','imgr');
     maindv.setAttribute('id','principal');
     maindv.setAttribute('onclick',`subpage(${slc})`);
     
     maindv.appendChild(maindi);
     maindv.appendChild(mainp);
   },
   stt: function () {
     maindv.style.animation=`trocar1 2s linear 1`;
     setTimeout(mtd.mud, 2000);
   }
 }
    var timer = null;
function home1(){
  lugar.style.background="#1c1c1c";
  localizador = 1;
  localizador2 = 3;
  console.log(document.body.clientWidth);
  category = [];
  local.appendChild(menulc);
  headandheart();
  //corpo do home
  pdr.appendChild(maindv);
  local.appendChild(pdr);
  mtd.mud();
  for(let i = 0; i < 3; i++){
    mainblock.push(window.document.createElement('div'));
  };
  //primeira div - lendo
  mainblock[0].setAttribute('id','read');
  var h3tit = window.document.createElement('h3');
  h3tit.innerHTML = 'reading';
  mainblock[0].appendChild(h3tit);
  mainblock[0].appendChild(hr1);
  
  var readingselected = [32,8,34,35,36,41,3];
  var readingh = window.document.createElement('h3');
  var readingd = [];
  var readingp = [];
  var readingi = [];
  for(let i in readingselected){
    readingd.push(window.document.createElement('div'));
    readingd[i].setAttribute('class','linem');
    readingi.push(window.document.createElement('div'));
    let mainmangaf = caminho2 + allvar[3][readingselected[i]];
    readingi[i].style.backgroundImage=`url(${mainmangaf})`;
    readingi[i].setAttribute('class','imgclass');
    readingp.push(window.document.createElement('p'));
    readingp[i].setAttribute('class','csstxt');
    readingp[i].appendChild(window.document.createTextNode(allvar[0][readingselected[i]]));
    
    readingd[i].appendChild(readingi[i]);
    readingd[i].appendChild(readingp[i]);
    readingd[i].setAttribute('onclick',`subpage(${readingselected[i]}, 0, 1, 2.4, 1)`);
    mainblock[0].appendChild(readingd[i]);
    
  };
  local.appendChild(mainblock[0]);
  //segunda div - my list
  mainblock[1].setAttribute('id','two');
  var listatit = window.document.createElement('h3');
  listatit.appendChild(window.document.createTextNode('my list'));
  mainblock[1].appendChild(listatit);
  mainblock[1].appendChild(hrs);
  for(let i = 0; i < 6;i++){
    listd.push(window.document.createElement('div'));
    listd[i].setAttribute('class','linem');
    listi.push(window.document.createElement('div'));
    let mainmangaf = caminho2 + allvar[3][i];
    listi[i].style.backgroundImage=`url(./${mainmangaf})`;
    listi[i].setAttribute('class','imgclass');
    listp.push(window.document.createElement('p'));
    listp[i].setAttribute('class','csstxt');
    listp[i].appendChild(window.document.createTextNode(allvar[0][i]));
    listd[i].appendChild(listi[i]);
    listd[i].appendChild(listp[i]);
    listd[i].setAttribute('onclick',`subpage(${i}, 0, 1, 5.1, 1)`);
    mainblock[1].appendChild(listd[i]);
  };
  
  
  maisb.setAttribute('onclick','alll()');
  maisb.innerHTML = 'show more';
  maisb.setAttribute('id','four');
  mainblock[1].appendChild(listmore);
  mainblock[1].appendChild(maisb);
  local.appendChild(mainblock[1]);
  if(alll_Active === 528){
    alll();
  }
  console.log('alll' + alll_Active);
  //terceira div classes
  var marca = window.document.createElement('span');
  marca.innerHTML = '>marca????es';
  marca.setAttribute('class','mm');
  marca2.innerHTML = 'text';
  marca2.setAttribute('onclick','notas()');
  marca2.setAttribute('class','acionatxt');
  mainblock[2].appendChild(marca);
  mainblock[2].appendChild(marca2);
  mainblock[2].appendChild(window.document.createElement('hr'));
  for(let i = 0; i < 3; i++){
    classd.push(window.document.createElement('div'));
    classd[i].setAttribute('class','ordem');
    classi.push(window.document.createElement('img'));
    classi[i].setAttribute('class','categ');
    classi[i].setAttribute('alt','classes');
    classp.push(window.document.createElement('p'));
    if(marcation === 0 && i === 0 && markank != 1 && markank != 3){
      classi[i].setAttribute('src','internet.png');
      classp[i].innerHTML = 'my file';
      classd[i].setAttribute('onclick','class1()');
    }else if(marcation === 0 && i === 1 && markank != 1 && markank != 3){
      classi[i].setAttribute('src','java.png');
      classp[i].innerHTML = 'specials';
        classd[i].setAttribute('onclick','class2()');
    }else if(marcation === 0 && i === 2 && markank != 1 && markank != 3){
      classi[i].setAttribute('src','cloud.png');
      classp[i].innerHTML = 'animated';
        classd[i].setAttribute('onclick','class3()');
    }else if(marcation === 1 || markank === 1){
      classd[0].setAttribute('onclick','eliminar()');
    classd[0].setAttribute('class','ordemnow');
    }else if(marcation === 3 && i === 2 && markank === 3){
      classd[2].setAttribute('onclick','eliminar()');
      classd[2].setAttribute('class','ordemnow');
    }
    
  classd[i].appendChild(classi[i]);
  classd[i].appendChild(classp[i]);
  
  classmaindiv.appendChild(classd[i]);
  };
  mainblock[2].appendChild(classmaindiv);
  mainblock[2].appendChild(classzone);
  mainblock[2].appendChild(classdiv);
  mainblock[2].appendChild(window.document.createElement('hr'));
  mainblock[2].setAttribute('id','eight');
  local.appendChild(mainblock[2]);
  //rodape 
  var par = window.document.createElement('p');
  var ll = [];
  par.setAttribute('class','pv');
  par.appendChild(window.document.createTextNode(' provedores:'));
  var linkp = [];
  var linkdd = window.document.createElement('nav');
  linkdd.appendChild(par);
  
  for(let i = 0;i < 4; i++){
    linkp.push(window.document.createElement('a'));
    linkp[i].innerHTML = '>';
    linkp[i].setAttribute('class','pvlink');
    linkp[i].innerHTML += ` ${allvar[6][i]}`;
    linkp[i].setAttribute('href', allvar[5][i]);
    linkp[i].setAttribute('target','_blank');
    linkp[i].setAttribute('class','nounder');
    linkp[i].setAttribute('rel','nofollow');
    linkdd.appendChild(linkp[i]);
    if(i !== 3){
      linkdd.appendChild(window.document.createElement('br'));
    }
  };
  var rr = window.document.createElement('footer');
  rr.appendChild(linkdd);
  var sma = window.document.createElement('p');
  sma.innerHTML = 'created by: &copy; king';
  sma.setAttribute('class','ult');
  sma.setAttribute('id','soul');
  rr.appendChild(sma);
  rr.setAttribute('id','soulTaken');
  local.appendChild(rr);
  alignsearch = null;
};

home1();
//funcao cabecalho
function headandheart() {
  cabecalho.innerHTML = '';
  cabecalho.setAttribute('class','center brt');
  let dr = [];
  for(let i = 0;i < 3;i++){
  dr.push(window.document.createElement('article'));
  }
  let menuimage1 = window.document.createElement('img');
  let menuimage2 = window.document.createElement('img');
  let titulo = window.document.createElement('h1');
  titulo.setAttribute('class','titulo1')
  let bspan = window.document.createElement('span');
  
  bspan.setAttribute('class','menor')
  titulo.appendChild(window.document.createTextNode('.link'));
  bspan.appendChild(window.document.createTextNode('mang??s'));
  titulo.appendChild(bspan);
  
  menuimage1.setAttribute('src','./archive/cssandjs/menuwhite.png');
  menuimage1.setAttribute('alt','menuchoose');
  menuimage1.setAttribute('class','tamj');
  menuimage1.setAttribute('onclick','menu()');
  dr[0].appendChild(menuimage1);
  
  dr[1].appendChild(titulo);
  
  menuimage2.setAttribute('src','./archive/cssandjs/whitesearch.png');
  menuimage2.setAttribute('alt','procurar');
  menuimage2.setAttribute('class','tamanhoh2');
  menuimage2.setAttribute('onclick','search()');
  dr[2].appendChild(menuimage2);
  for(let i in dr){
    if(i == 1){
      dr[i].setAttribute('class','cabeca margen2');
    }else if(i > 0){
      dr[i].setAttribute('class','cabeca margen');
    }else{
    dr[i].setAttribute('class','cabeca lef');
    }
    cabecalho.appendChild(dr[i]);
  }
  console.log('localizador1 = ' + localizador)
  if(localizador === 1){
  local.appendChild(cabecalho);
  }
  timer = setInterval(mtd.stt, 7000);
}

    function alll(){
      maisb.setAttribute('onclick','restart()');
      maisb.innerHTML = 'close';
      alll_Active = 528;
      console.log('alll ativado!')
      listmore.innerText = '';
    for(let i = 6; i < allvar[0].length;i++){
    listd.push(window.document.createElement('div'));
    listd[i].setAttribute('class','linem');
    listi.push(window.document.createElement('div'));
    let mainmangaf = caminho2 + allvar[3][i];
    listi[i].style.backgroundImage=`url(${mainmangaf})`;
    listi[i].setAttribute('class','imgclass');
    //listi[i].setAttribute('alt','capa do manga');
    listp.push(window.document.createElement('p'));
    listp[i].setAttribute('class','csstxt');
    listp[i].appendChild(window.document.createTextNode(allvar[0][i]));
    
    listd[i].appendChild(listi[i]);
    listd[i].appendChild(listp[i]);
    listd[i].setAttribute('onclick',`subpage(${i}, 0, 7,${i}, 2)`);
    listmore.appendChild(listd[i]);
  }
    }
  
  function restart(){
    listmore.innerHTML = '';
    listd.splice(6, allvar[0].length);
    listi.splice(6, allvar[0].length);
    listp.splice(6, allvar[0].length);
    maisb.setAttribute('onclick','alll()');
    maisb.innerHTML = 'show more';
    alll_Active = null;
    window.scrollTo(830, 830);
  };
  
  
  function class1(){
    classdiv.innerText = '';
    classdiv.setAttribute('class','linec');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
    classdiv.setAttribute('class','linec');
    var oneclass = [3,31,33,38,40,41];
    var oned = [];
    var onei = [];
    var onep = [];
    
    for(let i in oneclass){
      oned.push(window.document.createElement('div'));
      oned[i].setAttribute('class','linem');
      onei.push(window.document.createElement('div'));
      let mainmangaf = caminho2 + allvar[3][oneclass[i]];
      onei[i].style.backgroundImage=`url(${mainmangaf})`;
      onei[i].setAttribute('class','imgclass');
      onep.push(window.document.createElement('p'));
      onep[i].appendChild(window.document.createTextNode(allvar[0][oneclass[i]]));
      onep[i].setAttribute('class','csstxt');
      
      oned[i].appendChild(onei[i]);
      oned[i].appendChild(onep[i]);
      oned[i].setAttribute('onclick',`subpage(${oneclass[i]}, 123, 1, ${i}, 3)`);
      classdiv.appendChild(oned[i]);
    };
    classd[0].setAttribute('onclick','eliminar()');
    classd[0].setAttribute('class','ordemnow');
    marcation = 1;
    markank = 1;
  }
  var senha;
  var senhago;
  var falha;
  function class2(){
    classdiv.innerText = '';
    classd[1].setAttribute('class','ordemnow');
    classd[0].setAttribute('onclick','class1()');
    classd[0].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
    senha = window.document.createElement('input');
    senha.setAttribute('id','kest');
    senha.setAttribute('type','password');
    senha.setAttribute('class','space');
    senhago = window.document.createElement('button');
    senhago.setAttribute('class','space'),
    senhago.setAttribute('id','spaceleft');
    senhago.setAttribute('onclick','mainki()');
    falha = window.document.createElement('p');
    senhago.appendChild(window.document.createTextNode('verifi'));
    classdiv.setAttribute('class','kente');
    classdiv.appendChild(senha);
    classdiv.appendChild(senhago);
    classdiv.appendChild(falha);
    classd[1].setAttribute('onclick','redirect(2)');
   
  };
  
  function mainki(){
    
    if(falha.value !== 'senha incorreta!'){
        falha.innerHTML = 'senha incorreta!';
        falha.style.color="red";
    }
    if(senha.value === '@king'){
    class2check();
    }
  }
  
  function class2check(){
    classdiv.innerHTML = '';
    classdiv.setAttribute('class','linec');
    let proxi = window.document.createElement('div');
    proxi.innerText = 'undefined';
    proxi.setAttribute('class','nxt');
    let agoravai = window.document.createElement('a');
    agoravai.setAttribute('href','./capash/hent.html');
    agoravai.setAttribute('target','_blank');
    agoravai.setAttribute('rel','next');
    agoravai.style.textDecoration="none";
    agoravai.appendChild(proxi);
    classdiv.appendChild(agoravai);
  classd[1].setAttribute('onclick','redirect(2)');
  classd[1].setAttribute('class','ordemnow');
  };
  function class3(){
   classdiv.innerText = '';
   classdiv.setAttribute('class','linec');
   classdiv.setAttribute('class','linec');
    classd[0].setAttribute('onclick','class1()'),
    classd[0].setAttribute('class','ordem');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
   var numclass = [0, 1, 5, 7, 27, 28, 29, 30, 42];
   var animd = [];
   var animi = [];
   var animp = [];
   for(let i in numclass){
   animd.push(window.document.createElement('div'));
   animd[i].setAttribute('class','linem');
   animi.push(window.document.createElement('div'));
   let mainmangaf = caminho2 + allvar[3][numclass[i]];
   animi[i].style.backgroundImage=`url(${mainmangaf})`;
   animi[i].setAttribute('class','imgclass');
   animp.push(window.document.createElement('p'));
   animp[i].appendChild(window.document.createTextNode(allvar[0][numclass[i]]));
   animp[i].setAttribute('class','csstxt');
   
   animd[i].appendChild(animi[i]);
   animd[i].appendChild(animp[i]);
   animd[i].setAttribute('onclick',`subpage(${numclass[i]}, 123, 1, ${i}, 3)`);
   classdiv.appendChild(animd[i])
   };
   classd[2].setAttribute('onclick','redirect(2)');
   classd[2].setAttribute('class','ordemnow');
   marcation = 2;
   markank = 3;
   console.log(`${marcation} | class3 fun`);
  }
  //funcao lembrete
  var lemb = ['majo to ryouken: estreia dia 21/outubro'];
 function notas(){
   classdiv.innerText = '';
   classdiv.setAttribute('class','linec');
    classd[0].setAttribute('onclick','class1()');
    classd[0].setAttribute('class','ordem');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    for(var z in lemb){
      classdiv.innerHTML += `???notas: <br> >${lemb[z]}<br>`;
      classdiv.setAttribute('class','eletronic');
      marca2.setAttribute('onclick','redirect(2)');
    };
 };
  //remover as classes
  function eliminar(){
    classdiv.innerText = ''
    marcation = 0
    markank = 0
    classdiv.setAttribute('class','linec')
    classd[0].setAttribute('onclick','class1()')
    classd[0].setAttribute('class','ordem')
    classd[1].setAttribute('onclick','class2()')
    classd[1].setAttribute('class','ordem')
    classd[2].setAttribute('onclick','class3()')
    classd[2].setAttribute('class','ordem')
    marca2.setAttribute('onclick','notas()')
  }
 
  //funcao de peaquisa

  var contar;
  var allask;
  
 function search(){
   local.innerHTML = '';
   clearInterval(timer);
   //localizador = 2;
   alignsearch = window.document.createElement('div');
  
   allask = window.document.createElement('div');
    let ut = window.document.createElement('input');
  let bse = window.document.createElement('article');
  let own = window.document.createElement('img');
  let exit = window.document.createElement('img');
  let dexit = window.document.createElement('article');
  let cat = window.document.createElement('article');
  let cati = window.document.createElement('img');
  cati.setAttribute('src','./archive/cssandjs/iconc.png');
  cati.setAttribute('alt','classes');
  cati.setAttribute('class','pixelsimg');

  
 ut.setAttribute('id','sank');
  allask.setAttribute('id','ohmt');
  
  dexit.setAttribute('onclick','redirect(3)');
  cat.setAttribute('onclick','searclass()');
  cat.setAttribute('class','inze3');
  
  exit.setAttribute('src','./archive/cssandjs/exit.png');
  exit.setAttribute('width','14px');
  exit.setAttribute('height','15px');
  
  own.setAttribute('src','./archive/cssandjs/search.png');
  own.setAttribute('width','13px');
  own.setAttribute('height','13px');
  own.setAttribute('alt','search.png');
  bse.setAttribute('onclick','mostar(1)');
  ut.setAttribute('type','search');
  ut.setAttribute('onkeypress','mostar(1)');
  bse.setAttribute('class','inze2');
  dexit.setAttribute('class','inze3');
  ut.setAttribute('class','inazumaeleven')
  dexit.style.padding="1px";
  bse.style.padding="1px";
  
   bse.appendChild(own);
   dexit.appendChild(exit);
   alignsearch.appendChild(dexit);
   alignsearch.appendChild(ut);
   alignsearch.appendChild(bse);
   cat.appendChild(cati);
   alignsearch.appendChild(cat);
   allask.appendChild(alignsearch);
   local.appendChild(allask);
   allask.style.background="rgb(47,47,47)";
   lugar.style.background="rgb(47,47,47)";
   window.scrollTo(0, 0);
   if(num2 === 2){
     again();
   }
   cabecalho.innerHTML = '';
 }
 
 function mostar(conts){
   showarea.innerHTML = '';
    var listone = [];
 var numlist = [];
 var res = [];
 var verifi = 0;
 
 let divv = [];
 let linkaa = [];
 let par = [];
 let imgg = [];
   num2 = 2;
 showarea.appendChild(window.document.createElement('hr'));
  allask.appendChild(showarea);
   for(var e in allvar[1]){
     var valor = String(window.document.querySelector('#sank').value.toLowerCase());
     console.log(e + allvar[1][e]);
     if(allvar[1][e].indexOf(valor) != -1){
       numlist.push(e);
       clone.push(e);
       listone.push(allvar[2][e]);
       verifi++;
     }
   }
     if(verifi === 0){
      var ppp = window.document.createElement('p');
      ppp.appendChild(window.document.createTextNode('nothing to show'));
      showarea.appendChild(ppp);
    }
    
    // for pra divs
   for(let gg in listone){
     divv.push(window.document.createElement('div'));
     divv[gg].setAttribute('class','linems');
     par.push(window.document.createElement('p'));
     par[gg].setAttribute('class','csstxt');
     imgg.push(window.document.createElement('div'));
     res = caminho2 + allvar[3][numlist[gg]];
     imgg[gg].style.backgroundImage=`url(${res})`;
     imgg[gg].setAttribute('class','bigimg');
     
     divv[gg].appendChild(imgg[gg]);
     par[gg].appendChild(window.document.createTextNode(allvar[2][numlist[gg]]));
     divv[gg].setAttribute('onclick',`subpage(${numlist[gg]},0, 4, ${gg}, 4)`);
     divv[gg].appendChild(par[gg]);
     showarea.appendChild(divv[gg]);
   };
   var kali = window.document.createElement('div');
   kali.setAttribute('onclick','redirect(3)');
   kali.innerText = 'x';
   kali.setAttribute('class','allcenter');
   showarea.appendChild(window.document.createElement('p'));
   showarea.appendChild(kali);
  /* let rod = window.document.createElement('footer');
   rod.setAttribute('class','rdp')
   let rodts = window.document.createElement('p');
   rodts.setAttribute('class','footc');
   rodts.innerHTML = '<h3 class="inazuma">.link</h3><small class="inazuma">mang??s</small><br><span class="ult">created by: @king</span>';
   
   rod.appendChild(rodts); 
   local.appendChild(rod);*/
   };
 //repet resultado pesquisa
 
 function again() {
    console.log('again executado');
   let divv = [];
 let par = [];
 let imgg = [];
   allask.appendChild(showarea);
 }
 
 //remove o search
 function nosearch(){
     local.innerText = ''
     allask.innerText = ''
     alignsearch = null
     window.scrollTo(0, 0)
     allnum++
  listd = []
  listi = []
  listp = []
  mainblock = []
  home1()
  markank = 0
 }
 //funcao cabecalho do subpage
 function subhead(ls=0,tpp=0,wSv=0) {
   cabecalho.setAttribute('id','rst');
   cabecalho.removeAttribute('class','brt')
   let menuint = window.document.createElement('header');
   menuint.setAttribute('class','center brt');
   let menud = [];
   
   let menuinti = window.document.createElement('img');
   menuinti.setAttribute('src','./archive/cssandjs/menuwhite.png');
   menuinti.setAttribute('alt','poster de fundo');
   menuinti.setAttribute('class','tamj');
   menuinti.setAttribute('onclick',`menu(999, ${ls}, ${wSv}, ${tpp})`);
   let menuinti2 = window.document.createElement('img');
   let menuinth = window.document.createElement('h1');
   menuinth.setAttribute('class','titulo1');
   let spa = window.document.createElement('span');
   menuinth.innerHTML = '.link';
   spa.innerHTML = 'mang??s';
   spa.setAttribute('class','menor');
   menuinti2.setAttribute('src','./archive/cssandjs/white-arrow-png-41955.png');
  menuinti2.setAttribute('alt','return');
  //redirecionamento/ voltar
  console.log(ls + ' ###')
  if(ls === 0){
    menuinti2.setAttribute('onclick',`redirect(11, ${tpp}, ${wSv})`);
  }else if(ls === 3){
    menuinti2.setAttribute('onclick',`redirect(6, ${tpp}, ${wSv})`);
  }else if(ls === 4){
    menuinti2.setAttribute('onclick',`redirect(4, ${tpp}, ${wSv})`);
    //volta do subpage ao search
  }else if(ls === 5){
    menuinti2.setAttribute('onclick',`redirect(7, ${tpp},${wSv})`);
  }else if(ls === 6){
    menuinti2.setAttribute('onclick',`redirect(1, ${tpp},${wSv})`);
  }else if(ls === 7){
    menuinti2.setAttribute('onclick',`redirect(11, ${tpp},${wSv})`);
  }else{
    menuinti2.setAttribute('onclick',`redirect(1, ${tpp},${wSv})`);
  };
  
  menuinti2.setAttribute('class','tamanhoh2');
  for(let i = 0;i < 3; i++){
     menud.push(window.document.createElement('div'));
     if(i == 1){
      menud[i].setAttribute('class','cabeca margen2');
       menuinth.appendChild(spa);
       menud[i].appendChild(menuinth);
       menuint.appendChild(menud[i]);
    }else if(i > 0){
      menud[i].setAttribute('class','cabeca margen');
      menud[i].appendChild(menuinti2);
       menuint.appendChild(menud[i]);
       
    }else{
    menud[i].setAttribute('class','cabeca lef');
    menud[i].appendChild(menuinti);
    menuint.appendChild(menud[i]);
    };
   };
  cabecalho.appendChild(menuint);
  if(localizador === 7){
  local.appendChild(cabecalho);
  }
  menulc.innerHTML = '';
  
 }
 // pagina de exibi????o
 //wSv = window scroll value
 //tpp tipo do switch
 var alivar;
 var lugarposter = window.document.createElement('div');
 
 function subpage(x, v=0, lsi, wSvz, tppz){
   local.innerHTML = '';
   cabecalho.innerHTML = '';
   clearInterval(timer);
   localizador = 7;
   localizador2 = 6;
   lugar.style.background="#1c1c1c";
   category = [];
   subhead(lsi,tppz,wSvz);
   local.appendChild(menulc);
  window.scrollTo(0, 0);
  //fim do menu, inicio da mostra
  
  prover(x);
 let fontlink = window.document.createElement('a');
 let fontspan = window.document.createElement('span');
 let fontp = window.document.createElement('p');
 let Scp = window.document.createElement('div');
 Scp.setAttribute('onclick',`Capa1(${x})`);
 Scp.setAttribute('class','Hello');
 let tagmain = window.document.createElement('main');
 tagmain.setAttribute('id','neck');
 
 tagmain.style.background=`url(./posters/${allvar[3][x]})`;
 tagmain.style.backgroundSize="100%";
 tagmain.style.backgroundRepeat="no-repeat";
 tagmain.setAttribute('class','titulo mgtop2');
 let divdei = window.document.createElement('div');
 divdei.setAttribute('id','divimg');
 fontp.innerHTML = 'font: ';
 fontspan.appendChild(window.document.createTextNode(allvar[6][provname]));
 fontlink.setAttribute('target','_blank');
 fontlink.setAttribute('rel','nofollow');
 fontlink.setAttribute('href',allvar[5][prov]);
 fontlink.setAttribute('class','nound');
 let div1 = window.document.createElement('div');
 
 var img5 = './posters/' + allvar[3][x];
 lugarposter.style.backgroundImage=`url(${img5})`;
 lugarposter.style.backgroundSize="100% 100%";
 lugarposter.setAttribute('class','imgtam');
 div1.setAttribute('class','imgcenter');
 
 div1.appendChild(Scp);
 div1.appendChild(lugarposter);
 divdei.appendChild(div1);
 tagmain.appendChild(divdei);
 //local.appendChild(mll);
 local.appendChild(tagmain);
 
 fontlink.appendChild(fontspan);
 fontp.appendChild(fontlink);
 // ancoragem dos sites
 var golink = window.document.createElement('a');
 golink.setAttribute('href',allvar[4][x]);
 golink.setAttribute('target','_blank');
 golink.setAttribute('rel','nofollow');
 golink.setAttribute('class','nound col');
 var gop = window.document.createElement('p');

 var gospan = window.document.createElement('span');
 var godiv = window.document.createElement('div');
 var tagimg = window.document.createElement('img');
 tagimg.setAttribute('src','./archive/cssandjs/literature.png');
  gop.setAttribute('class','titulo2');
 gop.setAttribute('id','ler');
 tagimg.setAttribute('alt','book icon');
 tagimg.setAttribute('width','26px');
 tagimg.setAttribute('hight','26px');
 tagimg.setAttribute('class','titulo2');
 godiv.setAttribute('id','three');
 
 gop.appendChild(window.document.createTextNode(' ler agora!'));
 
 godiv.appendChild(tagimg);
 godiv.appendChild(gop);
 golink.appendChild(godiv);
 
 let namem = window.document.createElement('h2');
 namem.appendChild(window.document.createTextNode(allvar[1][x]));
 namem.setAttribute('class','stars');
 
 namem.style.marginTop="2px";
 namem.style.marginBottom="30px";
 local.appendChild(namem);
 local.appendChild(golink);
 fontp.setAttribute('class','fontali');
 local.appendChild(fontp);
  // funcao da sinopse
 var par = window.document.createElement('p');
 var bold = window.document.createElement('strong');
 var sinos= window.document.createElement('section');
 bold.appendChild(window.document.createTextNode('sinopse: '));
 par.appendChild(bold);
 par.appendChild(window.document.createTextNode(allvar[7][x]));
 colortxt();
 sinos.appendChild(par);
 sinos.setAttribute('class','subsin');
 local.appendChild(sinos);
 dacategoria(x);
 for(let w in category){
 local.appendChild(category[w]);
 }
}
 //color da sombra do poster
 function colortxt() {
   let cl = Math.round(Math.random()*10);
   switch (cl) {
     case 1:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,23,128)";
       //light pink
       break
     case 2:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,50,50)";
       //red
       break
     case 3:
       lugarposter.style.boxShadow="2px 2px 3px rgb(23,255,226)";
     // baby green
       break
     case 4:
       lugarposter.style.boxShadow="2px 2px 3px rgb(23,255,57)";
     //lime
       break
     case 5:
     lugarposter.style.boxShadow="2px 2px 3px rgb(171,102,223)";
     //light purple
       break
     case 6:
       lugarposter.style.boxShadow="2px 2px 3px rgb(147,66,255)";
     //purple
       break
     case 7:
       lugarposter.style.boxShadow="2px 2px 3px rgb(18,25,255)";
     // dark blue
       break
     case 8:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,246,23)";
     //yellow
       break
     case 9:
       lugarposter.style.boxShadow="2px 2px 3px rgb(52,206,255)";
     //light blue
       break
     case 10:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,40,95)";
     //rose red
       break
     default:
     lugarposter.style.boxShadow="2px 2px 3px rgb(48,212,102)";
     //green
     break
   }
 };
 
 //categorias dos mangas
 const allclass = [[3,10,25],[0,10,19,23],[0,10,25],[0,7,8,10],[20,23,24],[0,4,10,16,25],[0,3,7,14,25,27],[4,6,23,25],[0,3,10,27,30,],[4,10,23],[1,11,12,23,24],[1,3,7,10,11,24,30],[0,2,3,4,8,10,11,24],[4,9,11,16,25],[0,11,18,23,30],[4,23,27],[4,6,8,10,23,25,27],[5,8,10,11,24,28],[0,3,10,16,25,27],[3,10],[0,3,10,15],[0,2,3,4,8,10,11,12,23],[7,10,23,25,27],[1,7,8,9,22,24],[6,7,10,11,15,16,18,22,23,30],[0,2,3,4,10,17,30],[0,1,3,8,11,23],[0,4,7,9,19,20,21,23,24],[1,4,8,9,11,23,25,26],[0,7,14,25,27],[16,23,25,27,29],[4,23],[0,10,14,24,27],[4,8,11,29],[8,10,11,12,16,24],[0,10,23],[0,2,3,4,10,13,15,17,23,25,27,30],[4,8,23,24,26],[0,3,10],[0,2,3,4,10,11,13,23,27],[3,10,23,25],[0,2,3,7,10,16,23,30],[1,8,10,12],[1,7,12],[1,7,8,10,12,13,23,31,32,33],[1,4,8,10,12,16,25,27,30],[7,10,16,24],[0,3,6,7,9,10,11,16,20,23,24],[0,3,10,16,24,27,30],[0,7,14,20,22,24,27,],[1,7,8,12,23,24,26,30],[1,7,8,11,12,23,24],[1,4,8,10,11,12,23,25],[1,8,12],[0,3,4,10,14,20,25,27],[4,8,12,23,24],[1,7,8,9,12,23,24,26],[14,22],[1,7,12,23],[2,3,25,27,30],[7,11,13,15,23],[0,2,3,10,23],[3,7,11,23]];
 var classname = [`A????o`,`Adulto`,`Artes marciais`,`Aventura`,`Com??dia`,`Crossdressing`,`Dem??nios`,`Drama`,`Ecchi`,`Escolar`,`Fantasia`,`Har??m`,`Hentai`,`Hist??rico`,`Horror`,`Isekai`,`Magia`,`Manhua`,`Manhwa`,`Militar`,`Mist??rio`,`Policial`,`Psicol??gico`,`Romance`,`Seinen`,`Shounen`,`Slice of life`,`Sobrenatural`,`Viagem temporal`,`Vida escolar`,`Webtoon`,`Josei`,`Shoujo`,`Vampiros`];
 
 function dacategoria(lm){
   for(let i in allclass[lm]){
     let parff = window.document.createElement('span');
     let parrr = window.document.createElement('p');
     parff.setAttribute('class','srate');
     parff.setAttribute('onclick',`ccmm(allclass[${lm}][${i}], ${lm}, 000,${lm})`);
     parrr.setAttribute('class','sratetxt');
     parrr.appendChild(window.document.createTextNode(classname[allclass[lm][i]]));
     let y;
     if(classname[allclass[lm][i]].length <= 5){
       y = classname[allclass[lm][i]].length * 12;
     }else if(classname[allclass[lm][i]].length <= 8){
       y = classname[allclass[lm][i]].length * 11;
     }else{
       y = classname[allclass[lm][i]].length * 9;
     };
          parff.style.width=`${y}px`;
     
     parff.appendChild(parrr);
     category.push(parff);
   };
 };
 //funcao de mostrar a capa
 var maincapa;
 var maincpx;
 var maind; 
 
 function Capa1(z) {
   maincapa = window.document.createElement('img');
   maincpx = window.document.createElement('img');
   
   maincpx.setAttribute('src', './archive/cssandjs/xx.png');
   maincpx.setAttribute('alt','exit');
   maincpx.setAttribute('id','embreve');
   maind = window.document.createElement('div');
   maind.setAttribute('class','Shownow');
   let vacp = caminho2 + allvar[3][z];
   maincapa.setAttribute('src', vacp);
   maincapa.setAttribute('alt','Poster');
   maincapa.setAttribute('class','Showhour');
   maincpx.setAttribute('onclick','NoCapa(this, maincapa, maind)');
   
   maind.appendChild(maincapa);
   maind.appendChild(maincpx);
   cabecalho.appendChild(maind);
   console.log('capa function executed')
 }
 
 function NoCapa(br, cp, dc) {
   br.remove();
   cp.remove();
   dc.remove();
 }
 //funcao de classe search
 
 function searclass() {
   clearInterval(timer);
   local.innerText = '';
   let sectm = window.document.createElement('header');
   sectm.setAttribute('class','anti')
   let vouv = window.document.createElement('img');
   let vvdd = window.document.createElement('div');
   vvdd.setAttribute('onclick','redirect(5)');
   vvdd.setAttribute('class','inazuma zed');
   vouv.setAttribute('src','./archive/cssandjs/white-arrow-png-41955.png');
   vouv.setAttribute('class','confm');
   vouv.setAttribute('alt','return');
   let vouh = window.document.createElement('img');
   vouh.setAttribute('src','./archive/cssandjs/homeimg.png');
   vouh.setAttribute('class','confml');
   vouh.setAttribute('alt','return to home');
   let vouvd = window.document.createElement('div');
   vouvd.setAttribute('onclick','search()');
   vouvd.setAttribute('class','inazuma ct');
   
   let nomedad = window.document.createElement('div');
   let nomedac = window.document.createElement('p');
   nomedad.setAttribute('class','inazuma');
   nomedad.setAttribute('id','nomes');
   nomedac.innerHTML = `classes`;
   
   vouvd.appendChild(vouv);
   local.appendChild(vouvd);
   nomedad.appendChild(nomedac);
   sectm.appendChild(nomedad);
   vvdd.appendChild(vouh);
   sectm.appendChild(vvdd);
   sectm.appendChild(window.document.createElement('hr'));
   local.appendChild(sectm);
   //sele????o de classe
   let dvc = [];
   let prc = [];
   for(let i in classname){
     dvc.push(window.document.createElement('section'));
     dvc[i].setAttribute('onclick',`ccmm(${i})`);
       dvc[i].setAttribute('class','intc');
     prc.push(window.document.createElement('p'));
     dvc[i].appendChild(window.document.createTextNode(classname[i]));
     local.appendChild(dvc[i]);
   }
   let rod = window.document.createElement('footer');
   rod.setAttribute('class','rdp')
   let rodts = window.document.createElement('p');
   rodts.setAttribute('class','footc');
   rodts.innerHTML = '<h3 class="inazuma">.link</h3><small class="inazuma">mang??s</small><br><span class="ult">created by: @king</span>';
   
   rod.appendChild(rodts);
   local.appendChild(rod);
 };
 // classe mostra/mangas
 var result;
 //vrs,bootreturn,mngn,mmll variaveis de retorno ao subpage
 var bootreturn;
 var mmll = null;
 function ccmm(sld,tq=null,vrs=null,mngn=null) {
   local.innerHTML = '';
   result = sld;
   window.scrollTo(0,0);
   //menu de mostra para as classes
   let sectm = window.document.createElement('header');
   sectm.setAttribute('class','anti')
   let vouv = window.document.createElement('img');
   let vvdd = window.document.createElement('div');
   vvdd.setAttribute('onclick','redirect(5)');
   vvdd.setAttribute('class','inazuma zed');
   vouv.setAttribute('src','./archive/cssandjs/white-arrow-png-41955.png');
   vouv.setAttribute('class','confm');
   vouv.setAttribute('alt','return');
   let vouh = window.document.createElement('img');
   vouh.setAttribute('src','./archive/cssandjs/homeimg.png');
   vouh.setAttribute('class','confml');
   vouh.setAttribute('alt','return to home');
   let vouvd = window.document.createElement('div');
   //testa para voltar a clas/subp
   if (vrs === 000) {
     bootreturn = vrs;
     mmll = mngn;
   }
   console.log(`${bootreturn}|| ${mmll}`)
   if(bootreturn === 000 && mmll !== null) {
   vouvd.setAttribute('onclick',`subpage(${mmll}, 000)`);
   }else if(tq !== null){
   vouvd.setAttribute('onclick',`subpage(${tq})`);
   }else{
   vouvd.setAttribute('onclick','searclass()');
   };
   vouvd.setAttribute('class','inazuma ct');
   
   let nomedad = window.document.createElement('div');
   let nomedac = window.document.createElement('p');
   nomedad.setAttribute('class','inazuma');
   nomedad.setAttribute('id','nomes');
   nomedac.innerHTML = `classe: ${classname[sld]}`;
   
   vouvd.appendChild(vouv);
   local.appendChild(vouvd);
   nomedad.appendChild(nomedac);
   sectm.appendChild(nomedad);
   vvdd.appendChild(vouh);
   sectm.appendChild(vvdd);
   sectm.appendChild(window.document.createElement('hr'));
   local.appendChild(sectm);
   //fim do menu
   let exts = window.document.createElement('div');
       exts.setAttribute('class','linec');
       let spy = 0;
   for(let i in allclass){
     if(allclass[i].indexOf(sld) !== -1){
       let resultd = window.document.createElement('div');
       resultd.setAttribute('class','linems');
       resultd.setAttribute('onclick',`subpage(${i}, 0, 3, ${++spy}, 5)`);
       let resulti = window.document.createElement('div');
       let worst = caminho2 + allvar[3][i];
       resulti.style.backgroundImage=`url(${worst})`
       resulti.setAttribute('class','bigimg');
       let resultp = window.document.createElement('p');
       resultp.appendChild(window.document.createTextNode(allvar[2][i]));
       resultp.setAttribute('class','csstxt');
       
       resultd.appendChild(resulti);
       resultd.appendChild(resultp);
       exts.appendChild(resultd);
     };
   };
   local.appendChild(exts);
   let rod = window.document.createElement('footer');
   rod.setAttribute('class','rdp')
   let rodts = window.document.createElement('p');
   rodts.setAttribute('class','footc');
   rodts.innerHTML = '<h3 class="inazuma">.link</h3><small class="inazuma">mang??s</small><br><span class="ult">created by: @king</span>';
   
   rod.appendChild(rodts); 
   local.appendChild(rod);
   //scroll de retorno /poo/
   
 };
 //testando o main menu
   
   var sell = [['Favorites','Anime list','Class','Search','Downloads','Coming soon','install','Settings','Home','go out'],['soon','soon','searclass()','search()','soon','soon','insll()','soon','redirect(10)','redirect(12)'],['favorite.png','playmenu.png','classmenu.png','whitesearch.png','download.png','moon.png','instal.png',`tools.png`,'homeimg.png','power.png']];
   var menul = null;
   function menu(zsh=0,vls=0, vRp, Tsc) {
     localizador = 3;
     clearInterval(timer);
     //remover o header
     cabecalho.innerHTML = '';
     
  if(zsh === 999){
    menul = window.document.createElement('div');
   menul.setAttribute('class','sub_maindivmenu');
  }else if(menul === null) {
   menul = window.document.createElement('div');
   menul.setAttribute('class','maindivmenu');
  }
  //emblema e voltar
  let ctxt = '.link';
  let mang = 'mang??s';
  let read = window.document.createElement('span');
  read.appendChild(window.document.createTextNode(mang));
  let pronto = window.document.createElement('h1');
  pronto.innerHTML = ctxt;
  read.setAttribute('class','sublogo');
  pronto.appendChild(read);
  pronto.setAttribute('class','logo inazuma');
  menul.appendChild(pronto);
  //for de opcoes
     for(let i in sell[0]){
       let armz = window.document.createElement('div');
       let dm = window.document.createElement('p');
       let imag = window.document.createElement('img');
       imag.setAttribute('src',`./archive/cssandjs/${sell[2][i]}`)
       imag.setAttribute('alt','option')
       imag.setAttribute('class','miniatura inazuma')
       dm.appendChild(window.document.createTextNode(sell[0][i]));
       dm.setAttribute('class','mutx inazuma');
       armz.setAttribute('class','stylem');
         armz.setAttribute('onclick',`${sell[1][i]}`);
      
       armz.appendChild(imag);
       armz.appendChild(dm);
       menul.appendChild(armz);
      }
     //letras do criador
     let sm = window.document.createElement('small');
     sm.innerHTML = `created by: @king`;
     sm.setAttribute('class','footermenu');
     menul.appendChild(sm);
     menulc.appendChild(menul);
     menul = null;
      rtst(vls, zsh, vRp, Tsc);
      
   }
  //aciona a funcao voltar do main menu
  var xDown = null, yDown = null, xUp = null, yUp = null;
  var jjx, ohmy, vSm, ttpp;
  function rtst(gor, ohzsh, vaSct, tyS) {
   
document.addEventListener('touchstart', touchstart, false);        
document.addEventListener('touchmove', touchmove, false);
document.addEventListener('touchend', touchend, false);
jjx = gor;
ohmy = ohzsh;
vSm = vaSct;
ttpp = tyS;
console.log(gor + 'gor//ohmy' + ohmy);
  }
function touchstart(evt) { const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
xDown = firstTouch.clientX;
yDown = firstTouch.clientY; }
function touchmove(evt) { if (!xDown || !yDown ) return; xUp = evt.touches[0].clientX;
yUp = evt.touches[0].clientY;
}
function touchend(evt) { 
    var xDiff = xUp - xDown, yDiff = yUp - yDown;
    if ((Math.abs(xDiff) > Math.abs(yDiff)) && (Math.abs(xDiff) > 0.33 * document.body.clientWidth)) { 
        if (xDiff < 0 && localizador === 3) {
            //console.log('direc??o X!'+'  / valor= '+ xDiff);
            //console.log(`${jjx} jjx//ohmy ${ohmy}`);
            console.log(`ttpp= ${ttpp} // vSm= ${vSm} // jjx= ${jjx} // localizador2= ${localizador2}`);
            if(localizador2 !== 3) {
            redirect(9, ttpp, vSm, jjx);
            }else{
              redirect(8, ttpp, vSm);
            }
       } else{
            //console.log('direc??o Y'+'  / valor= '+ xDiff);
       }
      } 
     xDown = null, yDown = null;
    }
   //objeto de anima????o
   var party = {
     rotas: function (tip, rdrty, rdrSc, vls2) {
        if(tip !== 2 && tip !== 8 && tip !== 9){
       local.removeAttribute('class');
        }
       if(tip === 1){
      local.innerText = '';
      listd = [];
      lista = [];
      listi = [];
      listp = [];
      mainblock = [];
      marcation = markank;
      home1();
      scrollControl(rdrty,rdrSc);
     //go to home
   }else if(tip === 2){
     classdiv.innerText = '';
    marcation = 0;
    markank = 0;
    classdiv.setAttribute('class','linec');
    classd[0].setAttribute('onclick','class1()');
    classd[0].setAttribute('class','ordem');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
    //eliminar
   }else if(tip === 3){
      local.innerText = '';
      allask.innerText = '';
      alignsearch = null;
      showarea.innerHTML = '';
      window.scrollTo(0, 0);
      allnum++;
      listd = [];
      listi = [];
      listp = [];
      mainblock = [];
      menulc.innerHTML = '';
      home1();
      markank = 0;
     //nosearch
   }else if(tip === 4){
      local.innerText = '';
      allask.innerHTML = '';
      listd = [];
      listi = [];
      listp = [];
      allnum++;
      search();
      scrollControl(rdrty,rdrSc);
      //retorna do subpag ate o searc
   }else if(tip === 5){
      local.innerHTML = '';
      listd = [];
      listi = [];
      listp = [];
      mainblock = [];
      category = [];
      home1();
      markank = 0;
      //retorna ao home do searclas
   }else if(tip === 6){
     local.innerHTML = '';
     ccmm(result);
     scrollControl(rdrty,rdrSc);
     //retorna a sele????o por classe
   }else if(tip === 7){
     local.innerText = '';
     listmore.innerHTML = '';
      listd = [];
      lista = [];
      listi = [];
      listp = [];
      mainblock = [];
      marcation = markank;
      home1();
      alll();
      scrollControl(rdrty,rdrSc);
      console.log('feito 7');
      //reforma do alll
   }else if(tip === 8){
     menulc.innerHTML = '';
     localizador = 4
     menul = null;
     headandheart();
     console.log('redirect 8 on ')
     //retorna do menu
   }else if(tip === 9){
     menulc.innerHTML = '';
     localizador = 4
     menul = null;
     subhead(vls2, rdrty, rdrSc);
     console.log('entrou no redirect 9')
     //retira o menu do subpage
   }else if(tip === 10){
     local.innerText = '';
      listd = [];
      lista = [];
      listi = [];
      listp = [];
      mainblock = [];
      marcation = markank;
      menulc.innerHTML = '';
      localizador = 4
      menul = null;
      home1();
      console.log('redirect 10 ok ')
     //retorna do subpage ao menu
   }else if(tip === 11){
     local.innerHTML = '';
     //listmore.innerHTML = '';
      listd = [];
      listi = [];
      listp = [];
      mainblock = [];
      category = [];
      home1();
      scrollControl(rdrty,rdrSc);
     console.log('redirect 11 funcionou');
      markank = 0;
      //retorna ao home do sub mylist
   }else if(tip === 12){
     window.close();
     console.log('redirect 12 ativado')
   }
     },
     desv: function (tip1, rdrty1, rdrSc1, vls21) {
       if(tip1 !== 2 && tip1 !== 8 && tip1 !== 9){
       local.setAttribute('class','fechar');
       if(cabecalho.id === 'rst'){
         cabecalho.removeAttribute('id');
       }
       setTimeout(`party.rotas(${tip1}, ${rdrty1}, ${rdrSc1}, ${vls21})`, 500);
       }else{
         party.rotas(tip1, rdrty1, rdrSc1, vls21);
       }
     }
   }
 //funcao de redirecionamento
 //rdrSc valor do window scroll
 //rdrty tipo do scrol control
  
 function redirect(tip0, rdrty0=0, rdrSc0=0, vls20) {
   if(localizador === 7){
     cabecalho.removeAttribute('id')
   }
   party.desv(tip0, rdrty0, rdrSc0, vls20);
 }
 //controle do scroll
 
 function scrollControl(typ=0,nS=0) {
   let vl;
   switch (typ) {
     case 1:
       vl = nS * 171;
       window.scrollTo(vl, vl);
      break;
     case 2:
       let st = 930;
       st = st + (nS / 3) * 150;
       console.log(`${st}| test scroll`);
       window.scrollTo(st, st);
       //teste de scroll mais evolu??do my list
      break;
     case 3:
      let st2 = 1300;
       st2 = st2 + (nS / 3) * 150;
       console.log(`${st2}| test scroll classe 1 e 3`);
       window.scrollTo(st2, st2);
       //scroll das classes 1 e 3
      break;
     case 4:
       let st3 = ((nS / 2) * 260) - 260;
       if(st3 <= 0){
         st3 = 0
       }
       console.log(`${st3}| scroll search`);
       window.scrollTo(st3, st3);
       //scroll do search
       break
      case 5:
       let st4 = ((nS / 2) * 260) - 260;
       if(st4 <= 0){
         st4 = 0
       }
       console.log(`${st4}| scroll classes`);
       window.scrollTo(st4, st4);
       //scroll das classes
       break
     default:
     //vazio
      break;
   }
 }
 //pwa sw
//prompt de installation
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => {
      console.log('serviceWorker registrado ' + serviceWorker);
    }).catch((e) => {
      console.log('falha! // ', e.message)
    })
  }
/*
var myPrompt;
const pwaAlert = document.querySelector('#soulTaken');
const btnPWA = document.querySelector('#soul');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  myPrompt = e;
  pwaAlert.style.display="block";
});

btnPWA.addEventListener('click', () => {
  pwaAlert.style.display="none";
  myPrompt.prompt();
  console.log('pronto para instalar ' + e);
  myPrompt.userChoice
  .then( (choiceResult) => {
    if(choiceResult === 'accepted'){
      console.log('instalacao aceita');
    }else{
      console.log('instalacao negada/falhou');
    }
  });
});
*/
  
