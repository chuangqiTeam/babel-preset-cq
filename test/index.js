function fn({name, ...params}) {
    return params;
}

fn({
    name: 'cyt',
    id: '01',
    sex: 'man',
});
