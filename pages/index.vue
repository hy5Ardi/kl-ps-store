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
			<div class="center">
				<h1 class="title">Klõps fotopood</h1>
				<div class="col-lg-8 mx-auto text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti aspernatur nihil quas iusto praesentium eaque, ea numquam aut consequuntur doloremque quidem sint mollitia dolores ut eveniet quam fuga illum temporibus error fugit minima excepturi pariatur natus? Quasi vel, aperiam veritatis eos, quas iste nostrum tempora beatae quam consequuntur iure laudantium neque. Deleniti, sed perspiciatis. Doloribus veniam enim cum harum! Placeat quas ipsum vero voluptatem odit? Ab aut iusto eum aspernatur delectus accusamus quod tempore dolor. Facilis explicabo aliquid non?</div>
				<b-button variant="success" size="lg" squared to="/products">Sirvi tooteid</b-button>
			</div>
			<div class="center mt-5">
				<h2 class="title pt-5">Meie meeskond</h2>
				<div class="col-lg-8 mx-auto text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero a similique laudantium perspiciatis eius nostrum veniam doloremque quae odio iste perferendis recusandae inventore tempore, dicta rerum minus cum numquam quidem corporis, nemo, porro aperiam ad! Laudantium quo quidem cum quasi!</div>
				<b-button variant="info" size="lg" squared>Vabad töökohad</b-button>
				<b-row class="mt-5">
					<div class="col-lg-4">
						<b-card>
							<b-img class="mx-auto avatar" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" rounded="circle"></b-img>
							<b-card-body>
								<h4 class="title">Name name <br>
									<small>Ceo</small>
								</h4>
								<hr>
								<b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo rerum dolorem facere, eos labore!</b-card-text>
							</b-card-body>
						</b-card>
					</div>
					<div class="col-lg-4">
						<b-card>
							<b-img class="mx-auto avatar" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" rounded="circle"></b-img>
							<b-card-body>
								<h4 class="title">Name name <br>
									<small>Müügikonsultant</small>
								</h4>
								<hr>
								<b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo rerum dolorem facere, eos labore!</b-card-text>
							</b-card-body>
						</b-card>
					</div>
					<div class="col-lg-4">
						<b-card>
							<b-img class="mx-auto avatar" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" rounded="circle"></b-img>
							<b-card-body>
								<h4 class="title">Name name <br>
									<small>Arendaja</small>
								</h4>
								<hr>
								<b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo rerum dolorem facere, eos labore!</b-card-text>
							</b-card-body>
						</b-card>
					</div>
				</b-row>
			</div>
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

<style scoped>
	.text {
		margin-bottom: 15px;
	}

	.btn {
		text-transform: uppercase;
	}

	.avatar {
		width: 100px;
		height: 100px;
	}

	.card, .card-img {
		border-radius: 0px;
	}
</style>