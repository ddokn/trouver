<template>
	<div class="modal fade" id="fullModal" tabindex="-1" aria-labelledby="fullModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-fullscreen">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body text-center">
					<div class="my-2">
						<h2 class="mt-5 mb-3">취향지수 높이기</h2>
						<p class="mb-5">좋았던 장소의 별점을 알려주세요.</p>
					</div>
					<SwiperJs/>
				</div>
				<div class="modal-footer justify-content-center py-5 my-5">
					<button type="button" class="btn btn-primary">시작하기</button>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import SwiperJs from './SwiperJs.vue'

export default {
  components: { 
		SwiperJs
	},
	name: 'FullModal',
}
</script>

<style>

</style>