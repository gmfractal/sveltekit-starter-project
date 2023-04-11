<script lang="ts">
</script>

<main class="root-page">
	<h1>Admin Tools</h1>

	<h2>Login</h2>

	<div>
		<label for="username-input">Username</label>
		<input id="username-input" type="text" />
	</div>

	<div>
		<label for="password-input">Password</label>
		<input id="password-input" type="password" />
	</div>

	<div>
		<label for="totp-input">TOTP Code</label>
		<input id="totp-input" type="text" />
	</div>

	<div>
		<h3>Sample Links</h3>
		<div>
			<a href="/workscape">Admin Tools Workscape</a>
		</div>
		<div>
			<a href="/workscape/logviewer">Log Viewer</a>
		</div>
	</div>
</main>

<style lang="scss">
	.root-page {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}
</style>
