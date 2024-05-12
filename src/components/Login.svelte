<script>
    import { User } from '../domain/User';
    import { loginService } from "../services/LoginService.js";

    let username = '';
    let password = '';

    async function login() {
        if ( username.trim() !== '' && password.trim() !== '' ) {
            try {
                const response = await loginService( username, password )
                const data = response.json();
                const user = new User( username, data.token );

                sessionStorage.setItem( 'user', JSON.stringify( user ) );
                console.log( 'User logged in successfully')
                window.location.href = '/app';
            } catch ( error ) {
                console.error( error );
            }
        }
    }
</script>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card mt-5">
                <div class="card-header">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" bind:value={username}>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" bind:value={password}>
                    </div>
                    <button class="btn btn-primary" on:click={login}>Login</button>
                </div>
            </div>
        </div>
    </div>
</div>