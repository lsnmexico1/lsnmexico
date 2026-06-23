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
      "Ide írd az első általános szabályt.",
      "Ide írd a második általános szabályt.",
      "Ide írd a harmadik általános szabályt.",
      "Ide írd a negyedik általános szabályt.",
      "Ide írd az ötödik általános szabályt.",
      "Ide írd a hatodik általános szabályt.",
      "Ide írd a hetedik általános szabályt.",
      "Ide írd a nyolcadik általános szabályt."
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
