// A1 Grammar data — consumed by A1_Grammatik.html
// Each topic has: id, icon, title, subtitle, blocks[]
// Block types: 'table', 'rule', 'note', 'examples'

const GRAMMAR_TOPICS = [
  // ── 1. Letters & Numbers ──────────────────────────────────────────────────
  {
    id: 'buchstaben', icon: '🔤',
    title: 'Buchstaben & Zahlen', subtitle: 'Letters & Numbers',
    blocks: [
      {
        type: 'table', color: 'blue', label: 'Das Alphabet',
        headers: ['Letter','Name','Sound hint','Letter','Name','Sound hint'],
        rows: [
          ['A a','ah','like "a" in father','N n','enn','like English N'],
          ['B b','beh','like English B','O o','oh','like "o" in more'],
          ['C c','tseh','"ts" or "k"','P p','peh','like English P'],
          ['D d','deh','like English D','R r','err','guttural / throat'],
          ['E e','eh','like "e" in bed','S s','ess','"z" between vowels'],
          ['F f','eff','like English F','T t','teh','like English T'],
          ['G g','geh','hard g (garden)','U u','uh','like "oo" in boot'],
          ['H h','hah','like English H','V v','fow','like English F'],
          ['I i','ih','like "ee" in feet','W w','veh','like English V'],
          ['J j','yot','like English Y','X x','iks','like English X'],
          ['K k','kah','like English K','Y y','üpsilon','like German Ü'],
          ['L l','ell','like English L','Z z','tset','like "ts" in bits'],
          ['M m','emm','like English M','','',''],
          ['Ä ä','ah-umlaut','like "e" in bed','Ö ö','oh-umlaut','like French eu'],
          ['Ü ü','uh-umlaut','like French u','ß','ess-tsett','like double "ss"'],
        ]
      },
      {
        type: 'table', color: 'teal', label: 'Zahlen 0–1000',
        headers: ['#','German','#','German','#','German','#','German'],
        rows: [
          ['0','null','1','eins','2','zwei','3','drei'],
          ['4','vier','5','fünf','6','sechs','7','sieben'],
          ['8','acht','9','neun','10','zehn','11','elf'],
          ['12','zwölf','13','dreizehn','14','vierzehn','15','fünfzehn'],
          ['16','sechzehn','17','siebzehn','18','achtzehn','19','neunzehn'],
          ['20','zwanzig','21','einundzwanzig','30','dreißig','40','vierzig'],
          ['50','fünfzig','60','sechzig','70','siebzig','80','achtzig'],
          ['90','neunzig','100','hundert','1000','tausend','1,000,000','eine Million'],
        ]
      },
      { type: 'rule', text: 'Numbers 21–99: units + "und" + tens → einundzwanzig (21), dreiundvierzig (43)' },
    ]
  },

  // ── 2. Articles ───────────────────────────────────────────────────────────
  {
    id: 'artikel', icon: '🏷️',
    title: 'Artikel', subtitle: 'All Article Types',
    blocks: [
      {
        type: 'table', color: 'blue', label: 'Bestimmte Artikel — Definite (the)',
        headers: ['','Maskulin (m)','Feminin (f)','Neutrum (n)','Plural'],
        rows: [
          ['Nominativ','der','die','das','die'],
          ['Akkusativ','den','die','das','die'],
          ['Dativ','dem','der','dem','den (+n)'],
        ]
      },
      { type: 'examples', label: 'Examples',
        popup: {
          trigger: 'Why "den" vs "dem"?',
          title: 'Akkusativ vs. Dativ — the key difference',
          body: `
            <p>Both sentences say <em>"the man"</em> — but the case changes because the <strong>relationship between verb and noun is different</strong>.</p>

            <div class="pop-compare">
              <div class="pop-case akk">
                <div class="pop-case-label">Akkusativ</div>
                <div class="pop-case-de">Ich sehe <strong>den</strong> Mann.</div>
                <div class="pop-case-en">I see the man.</div>
                <div class="pop-case-q">Ask: <em>Wen sehe ich?</em> → den Mann</div>
                <div class="pop-case-tip">The man is <strong>directly acted upon</strong> — he receives the action of seeing. He is the direct object.</div>
              </div>
              <div class="pop-case dat">
                <div class="pop-case-label">Dativ</div>
                <div class="pop-case-de">Ich helfe <strong>dem</strong> Mann.</div>
                <div class="pop-case-en">I help the man.</div>
                <div class="pop-case-q">Ask: <em>Wem helfe ich?</em> → dem Mann</div>
                <div class="pop-case-tip">The man <strong>benefits</strong> from the help — he is the indirect object. The action is directed <em>toward</em> him, not done <em>to</em> him.</div>
              </div>
            </div>

            <div class="pop-rule">
              <strong>Quick test:</strong><br>
              Ask <em>Wen?</em> (whom?) → <strong>Akkusativ</strong> → use <em>den/einen/keinen</em><br>
              Ask <em>Wem?</em> (to whom?) → <strong>Dativ</strong> → use <em>dem/einem/keinem</em>
            </div>

            <div class="pop-verbs">
              <strong>Common Dativ verbs</strong> (always take Dativ, not Akkusativ):<br>
              <em>helfen, danken, gehören, gefallen, glauben, antworten, folgen, zuhören</em><br><br>
              <strong>Examples:</strong><br>
              Das Buch <strong>gehört dem</strong> Mann. (The book belongs to the man.)<br>
              Ich <strong>danke dem</strong> Lehrer. (I thank the teacher.)<br>
              Das <strong>gefällt mir</strong>. (I like that. — lit. "That pleases to me.")
            </div>
          `
        },
        items: [
          { de: 'Der Mann kommt.', en: 'The man comes. (Nominativ)' },
          { de: 'Ich sehe den Mann.', en: 'I see the man. (Akkusativ)' },
          { de: 'Ich helfe dem Mann.', en: 'I help the man. (Dativ)' },
        ]
      },
      {
        type: 'table', color: 'green', label: 'Unbestimmte Artikel — Indefinite (a/an)',
        headers: ['','Maskulin','Feminin','Neutrum','Plural'],
        rows: [
          ['Nominativ','ein','eine','ein','—'],
          ['Akkusativ','einen','eine','ein','—'],
          ['Dativ','einem','einer','einem','—'],
        ]
      },
      {
        type: 'table', color: 'amber', label: 'Negativartikel — Negative (no / not a)',
        headers: ['','Maskulin','Feminin','Neutrum','Plural'],
        rows: [
          ['Nominativ','kein','keine','kein','keine'],
          ['Akkusativ','keinen','keine','kein','keine'],
          ['Dativ','keinem','keiner','keinem','keinen (+n)'],
        ]
      },
      { type: 'examples', label: 'Negative examples', items: [
        { de: 'Ich habe keinen Bruder.', en: 'I have no brother.' },
        { de: 'Das ist keine gute Idee.', en: "That's not a good idea." },
        { de: 'Ich habe kein Geld.', en: 'I have no money.' },
      ]},
      {
        type: 'table', color: 'teal', label: 'Possessivartikel — Possessive (my, your, his…)',
        headers: ['Pronoun','Meaning','m (Nom.)','f (Nom.)','n (Nom.)','Pl. (Nom.)'],
        rows: [
          ['ich','my','mein','meine','mein','meine'],
          ['du','your (inf.)','dein','deine','dein','deine'],
          ['er / es','his / its','sein','seine','sein','seine'],
          ['sie (sg.)','her','ihr','ihre','ihr','ihre'],
          ['wir','our','unser','unsere','unser','unsere'],
          ['ihr','your (pl.)','euer','eure','euer','eure'],
          ['sie / Sie','their / Your','ihr / Ihr','ihre / Ihre','ihr / Ihr','ihre / Ihre'],
        ]
      },
      { type: 'rule', text: 'Possessive articles decline like "ein" in all cases.' },
      {
        type: 'table', color: 'blue', label: 'Demonstrativartikel — Demonstrative (this/that)',
        headers: ['','Maskulin','Feminin','Neutrum','Plural'],
        rows: [
          ['Nominativ','dieser','diese','dieses','diese'],
          ['Akkusativ','diesen','diese','dieses','diese'],
          ['Dativ','diesem','dieser','diesem','diesen'],
        ]
      },
      {
        type: 'table', color: 'green', label: 'Interrogativartikel — Interrogative (which/what)',
        headers: ['','Maskulin','Feminin','Neutrum','Plural'],
        rows: [
          ['Nominativ','welcher','welche','welches','welche'],
          ['Akkusativ','welchen','welche','welches','welche'],
          ['Dativ','welchem','welcher','welchem','welchen'],
        ]
      },
      { type: 'examples', label: 'Interrogative examples', items: [
        { de: 'Welcher Bus fährt zum Bahnhof?', en: 'Which bus goes to the station?' },
        { de: 'Welche Farbe magst du?', en: 'Which colour do you like?' },
      ]},
    ]
  },

  // ── 3. Personalpronomen ───────────────────────────────────────────────────
  {
    id: 'pronomen', icon: '👤',
    title: 'Personalpronomen', subtitle: 'Personal Pronouns',
    blocks: [
      {
        type: 'table', color: 'blue', label: 'All cases',
        headers: ['Person','Nominativ','Akkusativ','Dativ','English'],
        rows: [
          ['1st sg.','ich','mich','mir','I / me / to me'],
          ['2nd sg.','du','dich','dir','you / you / to you (inf.)'],
          ['3rd m','er','ihn','ihm','he / him / to him'],
          ['3rd f','sie','sie','ihr','she / her / to her'],
          ['3rd n','es','es','ihm','it / it / to it'],
          ['1st pl.','wir','uns','uns','we / us / to us'],
          ['2nd pl.','ihr','euch','euch','you (pl.)'],
          ['3rd pl.','sie','sie','ihnen','they / them'],
          ['formal','Sie','Sie','Ihnen','You (formal)'],
        ]
      },
      { type: 'examples', label: 'Examples', items: [
        { de: 'Ich sehe ihn.', en: 'I see him.' },
        { de: 'Er gibt mir das Buch.', en: 'He gives me the book.' },
        { de: 'Kannst du mir helfen?', en: 'Can you help me?' },
        { de: 'Sie schreibt ihm eine E-Mail.', en: 'She writes him an email.' },
      ]},
    ]
  },

  // ── 4. Verb Conjugation ───────────────────────────────────────────────────
  {
    id: 'konjugation', icon: '🔄',
    title: 'Verb-Konjugation', subtitle: 'Verb Conjugation',
    blocks: [
      {
        type: 'table', color: 'green', label: 'Regular verbs — machen (to do/make)',
        headers: ['Person','Endung','Form','Example'],
        rows: [
          ['ich','-e','mache','Ich mache Hausaufgaben.'],
          ['du','-st','machst','Du machst das gut.'],
          ['er/sie/es','-t','macht','Er macht die Tür auf.'],
          ['wir','-en','machen','Wir machen eine Pause.'],
          ['ihr','-t','macht','Ihr macht viel Lärm.'],
          ['sie/Sie','-en','machen','Sie machen Sport.'],
        ]
      },
      {
        type: 'table', color: 'blue', label: 'sein & haben — must memorise',
        headers: ['Person','sein (to be)','haben (to have)'],
        rows: [
          ['ich','bin','habe'],
          ['du','bist','hast'],
          ['er/sie/es','ist','hat'],
          ['wir','sind','haben'],
          ['ihr','seid','habt'],
          ['sie/Sie','sind','haben'],
        ]
      },
      {
        type: 'table', color: 'amber', label: 'Key irregular verbs (Präsens)',
        headers: ['Infinitiv','ich','du','er/sie/es','wir/sie/Sie','ihr','Meaning'],
        rows: [
          ['fahren','fahre','fährst','fährt','fahren','fahrt','to drive'],
          ['laufen','laufe','läufst','läuft','laufen','lauft','to run'],
          ['sprechen','spreche','sprichst','spricht','sprechen','sprecht','to speak'],
          ['lesen','lese','liest','liest','lesen','lest','to read'],
          ['essen','esse','isst','isst','essen','esst','to eat'],
          ['nehmen','nehme','nimmst','nimmt','nehmen','nehmt','to take'],
          ['schlafen','schlafe','schläfst','schläft','schlafen','schlaft','to sleep'],
          ['mögen','mag','magst','mag','mögen','mögt','to like'],
          ['wissen','weiß','weißt','weiß','wissen','wisst','to know (fact)'],
        ]
      },
      { type: 'rule', text: 'Irregular pattern: vowel change e→i/ie or a→ä only in du and er/sie/es forms.' },
    ]
  },

  // ── 5. Sentence Structure & OSUDA ─────────────────────────────────────────
  {
    id: 'satzstruktur', icon: '🧩',
    title: 'Satzstruktur & OSUDA', subtitle: 'Sentence Structure',
    blocks: [
      {
        type: 'table', color: 'blue', label: 'V2 Word Order — verb always in position 2',
        headers: ['Structure','Example','Note'],
        rows: [
          ['Subject – Verb – …','Ich esse einen Apfel.','Normal order'],
          ['Adverb – Verb – Subject – …','Heute esse ich einen Apfel.','Subject moves, verb stays 2nd'],
          ['W-question','Was isst du?','W-word → pos. 1'],
          ['Yes/No question','Isst du einen Apfel?','Verb → pos. 1'],
          ['Subordinate clause','Ich weiß, dass er kommt.','Verb → END after "dass"'],
          ['Negation: nicht','Ich esse das Brot nicht.','nicht before what is negated'],
          ['Negation: kein','Ich habe kein Geld.','kein replaces ein/∅'],
        ]
      },
      {
        type: 'table', color: 'teal', label: 'OSUDA — order of adverbials',
        headers: ['Letter','Stands for','Question','Examples'],
        rows: [
          ['S','Zeit (Time)','Wann? Wie oft?','morgen, um 8 Uhr, jeden Tag'],
          ['U','Umstand (Manner)','Wie?','mit dem Bus, schnell, alleine'],
          ['D','Dativobjekt','Wem?','meiner Mutter, dem Chef'],
          ['A','Akkusativobjekt','Was? Wen?','das Buch, meinen Freund'],
        ]
      },
      { type: 'examples', label: 'OSUDA examples', items: [
        { de: 'Ich gebe morgen meiner Mutter das Geschenk.', en: 'I give my mother the present tomorrow.' },
        { de: 'Ich fahre täglich mit dem Zug zur Arbeit.', en: 'I travel to work by train every day.' },
        { de: 'Morgen fahre ich mit dem Zug zur Arbeit.', en: 'Tomorrow I travel to work by train. (time-fronted)' },
      ]},
      { type: 'rule', text: 'Memory: Time → Manner → Dative → Accusative' },
    ]
  },

  // ── 6. Imperativ ──────────────────────────────────────────────────────────
  {
    id: 'imperativ', icon: '👆',
    title: 'Imperativ', subtitle: 'Imperative / Commands',
    blocks: [
      {
        type: 'table', color: 'amber', label: 'Forming the Imperativ',
        headers: ['Form','Rule','machen','gehen','nehmen','sein'],
        rows: [
          ['du (inf.)','Verb stem [+e if -d/-t stem]','Mach!','Geh!','Nimm!','Sei!'],
          ['ihr (pl. inf.)','ihr-form without "ihr"','Macht!','Geht!','Nehmt!','Seid!'],
          ['Sie (formal)','Sie-form, verb first','Machen Sie!','Gehen Sie!','Nehmen Sie!','Seien Sie!'],
          ['wir (Let\'s…)','wir-form, verb first','Machen wir!','Gehen wir!','Nehmen wir!','—'],
        ]
      },
      { type: 'rule', text: 'Irregular du-forms: Vowel change e→i/ie applies (sprechen → Sprich!), but a→ä does NOT (fahren → Fahr! not Fähr!).' },
      { type: 'examples', label: 'Common imperatives', items: [
        { de: 'Komm her!', en: 'Come here!' },
        { de: 'Hör zu!', en: 'Listen!' },
        { de: 'Bitte warten Sie!', en: 'Please wait! (formal)' },
        { de: 'Mach die Tür zu!', en: 'Close the door!' },
        { de: 'Sei ruhig!', en: 'Be quiet!' },
        { de: 'Fahrt vorsichtig!', en: 'Drive carefully! (to a group)' },
      ]},
    ]
  },

  // ── 7. Cases ──────────────────────────────────────────────────────────────
  {
    id: 'kasus', icon: '⚖️',
    title: 'Kasus', subtitle: 'Cases: Nominativ, Akkusativ, Dativ, Wechsel',
    blocks: [
      {
        type: 'table', color: 'blue', label: 'The four cases',
        headers: ['Case','Role','Question','Example'],
        rows: [
          ['Nominativ','Subject (who/what acts)','Wer? Was?','Der Hund beißt.'],
          ['Akkusativ','Direct object (whom/what)','Wen? Was?','Ich sehe den Hund.'],
          ['Dativ','Indirect object (to whom)','Wem?','Ich gebe dem Hund Wasser.'],
        ]
      },
      {
        type: 'table', color: 'green', label: 'Akkusativ-Präpositionen — always Akkusativ',
        headers: ['Präp.','Meaning','Example'],
        rows: [
          ['durch','through','Ich gehe durch den Park.'],
          ['für','for','Das ist für dich.'],
          ['gegen','against','Er ist gegen den Plan.'],
          ['ohne','without','Ich trinke Kaffee ohne Milch.'],
          ['um','around / at (time)','Wir sitzen um den Tisch.'],
          ['bis','until / to','Ich warte bis Montag.'],
        ]
      },
      {
        type: 'table', color: 'amber', label: 'Dativ-Präpositionen — always Dativ',
        headers: ['Präp.','Meaning','Example'],
        rows: [
          ['aus','from / out of','Er kommt aus Deutschland.'],
          ['bei','at / near / at sb\'s place','Ich wohne bei meinen Eltern.'],
          ['mit','with / by (transport)','Ich fahre mit dem Bus.'],
          ['nach','to (cities/countries) / after','Ich fahre nach Berlin.'],
          ['seit','since / for (ongoing)','Ich lerne seit drei Monaten Deutsch.'],
          ['von','from / of / by','Ein Brief von meinem Freund.'],
          ['zu','to (people / places)','Ich gehe zur Schule.'],
          ['gegenüber','opposite','Das Café ist gegenüber dem Bahnhof.'],
        ]
      },
      {
        type: 'table', color: 'teal', label: 'Wechselpräpositionen — Akk. (motion) vs. Dat. (location)',
        headers: ['Präp.','Akkusativ (wohin?)','Dativ (wo?)'],
        rows: [
          ['an','Ich hänge das Bild an die Wand.','Das Bild hängt an der Wand.'],
          ['auf','Ich lege das Buch auf den Tisch.','Das Buch liegt auf dem Tisch.'],
          ['hinter','Er stellt sich hinter das Auto.','Er steht hinter dem Auto.'],
          ['in','Ich gehe in die Küche.','Ich bin in der Küche.'],
          ['neben','Stell den Stuhl neben den Tisch.','Der Stuhl steht neben dem Tisch.'],
          ['über','Er hängt die Lampe über den Tisch.','Die Lampe hängt über dem Tisch.'],
          ['unter','Die Katze geht unter den Stuhl.','Die Katze liegt unter dem Stuhl.'],
          ['vor','Er stellt das Auto vor die Garage.','Das Auto steht vor der Garage.'],
          ['zwischen','Stell es zwischen die Tische.','Es steht zwischen den Tischen.'],
        ]
      },
      { type: 'rule', text: 'Wechselpräpositionen: Akkusativ = movement/direction (wohin?) | Dativ = position/state (wo?)' },
      {
        type: 'table', color: 'blue', label: 'Common contractions',
        headers: ['an + dem','an + das','bei + dem','in + dem','in + das','von + dem','zu + dem','zu + der'],
        rows: [['am','ans','beim','im','ins','vom','zum','zur']]
      },
    ]
  },

  // ── 8. Modal Verbs ────────────────────────────────────────────────────────
  {
    id: 'modalverben', icon: '🎯',
    title: 'Modalverben', subtitle: 'Modal Verbs',
    blocks: [
      { type: 'note', text: 'Modal verbs modify the main verb. The main verb goes to the END of the clause in infinitive form.' },
      {
        type: 'table', color: 'blue', label: 'Conjugation',
        headers: ['Modal','ich','du','er/sie/es','wir/sie/Sie','ihr','Meaning'],
        rows: [
          ['können','kann','kannst','kann','können','könnt','can / to be able to'],
          ['müssen','muss','musst','muss','müssen','müsst','must / to have to'],
          ['dürfen','darf','darfst','darf','dürfen','dürft','may / to be allowed to'],
          ['wollen','will','willst','will','wollen','wollt','to want to'],
          ['sollen','soll','sollst','soll','sollen','sollt','should / supposed to'],
          ['mögen','mag','magst','mag','mögen','mögt','to like'],
          ['möchten','möchte','möchtest','möchte','möchten','möchtet','would like to'],
        ]
      },
      { type: 'examples', label: 'Examples', items: [
        { de: 'Ich kann Deutsch sprechen.', en: 'I can speak German.' },
        { de: 'Du musst die Hausaufgaben machen.', en: 'You must do the homework.' },
        { de: 'Darf ich das Fenster öffnen?', en: 'May I open the window?' },
        { de: 'Ich möchte einen Kaffee, bitte.', en: 'I would like a coffee, please.' },
        { de: 'Er will nach Berlin fahren.', en: 'He wants to go to Berlin.' },
        { de: 'Wir sollen um 8 Uhr kommen.', en: 'We are supposed to come at 8.' },
      ]},
    ]
  },

  // ── 9. Separable Verbs ────────────────────────────────────────────────────
  {
    id: 'trennbar', icon: '✂️',
    title: 'Trennbare Verben', subtitle: 'Separable Verbs',
    blocks: [
      { type: 'rule', text: 'In main clauses: prefix goes to the END. In subordinate clauses: verb stays together at the end.' },
      {
        type: 'table', color: 'green', label: 'Common separable verbs',
        headers: ['Verb','Prefix','Meaning','Main clause','Perfekt'],
        rows: [
          ['aufstehen','auf-','get up','Ich stehe um 7 auf.','aufgestanden'],
          ['anrufen','an-','call (phone)','Ich rufe dich an.','angerufen'],
          ['einkaufen','ein-','go shopping','Er kauft im Markt ein.','eingekauft'],
          ['einladen','ein-','invite','Sie lädt uns ein.','eingeladen'],
          ['aufmachen','auf-','open','Mach die Tür auf!','aufgemacht'],
          ['zumachen','zu-','close','Ich mache das Fenster zu.','zugemacht'],
          ['abfahren','ab-','depart','Der Zug fährt um 9 ab.','abgefahren'],
          ['ankommen','an-','arrive','Er kommt um 10 an.','angekommen'],
          ['umsteigen','um-','transfer','Wir steigen in Stuttgart um.','umgestiegen'],
          ['mitnehmen','mit-','take along','Ich nehme dich mit.','mitgenommen'],
          ['fernsehen','fern-','watch TV','Er sieht abends fern.','ferngesehen'],
          ['vorstellen','vor-','introduce','Er stellt sich vor.','vorgestellt'],
        ]
      },
      { type: 'examples', label: 'Subordinate clause contrast', items: [
        { de: 'Ich stehe um 7 auf.', en: 'I get up at 7. (main clause)' },
        { de: 'Ich weiß, dass ich um 7 aufstehe.', en: 'I know that I get up at 7. (subordinate)' },
        { de: 'Ich rufe dich an.', en: 'I will call you. (main clause)' },
        { de: 'Ich hoffe, dass ich dich anrufe.', en: 'I hope that I call you. (subordinate)' },
      ]},
    ]
  },

  // ── 10. Präteritum ────────────────────────────────────────────────────────
  {
    id: 'praeteritum', icon: '⏮️',
    title: 'Präteritum', subtitle: 'Simple Past — haben & sein only',
    blocks: [
      { type: 'note', text: 'At A1 level, only haben and sein use Präteritum. All other verbs use Perfekt in spoken German.' },
      {
        type: 'table', color: 'amber', label: 'Präteritum of haben & sein',
        headers: ['Person','haben (had)','sein (was/were)'],
        rows: [
          ['ich','hatte','war'],
          ['du','hattest','warst'],
          ['er/sie/es','hatte','war'],
          ['wir','hatten','waren'],
          ['ihr','hattet','wart'],
          ['sie/Sie','hatten','waren'],
        ]
      },
      { type: 'examples', label: 'Examples', items: [
        { de: 'Ich hatte gestern Kopfschmerzen.', en: 'I had a headache yesterday.' },
        { de: 'Er war gestern krank.', en: 'He was ill yesterday.' },
        { de: 'Wir hatten keine Zeit.', en: 'We had no time.' },
        { de: 'Das Wetter war schön.', en: 'The weather was nice.' },
      ]},
    ]
  },

  // ── 11. Perfekt ───────────────────────────────────────────────────────────
  {
    id: 'perfekt', icon: '✅',
    title: 'Perfekt', subtitle: 'Present Perfect — main past tense in speech',
    blocks: [
      { type: 'note', text: 'Perfekt = haben/sein (conjugated, position 2) + Partizip II (at the end). Used for virtually all past events in spoken German.' },
      {
        type: 'table', color: 'green', label: 'How to form Partizip II',
        headers: ['Verb type','Formula','Example infinitiv','Partizip II'],
        rows: [
          ['Regular (weak)','ge- + stem + -t','machen','gemacht'],
          ['Regular (weak)','ge- + stem + -t','kaufen','gekauft'],
          ['Irregular (strong)','ge- + (new stem) + -en','schreiben','geschrieben'],
          ['Separable','prefix + ge- + stem + -t/en','aufmachen','aufgemacht'],
          ['-ieren verbs','stem + -t (NO ge-)','studieren','studiert'],
          ['Inseparable prefix','NO ge-','besuchen','besucht'],
        ]
      },
      {
        type: 'table', color: 'blue', label: 'haben vs. sein as auxiliary',
        headers: ['Use sein when…','Use haben for…'],
        rows: [
          ['Movement from A→B (gehen, fahren, fliegen)','Most other verbs'],
          ['Change of state (aufwachen, einschlafen, werden)','Transitive verbs (with Akkusativ object)'],
          ['sein, bleiben','Reflexive verbs (mostly haben)'],
        ]
      },
      {
        type: 'table', color: 'amber', label: 'Key irregular Partizip II forms',
        headers: ['Infinitiv','Partizip II','Infinitiv','Partizip II','Infinitiv','Partizip II'],
        rows: [
          ['sein','gewesen','haben','gehabt','werden','geworden'],
          ['gehen','gegangen','kommen','gekommen','fahren','gefahren'],
          ['schreiben','geschrieben','lesen','gelesen','sprechen','gesprochen'],
          ['essen','gegessen','trinken','getrunken','nehmen','genommen'],
          ['sehen','gesehen','geben','gegeben','finden','gefunden'],
          ['schlafen','geschlafen','laufen','gelaufen','stehen','gestanden'],
          ['tragen','getragen','helfen','geholfen','denken','gedacht'],
          ['wissen','gewusst','bringen','gebracht','kennen','gekannt'],
        ]
      },
      { type: 'examples', label: 'Examples', items: [
        { de: 'Ich habe das Buch gelesen.', en: 'I read the book.' },
        { de: 'Wir sind nach Berlin gefahren.', en: 'We went to Berlin.' },
        { de: 'Er hat studiert.', en: 'He studied.' },
        { de: 'Sie ist aufgewacht.', en: 'She woke up.' },
        { de: 'Hast du schon gegessen?', en: 'Have you eaten already?' },
      ]},
    ]
  },

  // ── 12. Time & Date ───────────────────────────────────────────────────────
  {
    id: 'uhrzeit', icon: '🕐',
    title: 'Uhrzeit & Datum', subtitle: 'Time & Date',
    blocks: [
      {
        type: 'table', color: 'teal', label: 'Telling the time',
        headers: ['Time','Formal','Spoken (informal)'],
        rows: [
          ['08:00','Es ist acht Uhr.','acht'],
          ['08:05','Es ist acht Uhr fünf.','fünf nach acht'],
          ['08:15','Es ist acht Uhr fünfzehn.','Viertel nach acht'],
          ['08:30','Es ist acht Uhr dreißig.','halb neun'],
          ['08:45','Es ist acht Uhr fünfundvierzig.','Viertel vor neun'],
          ['08:55','Es ist acht Uhr fünfundfünfzig.','fünf vor neun'],
          ['20:00','Es ist zwanzig Uhr.','acht (Uhr abends)'],
        ]
      },
      { type: 'rule', text: '"halb" = half BEFORE the next hour! halb neun = 8:30 (not 9:30)' },
      {
        type: 'table', color: 'blue', label: 'Days, Months & Seasons (all der)',
        headers: ['Days','Months','Seasons'],
        rows: [
          ['Montag — Monday','Januar — January','Frühling — Spring'],
          ['Dienstag — Tuesday','Februar — February','Sommer — Summer'],
          ['Mittwoch — Wednesday','März — March','Herbst — Autumn'],
          ['Donnerstag — Thursday','April — April','Winter — Winter'],
          ['Freitag — Friday','Mai — May',''],
          ['Samstag — Saturday','Juni — June',''],
          ['Sonntag — Sunday','Juli — July',''],
          ['','August — August',''],
          ['','September — September',''],
          ['','Oktober — October',''],
          ['','November — November',''],
          ['','Dezember — December',''],
        ]
      },
      { type: 'examples', label: 'Date expressions', items: [
        { de: 'Heute ist Montag, der 3. Mai.', en: 'Today is Monday, 3rd May.' },
        { de: 'Ich habe am dritten Mai Geburtstag.', en: 'My birthday is on 3rd May.' },
        { de: 'Wann? — Um wie viel Uhr?', en: 'When? — At what time?' },
        { de: 'Am Montag / Im Januar / Im Sommer', en: 'On Monday / In January / In summer' },
      ]},
    ]
  },

  // ── 13. Es-constructions ──────────────────────────────────────────────────
  {
    id: 'es', icon: '💡',
    title: 'Es-Konstruktionen', subtitle: 'Es-Constructions',
    blocks: [
      {
        type: 'table', color: 'teal', label: 'Key es-constructions',
        headers: ['Construction','Meaning','Example'],
        rows: [
          ['es gibt + Akkusativ','there is / there are','Es gibt einen Park in der Nähe.'],
          ['es ist + Adjektiv','it is (weather/temp)','Es ist kalt. Es ist warm.'],
          ['es ist / es sind','it is / they are','Es ist ein Hund. Es sind drei Hunde.'],
          ['es geht (jdm.) + Adv.','sb. is feeling…','Es geht mir gut. Wie geht es Ihnen?'],
          ['es tut mir leid','I am sorry','Es tut mir leid, ich bin spät.'],
          ['es gefällt mir','I like it (thing)','Das Buch gefällt mir sehr.'],
          ['es klingelt / läutet','it rings','Es klingelt an der Tür.'],
          ['es regnet / schneit / …','weather verbs','Es regnet. Es schneit. Es ist neblig.'],
        ]
      },
      { type: 'rule', text: 'es gibt is always singular even for plurals: Es gibt viele Restaurants hier.' },
      { type: 'examples', label: 'Practice examples', items: [
        { de: 'Gibt es hier eine Apotheke?', en: 'Is there a pharmacy here?' },
        { de: 'Es war einmal ein König.', en: 'Once upon a time there was a king.' },
        { de: 'Wie geht es dir?', en: 'How are you? (informal)' },
        { de: 'Es geht mir nicht so gut heute.', en: "I'm not feeling so well today." },
      ]},
    ]
  },

  // ── 14. man ───────────────────────────────────────────────────────────────
  {
    id: 'man', icon: '👥',
    title: 'Das Indefinitpronomen "man"', subtitle: 'Impersonal pronoun',
    blocks: [
      { type: 'note', text: '"man" = one / you / people / they — impersonal. Always takes er/sie/es verb form.' },
      {
        type: 'table', color: 'blue', label: 'Usage',
        headers: ['German','English'],
        rows: [
          ['Man spricht hier Deutsch.','German is spoken here. / People speak German here.'],
          ['Wie sagt man das auf Deutsch?','How do you say that in German?'],
          ['Man darf hier nicht rauchen.','You are not allowed to smoke here.'],
          ['Man kann hier gut essen.','You can eat well here.'],
          ['Was kann man in Stuttgart machen?','What can one do in Stuttgart?'],
          ['Man muss früh aufstehen.','One must get up early.'],
        ]
      },
      { type: 'rule', text: 'Accusative of man = einen, Dative = einem: Das schadet einem. (That harms one.)' },
    ]
  },

  // ── 15. Email Format ──────────────────────────────────────────────────────
  {
    id: 'email', icon: '✉️',
    title: 'E-Mail schreiben', subtitle: 'Email Writing Format',
    blocks: [
      {
        type: 'table', color: 'amber', label: 'Email structure',
        headers: ['Part','Formal (Sie)','Informal (du)'],
        rows: [
          ['Betreff (Subject)','Anfrage bezüglich …','Kurze Frage …'],
          ['Salutation','Sehr geehrte/r Frau/Herr [Name],','Liebe/r [Name],  /  Hallo [Name],'],
          ['Opening','Ich schreibe Ihnen, weil …','Ich schreibe dir, weil …'],
          ['Pronoun throughout','Sie, Ihr, Ihnen (capital S!)','du, dein, dir'],
          ['Closing sentence','Ich freue mich auf Ihre Antwort.','Ich freue mich auf deine Antwort.'],
          ['Sign-off','Mit freundlichen Grüßen,','Liebe Grüße,  /  Bis bald,'],
          ['Name','[Vorname Nachname]','[Vorname]'],
        ]
      },
      { type: 'rule', text: 'Formal: "Sie" ALWAYS capitalised. Informal "du" written lowercase.' },
      { type: 'examples', label: 'Useful phrases', items: [
        { de: 'Sehr geehrte Frau Müller,', en: 'Dear Ms Müller,' },
        { de: 'Ich schreibe Ihnen bezüglich meiner Bewerbung.', en: 'I am writing to you regarding my application.' },
        { de: 'Könnten Sie mir bitte helfen?', en: 'Could you please help me?' },
        { de: 'Ich freue mich auf Ihre Antwort.', en: 'I look forward to your reply.' },
        { de: 'Mit freundlichen Grüßen,', en: 'Kind regards,' },
        { de: 'Liebe Grüße,', en: 'Best wishes, (informal)' },
      ]},
    ]
  },

  // ── 16. Everyday expressions ──────────────────────────────────────────────
  {
    id: 'ausdruecke', icon: '🗣️',
    title: 'Alltägliche Ausdrücke', subtitle: 'Everyday Expressions',
    blocks: [
      {
        type: 'table', color: 'green', label: 'Greetings, introductions & small talk',
        headers: ['German','English','When to use'],
        rows: [
          ['Guten Morgen!','Good morning!','Until ~10am'],
          ['Guten Tag!','Good day!','Daytime'],
          ['Guten Abend!','Good evening!','Evening'],
          ['Auf Wiedersehen!','Goodbye! (formal)','Any time'],
          ['Tschüss!','Bye! (informal)','Casual'],
          ['Wie geht es Ihnen?','How are you? (formal)','Formal meeting'],
          ['Wie geht\'s?','How\'s it going? (informal)','Casual'],
          ['Es geht mir gut, danke.','I\'m fine, thank you.','Reply'],
          ['Bitte.','Please / You\'re welcome.','Both meanings'],
          ['Danke schön.','Thank you very much.','Any time'],
          ['Entschuldigung.','Excuse me / Sorry.','Attention / apology'],
          ['Es tut mir leid.','I\'m sorry.','Apologising'],
          ['Ich verstehe nicht.','I don\'t understand.',''],
          ['Können Sie das wiederholen?','Can you repeat that? (formal)','In class / formal'],
          ['Wie bitte?','Pardon? / Could you repeat that?','Quick request'],
          ['Sprechen Sie Deutsch?','Do you speak German? (formal)',''],
          ['Woher kommen Sie?','Where are you from? (formal)',''],
          ['Ich komme aus Indien.','I come from India.','Introduction'],
          ['Ich heiße Shahil.','My name is Shahil.','Introduction'],
          ['Darf ich mich vorstellen?','May I introduce myself?','Formal'],
          ['Herzlich willkommen!','Welcome!','Greeting someone'],
          ['Alles klar!','All good! / Got it!','Confirmation'],
          ['Na ja.','Well… / Sort of.','Hesitation'],
        ]
      },
    ]
  },
];
