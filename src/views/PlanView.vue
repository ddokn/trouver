<template>
	<main class="main-plan">
		<div class="container h-100 position-relative">
			<div class="row h-100">
				<div class="col-12">
					<div class="d-flex align-items-center flex-column">
						<img src="../assets/images/icons/ic_Trouver.png" width="48" height="48" alt="">
						<div class="text-white text-center text-24 text-area">
							<p>취향저격 장소가 담긴<br/>
								<strong>여행계획 시작해볼까요?</strong>
							</p>
						</div>
					</div>
					<div class="d-flex align-items-center flex-column btn-area position-absolute">
						<button type="button" class="btn btn-primary" @click="myPlan">나만의 여행일정 만들기</button>
						<button type="button" class="btn btn-outline-primary">다른 사람 일정 구경하기</button>
					</div>
				</div>
			</div>
		</div>
		<layer-popup
		@close="hideLayer"
		v-if="showLayer == true"
		:step="step"
		>
		</layer-popup>
	</main>
</template>

<script>
import LayerPopup from '@/components/LayerPopup.vue'
export default {
	name: 'PlanView',
  components: { LayerPopup },
	data(){
		return {
			showLayer: false
		}
	},
	mounted(){
	},
	methods: {
		myPlan() {
			this.showLayer = true
		},
		hideLayer (){
			this.showLayer = false
		}
	},
}
</script>

<style>

</style>