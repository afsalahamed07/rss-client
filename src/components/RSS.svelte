<script>
    import { sendSubscribeRequest } from "../services/RSSService.js";

    export let title;
    export let url;
    export let description;

    let user = null;

    async function subscribe() {
        try {
            user = JSON.parse( sessionStorage.getItem( 'user' ) );
            if ( user ) {
                await sendSubscribeRequest( user.accessToken, url )
            } else {
                window.location.href = '/login';
            }
        } catch ( error ) {
            console.error( error );
            window.location.href = '/login';
        }
        window.location.href = '/';
    }


</script>

<li class="list-group-item list-group-item-light">
    <div class="d-flex p-2 mb-2 shadow-sm">
        <div class="p-2" style="width: 200px"><h5>{title}</h5></div>
        <div class="p-2 flex-fill "><p>{description}</p></div>
        <div class="p-2 align-self-end">
            <button class="btn btn-outline-primary"
                    on:click={subscribe}>Subscribe
            </button>
        </div>
    </div>
</li>



