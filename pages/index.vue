<template>
	<div>
		<Navigation></Navigation>
		<b-carousel controls indicators>
			<b-carousel-slide img-src="https://picsum.photos/1024/240/?image=52"></b-carousel-slide>
			<b-carousel-slide img-src="https://picsum.photos/1024/240/?image=53"></b-carousel-slide>
			<b-carousel-slide img-src="https://picsum.photos/1024/240/?image=54"></b-carousel-slide>
			<b-carousel-slide img-src="https://picsum.photos/1024/240/?image=55"></b-carousel-slide>
			<b-carousel-slide img-src="https://picsum.photos/1024/240/?image=56"></b-carousel-slide>
		</b-carousel>
		<b-container>
			
		</b-container>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation.vue';

	export default {
		components: {
			Navigation
		}
	}
</script>