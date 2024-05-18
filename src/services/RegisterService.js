export async function registerService( username, name, email, password ) {
    const response = await fetch( 'http://127.0.0.1:8080/api/v2/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            username: username,
            email: email,
            name:name,
            password: password
        } )
    } );
    if ( !response.ok ) {
        throw new Error( response.status );
    }
    return response;
}