<template>
	<swiper
	class="mySwiper"
	:slidesPerView="'auto'"
	:centeredSlides="true"
	:spaceBetween="24"
	@swiper="onSwiper"
	@slideChange="onSlideChange"
	>
		<swiper-slide>
			<img src="../assets/images/dummy/swiper-dummy.png">
		</swiper-slide>
		<swiper-slide>
			<img src="../assets/images/dummy/swiper-dummy.png">
		</swiper-slide>
		<swiper-slide>
			<img src="../assets/images/dummy/swiper-dummy.png">
		</swiper-slide>
		<div class="mt-xxxl">
				<p class="text-18 fw-bold mb-0">메종 글래드 제주</p>
				<p class="fs-4 mb-0 mt-xxl">제주 제주시 노연로 80</p>
		</div>
	</swiper>
	<starRating
		starColor="#81C1A7"
		inactiveColor="#eee"
		step="0.5"
		border-color="red"
		:showControl="false"
		:rating="3.8"
		v-model="rating"
	/>
</template>

<script>
// https://swiperjs.com/vue
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

// https://socket.dev/npm/package/vue3-star-ratings
import starRating from 'vue3-star-ratings';

export default {
	name: 'SwiperJs',
	components: {
		Swiper,
		SwiperSlide,
		starRating
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
		};
		return {
			onSwiper,
			onSlideChange,
		};
	},
}
</script>

<style>
</style>