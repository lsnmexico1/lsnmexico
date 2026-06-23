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
      "TILOS a DM, más játékosok megtámadása / megölése előzmény nélkül",

"TILOS az MG, olyan információk felhasználása amit az IC karaktered nem tudhat. (Pl. Stream-ben látod, hogy épp drogot csinálnak, te pedig odamész és lelövöd őket.)",

"TILOS az SK, RK, NONRP, Force RP.",

"Az NRK csak enyhített formában engedélyezett, viszont nagyobb ugratások, sportautókkal földúton száguldani stb. TILOS.",

"A PG csak enyhített formában engedélyezett, tehát ha 2-en fognak rád fegyvert, az egyik meg leteszi / elnéz másfele, az nem minősül PG-nek, de ITT IS kötelező az életedet a legfontosabb tényezőként kezelni. Viszont ha pl. 5-en fognak rád fegyvert és tovább rádiózol, futkározol az már PG-nek minősül és TILOS.",

"TILOS az Öngyilkos RP, Pl.: Lefegyverzés közben leugrasz a hegyről, ezzel elkerülve az RP-szálat.",

"TILOS az IC-OOC keverése, mindent IC keretek között kell tartani.",

"TILOS IC bármilyen szabályra utalni.",

"TILOS a Soundboard használata.",

"Mindig maradj karakterben még szabálytalan viselkedés esetén is.",

"Az életed legyen az első minden esetben, ha fegyvert fognak rád annak megfelelően kell viselkedned is.",

"TILOS az irreális viselkedés az NPC-kel, Pl: Indokolatlanul lelőni, elütni őket.",

"Kötelező a Mexikói / Dél-Amerikai öltözetstílusnak, illetve a karakteredhez megfelelően öltözködni.",

"TILOS a toxikus viselkedés minden formája.",

"TILOS az RP Alóli kilépés Pl: A rendvédelem beraideli a HQ-d, te pedig kilépsz, hogy ne kapjanak el.",

"TILOS bármilyen segédprogram használata, amik előnyhöz juttatnak más játékosokkal szemben. (Célkereszt IS!)",

"TILOS a Magyar, illetve Fun nevek (Pl.: Obumbu Kumbula) használata IC.",

"TILOS valós személyek nevét használni, kivéve a frakcióknak megfelelő vezetőjének nevét, Pl.: CJNG-nek El Mencho, stb.)",

"TILOS bármilyen OOC név vagy becenév használata IC.",

"A szerveren kötelező Push-To-Talk használata.",

"TILOS a rádiót használni, ha a karaktered eszméletlen, bilincsben van, vagy elvették tőle."

    ]
  },
  {
    title: "Frakció Szabályzat",
    tag: "Frakciókra vonatkozó szabályok",
    rules: [
"Ha egy frakcióból kilépsz, 3 napos Frakció Jumpot kapsz, ez idő alatt nem mehetsz másik frakcióba.",

"TILOS interiorba menekülni hogy meg menekülj egy RP-szál alól. Pl.: Egy CP-n keresztül bemész a házadba, ahova mások nem tudnak bejönni.",

"Legális Frakciókban maximum 25, Illegális Frakciókban maximum 20 tag lehet.",

"TILOS Frakcióváltás után az előző frakció belsős információit felhasználni, amennyiben CK-val távoztál a frakcióból.",

"TILOS frakcióból kilépés előtt a közös raktárat, kasszát kifosztani.",

"Egy kartellként kötelező álcázni a szervezetetek és bármilyen hozzá kötödő információt.",

"A Frakció Leaderek kötelesek a tagjaik szabálysértéseiért is felelősséget vállalni.",

"TILOS frakciók között OOC szövetséget kötni IC indok nélkül.",

"TILOS frakció öltözet használata, ha már nem vagy a frakció tagja.",

"TILOS frakciótagként szándékosan olyan helyzetbe hozni a frakciót, amely ellehetetleníti annak működését. Pl.: Direkt háborút provokálsz, aztán kilépsz.",

"Tagfelvételhez kötelező legalább minimális IC felvételi folyamat.",

"Rendvédelemnek a korruptkodás csak minimálisan engedélyzett. Pl.: Információ átadás, drogok eladása.",

" Rendvédelmi frakció tagja csak szolgálatban használhat szolgálati felszerelést, kivéve undercover egységek.",

"TILOS rendvédelmi tagként a szolgálati járműveket magáncélra használni.",

"TILOS nyomós indok nélkül lövöldözést kezdeményezni!",

"TILOS indokolatlanul, NonRP-sen megbilincselni valakit.",

"Rendvédelmi személy nem adhat el szolgálati fegyvert, lőszert, és egyéb felszerelést.",

"TILOS szolgálati fegyvert raktárból kivenni, és motelben vagy járműben tárolni.",

"Rendvédelmi tagok kötelesek a testi épségüket előre helyezni. Pl.: HQ Raid közben nem szaladsz be egyedül.",

"TILOS indokolatlanul erős fegyverzetet használni olyan szituációban, ami nem igényli meg azt."
      
"Az illegális frakció tagok nem öltözhetnek egyenruhába. Minden tagnak más ruhában kell lennie, hasonlóság csak nyomokban lehet felfedezhető. Ez alól kivételt képez a Tier 3-as és 4-es frakciók."
    ]
  },
  {
    title: "HQ Raid Szabályok,
    tag: "HQ Raidre vonatkozó szabályok",
    rules: [
      "HQ raid csak komoly IC indokkal indítható.",

"HQ raid előtt kötelező megfelelő RP-előzmény, egy egyszerű szóváltás vagy vitázás nem elegendő indok.",

"HQ raidhez mindkét féltől minimum 6 tag, illetve egy admin jelenléte szükséges.",

"TILOS szövetkezni HQ raidnél, kivéve ha a beavatkozó frakciónak IC előzménye van mindkét frakcióval. Pl.: \"A\" frakció megtámadja \"B\" frakciót, viszont \"C\" frakciót 2 hete szintén megtámadta \"A\" frakció, ezért egymásnak segítenek. ugyanez",

"Egy HQ raid után minimum 10 nap el kell hogy teljen, mielőtt újra megtámadhatóak.",

"Szerver Restart előtt fél órával TILOS HQ raidet kezdeményezni.",

"HQ raid során a raktárkészlet maximum 50%-a elvihető.",

"A védekező fél nem pakolhatja át a raktár tartalmát másik helyre, ha tudomása van róla hogy raidelni fogják.",

"A támadó fél nem viheti el a raktár tartalmát mind addig, ameddig az összes tag el nem hagyja a raid területét.",

"Ha egyszer elhagytátok a raid területét, nem mehettek vissza."
    ]
  },
  {
    title: "Rablások és illegál",
    tag: "Illegális RP",
    rules: [
      "Ide írd a rablások feltételeit.",
      "Ide írd, mennyi rendőr szükséges egy akcióhoz.",
      "Ide írd az illegális tevékenységek szabályait.",
      "Ide írd a túszejtésre vonatkozó kiegészítéseket.",
      "Ide írd a cooldown vagy egyéb korlátozásokat."
    ]
  },
  {
    title: "Frakciók",
    tag: "Rendvédelem / bandák / cégek",
    rules: [
      "Ide írd a frakciókra vonatkozó szabályokat.",
      "Ide írd a frakcióvezetők kötelességeit.",
      "Ide írd a frakcióból való kilépés szabályait.",
      "Ide írhatsz további alpontokat is, amennyit szeretnél."
    ]
  },
  {
    title: "Járművek",
    tag: "Autók / üldözések",
    rules: [
      "Ide írd a járműhasználati szabályokat.",
      "Ide írd az üldözésekre vonatkozó szabályokat.",
      "Ide írd a tuninggal vagy lopott járművekkel kapcsolatos szabályokat.",
      "Ide írd a pit maneuver vagy ram szabályokat, ha vannak."
    ]
  },
  {
    title: "Safe Zone",
    tag: "Védett területek",
    rules: [
      "Ide írd, mely helyek számítanak Safe Zone-nak.",
      "Ide írd, mi tilos Safe Zone területén.",
      "Ide írd a kivételeket, ha vannak.",
      "Ide írd a büntetéseket vagy staff eljárást."
    ]
  },
  {
    title: "Staff és szankciók",
    tag: "Admin ügyek",
    rules: [
      "Ide írd a staff döntésekkel kapcsolatos szabályokat.",
      "Ide írd, hogyan lehet jelenteni egy játékost.",
      "Ide írd a figyelmeztetés / kick / ban rendszer szabályait.",
      "Ide írd a ticket vagy panaszkezelés menetét."
    ]
  }
];
