const modelPath = `../assets/3D/alphabet/`;

const samplePath = `../assets/sound/samples/`;
const percsPath = `${samplePath}percs/beat_`;
const melodyPath = `${samplePath}melody/melody_`;
const bassPath = `${samplePath}bass/bass_`;

const musicPath = `../assets/sound/music/`;

export const Store = {
  // 3D Alphabet
  alphabet: {
    a: {
      key: "a",
      mesh: null,
      instance: null,
      model: `${modelPath}a.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    b: {
      key: "b",
      mesh: null,
      instance: null,
      model: `${modelPath}b.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    c: {
      key: "c",
      mesh: null,
      instance: null,
      model: `${modelPath}c.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    d: {
      key: "d",
      mesh: null,
      instance: null,
      model: `${modelPath}d.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    e: {
      key: "e",
      mesh: null,
      instance: null,
      model: `${modelPath}e.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    f: {
      key: "f",
      mesh: null,
      instance: null,
      model: `${modelPath}f.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    g: {
      key: "g",
      mesh: null,
      instance: null,
      model: `${modelPath}g.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    h: {
      key: "h",
      mesh: null,
      instance: null,
      model: `${modelPath}h.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    i: {
      key: "i",
      mesh: null,
      instance: null,
      model: `${modelPath}i.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    j: {
      key: "j",
      mesh: null,
      instance: null,
      model: `${modelPath}j.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    k: {
      key: "k",
      mesh: null,
      instance: null,
      model: `${modelPath}k.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    l: {
      key: "l",
      mesh: null,
      instance: null,
      model: `${modelPath}l.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    m: {
      key: "m",
      mesh: null,
      instance: null,
      model: `${modelPath}m.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    n: {
      key: "n",
      mesh: null,
      instance: null,
      model: `${modelPath}n.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    o: {
      key: "o",
      mesh: null,
      instance: null,
      model: `${modelPath}o.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    p: {
      key: "p",
      mesh: null,
      instance: null,
      model: `${modelPath}p.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    q: {
      key: "q",
      mesh: null,
      instance: null,
      model: `${modelPath}q.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    r: {
      key: "r",
      mesh: null,
      instance: null,
      model: `${modelPath}r.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    s: {
      key: "s",
      mesh: null,
      instance: null,
      model: `${modelPath}s.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    t: {
      key: "t",
      mesh: null,
      instance: null,
      model: `${modelPath}t.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    u: {
      key: "u",
      mesh: null,
      instance: null,
      model: `${modelPath}u.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    v: {
      key: "v",
      mesh: null,
      instance: null,
      model: `${modelPath}v.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    w: {
      key: "w",
      mesh: null,
      instance: null,
      model: `${modelPath}w.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    x: {
      key: "x",
      mesh: null,
      instance: null,
      model: `${modelPath}x.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    y: {
      key: "y",
      mesh: null,
      instance: null,
      model: `${modelPath}y.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
    z: {
      key: "z",
      mesh: null,
      instance: null,
      model: `${modelPath}z.glb`,
      state: false,
      sample: null,
      audio: null,
      id: null,
    },
  },

  alphabetDatas: {
    keysOrder: null,
    alphabetGroup: null,
    lettersInputLimit: 5,
    lettersCount: 0,
    alphabetArray: [null, null, null, null, null],
    availableIndex: [0, 1, 2, 3, 4],
    lettersPositions: {
      x: [-3, -1.5, 0, 1.5, 3],
      z: [0.0, 0.25, 0.5, 0.25, 0.0],
    },
  },

  keyboardLayout: {
    azertyKeyboard: [
      ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
      ["w", "x", "c", "v", "b", "n"],
    ],
    qwertyKeyboard: [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      ["z", "x", "c", "v", "b", "n", "m"],
    ],
  },

  // Sound control
  sound: {
    samplesList: [
      // Percs
      [
        `${percsPath}1.mp3`,
        `${percsPath}2.mp3`,
        `${percsPath}3.mp3`,
        `${percsPath}4.mp3`,
        `${percsPath}5.mp3`,
        `${percsPath}6.mp3`,
        `${percsPath}7.mp3`,
        `${percsPath}8.mp3`,
        `${percsPath}9.mp3`,
        `${percsPath}10.mp3`,
      ],
      // Melodies
      [
        `${melodyPath}1.mp3`,
        `${melodyPath}2.mp3`,
        `${melodyPath}3.mp3`,
        `${melodyPath}4.mp3`,
        `${melodyPath}5.mp3`,
        `${melodyPath}6.mp3`,
        `${melodyPath}7.mp3`,
        `${melodyPath}8.mp3`,
        `${melodyPath}9.mp3`,
        `${melodyPath}10.mp3`,
      ],
      // Basses
      [
        `${bassPath}1.mp3`,
        `${bassPath}2.mp3`,
        `${bassPath}3.mp3`,
        `${bassPath}4.mp3`,
        `${bassPath}5.mp3`,
        `${bassPath}6.mp3`,
        `${bassPath}7.mp3`,
      ],
    ],
    samplesPlayed: [null, null, null, null, null],
    loopProgress: 0,
    music: null,
    musicState: false,
    samplesAssigned: false,
    freqDatas: {
      uSoundLowBass: 0,
      uSoundBass: 0,
      uSoundHighBass: 0,
      uSoundLowMedium: 0,
      uSoundMedium: 0,
      uSoundHighMedium: 0,
      uSoundLowAcute: 0,
      uSoundAcute: 0,
      uSoundHighAcute: 0,
    },
    strength: 1,
  },

  // Mobile
  mobile: {
    isOnMobile: false,
    tilt: {
      x: 0,
      y: 0,
    },
  },

  // Paramètres généraux
  params: {
    sizes: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    pp: {
      aip: {
        damp: 0.75,
      },
      rgbShift: {
        amount: 0.0008,
      },
    },
    mouseDown: false,
    experienceStarted: false,
    progress: 0,
    events: {
      eventClick: "click",
      eventMove: "mousemove",
    },
  },
};
