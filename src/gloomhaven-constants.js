import Brute from './game/classes/Brute';
import Cragheart from './game/classes/Cragheart';
import Mindthief from './game/classes/Mindthief';
import Scoundrel from './game/classes/Scoundrel';
import Spellweaver from './game/classes/Spellweaver';
import Tinkerer from './game/classes/Tinkerer';
import Sunkeeper from './game/classes/Sunkeeper';
import Summoner from './game/classes/Summoner';
import Nightshroud from './game/classes/Nightshroud';
import Plagueherald from './game/classes/Plagueherald';

export const CLASSES = {
    // basic classes
    'Brute': new Brute(),
    'Cragheart': new Cragheart(),
    'Mindthief': new Mindthief(),
    'Scoundrel': new Scoundrel(),
    'Spellweaver': new Spellweaver(),
    'Tinkerer': new Tinkerer(),
    // unlockable classes
    'Sunkeeper': new Sunkeeper(),
    'Summoner': new Summoner(),
    'Nightshroud': new Nightshroud(),
    'Plagueherald': new Plagueherald(),
    // more to be unlocked...
};
