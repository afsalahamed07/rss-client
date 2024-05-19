<script>
    import { sendSubscribeRequest } from "../services/RSSService.js";

    let rss = '';
    let user = null;

     async function subscribe() {
        if ( rss.trim() !== '' ) {
            try {
                user = JSON.parse( sessionStorage.getItem( 'user' ) );
                if ( user ) {
                    await sendSubscribeRequest( user.accessToken, rss )
                } else {
                    window.location.href = '/login';
                }
            } catch ( error ) {
                console.error( error );
                window.location.href = '/login';
            }
        }
        window.location.href = '/';
    }
</script>

<div class="container p-4 mt-5">
    <div class="d-flex">
        <div class="flex-fill">
            <div class="input-group p-2">
                <input type="text" class="form-control" placeholder="RSS" bind:value={rss}>
            </div>
        </div>
        <div class="align-self-center p2 ">
            <button type="button" class="btn btn-primary" on:click={subscribe}>Subscribe</button>
        </div>
    </div>
</div>