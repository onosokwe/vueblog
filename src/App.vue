<template>
	<div>
	<Navbar />
	<router-view></router-view>
	</div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
	name: 'App',
	components: {
		Navbar 
	}
}
</script>

<style>
body {
	background: #f1f1f1
}

</style>