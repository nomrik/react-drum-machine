import kick1Url from '../../audio/kick1.wav';
import kick2Url from '../../audio/kick2.wav';
import kick3Url from '../../audio/kick3.wav';
import hihat1Url from '../../audio/hihat1.wav';
import hihat2Url from '../../audio/hihat2.wav';
import hihat3Url from '../../audio/hihat3.wav';
import snare1Url from '../../audio/snare1.wav';
import snare2Url from '../../audio/snare2.wav';
import snare3Url from '../../audio/snare3.wav';


export const instrumentsBank = {
    KICK1: {
        name: 'KICK1',
        note: 'C1',
        url: kick1Url
    },
    KICK2: {
        name: 'KICK2',
        note: 'C2',
        url: kick2Url
    },
    KICK3: {
        name: 'KICK3',
        note: 'C3',
        url: kick3Url
    },
    SNARE1: {
        name: 'SNARE1',
        note: 'D1',
        url: snare1Url
    },
    
    SNARE2: {
        name: 'SNARE2',
        note: 'D2',
        url: snare2Url
    },
    SNARE3: {
        name: 'SNARE3',
        note: 'D3',
        url: snare3Url
    },
    HIHAT1: {
        name: 'HIHAT1',
        note: 'E1',
        url: hihat1Url
    },
    
    HIHAT2: {
        name: 'HIHAT2',
        note: 'E2',
        url: hihat2Url
    },
    HIHAT3: {
        name: 'HIHAT3',
        note: 'E3',
        url: hihat3Url
    },
}

const getInstrumentsByName = (name) => 
    Object.values(instrumentsBank)
    .filter(instrument => instrument.name.includes(name))
    .map(instrument => instrument.name)


export const instrumentGroups = {
    KICKS: getInstrumentsByName('KICK'),
    SNARES: getInstrumentsByName('SNARE'),
    HIHATS: getInstrumentsByName('HIHAT')
}

export const getUrlsByNotes = () => {
    let result = {};
    Object.values(instrumentsBank).forEach(instrument => {
        result[instrument.note] = instrument.url;
    })
    return result;
}

