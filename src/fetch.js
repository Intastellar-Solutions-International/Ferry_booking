const Fetch = async (url, header, body, method) => {
    const t = fetch(url, { method: method, headers: header, body: body }).then((res) => { return res.json() });
    return t;
}

export default Fetch;