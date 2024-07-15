const fetchBreedList = async ({queryKey}) => {
    const animal = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)

    if(!animal)
    {
        return []
    }
    if(!apiRes.ok){
        throw new Error(`breeds/${id} fetch not ok`);
    }
    return apiRes.json(); //no need to await the json here -> since we are returning a promise
    //even if you await its okay, but you would have introduced a milli second of latency
}
export default fetchBreedList;