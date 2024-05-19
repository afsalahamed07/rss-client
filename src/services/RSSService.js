export async function fetchAllRss( token ) {
    const response = await fetch( 'http://127.0.0.1:8080/api/v2/rss/all', {
        method: 'GET',
        headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ token }`
            }
    } );

    if ( !response.ok ) {
        throw new Error( response.status );
    }

    return response;
}

export async function sendSubscribeRequest( token, url ) {
    const response = await fetch( `http://127.0.0.1:8080/api/v2/rss?url=${ url }`, {
        method: 'POST',
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