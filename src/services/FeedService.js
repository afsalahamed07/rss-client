export async function feedService( token ) {
    const response = await fetch( 'http://127.0.0.1:8080/api/v2/feeds/fetch_all_feeds', {
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