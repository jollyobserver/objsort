dataSetVersion = "2022-10-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "character filter",
    key: "stage",
    tooltip: "hello i am a character filter",
    checked: false,
    sub: [
      { name: "Main characters", key: "main" },
      { name: "Supporting characters", key: "mainplus" },
      { name: "Minor characters", key: "all" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Spool",
    img: "static.wixstatic.com/media/34e15c_378a6c917d2f45c2933529cd6e38f238~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Citrus",
    img: "static.wixstatic.com/media/34e15c_fa08f6fde6f646c385c8d987f8789c3f~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Razor",
    img: "static.wixstatic.com/media/34e15c_29a7101b640e42338c4c9f6daa586ff6~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Fuzzball",
    img: "static.wixstatic.com/media/34e15c_4d4fc98f845647c5aea7f6ad897c3123~mv2.png",
    opts: {
      stage: ["main"],
    },
  },
  {
    name: "Gum",
    img: "static.wixstatic.com/media/34e15c_b5bde5cda67a4b0fbb0a6bd135f06cee~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Sharps",
    img: "static.wixstatic.com/media/34e15c_657db47311cb4a0ea8047647cd078423~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Fossil",
    img: "static.wixstatic.com/media/34e15c_53bb1e0e7f994eba9ef29741de9c7e9e~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Painkiller",
    img: "static.wixstatic.com/media/34e15c_f0105f3863824c96a6aeb6bbbeae69e0~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Dynamite",
    img: "static.wixstatic.com/media/34e15c_6976f0c772e640b29898c6c19ece442b~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Mushroom",
    img: "static.wixstatic.com/media/34e15c_88ebe312e1ff46468401ced8e535572f~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Brandy",
    img: "static.wixstatic.com/media/34e15c_9988914c97734159b68f78f5e43a8ed3~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Minty",
    img: "static.wixstatic.com/media/34e15c_a0daa22d113c48bb84613516fc657434~mv2.png",
    opts: {
      stage: ["main"],
    }
  },
  {
    name: "Sugarcube",
    img: "static.wixstatic.com/media/34e15c_f0d02239a0eb4e509bcead3a699c6d21~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Dragonscale",
    img: "static.wixstatic.com/media/34e15c_4a91ce3942db4f09bfc5731a7992cab4~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Comet",
    img: "static.wixstatic.com/media/34e15c_d6c2d058294c4536886dc6495b77a488~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Wagyu",
    img: "static.wixstatic.com/media/34e15c_b7e6d8683c1d4568a64351b1ec4f34ff~mv2.png",
    opts: {
      stage: ["main"]
    }
  },
  {
    name: "Maple Syrup",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/ms.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Ghost Pepper",
    img: "static.wixstatic.com/media/34e15c_bc6c9ac5e69e4d04996c6c9928c5db0c~mv2.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Babs",
    img: "static.wixstatic.com/media/34e15c_28ee0b7387fb448d9978f6d60bf02bae~mv2.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Gil",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/g.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Venus",
    img: "static.wixstatic.com/media/34e15c_31485a9ff8f44949be632070de9cbf5d~mv2.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Bic",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/b.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Warhammer",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/wh.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Turtleshell",
    img: "static.wixstatic.com/media/34e15c_cfc854f51de94939a70a287b9a653376~mv2.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Rufus/Pluto",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/rp.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Piper",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/p.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Tigerlily",
    opts: {
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/tl.png",
      stage: ["mainplus"]
    }
  },
  {
    name: "Morrigan",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/mr.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Wire-Wrap Tree",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/wirewrap.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Faux",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/fx.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Body Pillow",
    img: "static.wixstatic.com/media/34e15c_03d3045d9c9b4dbfa932775d6e5ae3fd~mv2.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Water Timer",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/ww.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Jumper",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/jm.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Wick",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/wick.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Cherry",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/cn.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Lava Lamp",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/lava_lamp.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Wanda",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/wanda.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Sticker Sheet",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/sticker_sheet.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Fishtank",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/fishtank.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Grilldorah",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/gr.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Weed Blunt",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/wb.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "The Nightcrawler",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/nc.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Host",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/h.png",
    opts: {
      stage: ["mainplus"]
    }
  },
  {
    name: "Bottle Cap",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/bc.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Soda Can",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/sc.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Dynamite's parents",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/prt.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Gin",
    img: "static.wixstatic.com/media/34e15c_53670808f3a74d5585a0873f92058b10~mv2.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Gum's mom",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/gm.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Drum",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/dr.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Ribs",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/rb.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Feather",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/f.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Frozen Bottle",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/fb.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Pilobolus",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/pl.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Cobalt",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/cb.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Daisy",
    img: "static.wixstatic.com/media/34e15c_b3435d7acbac4003b0ce5c67d8236a60~mv2.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Tech",
    img: "static.wixstatic.com/media/34e15c_a9a2308290554c389106c191f14ed7cc~mv2.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Honey",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/hn.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Porkloin",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/pr.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Fuzzball's stepdad",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/fd.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Minty's mom",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/mm.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Coffee Pot",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/cf.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Wagyu's sisters",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/ws.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Lawless King of Dread Tides",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/dt.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Harebell",
    img: "static.wixstatic.com/media/34e15c_1704399983ad4126b2b719674496ab4e~mv2.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Calamondin",
    img: "raw.githubusercontent.com/jollyobserver/objsort/refs/heads/main/src/assets/chars/cl.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Airplane",
    img: "static.wixstatic.com/media/34e15c_db1076750b514c7a9864d33f030b4091~mv2.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Frozen Boba",
    img: "static.wixstatic.com/media/34e15c_e801cd348cc247b594d4e48d9fd26e4a~mv2.png",
    opts: {
      stage: ["all"]
    }
  },
  {
    name: "Glass Bead",
    img: "static.wixstatic.com/media/34e15c_d370889e2dc6459c9b88707b5b9194cf~mv2.png",
    opts: {
      stage: ["all"]
    }
  }
];
