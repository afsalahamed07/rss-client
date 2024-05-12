<script>
    import { User } from '../domain/User';
    let username = '';
    let password = '';

    async function login() {
        if (username.trim() !== '' && password.trim() !== '') {
            const response = await fetch('http://127.0.0.1:8080/api/v2/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username.trim(),
                    password: password.trim()
                })
            });

            if (response.ok) {
                const data = await response.json();
                const user = new User(username, data.token);
            } else {
                console.error('Login failed');
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
                    </div> <button class="btn btn-primary" on:click={login}>Login</button>
                </div>
            </div>
        </div>
    </div>
</div>