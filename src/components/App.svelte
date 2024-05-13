<script>
    import { onMount } from 'svelte';
    import { feedService } from '../services/FeedService.js';
    import Entry from "./Entry.svelte";

    let feeds = null;
    let user = null;

    async function getFeeds() {
        try {
            user = JSON.parse( sessionStorage.getItem( 'user' ) );
            if ( user ) {
                const response = await feedService( user.accessToken )
                feeds = await response.json();
            } else {
                window.location.href = '/login';
            }
        } catch ( error ) {
            console.error( error );
            window.location.href = '/login';
        }
    }

    onMount( getFeeds );

</script>

<div>
    {#if feeds}
        {#each feeds as feed}
            {#each feed.entries as entry}
                <Entry
                    thumbnail={entry.thumbnail}
                    title={entry.title}
                    link={entry.link}
                    description={entry.description}
                    publishedDate={entry.publishedDate}
                    author={entry.author}
                />
            {/each}
        {/each}
    {/if}
</div>
