export const inc = () => {
    return { type: 'INC' }
}

export const dec = () => ({ type: 'DEC' });

export const rnd = (payload) => ({ type: 'RND', payload });