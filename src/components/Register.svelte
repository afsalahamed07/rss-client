<script>
    import { User } from '../domain/User';
    import { registerService } from "../services/RegisterService.js";
    import { loginService } from "../services/LoginService.js";

    let username = '';
    let name = '';
    let email = '';
    let password = '';

    async function register() {
        if ( username.trim() !== '' && password.trim() !== '' ) {
            try {
                let response = await registerService( username = username,
                    name = name,
                    email = email,
                    password = password )
                let data = await response.json();

                // do a login if success
                response = await loginService( username, password );
                data = await response.json();
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

                <div data-mdb-input-init class="input-group mb-5">
                    <input type="text" class="form-control" id="name" placeholder="Name" bind:value={name}/>
                </div>

                <div data-mdb-input-init class="input-group mb-5">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="email" class="form-control" id="email" placeholder="Email" bind:value={email}/>
                </div>

                <!-- Password input -->
                <div data-mdb-input-init class="input-group mb-5">
                    <input type="password" id="password" class="form-control" placeholder="Password"
                           bind:value={password}/>
                </div>

                <!-- 2 column grid layout for inline styling -->


                <button type="button" data-mdb-button-init data-mdb-ripple-init
                        class="btn btn-primary btn-block mb-4" on:click={register}>Register
                </button>

                <div class="text-center">
                    <p>Already a member? <a class="link-underline link-underline-opacity-0"
                                            href="/login">Login</a></p>
                </div>
            </div>
        </div>
    </div>
</div>