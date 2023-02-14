<template>
	<main>
		<section class="main-01">
			<div class="container">
				<div class="row align-items-center mb-3">
					<div class="col-6">
						<h1 class="fw-bold mb-2">도레미님,</h1>
						<p class="mb-0 fs-1">여행을 떠나볼까요?</p>
					</div>
					<div class="col-6 text-end position-relative">
						<img class="thumb" src="../assets/images/dummy/rectangle.png" alt="" width="107" height="107">
						<span class="badge"></span>
					</div>
				</div>
				<div class="row g-4 mt-3">
					<div class="col-12">
						<div class="card card-date text-white">
							<a href="javascript:;">
								<!-- 일정이 있을 때 -->
								<h3 class="mb-4">혼자 떠나는 제주여행</h3>
								<p class="mb-0 text-16">2022-09-07 ~ 2022-09-16</p>
								
								<!-- 일정이 없을 때 -->
								<h3 class="mb-4">아직 여행일정이 없어요.<br/>여행일정을 짜러 갈까요?</h3>
								
								<div class="text-end position-absolute">
									<h4 class="mb-0">여행일정짜기 ></h4>
								</div>
							</a>
						</div>
					</div>
					<div class="col-12">
						<div class="card card-taste text-white"  data-bs-toggle="modal" data-bs-target="#fullModal">
							<h3 class="mb-4">취향지수 높이기</h3>
							<div class="text-end position-absolute">
								<p class="text-32 mb-0">10</p>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card card-place text-white">
							<a href="javascript:;">
								<h3 class="mb-4">찜한 장소</h3>
								<div class="text-end position-absolute">
									<p class="text-32 mb-0">10</p>
								</div>
							</a>
						</div>
					</div>
					<div class="col-6">
						<div class="card card-plan text-white">
							<a href="javascript:;">
								<h3 class="mb-4">찜한 일정</h3>
								<div class="text-end position-absolute">
									<p class="text-32 mb-0">10</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="main-02">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2 class="fw-bold mb-4">이런 여행은 어때요?</h2>
					</div>
				</div>
				<div class="row g-3">
					<div class="col-6">
						<div class="card card-blog flex-column-reverse text-white">
							<div class="card-badge"></div>
							<div class="card-summary">
								<p class="fs-4 fw-bold mb-2">와플 좋아하는 사람!?</p>
								<em class="ic-eyes"></em>
								<span class="text-white text-opacity-75 fs-4">841</span>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card card-youtube flex-column-reverse text-white">
							<div class="card-badge"></div>
							<div class="card-summary">
								<p class="fs-4 fw-bold mb-2">혼자라도 셀카 잘 찍는법</p>
								<em class="ic-eyes"></em>
								<span class="text-white text-opacity-75 fs-4">841</span>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card card-insta flex-column-reverse text-white">
							<div class="card-badge"></div>
							<div class="card-summary">
								<p class="fs-4 fw-bold mb-2">라즈베리맛 호불호 조사</p>
								<em class="ic-eyes"></em>
								<span class="text-white text-opacity-75 fs-4">841</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<FullModal/>
</template>

<script>
import FullModal from '@/components/FullModal.vue'

export default {
  components: { FullModal },
	name: 'HomeView',
	data() {
		return {
			showModal: false
		}
	},
	mounted(){
	},
	methods: {
	},
}
</script>

<style>

</style>