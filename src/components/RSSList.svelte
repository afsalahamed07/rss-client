<script>
    import { fetchAllRss } from '../services/RSSService.js';
    import { onMount } from 'svelte';
    import RSS from "./RSS.svelte";

    let rss = null;
    let user = null;

    async function fetchRss() {
        try {
            user = JSON.parse( sessionStorage.getItem( 'user' ) );
            if ( user ) {
                const response = await fetchAllRss( user.accessToken )
                rss = await response.json();
                console.log( rss )
            } else {
                window.location.href = '/login';
            }
        } catch ( error ) {
            console.error( error );
            window.location.href = '/login';
        }
    }

    onMount( fetchRss );

</script>

<div class="container p-4">
    <ol>
        {#if rss}
            {#each rss as feed}
                <RSS
                    title={feed.title}
                    url={feed.url}
                    description={feed.description}
                />
            {/each}
        {/if}
    </ol>
</div>
