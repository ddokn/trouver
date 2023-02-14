<template>
	<div class="layer-popup" :class="'step-' + step">
			<div class="container h-100 position-relative">
				<div class="row h-100">
					<div class="col-12">
						<div class="d-flex align-items-center flex-column">
							<div class="layer-header">
								<a v-if="step == 0" class="btn-arrow" href="javascript:;" role="button" @click.self="$emit('close')">
									<small class="d-none">뒤로가기</small>
								</a>
								<a v-else class="btn-arrow" href="javascript:;" role="button" @click="prevStep">
									<small class="d-none">이전</small>
								</a>
								<div class="step-badge" v-if="step > 0">
									<span
									v-for="(a, i) in this.max"
									:key="i"
									:class="i == (step - 1) ? 'active': ''"
									>
									</span>
								</div>
							</div>


							<div v-if="step == 0" class="text-white text-center text-24 text-area">
								<p class="mb-5">안녕하세요 도레미님,</p>
								<p>지금부터 당신을 위한<br/>여행계획을 도와드릴게요.</p>
							</div>
							<div v-else-if="step == 1" class="text-white text-center text-24 text-area">
								<p>언제 여행을 떠나시나요?</p>
							</div>
							<div v-else-if="step == 2" class="text-white text-center text-24 text-area">
								<p class="mb-xxl">어떤 여행을<br/>하고 싶으세요?</p>
								<p class="fs-3">한가지를 꼭 선택해주세요</p>
							</div>
							<div v-else-if="step == 3" class="text-white text-center text-24 text-area">
								<p>예산은 얼마로<br/>생각하세요?</p>
							</div>

						</div>
						<div class="d-flex align-items-center flex-column btn-area position-absolute">
							<button type="button" class="btn btn-primary" @click="nextStep">
								<span v-if="step == 0 || step == 3">시작하기</span>
								<span v-else-if="step < 3">다음</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
	name: 'LayerPopup',
	data() {
		return {
			step: this.$store.state.planStep,
			max: this.$store.state.maxStep
		}
	},
	methods: {
		nextStep() {
			if ( this.max > this.step ) {
				this.step++
			}
		},
		prevStep() {
			if ( this.max >= this.step ) {
				this.step--
			}
		}
	}
}
</script>

<style>

</style>