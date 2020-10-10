export const DraggableTypes = {
    SkillCard: 'SkillCard'
}

export const union = (array1, array2) => {
    const result = [...array1, ...array2];
    return result.filter((item, pos) => result.indexOf(item) === pos);
}

export const frequencyMap = (a1, a2) => {
    a1[a2] = a1.hasOwnProperty(a2) ? ++a1[a2] : 1;
    return a1;
}
