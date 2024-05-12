export async function loginService( username, password ) {
    const response = await fetch( 'http://127.0.0.1:8080/api/v2/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            username: username,
            password: password,
        } )
    } );
    if ( !response.ok ) {
        throw new Error( response.status );
    }
    return response;
}