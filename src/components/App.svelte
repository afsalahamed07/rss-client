<script>
    import { onMount } from 'svelte';
    import { feedService } from '../services/FeedService.js';
    import Entry from "./Entry.svelte";

    let entries = null;
    let user = null;
    let currentPage = 0;

    async function getFeeds( page = 0 ) {
        try {
            user = JSON.parse( sessionStorage.getItem( 'user' ) );
            if ( user ) {
                const response = await feedService( user.accessToken, page, 20 );
                entries = await response.json();
                currentPage = page;
            } else {
                window.location.href = '/login';
            }
        } catch ( error ) {
            console.error( error );
            window.location.href = '/login';
        }
    }

    onMount( () => getFeeds() );

</script>

<div>
    {#if entries}
        {#each entries.entries as entry}
            <Entry
                thumbnail={entry.thumbnail}
                title={entry.title}
                link={entry.link}
                description={entry.description}
                publishedDate={entry.publishedDate}
                author={entry.author}
            />
        {/each}

        <div class="d-flex justify-content-between">
            <button class="btn btn-primary" on:click={() => getFeeds(currentPage - 1)} disabled={currentPage === 0}>
                Back
            </button>
            <span>Page {currentPage + 1} of {entries.totalPages}</span>
            <button class="btn btn-primary" on:click={() => getFeeds(currentPage + 1)}
                    disabled={currentPage === (entries.totalPages - 1) }>
                Next
            </button>
        </div>
    {/if}
</div>
