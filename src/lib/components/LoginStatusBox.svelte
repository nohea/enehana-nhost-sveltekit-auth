<script>
import { isSignedIn, user } from "$lib/nhost";
</script>

<div class="loginstatus">

{#if $isSignedIn && $user}
<div>Aloha {$user.displayName}</div>
{:else}
<a href="/login">Login</a>
{/if}

</div>

<style>
    .loginstatus {
        border-style: dotted;
        border-color: gray;
        display: flex;
        width: fit-content;
    }
</style>