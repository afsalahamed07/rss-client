export async function feedService( token, page, limit ) {
    const response = await fetch( `http://127.0.0.1:8080/api/v2/entries/all?page=${page}&size=${limit}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token }`
        }
    } );

    if ( !response.ok ) {
        throw new Error( response.status );
    }
    return response;
}