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
		<b-container class="mt-5 pb-5">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nihil esse? Velit aliquid tempora possimus nisi delectus architecto autem, qui, praesentium illo voluptatum dignissimos iusto quasi eaque nulla mollitia tempore iure pariatur nam quas! Officiis itaque, esse nobis voluptate consequatur fugiat quisquam fugit quidem veritatis adipisci libero in saepe! Optio!</p>
			<p>Commodi nemo eos sequi consectetur. Vero culpa illum numquam adipisci praesentium a quibusdam, quae mollitia necessitatibus. Accusantium quam perferendis ratione doloremque eum cupiditate ex cumque officiis eius, consequuntur, ullam voluptatem laboriosam consectetur minus fuga sunt fugit quos quia deleniti? Impedit aliquid hic dicta maxime eligendi officia debitis inventore! Laudantium, assumenda.</p>
			<p>Voluptatum accusantium ducimus, provident veniam nam ratione. Expedita harum explicabo repellendus libero dolores. Velit rerum omnis saepe recusandae, molestiae harum sint non sapiente sit dolor adipisci quos necessitatibus laboriosam debitis praesentium reprehenderit culpa similique esse! Odio quasi, ut debitis adipisci possimus explicabo error aliquid, animi accusantium placeat officia vero ex!</p>
			<p>Ipsa at possimus, deserunt ut autem aliquam voluptatum enim tempora laudantium adipisci fugiat nobis impedit repellat reiciendis corrupti molestiae eveniet libero vero consectetur. Repudiandae illo, consequatur ex fugit corrupti deleniti quaerat, necessitatibus laboriosam iste minus consequuntur dicta. Alias, obcaecati in explicabo eum, eligendi, rerum quos eius aperiam quas quia eveniet!</p>
		</b-container>
		<Footer></Footer>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		components: {
			Navigation, Footer
		}
	}
</script>