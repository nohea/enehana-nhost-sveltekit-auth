<script>
    import { isSignedIn, nhost, signIn, user } from '$lib/nhost';

    let loginMessage = '';

    async function loginFormSubmit(e) {
		console.log('loginFormSubmit()');
		const formData = new FormData(e.target);
		const submitData = {};
		for (let field of formData) {
			const [key, value] = field;
			submitData[key] = value;
		}
		console.log("submitData: ", submitData);
		const data = await signIn(submitData);
		console.log(data);
        if(data.error) {
            loginMessage = data.error.message;
        }
        else {
            loginMessage = "login success";
        }
	}

</script>

login

<div style="color:red">
    {loginMessage}
</div>

{#if $isSignedIn && $user}
    <div>you are signed in, {$user.displayName}</div>
    <div><a href="#signout" on:click={()=> nhost.auth.signOut()}>sign out</a></div>
{:else if $isSignedIn === false}
    <div>please log in</div>

    <form on:submit|preventDefault={loginFormSubmit}>
        <div class="form-item-wrapper">
			<label for="email" class="form-label">Email</label>
			<input name="email" type="text" placeholder="Email" class="form-field" />
		</div>
		<div class="form-item-wrapper">
			<label for="password" class="form-label">Password</label>
			<input name="password" type="password" placeholder="Password" class="form-field" />
		</div>

		<input type="submit" value="Log In" />
    </form>

{:else}
    <div>Page loading...</div>
{/if}

