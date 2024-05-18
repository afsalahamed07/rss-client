<script>
    import { User } from '../domain/User';
    import { loginService } from "../services/LoginService.js";

    let username = '';
    let password = '';

    async function login() {
        if ( username.trim() !== '' && password.trim() !== '' ) {
            try {
                const response = await loginService( username, password )
                const data = await response.json();
                const user = new User( username, data.accessToken );

                sessionStorage.setItem( 'user', JSON.stringify( user ) );
                window.location.href = '/';
            } catch ( error ) {
                console.error( error );
            }
        }
    }
</script>

<div class="container vh-100 d-flex align-items-center justify-content-center">
    <div class="row justify-content-center w-100">
        <div class="col-md-8 col-lg-8 border"> <!-- Adjust the width here -->
            <div class="card p-5 pt-5 m-5 border-0">
                <div data-mdb-input-init class="input-group mb-5">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" id="username" placeholder="Username" bind:value={username}/>
                </div>

                <!-- Password input -->
                <div data-mdb-input-init class="input-group mb-5">
                    <input type="password" id="password" class="form-control" placeholder="Password"
                           bind:value={password}/>
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-5">
                    <div class="col d-flex justify-content-center">
                        <!-- Checkbox -->
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked/>
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div class="col">
                        <!-- Simple link -->
                        <a class="link-underline link-underline-opacity-0" href="#!">Forgot password?</a>
                    </div>
                </div>


                <button type="button" data-mdb-button-init data-mdb-ripple-init
                        class="btn btn-primary btn-block mb-4" on:click={login}>Sign in
                </button>

                <div class="text-center">
                    <p>Not a member? <a class="link-underline link-underline-opacity-0"
                                        href="/register">Register</a></p>
                </div>
            </div>
        </div>
    </div>
</div>