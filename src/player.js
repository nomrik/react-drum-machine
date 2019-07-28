import kick1 from './audio/kick1.wav';
import kick2 from './audio/kick2.wav';
import kick3 from './audio/kick3.wav';
import hihat1 from './audio/hihat1.wav';
import hihat2 from './audio/hihat2.wav';
import hihat3 from './audio/hihat3.wav';
import snare1 from './audio/snare1.wav';
import snare2 from './audio/snare2.wav';
import snare3 from './audio/snare3.wav';

const sounds = {
    kick1: new Audio(kick1),
    kick2: new Audio(kick2),
    kick3: new Audio(kick3),
    hihat1: new Audio(hihat1),
    hihat2: new Audio(hihat2),
    hihat3: new Audio(hihat3),
    snare1: new Audio(snare1),
    snare2: new Audio(snare2),
    snare3: new Audio(snare3),
}

export default {
    play: sound => {
        const audioObject = sounds[sound]; 
        if (!sound || !audioObject) {
            return;
        }
        audioObject.pause();
        audioObject.currentTime = 0;
        audioObject.play();
     },
    sounds: Object.keys(sounds),
    setVolume: volume => {
        Object.values(sounds).forEach(sound => sound.volume = volume)
    }
}