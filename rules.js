/*
  LSN Mexico szabályzat szerkesztése
  ---------------------------------
  Itt tudod átírni a rublikák címét és szabályait.

  Új rublika minta:
  {
    title: "Rublika címe",
    tag: "Rövid kategória",
    rules: [
      "Első szabály szövege.",
      "Második szabály szövege."
    ]
  }

  Fontos: minden szöveg idézőjelek között legyen, és a sorok végén vessző legyen, kivéve az utolsó elemnél nem kötelező.
*/

const RULE_SECTIONS = [
  {
    title: "Általános szabályok",
    tag: "Alap szabályzat",
    rules: [
      "Ide írd az első általános szabályt.",
      "Ide írd a második általános szabályt.",
      "Ide írd a harmadik általános szabályt."
    ]
  },
  {
    title: "Roleplay szabályok",
    tag: "RP viselkedés",
    rules: [
      "Ide írd az RP-vel kapcsolatos szabályokat.",
      "Példa: karakterből kilépni aktív RP közben tilos.",
      "Példa: minden szituációt komolyan kell venni."
    ]
  },
  {
    title: "RDM / VDM",
    tag: "Tilos cselekedetek",
    rules: [
      "Ide írd az RDM szabályokat.",
      "Ide írd a VDM szabályokat.",
      "Ide írd a büntetéssel kapcsolatos részt."
    ]
  },
  {
    title: "Rablások és illegál",
    tag: "Illegális RP",
    rules: [
      "Ide írd a rablások feltételeit.",
      "Ide írd, mennyi rendőr szükséges egy akcióhoz.",
      "Ide írd az illegális tevékenységek szabályait."
    ]
  },
  {
    title: "Frakciók",
    tag: "Rendvédelem / bandák / cégek",
    rules: [
      "Ide írd a frakciókra vonatkozó szabályokat.",
      "Ide írd a frakcióvezetők kötelességeit.",
      "Ide írd a frakcióból való kilépés szabályait."
    ]
  },
  {
    title: "Járművek",
    tag: "Autók / üldözések",
    rules: [
      "Ide írd a járműhasználati szabályokat.",
      "Ide írd az üldözésekre vonatkozó szabályokat.",
      "Ide írd a tuninggal vagy lopott járművekkel kapcsolatos szabályokat."
    ]
  },
  {
    title: "Safe Zone",
    tag: "Védett területek",
    rules: [
      "Ide írd, mely helyek számítanak Safe Zone-nak.",
      "Ide írd, mi tilos Safe Zone területén.",
      "Ide írd a kivételeket, ha vannak."
    ]
  },
  {
    title: "Staff és szankciók",
    tag: "Admin ügyek",
    rules: [
      "Ide írd a staff döntésekkel kapcsolatos szabályokat.",
      "Ide írd, hogyan lehet jelenteni egy játékost.",
      "Ide írd a figyelmeztetés / kick / ban rendszer szabályait."
    ]
  }
];
