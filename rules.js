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
    title: "Roleplay szabályok",
    tag: "RP viselkedés",
    rules: [
      "Ide írd az RP-vel kapcsolatos szabályokat.",
      "Példa: karakterből kilépni aktív RP közben tilos.",
      "Példa: minden szituációt komolyan kell venni.",
      "Példa: non-RP viselkedés szankciót vonhat maga után.",
      "Ide jöhetnek további RP szabályok is korlát nélkül."
    ]
  },
  {
    title: "RDM / VDM",
    tag: "Tilos cselekedetek",
    rules: [
      "Ide írd az RDM szabályokat.",
      "Ide írd a VDM szabályokat.",
      "Ide írd a büntetéssel kapcsolatos részt.",
      "Ide írhatsz még plusz pontokat is, nincs korlát."
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
