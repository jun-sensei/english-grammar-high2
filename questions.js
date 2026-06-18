const QUESTION_BANK = [

// ============================================================
// 文の基本構造・品詞 (gram_basic)
// ============================================================
{unit:"gram_basic",diff:1,type:"mc",q:"「I gave her a book.」は第何文型か？",c:["第4文型（SVOO）","第3文型（SVO）","第5文型（SVOC）","第2文型（SVC）"],exp:"give＋人＋物の形（第4文型SVOO）。Iがs、gaveがV、herがO₁、a bookがO₂。"},
{unit:"gram_basic",diff:1,type:"mc",q:"「She became a doctor.」は第何文型か？",c:["第2文型（SVC）","第1文型（SV）","第3文型（SVO）","第4文型（SVOO）"],exp:"become は「〜になる」を意味するSVC文型を作る動詞（連結動詞）。doctorが補語C。"},
{unit:"gram_basic",diff:1,type:"mc",q:"「The dog barked loudly.」は第何文型か？",c:["第1文型（SV）","第2文型（SVC）","第3文型（SVO）","第5文型（SVOC）"],exp:"barkは自動詞。SとV（と修飾語）だけで成立する第1文型。loudlyは副詞で文型には含まない。"},
{unit:"gram_basic",diff:2,type:"mc",q:"「We elected him president.」は第何文型か？",c:["第5文型（SVOC）","第4文型（SVOO）","第3文型（SVO）","第2文型（SVC）"],exp:"elect＋O＋C（OをCとして選ぶ）の第5文型。himがO、presidentがC。"},
{unit:"gram_basic",diff:2,type:"mc",q:"「He made her happy.」のmadeは何文型を作るか？",c:["第5文型（SVOC）","第4文型（SVOO）","第3文型（SVO）","第2文型（SVC）"],exp:"make＋O＋形容詞（OをCの状態にする）の第5文型。herがO、happyがC（補語）。"},
{unit:"gram_basic",diff:2,type:"mc",q:"次のうち第3文型（SVO）の文はどれか？",c:["I love music.","She looks tired.","He gave me a pen.","They kept the room clean."],exp:"love＋目的語（music）でSVO第3文型。look tired→SVC、gave me a pen→SVOO、kept clean→SVOC。"},
{unit:"gram_basic",diff:3,type:"mc",q:"「She found the work easy.」の文型はどれか？",c:["第5文型（SVOC）","第4文型（SVOO）","第3文型（SVO）","第2文型（SVC）"],exp:"find＋O＋C（OがCであるとわかる）の第5文型。the workがO、easyがC。"},
{unit:"gram_basic",diff:3,type:"mc",q:"「My father bought me a new bike.」をSVOの文に書き換えると？",c:["My father bought a new bike for me.","My father bought me to a new bike.","My father bought to me a new bike.","My father bought a new bike of me."],exp:"buyはSVOO→for構文に書き換え。buy＋O1＋O2→buy＋O2＋for＋O1。"},

// ============================================================
// 時制 (gram_tense)
// ============================================================
{unit:"gram_tense",diff:1,type:"mc",q:"「I （　） to school every day.」に入る動詞の形は？",c:["walk","walked","am walking","will walk"],exp:"every dayは現在の習慣を表す。現在形walkを使う。"},
{unit:"gram_tense",diff:1,type:"mc",q:"「She （　） dinner when I arrived.」に入る語は？",c:["was cooking","cooked","has cooked","cooks"],exp:"arrived（過去）のとき進行していた動作→過去進行形 was cooking。「私が着いたとき彼女は夕食を作っていた。」"},
{unit:"gram_tense",diff:1,type:"mc",q:"「It （　） tomorrow.」（明日雨が降るだろう）に入る表現は？",c:["will rain","rains","rained","is rained"],exp:"未来の予測にwill＋動詞の原形。will rain（雨が降るだろう）。"},
{unit:"gram_tense",diff:2,type:"mc",q:"「I （　） a book when you called me.」に入る語句は？",c:["was reading","read","have read","will read"],exp:"過去のある時点（when you called）に進行中の動作→過去進行形 was reading。"},
{unit:"gram_tense",diff:2,type:"mc",q:"「By the time she arrived, the meeting （　）.」に入る語句は？",c:["had already started","already started","has already started","was already starting"],exp:"「彼女が着いた」（過去）より前に会議が始まった→過去完了 had started を使う。"},
{unit:"gram_tense",diff:2,type:"mc",q:"現在完了と過去形の説明として正しいのは？",c:["現在完了は現在との関係を示し、yesterdayなどの明確な過去の時点と共に使えない","現在完了はyesterdayと共に使える","過去形は現在との関係を示す","どちらも同じ意味である"],exp:"現在完了（have＋pp）は現在との繋がりを表す。yesterday/last yearなど明確な過去の時点とは使わない。"},
{unit:"gram_tense",diff:3,type:"mc",q:"「Look at those clouds. It （　） rain.」に入る表現として最も自然なのは？",c:["is going to","will","would","has been"],exp:"根拠のある近い将来の予測にはis going toが自然。雲を見て雨が降りそう→be going to rain。"},
{unit:"gram_tense",diff:3,type:"mc",q:"「By next month, he （　） here for ten years.」に入る語句は？",c:["will have worked","has worked","worked","will work"],exp:"未来の特定の時点までの完了・継続→未来完了 will have＋過去分詞。"},

// ============================================================
// 現在完了・過去完了 (gram_perfect)
// ============================================================
{unit:"gram_perfect",diff:1,type:"mc",q:"「I （　） never （　） sushi.」（今まで寿司を食べたことがない）に入る語は？",c:["have / eaten","have / eat","had / eat","am / eating"],exp:"経験を表す現在完了の否定：have never＋過去分詞。eatの過去分詞はeaten。"},
{unit:"gram_perfect",diff:1,type:"mc",q:"「She has lived in Tokyo （　） 2010.」に入る語は？",c:["since","for","during","from"],exp:"since＋過去の時点（〜以来）、for＋期間（〜の間）。2010年（時点）→since。"},
{unit:"gram_perfect",diff:1,type:"mc",q:"「I have been to Paris.」の意味は？",c:["パリに行ったことがある（経験）","パリに行ってきたところだ","パリに行ってしまった","パリに行っていた"],exp:"have been to〜＝〜に行ったことがある（経験）。have gone to〜は「〜に行ってしまった（今ここにいない）」。"},
{unit:"gram_perfect",diff:2,type:"mc",q:"「How long （　） you （　） English?」（どのくらいの間英語を勉強していますか？）に入る語は？",c:["have / studied","did / study","do / study","are / studying"],exp:"継続を問う現在完了の疑問文：How long have you＋過去分詞？"},
{unit:"gram_perfect",diff:2,type:"mc",q:"「She has just （　） her homework.」（彼女はちょうど宿題を終えたところだ）に入る語は？",c:["finished","finish","finishing","finishes"],exp:"just（ちょうど〜したところ）は完了を表す現在完了で使う。have just＋過去分詞。"},
{unit:"gram_perfect",diff:2,type:"mc",q:"「I （　） to that museum before.」（あの博物館には以前行ったことがある）に入る語句は？",c:["have been","went","have gone","had been"],exp:"経験の現在完了：have been to〜（〜に行ったことがある）。beforeは経験の完了で使われる副詞。"},
{unit:"gram_perfect",diff:3,type:"mc",q:"「He （　） already （　） when I got home.」（私が帰宅した時には彼はもう出発していた）に入る語は？",c:["had / left","has / left","was / leaving","would / leave"],exp:"過去完了（had＋過去分詞）：過去の時点（got home）より前に起きた出来事を表す。"},
{unit:"gram_perfect",diff:3,type:"mc",q:"現在完了進行形の用法として正しい例文はどれか？",c:["I have been studying for two hours.","I have studied for two hours ago.","I am studying since this morning.","I had been studied for two hours."],exp:"現在完了進行形：have/has been＋動詞のing形。過去から現在まで継続する動作を強調。"},

// ============================================================
// 助動詞 (gram_modal)
// ============================================================
{unit:"gram_modal",diff:1,type:"mc",q:"「You （　） not smoke here.」（ここでは喫煙してはいけません）に入る語は？",c:["must","should","may","might"],exp:"must not＝〜してはいけない（禁止）。don't have toは「〜しなくてよい」（不必要）で意味が違う。"},
{unit:"gram_modal",diff:1,type:"mc",q:"「She （　） be sick. She looks pale.」（彼女は病気かもしれない）に入る語は？",c:["may","must","will","shall"],exp:"may＝〜かもしれない（可能性・推測）。顔が青ざめていることから推測している。"},
{unit:"gram_modal",diff:1,type:"mc",q:"「You don't （　） hurry.」（急ぐ必要はありません）に入る語は？",c:["have to","must","need","ought to"],exp:"don't have to＝〜する必要がない（不必要）。must not（禁止）とは意味が異なる。"},
{unit:"gram_modal",diff:2,type:"mc",q:"「He （　） be Tom's brother. He looks just like him.」に入る語として最も適切なのは？",c:["must","can","may","might"],exp:"must＝〜に違いない（確信の強い推測）。顔が似ているという根拠から強く推測。"},
{unit:"gram_modal",diff:2,type:"mc",q:"「（　） you open the window?」（窓を開けていただけますか？）に入る語は？",c:["Could","Should","Must","Ought to"],exp:"Could you〜?は丁寧な依頼表現。Can you〜?よりも丁寧なニュアンスを持つ。"},
{unit:"gram_modal",diff:2,type:"mc",q:"「You （　） exercise more.」（もっと運動すべきです）に入る語は？",c:["should","must","can","may"],exp:"should＝〜すべきだ（義務・助言）。mustより柔らかいニュアンスで助言を表す。"},
{unit:"gram_modal",diff:3,type:"mc",q:"「He （　） have forgotten. He never forgets anything.」（彼が忘れるはずがない）に入る語は？",c:["can't","must","may","should"],exp:"can't have＋過去分詞＝〜したはずがない（過去の否定的推量）。can't が強い否定を表す。"},
{unit:"gram_modal",diff:3,type:"mc",q:"「I （　） rather stay home than go out.」（外出するよりも家にいたい）に入る語は？",c:["would","should","could","might"],exp:"would rather A than B＝BよりAしたい。日常的な好みを表す。"},

// ============================================================
// 不定詞 (gram_infinitive)
// ============================================================
{unit:"gram_infinitive",diff:1,type:"mc",q:"「I want （　） tennis.」（テニスをしたい）に入る語は？",c:["to play","play","playing","played"],exp:"want to＋動詞の原形：〜したい。名詞的用法の不定詞。"},
{unit:"gram_infinitive",diff:1,type:"mc",q:"「She went to the library （　） books.」（本を借りに図書館へ行った）に入る語は？",c:["to borrow","borrow","borrowing","borrowed"],exp:"副詞的用法の不定詞（目的）：〜するために。to borrow（借りるために）。"},
{unit:"gram_infinitive",diff:1,type:"mc",q:"「I have a lot of work （　）.」（やるべき仕事がたくさんある）に入る語は？",c:["to do","do","doing","done"],exp:"形容詞的用法の不定詞：名詞を後ろから修飾。work to do（するべき仕事）。"},
{unit:"gram_infinitive",diff:2,type:"mc",q:"「It is difficult （　） this problem.」（この問題を解くのは難しい）に入る語は？",c:["to solve","solve","solving","solved"],exp:"It is＋形容詞＋to不定詞：〜することは…だ。It（仮主語）の真の主語はto solve以下。"},
{unit:"gram_infinitive",diff:2,type:"mc",q:"「He told me （　） early.」（彼は私に早く来るよう言った）に入る語は？",c:["to come","come","coming","came"],exp:"tell＋人＋to不定詞：人に〜するよう言う。SVOCの第5文型。"},
{unit:"gram_infinitive",diff:2,type:"mc",q:"「不定詞の意味上の主語」として正しい例文はどれか？",c:["It is easy for him to solve this.","It is easy him to solve this.","It is easy to him solve this.","It is easy of him to solve this."],exp:"不定詞の意味上の主語はfor＋人で表す。ただしkind/careless等の人の性質を表す形容詞はof。"},
{unit:"gram_infinitive",diff:3,type:"mc",q:"「She must be brave （　） say such a thing in public.」（そんなことを人前で言うとは彼女は勇敢だ）に入る語は？",c:["to","for","of","in"],exp:"to＋動詞原形で判断の根拠を表す副詞的用法。「〜するとは（さすが）」。must be brave to say（言うとは勇敢だ）。"},
{unit:"gram_infinitive",diff:3,type:"mc",q:"「I （　） him to go there.」と同じ意味の文はどれか？",c:["I made him go there.","I had him to go there.","I let him going there.","I got him go there."],exp:"make＋O＋動詞原形（強制）。OC関係でCは動詞原形。get＋O＋to不定詞も可。"},

// ============================================================
// 動名詞 (gram_gerund)
// ============================================================
{unit:"gram_gerund",diff:1,type:"mc",q:"「I enjoy （　） music.」（音楽を聴くのが楽しい）に入る語は？",c:["listening to","to listen to","listen to","listened to"],exp:"enjoyの後は動名詞（〜ing）。enjoy listening to〜（〜を聴くことを楽しむ）。"},
{unit:"gram_gerund",diff:1,type:"mc",q:"「（　） English is important.」（英語を勉強することは大切だ）の動名詞として正しいのは？",c:["Studying","Study","Studied","Studies"],exp:"主語としての動名詞（〜ing形）：Studying（勉強すること）が文の主語。動詞の原形Studyや過去形Studiedは主語にはなれない。"},
{unit:"gram_gerund",diff:1,type:"mc",q:"次のうち動名詞のみを目的語に取る動詞はどれか？",c:["avoid","want","decide","hope"],exp:"avoid（避ける）は動名詞のみを取る。want/decide/hopeはto不定詞を取る。"},
{unit:"gram_gerund",diff:2,type:"mc",q:"「She stopped （　） and started （　）.」（彼女は笑うのをやめて泣き始めた）に入る語は？",c:["laughing / crying","to laugh / to cry","laugh / cry","laughed / cried"],exp:"stop＋動名詞＝〜するのをやめる（stop to〜は「〜するために立ち止まる」で意味が違う）。start＋動名詞・不定詞どちらも可。"},
{unit:"gram_gerund",diff:2,type:"mc",q:"「I remember （　） her before.」（以前彼女に会ったことを覚えている）に入る語は？",c:["meeting","to meet","meet","met"],exp:"remember＋動名詞＝（過去に）〜したことを覚えている。remember to〜は「（これから）〜することを覚えておく」。"},
{unit:"gram_gerund",diff:2,type:"mc",q:"「Thank you for （　）.」（来てくれてありがとう）に入る語は？",c:["coming","to come","come","came"],exp:"前置詞（for）の後には動名詞を使う。for＋動名詞：〜してくれたことに対して。"},
{unit:"gram_gerund",diff:3,type:"mc",q:"「His （　） early surprised everyone.」（彼が早く去ったことはみんなを驚かせた）に入る語は？",c:["leaving","leave","to leave","left"],exp:"動名詞の意味上の主語は所有格（his）で表す。his leaving（彼が去ること）が主語。"},
{unit:"gram_gerund",diff:3,type:"mc",q:"「I'm looking forward to （　） you again.」（またあなたに会えることを楽しみにしています）に入る語は？",c:["seeing","see","to see","seen"],exp:"look forward to＋動名詞（toは前置詞）。to不定詞ではないので注意。"},

// ============================================================
// 分詞 (gram_participle)
// ============================================================
{unit:"gram_participle",diff:1,type:"mc",q:"「The boy （　） over there is my brother.」（あそこで走っている少年は私の弟です）に入る語は？",c:["running","runs","run","ran"],exp:"現在分詞の形容詞用法：名詞を後ろから修飾。running over there（あそこで走っている）がthe boyを修飾。"},
{unit:"gram_participle",diff:1,type:"mc",q:"「This is a letter （　） by my father.」（これは父が書いた手紙です）に入る語は？",c:["written","writing","write","wrote"],exp:"過去分詞の形容詞用法：受動の意味で名詞を後ろから修飾。written by my father（父によって書かれた）。"},
{unit:"gram_participle",diff:2,type:"mc",q:"「（　） the letter, she began to cry.」（手紙を読んで、彼女は泣き始めた）に入る語は？",c:["Reading","Read","Having read","To read"],exp:"分詞構文：主文の主語（she）が手紙を読む動作と泣き始める動作は連続。Reading（〜しながら/〜して）。"},
{unit:"gram_participle",diff:2,type:"mc",q:"「She sat （　） her eyes closed.」（目を閉じて座っていた）の構造は？",c:["with＋O＋過去分詞（付帯状況）","動名詞の副詞的用法","不定詞の結果用法","独立分詞構文"],exp:"with＋O＋分詞：付帯状況を表す。eyes（O）がclose される（過去分詞）。"},
{unit:"gram_participle",diff:2,type:"mc",q:"「Generally （　）, English is widely spoken.」（一般的に言えば、英語は広く使われている）に入る語は？",c:["speaking","spoken","speak","to speak"],exp:"分詞構文の慣用表現：generally speaking（一般的に言えば）、strictly speaking（厳密に言えば）。"},
{unit:"gram_participle",diff:3,type:"mc",q:"「（　） her homework, she went to bed.」（宿題を終えてから、彼女は寝た）に入る最も適切な語は？",c:["Having finished","Finishing","Finished","To finish"],exp:"完了分詞構文（having＋過去分詞）：主文の動作より前に完了した動作を表す。"},
{unit:"gram_participle",diff:3,type:"mc",q:"「The news was （　）.」と「She was （　）.」に共通して入る語は？（「驚くべき」と「驚いた」）",c:["surprising / surprised","surprised / surprising","astonishing / astonishing","amazed / amazed"],exp:"感情を表す分詞：〜ing（物事が主語で「〜させる」）、〜ed（人が主語で「〜している」）。The news was surprising.（驚くべきニュース）/ She was surprised.（彼女は驚いた）。"},

// ============================================================
// 関係代名詞・関係副詞 (gram_relative)
// ============================================================
{unit:"gram_relative",diff:1,type:"mc",q:"「The man （　） lives next door is a doctor.」（隣に住んでいる男性は医者です）に入る語は？",c:["who","which","whose","whom"],exp:"先行詞がthe man（人）で関係詞節内で主語→who。"},
{unit:"gram_relative",diff:1,type:"mc",q:"「This is the book （　） I bought yesterday.」（これは昨日私が買った本です）に入る語は？",c:["that / which","who","whose","where"],exp:"先行詞がthe book（物）で関係詞節内で目的語→which（またはthat）。目的格の関係代名詞は省略可。"},
{unit:"gram_relative",diff:1,type:"mc",q:"「He is the boy （　） father is a famous singer.」（彼は父親が有名な歌手の少年です）に入る語は？",c:["whose","who","which","that"],exp:"所有格の関係代名詞whose：先行詞の「〜の」を表す。whose father（その少年の父親）。"},
{unit:"gram_relative",diff:2,type:"mc",q:"「The city （　） I was born has changed a lot.」（私が生まれた市は大きく変わった）に入る語は？",c:["where","which","who","whose"],exp:"先行詞がthe city（場所）で関係詞節内で場所の副詞的用法→where（関係副詞）。"},
{unit:"gram_relative",diff:2,type:"mc",q:"「I don't know the reason （　） she was absent.」（彼女が欠席した理由がわからない）に入る語は？",c:["why","which","when","where"],exp:"先行詞がthe reason（理由）→関係副詞why。"},
{unit:"gram_relative",diff:2,type:"mc",q:"「Tom, （　） is my best friend, is very kind.」（私の親友のトムはとても親切です）の空欄に入る語は？",c:["who","which","that","whose"],exp:"非制限用法（コンマ付き）：先行詞が固有名詞（Tom）→who。thatは非制限用法では使えない。"},
{unit:"gram_relative",diff:3,type:"mc",q:"「（　） you say may not be true.」（あなたが言うことは正しくないかもしれない）に入る語は？",c:["What","That","Which","How"],exp:"先行詞を含む関係代名詞what（〜すること/もの）。what＝the thing(s) which。"},
{unit:"gram_relative",diff:3,type:"mc",q:"「This is the hotel （　） we stayed last summer.」の空欄に入る語として正しくないのはどれか？",c:["that","where","at which","in which"],exp:"元の文はwe stayed at the hotel。atの目的語が先行詞になるため、関係副詞where、前置詞+関係代名詞at which/in whichが使える。thatは前置詞と組み合わせられず（×at that）、that単独では前置詞atが脱落して不完全な節になるため使えない。"},

// ============================================================
// 受動態 (gram_passive)
// ============================================================
{unit:"gram_passive",diff:1,type:"mc",q:"「Many people speak English.」を受動態にすると？",c:["English is spoken by many people.","English spoken by many people.","English is speak by many people.","English was spoken by many people."],exp:"受動態：be動詞＋過去分詞（＋by〜）。現在形なのでis spoken。"},
{unit:"gram_passive",diff:1,type:"mc",q:"「This cake was made （　） my mother.」に入る前置詞は？",c:["by","from","with","of"],exp:"受動態の動作主はby〜で表す。by my mother（私の母によって）。"},
{unit:"gram_passive",diff:1,type:"mc",q:"「The window （　） broken yesterday.」（窓は昨日割られた）に入る語は？",c:["was","is","has been","will be"],exp:"過去の受動態：was＋過去分詞。yesterdayが過去を示す。"},
{unit:"gram_passive",diff:2,type:"mc",q:"「They are building a new school.」を受動態にすると？",c:["A new school is being built by them.","A new school is built by them.","A new school was being built by them.","A new school has been built by them."],exp:"進行形の受動態：be being＋過去分詞。現在進行中の受動態はis being built。"},
{unit:"gram_passive",diff:2,type:"mc",q:"「She was laughed at by the boys.」の能動態は？",c:["The boys laughed at her.","The boys laughed her at.","The boys laughed at she.","The boys were laughed at by her."],exp:"句動詞（laugh at）の受動態：laugh at+O → be laughed at by〜。atを忘れずに。"},
{unit:"gram_passive",diff:2,type:"mc",q:"「She is known （　） everyone.」（彼女はみんなに知られている）に入る語は？",c:["to","by","for","with"],exp:"know受動態の慣用句：be known to〜（〜に知られている）。by（動作主）とは違う用法。"},
{unit:"gram_passive",diff:3,type:"mc",q:"「SVOO文型の受動態で正しいのはどれか？（They gave her a present.）」",c:["She was given a present.","A present was given her.","She was given a present to.","A present given to her."],exp:"SVOO→受動態：O₁（人）を主語にする場合はShe was given a present.（よく使われる形）。"},
{unit:"gram_passive",diff:3,type:"mc",q:"「It is said that he is very rich.」と同じ意味の文はどれか？",c:["He is said to be very rich.","He says to be very rich.","He is saying to be very rich.","It says that he is very rich."],exp:"It is said that〜 ↔ 主語＋is said to〜（同格表現の書き換え）。"},

// ============================================================
// 比較 (gram_comparison)
// ============================================================
{unit:"gram_comparison",diff:1,type:"mc",q:"「She is （　） than her sister.」（彼女は姉より背が高い）に入る語は？",c:["taller","more tall","tallest","tall"],exp:"比較級：1音節の形容詞はer。tall→taller＋than〜。"},
{unit:"gram_comparison",diff:1,type:"mc",q:"「This is the （　） book in the library.」（図書館で最も面白い本）に入る語は？",c:["most interesting","more interesting","interestingest","much interesting"],exp:"最上級：3音節以上はmost＋形容詞。interesting→most interesting。the＋最上級。"},
{unit:"gram_comparison",diff:1,type:"mc",q:"「He runs as （　） as me.」（彼は私と同じくらい速く走る）に入る語は？",c:["fast","faster","fastest","more fast"],exp:"同等比較：as＋原級＋as〜。「〜と同じくらい…だ」。"},
{unit:"gram_comparison",diff:2,type:"mc",q:"「The more you practice, （　）.」（練習すればするほど上手くなる）に入る語は？",c:["the better you get","the more good you get","you get better","better you get"],exp:"the＋比較級〜, the＋比較級…：〜すればするほど…。"},
{unit:"gram_comparison",diff:2,type:"mc",q:"「No other mountain in Japan is （　） Mt. Fuji.」（富士山より高い山は日本にない）に入る語句は？",c:["higher than","as high as","the highest","higher than as"],exp:"最上級の書き換え：No other＋名詞＋is＋比較級＋than〜（最上級と同義）。"},
{unit:"gram_comparison",diff:2,type:"mc",q:"「I prefer coffee （　） tea.」（私はお茶よりコーヒーが好きだ）に入る語は？",c:["to","than","from","over"],exp:"prefer A to B：BよりAを好む。preferの比較はtoを使う（thanではない）。"},
{unit:"gram_comparison",diff:3,type:"mc",q:"「He is （　） the cleverest student in the class.」（彼はクラスで間違いなく最も賢い）に入る語は？",c:["by far","very","so","much"],exp:"最上級の強調：by far＋最上級（〜の中で断然…）。比較級の強調はmuch/even/far。"},
{unit:"gram_comparison",diff:2,type:"mc",q:"「She is no （　） a student.」（彼女はもはや学生ではない）に入る語は？",c:["longer","more","further","less"],exp:"no longer＝もはや〜でない。not〜anymore/not〜any longerと同義。"},

// ============================================================
// 接続詞・前置詞 (gram_conjunction)
// ============================================================
{unit:"gram_conjunction",diff:1,type:"mc",q:"「I will help you （　） you need me.」（必要なときはいつでも助けます）に入る語は？",c:["whenever","if","unless","although"],exp:"whenever＝〜するときはいつでも（時を表す従属接続詞）。"},
{unit:"gram_conjunction",diff:1,type:"mc",q:"「He worked hard （　） he was tired.」（疲れていたけれども一生懸命働いた）に入る語は？",c:["although","because","if","since"],exp:"although/though＝〜だけれども（逆接の従属接続詞）。"},
{unit:"gram_conjunction",diff:1,type:"mc",q:"「（　） it was raining, we went out.」（雨が降っていたが、私たちは外出した）に入る語は？",c:["Although","Because","Since","Before"],exp:"although＝〜にもかかわらず（逆接）。Despiteは前置詞なのでDespite the rain（名詞句）。"},
{unit:"gram_conjunction",diff:2,type:"mc",q:"「She came （　） the rain had stopped.」（雨がやんだ後、彼女は来た）に入る語は？",c:["after","while","before","since"],exp:"after＋S＋V（〜した後）：時の従属接続詞。"},
{unit:"gram_conjunction",diff:2,type:"mc",q:"「Study hard, （　） you will pass the exam.」（一生懸命勉強しなさい、そうすれば合格します）に入る語は？",c:["and","or","but","so"],exp:"命令文, and〜＝〜しなさい、そうすれば…（肯定的な結果）。命令文, or〜＝〜しなさい、さもなければ…（否定的な結果）。"},
{unit:"gram_conjunction",diff:2,type:"mc",q:"「（　） she is young, she is very wise.」（若いにもかかわらず、とても賢い）に入る語は？",c:["Though","Since","As","Because"],exp:"Though/Although＝〜にもかかわらず（逆接）。Since/Because/As＝〜なので（理由）。"},
{unit:"gram_conjunction",diff:3,type:"mc",q:"「Not only did he sing, （　） he also danced.」に入る語は？",c:["but","and","or","so"],exp:"not only A but also B＝AだけでなくBも。倒置（Not only did he sing）が起きる点に注意。"},
{unit:"gram_conjunction",diff:3,type:"mc",q:"「（　） hard I try, I can't solve this problem.」（どんなに努力しても解けない）に入る語は？",c:["However","Whatever","Whenever","Wherever"],exp:"however＋形容詞/副詞＝どれほど〜でも（no matter how〜と同義の譲歩節）。"},

// ============================================================
// 仮定法 (gram_subjunctive)
// ============================================================
{unit:"gram_subjunctive",diff:1,type:"mc",q:"「If I （　） a bird, I could fly.」（もし鳥なら飛べるのに）に入る語は？",c:["were","am","was","be"],exp:"仮定法過去（現在の事実に反する仮定）：if節の動詞は過去形。be動詞はwereを使う（I/he/sheでもwere）。"},
{unit:"gram_subjunctive",diff:2,type:"mc",q:"「If I had studied harder, I （　） passed the exam.」（もっと勉強していたら合格していたのに）の（　）に入る語句は？",c:["would have","will have","would","had"],exp:"仮定法過去完了：if節にhad＋過去分詞、主節にwould/could have＋過去分詞。「合格していただろうに」→would have passed。"},
{unit:"gram_subjunctive",diff:1,type:"mc",q:"「I wish I （　） more money.」（もっとお金があればいいのに）に入る語は？",c:["had","have","would have","will have"],exp:"I wish＋仮定法過去：現在の事実に反する願望。「お金がない」現実に反してhad（仮定法）を使う。"},
{unit:"gram_subjunctive",diff:2,type:"mc",q:"「If it weren't for your help, I （　） finish the work.」（あなたの助けがなければ仕事を終えられない）に入る語は？",c:["couldn't","can't","won't","don't"],exp:"if it weren't for〜＝〜がなければ（仮定法過去）。現在の仮定なので主節はcould/would＋動詞原形。"},
{unit:"gram_subjunctive",diff:2,type:"mc",q:"「If only I （　） there yesterday!」（昨日そこにいたらよかったのに！）に入る語は？",c:["had been","was","were","have been"],exp:"If only＋仮定法過去完了：過去の事実に反する強い後悔・願望。yesterdayなので仮定法過去完了。"},
{unit:"gram_subjunctive",diff:2,type:"mc",q:"「Without her advice, he （　） made many mistakes.」（彼女の助言がなければ、多くのミスをしたでしょう）に入る語は？",c:["would have","will have","had","would"],exp:"Without〜＝if it had not been for〜（仮定法過去完了）。主節はwould have＋過去分詞。"},
{unit:"gram_subjunctive",diff:3,type:"mc",q:"「（　） it rain tomorrow, we would cancel the event.」（明日雨なら中止するでしょう）に入る語句は？",c:["Were it to","Should it","If it","Was it"],exp:"倒置による仮定法：Should S＋V（万一〜なら）またはWere S to V。ifを省略して倒置する形式。"},
{unit:"gram_subjunctive",diff:3,type:"mc",q:"「It's time we （　） home.」（もう家に帰るべき時だ）に入る語は？",c:["went","go","will go","have gone"],exp:"It's time (that)＋仮定法過去：「もう〜すべき時だ」。時制は過去形（went）を使う慣用表現。"},

// ============================================================
// 語彙 Lesson 1-3 (voc_1)
// ============================================================
{unit:"voc_1",diff:1,type:"spell",word:"environment",meaning:"環境",exp:"environ＋ment。environmentalで「環境の」。environmental issues（環境問題）。"},
{unit:"voc_1",diff:1,type:"spell",word:"necessary",meaning:"必要な",exp:"二重子音：ss。it is necessary to〜（〜することが必要だ）。necessity（必要性）。"},
{unit:"voc_1",diff:1,type:"spell",word:"although",meaning:"〜だけれども",exp:"譲歩の接続詞。al＋though。thoughよりもやや文語的。"},
{unit:"voc_1",diff:1,type:"spell",word:"achieve",meaning:"達成する",exp:"achievement（達成・業績）。ch＋ie。achieve a goal（目標を達成する）。"},
{unit:"voc_1",diff:2,type:"mc",q:"「The government made an （　） to reduce carbon emissions.」（政府は炭素排出量削減の努力をした）に入る語は？",c:["effort","affect","effect","offer"],exp:"make an effort to〜＝〜しようと努力する。effort（努力・尽力）。"},
{unit:"voc_1",diff:2,type:"mc",q:"「The scientist made an important （　）.」（科学者は重要な発見をした）に入る語は？",c:["discovery","invention","experiment","research"],exp:"discovery＝発見（既に存在するものを見つける）。invention＝発明（新しいものを作り出す）。"},
{unit:"voc_1",diff:2,type:"mc",q:"「She has great （　） in her future.」（彼女は将来に大きな可能性を秘めている）に入る語は？",c:["potential","influence","authority","evidence"],exp:"potential＝潜在的な可能性・才能。have potential（可能性を秘めている）。"},
{unit:"voc_1",diff:3,type:"mc",q:"「The company （　） to expand its business overseas.」（その会社は海外への事業拡大を望んだ）に入る語は？",c:["sought","looked","tried","aimed"],exp:"seek（sought-sought）＝〜を求める・望む。seek to＋動詞（〜しようとする）は文語的・ビジネス表現。"},

// ============================================================
// 語彙 Lesson 4-6 (voc_2)
// ============================================================
{unit:"voc_2",diff:1,type:"spell",word:"responsible",meaning:"責任がある",exp:"be responsible for〜＝〜に責任がある。responsibility（責任）。"},
{unit:"voc_2",diff:1,type:"spell",word:"consequence",meaning:"結果・影響",exp:"as a consequence（その結果として）。consequentlyは副詞。"},
{unit:"voc_2",diff:1,type:"spell",word:"significant",meaning:"重要な・著しい",exp:"significantly（著しく）。significance（重要性）。a significant difference（著しい差）。"},
{unit:"voc_2",diff:1,type:"spell",word:"opportunity",meaning:"機会・チャンス",exp:"opportunityは好機・絶好のチャンス。take the opportunity（機会を利用する）。"},
{unit:"voc_2",diff:2,type:"mc",q:"「We must （　） to protect the endangered species.」（絶滅危惧種を守るために努力しなければならない）に入る語は？",c:["strive","ignore","neglect","abandon"],exp:"strive（to〜）＝〜しようと努力する。struggle/endeavorと類義。"},
{unit:"voc_2",diff:2,type:"mc",q:"「Many people （　） from poverty in developing countries.」に入る語は？",c:["suffer","benefit","result","escape"],exp:"suffer from〜＝〜に苦しむ。suffer from poverty（貧困に苦しむ）。"},
{unit:"voc_2",diff:2,type:"mc",q:"「The new policy will （　） many jobs.」（新しい政策は多くの雇用を生み出すだろう）に入る語は？",c:["create","remove","reduce","replace"],exp:"create＝作り出す・創造する。create jobs（雇用を創出する）。"},
{unit:"voc_2",diff:3,type:"mc",q:"「The company （　） a new product to compete in the market.」に入る語は？",c:["launched","established","released","promoted"],exp:"launch＝（製品を）市場に出す・発売する。launch a product/service。releaseも類義だが、launchは大規模な宣伝を伴うニュアンス。"},

// ============================================================
// 語彙 Lesson 7-9 (voc_3)
// ============================================================
{unit:"voc_3",diff:1,type:"spell",word:"despite",meaning:"〜にもかかわらず",exp:"前置詞（後ろに名詞句）。despite the rain（雨にもかかわらず）。althoughは接続詞（後ろにS＋V）。"},
{unit:"voc_3",diff:1,type:"spell",word:"furthermore",meaning:"さらに・その上",exp:"moreover/in addition/besides（さらに・加えて）と同類の接続副詞。"},
{unit:"voc_3",diff:1,type:"spell",word:"argument",meaning:"議論・主張",exp:"argue（議論する）→argument。make an argument（主張する）。"},
{unit:"voc_3",diff:1,type:"spell",word:"foundation",meaning:"基礎・財団",exp:"found→foundation。lay the foundation（基礎を築く）。a charitable foundation（慈善財団）。"},
{unit:"voc_3",diff:2,type:"mc",q:"「The researcher （　） that air pollution causes health problems.」（研究者は大気汚染が健康問題を引き起こすと主張した）に入る語は？",c:["argued","denied","wondered","doubted"],exp:"argue that〜＝〜だと主張する。claim/contendも同義。"},
{unit:"voc_3",diff:2,type:"mc",q:"「The government should （　） more money to education.」（政府は教育にもっとお金を配分すべきだ）に入る語は？",c:["allocate","donate","invest","earn"],exp:"allocate（資源・お金を）割り当てる・配分する。allocate funds to〜（〜に資金を配分する）。"},
{unit:"voc_3",diff:2,type:"mc",q:"「The two countries reached a（n） （　）.」（2つの国は合意に達した）に入る語は？",c:["agreement","argument","arrangement","announcement"],exp:"reach an agreement＝合意に達する。agree→agreement。"},
{unit:"voc_3",diff:3,type:"mc",q:"「The findings （　） that regular exercise improves mental health.」に入る語は？",c:["indicate","remind","realize","assure"],exp:"indicate（that〜）＝〜を示す・〜を指し示す。研究結果などが「示す」場合に使うフォーマルな語。"},

// ============================================================
// 語彙 Lesson 10-12 (voc_4)
// ============================================================
{unit:"voc_4",diff:1,type:"spell",word:"gradually",meaning:"徐々に・少しずつ",exp:"gradual（徐々の）＋ly。gradually increase（徐々に増加する）。"},
{unit:"voc_4",diff:2,type:"spell",word:"phenomenon",meaning:"現象",exp:"複数形：phenomena。a natural phenomenon（自然現象）。"},
{unit:"voc_4",diff:1,type:"spell",word:"efficient",meaning:"効率的な",exp:"efficiency（効率）。an efficient method（効率的な方法）。effectiveとの違い：efficientは「効率よく」、effectiveは「効果的に」。"},
{unit:"voc_4",diff:1,type:"spell",word:"contribute",meaning:"貢献する・寄付する",exp:"contribute to〜（〜に貢献する）。contribution（貢献・寄付）。"},
{unit:"voc_4",diff:2,type:"mc",q:"「Technology has （　） the way we communicate.」（技術はコミュニケーションの方法を変えた）に入る語は？",c:["transformed","maintained","preserved","ignored"],exp:"transform＝根本的に変える・変革する。change/alterより大きな変化のニュアンス。"},
{unit:"voc_4",diff:2,type:"mc",q:"「The scientist （　） a new theory about black holes.」（科学者はブラックホールについての新しい理論を提唱した）に入る語は？",c:["proposed","opposed","disposed","composed"],exp:"propose（a theory/plan）＝〜を提唱する・提案する。"},
{unit:"voc_4",diff:2,type:"mc",q:"「The country has made （　） progress in reducing poverty.」（その国は貧困削減において著しい進展を遂げた）に入る語は？",c:["remarkable","imaginary","ordinary","temporary"],exp:"remarkable＝著しい・注目に値する。remarkably（著しく）。"},
{unit:"voc_4",diff:3,type:"mc",q:"「The committee （　） the proposal after a long discussion.」（委員会は長い議論の末、提案を採択した）に入る語は？",c:["adopted","adapted","applied","approved"],exp:"adopt（a proposal/policy）＝（提案・方針を）採択する。adapt＝適応させる。approve＝承認するが採択の意味ではやや弱い。"},

];
