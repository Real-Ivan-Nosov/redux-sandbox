export const inc = () => {
    return { type: 'INC' }
}

export const dec = () => ({ type: 'DEC' });

export const rnd = () => {
    const rndValue = Math.floor(Math.random()*10); 

    return { type: 'RND', payload: rndValue }
};