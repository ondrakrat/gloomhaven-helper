import Brute from './game/classes/Brute';
import Cragheart from './game/classes/Cragheart';
import Mindthief from './game/classes/Mindthief';
import Scoundrel from './game/classes/Scoundrel';
import Spellweaver from './game/classes/Spellweaver';
import Tinkerer from './game/classes/Tinkerer';

export const CLASSES = {
    'Brute': new Brute(),
    'Cragheart': new Cragheart(),
    'Mindthief': new Mindthief(),
    'Scoundrel': new Scoundrel(),
    'Spellweaver': new Spellweaver(),
    'Tinkerer': new Tinkerer()
    // more to be unlocked
};