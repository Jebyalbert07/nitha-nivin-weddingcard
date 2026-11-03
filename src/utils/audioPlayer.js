// Web Audio API Romantic Acoustic Melody Synthesizer (Pachelbel's Canon / Romantic Chord Progressions)
// Completely self-contained, no external mp3 or network needed.

class WeddingAudioPlayer {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.currentStep = 0;
    this.volume = 0.35;
    this.gainNode = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.gainNode.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playNote(frequency, duration, timeOffset = 0, type = 'sine') {
    if (!this.audioCtx || !this.isPlaying) return;

    const startTime = this.audioCtx.currentTime + timeOffset;
    const osc = this.audioCtx.createOscillator();
    const noteGain = this.audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, startTime);

    // Warm soft acoustic envelope (attack, decay, sustain, release)
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.1, startTime + 0.4);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    // Connect through gentle low-pass filter for warm piano/harp timbre
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Romantic Wedding Progression (D - A - Bm - F#m - G - D - G - A)
    // Frequencies (Hz) for harp & soft piano chords
    const progression = [
      // D major (D3, A3, D4, F#4)
      [146.83, 220.0, 293.66, 369.99],
      // A major (A2, E3, A3, C#4)
      [110.0, 164.81, 220.0, 277.18],
      // B minor (B2, F#3, B3, D4)
      [123.47, 185.0, 246.94, 293.66],
      // F# minor (F#2, C#3, F#3, A3)
      [92.5, 138.59, 185.0, 220.0],
      // G major (G2, D3, G3, B3)
      [98.0, 146.83, 196.0, 246.94],
      // D major (D3, A3, D4, F#4)
      [146.83, 220.0, 293.66, 369.99],
      // G major (G2, D3, G3, B3)
      [98.0, 146.83, 196.0, 246.94],
      // A major (A2, E3, A3, C#4)
      [110.0, 164.81, 220.0, 277.18]
    ];

    const leadNotes = [
      // Sweet bell/chime melody counterpoint
      587.33, 554.37, 493.88, 440.0, 392.0, 369.99, 392.0, 440.0
    ];

    let chordIndex = 0;
    const playChordArpeggio = () => {
      if (!this.isPlaying) return;

      const chord = progression[chordIndex % progression.length];
      const lead = leadNotes[chordIndex % leadNotes.length];

      // Arpeggiate chord notes like a harp
      chord.forEach((freq, idx) => {
        this.playNote(freq, 2.2, idx * 0.22, 'triangle');
      });

      // Add gentle high chime
      this.playNote(lead, 2.0, 0.45, 'sine');
      this.playNote(lead * 1.5, 1.5, 0.85, 'sine');

      chordIndex++;
      this.timerId = setTimeout(playChordArpeggio, 2200);
    };

    playChordArpeggio();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  setVolume(val) {
    this.volume = val;
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(val, this.audioCtx.currentTime);
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();

