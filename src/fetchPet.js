const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)

    if(!apiRes.ok){
        throw new Error(`details/${id} fetch not ok`);
    }
    return apiRes.json(); //no need to await the json here -> since we are returning a promise
    //even if you await its okay, but you would have introduced a milli second of latency
}
export default fetchPet;