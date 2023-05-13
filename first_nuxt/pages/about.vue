<template>
	<div>
		<h2>About</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab eos
			saepe. Ullam eveniet cupiditate corporis aliquam, quos nemo quam.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab eos
			saepe. Ullam eveniet cupiditate corporis aliquam, quos nemo quam.
		</p>
		<div>{{ data }}</div>
	</div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja?name=mario", {
	method: "post",
	body: { age: 30 },
});
</script>

<style scoped></style>
