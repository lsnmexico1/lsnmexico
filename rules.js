/*
  LSN Mexico szabályzat szerkesztése
  ---------------------------------
  Itt tudod átírni a rublikák címét és szabályait.

  FONTOS:
  - Egy kategóriához nem csak 3 szabály lehet.
  - Annyi szabályt írsz a rules: [ ] részbe, amennyit szeretnél.
  - Minden új szabály külön sorba kerüljön idézőjelek közé.

  Minta:
  {
    title: "Rublika címe",
    tag: "Rövid kategória",
    rules: [
      "Első szabály szövege.",
      "Második szabály szövege.",
      "Harmadik szabály szövege.",
      "Negyedik szabály szövege.",
      "Ötödik szabály szövege."
    ]
  }
*/

const RULE_SECTIONS = [
  {
    title: "Általános szabályok",
    tag: "Alap szabályzat",
    rules: [
     "A szerver Voice RP alapú, így mikrofon használata kötelező.",

      
      "TILOS a DM, más játékosok megtámadása / megölése előzmény nélkül",

"TILOS az MG, olyan információk felhasználása amit az IC karaktered nem tudhat. (Pl. Stream-ben látod, hogy épp drogot csinálnak, te pedig odamész és lelövöd őket.)",

"TILOS az SK, RK, NONRP, Force RP, Hanyag RP.",

"Multiaccount használata szigorúan tilos.",      

"Az NRK csak enyhített formában engedélyezett, viszont nagyobb ugratások, sportautókkal földúton száguldani stb. TILOS.",

"TILOS a DB, kivéve, ha nyomós indokkal rendelkezel. (Pl.: Mész egyenesen, előugrik valaki a bokorból és elkezd lőni, ilyen esetekben szabályos elütni a másikat.)",      

"A PG csak enyhített formában engedélyezett, tehát ha 2-en fognak rád fegyvert, az egyik meg leteszi / elnéz másfele, az nem minősül PG-nek, de ITT IS kötelező az életedet a legfontosabb tényezőként kezelni. Viszont ha pl. 5-en fognak rád fegyvert és tovább rádiózol, futkározol az már PG-nek minősül és TILOS.",

"TILOS az Öngyilkos RP, Pl.: Lefegyverzés közben leugrasz a hegyről, ezzel elkerülve az RP-szálat.",

"TILOS az IC-OOC keverése, mindent IC keretek között kell tartani.",

"TILOS IC bármilyen szabályra utalni.",

"TILOS a Soundboard használata.",

"Mindig maradj karakterben még szabálytalan viselkedés esetén is.",

"Az életed legyen az első minden esetben, ha fegyvert fognak rád annak megfelelően kell viselkedned is.",

"TILOS az irreális viselkedés az NPC-kel, Pl: Indokolatlanul lelőni, elütni őket.",

"TILOS a toxikus viselkedés minden formája.",

"TILOS az RP Alóli kilépés Pl: A rendvédelem beraideli a HQ-d, te pedig kilépsz, hogy ne kapjanak el.",

"TILOS bármilyen segédprogram használata, amik előnyhöz juttatnak más játékosokkal szemben. (Célkereszt, Blood Fx, Citizen IS!)",

"TILOS munkában lévő, vagy munkahelyek 250 méteres körzetében embert kirabolni, elrabolni.",

"TILOS bármilyen OOC név vagy becenév használata IC.",

"A szerveren kötelező Push-To-Talk használata.",

"TILOS más szerverek reklámozása, hirdetése a szerveren.",    

"TILOS a rádiót használni, ha a karaktered eszméletlen, bilincsben van, vagy elvették tőle.",

"Csak kinzó felszereléssel lehet kínozni embereket, Le RP-zni (Pl.: levágom az úr ujját) TILOS stb.",      

"Legális tárgyakkal maximum 25000 Peso alatt lehet átverni másokat. Illegális tárgyakkal bármekkora értékben.",

"Elbújni bokrokban engedélyezett, viszont azokból lőni TILOS!",

"Járművekkel TILOS átverni másokat!"      
    ]
  },
  {
    title: "Frakció Szabályzat",
    tag: "Frakciókra vonatkozó szabályok",
    rules: [
"Ha egy frakcióból kilépsz, 3 napos Frakció Jumpot kapsz, ez idő alatt nem mehetsz másik frakcióba.",

"TILOS interiorba menekülni hogy meg menekülj egy RP-szál alól. Pl.: Egy CP-n keresztül bemész a házadba, ahova mások nem tudnak bejönni.",

"Rendvédelmis fegyvert elvenni / eladni TILOS (Aminek a neve elején GN van)",      

"Legális Frakciókban maximum 25, Illegális Frakciókban maximum 20 tag lehet.",

"TILOS Frakcióváltás után az előző frakció belsős információit felhasználni, amennyiben CK-val távoztál a frakcióból.",

"TILOS frakcióból kilépés előtt a közös raktárat, kasszát kifosztani.",

"Egy kartellként kötelező álcázni a szervezetetek és bármilyen hozzá kötődő információt.",

"A Frakció Leaderek kötelesek a tagjaik szabálysértéseiért is felelősséget vállalni.",

"TILOS frakciók között OOC szövetséget kötni IC indok nélkül.",

"TILOS frakció öltözet használata, ha már nem vagy a frakció tagja.",

"TILOS frakciótagként szándékosan olyan helyzetbe hozni a frakciót, amely ellehetetleníti annak működését. Pl.: Direkt háborút provokálsz, aztán kilépsz.",

"Tagfelvételhez kötelező legalább minimális IC felvételi folyamat.",

"Rendvédelemnek a korruptkodás csak minimálisan engedélyezett. Pl.: Információ átadás, drogok eladása.",

" Rendvédelmi frakció tagja csak szolgálatban használhat szolgálati felszerelést, kivéve undercover egységek.",

"TILOS rendvédelmi tagként a szolgálati járműveket magáncélra használni.",

"TILOS nyomós indok nélkül lövöldözést kezdeményezni!",

"TILOS indokolatlanul, NonRP-sen megbilincselni valakit.",

"Rendvédelmi személy nem adhat el szolgálati fegyvert, lőszert, és egyéb felszerelést.",

"TILOS szolgálati fegyvert raktárból kivenni, és motelben vagy járműben tárolni.",

"Rendvédelmi tagok kötelesek a testi épségüket előre helyezni. Pl.: HQ Raid közben nem szaladsz be egyedül.",

"TILOS indokolatlanul erős fegyverzetet használni olyan szituációban, ami nem igényli meg azt.",
      
"Az illegális frakció tagok nem öltözhetnek egyenruhába. Minden tagnak más ruhában kell lennie, hasonlóság csak nyomokban lehet felfedezhető. Ez alól kivételt képez a Tier 3-as és 4-es frakciók."
    ]
  },
  {
    title: "HQ Raid Szabályzat",
    tag: "HQ Raidre vonatkozó szabályok",
    rules: [
      "HQ raid csak komoly IC indokkal indítható.",

"HQ raid előtt kötelező megfelelő RP-előzmény, megfigyelés, stb...",

"HQ raidhez mindkét féltől minimum 6 tag, illetve egy admin jelenléte szükséges.",

"TILOS szövetkezni HQ raidnél, kivéve ha a beavatkozó frakciónak IC előzménye van mindkét frakcióval. Pl.: \"A\" frakció megtámadja \"B\" frakciót, viszont \"C\" frakciót 2 hete szintén megtámadta \"A\" frakció, ezért egymásnak segítenek.",

"Egy HQ raid után minimum 10 nap el kell hogy teljen, mielőtt újra megtámadhatóak.",

"Szerver Restart előtt fél órával TILOS HQ raidet kezdeményezni.",

"HQ raid során a raktárkészlet maximum 50%-a elvihető.",

"A védekező fél nem pakolhatja át a raktár tartalmát másik helyre, ha tudomása van róla hogy raidelni fogják.",

"A támadó fél nem viheti el a raktár tartalmát mind addig, ameddig az összes tag el nem hagyja a raid területét.",

"Ha egyszer elhagytátok a raid területét, nem mehettek vissza."
    ]
  },
  {
    title: "Karakter Szabályzat",
    tag: "Karakterkészitésre vonatkozó szabályok.",
    rules: [
      "TILOS Magyar, illetve Fun nevet megadni a karakterednek. (Pl.: Moumbala Kulumbu)",
      "TILOS valós / ismert személyek nevét megadni. Ez alól kivételt képeznek az igazi cartellek vezetőinek a neve, ha te abban a szervezetben vagy. (Pl.: Ha a CJNG vezetője vagy, lehet El Mencho a neved.)",
      "Kötelező a Mexikói / Dél-Amerikai öltözetstílusnak, illetve a karakteredhez megfelelően öltözködni.",
      "Karaktered kinézetének illeszkednie kell a korához, háttértörténetéhez és élethelyzetéhez.",
      "TILOS irreális karaktert készíteni (Pl.: 18 éves milliárdos maffiafőnök, 20 éves volt FBI-vezető, mindentudó ex-kommandós)",
      "Karakterednek legyen gyengesége, félelme és reális személyisége. Nem játszhatsz sebezhetetlen, érzelemmentes „terminátor” karaktert."
    ]
  },
  {
    title: "Publikus Hely Szabályzat",
    tag: "Publikus Helyekre vonatkozó Szabályzatok",
    rules: [
      "TILOS publikus helyen indokolatlanul lövöldözni, verekedni vagy provokálni.",
      "Publikus helyen kötelező figyelembe venni a környezetet és a reális következményeket.",
      "TILOS publikus helyet biztonságos menekülési pontként használni RP elől.",
      "TILOS publikus helyen csomagtartót kipakolni!",
      "Publikus helynek számit minden munkahely, garázs, forgalmas terület!",
    ]
  },
  {
    title: "Túszejtés Szabályzat",
    tag: "Túszejtésre vonatkozó szabályok",
    rules: [
      "Túszejtés csak megfelelő IC indokkal történhet, a túszejtés célja nem a másik játékos szívatása, hanem egy élvezhető RP-helyzet létrehozása.",
      "Túszejtésnek RP célja kell legyen.",
      "Egy túszt maximum 1 óráig lehet fogva tartani, de ha beleegyezik akkor tovább is.",
    ]
  },
  {
    title: "Report és Adminügy szabályzat",
    tag: "Reportokra és Adminügyekre vonatkozó szabályzat.",
    rules: [
      "TILOS adminnak hazudni!",
      "Reportot csak- és kizárólag a /report paranccsal szabad írni. Bármilyen más in-game kommunikációs csatornán tilos segítséget kérni az adminoktól. (pl. frakció felhívás)",
      "Report írás után TILOS az AFK - Ha kimegy egy STAFF tag, és nem reagálsz, le fogja zárni a reportodat!",
      "Jó példa egy report szövegre: “Sziasztok, egy srác ide jött hozzánk és oknélkül lelőtt mindenkit. Rendelkezem videós bizonyítékkal, még tart a szituáció",
      "Adminügy közben KÖTELEZŐ meghallgatni az admint, és a játékostársaidat.",
      "TILOS reportban sértegetni, provokálni vagy fenyegetőzni.",
      "TILOS RP Szituációt adminüggyel megszakitani! Súlyos szabálysértés esetén admin dönthet az RP megállításáról.",
      "Amennyiben egy játékos valamilyen szabályt sért, te pedig Report-olod, KÖTELEZŐ videós / képi bizonyitékot mutatni róla, különben az adminnak nem kötelessége a másik játékost szankcionálni."
    
    ]
  },
  {
    title: "Jármű szabályzat",
    tag: "Járművekre vonatkozó szabályzat",
    rules: [
      "Járművet MINDEN esetben reálisan kell használni, TILOS az irreális vezetés, stuntolás vagy RP-romboló közlekedés.",
      "TILOS más játékos járművét ok nélkül lökdösni vagy megrongálni.",
      "TILOS járművel épület belsejébe, lépcsőre, tetőre vagy irreális helyre felhajtani.",
      "TILOS járművet ellopni kizárólag trollkodásból vagy más játékos zavarása céljából.",
      "A Turret-el rendelkező járműveket szigorúan TILOS emberek ellen használni! Kocsikra, vagy helikopterek ellen lehet.",
      "Tilos olyan járművekből kilőni hátrafele, amiből hátul nem lehet kilátni, vagy gyalog nehéz visszalőni. (Pl.: Páncélozott járművek, Lamborghini)."
    ]
  },
     {
    title: "Terület Szabályzat",
    tag: "Területekre vonatkozó szabályzat.",
    rules: [
      "Területfoglalást csak is lábon lehet foglalni, járműben ülve TILOS!",
      "A terület egyfajta DM Zónaként szolgál, tehát ha a körön belül vagy és lelőnek, az nem DM.",
      "Területfoglalásokon TILOS a DB minden formája! Csak is lábon, és fegyverrel lehet egymásra lőni.",
      "TILOS területfoglalásra fegyver nélkül kimenni! Kés, boxer, stb. nem számit fegyvernek."
    ]
  },
  {
    title: "Frakcióháború Szabályzat",
    tag: "Frakcióháborúra vonatkozó szabályzatok.",
    rules: [
      "Frakcióháború kizárólag komoly IC előzmény alapján indítható.",
      "TILOS a frakcióháborút folyamatos DM-ként kezelni, a háború nem azt jelenti, hogy minden találkozásnál azonnal lőni kell.",
      "A frakcióháborúnak legyen egyértelmű IC oka, célja és lezárási lehetősége.",
      "A háború előtt ajánlott IC figyelmeztetés, üzenet, tárgyalás vagy fenyegetés.",
      "TILOS hamis vagy kitalált előzményekkel háborút indokolni.",
      "Frakcióháború nem jogosít fel automatikus HQ támadásra."
    ]
  },

    {
    title: "Character Kill Szabályzat",
    tag: "CK-ra vonatkozó szabályzatok.",
    rules: [
      "A szerveren csak Memória CK van, Teljes CK csak is Leader-ek és Al-Leader-ek esetén szabályos.",
      "CK-t csak megfelelő indokkal és előzetes jóváhagyással lehet végrehajtani..",
      "CK-hoz legalább 1 órás, dokumentált IC RP előzmény szükséges.",
    ]
  },
];
