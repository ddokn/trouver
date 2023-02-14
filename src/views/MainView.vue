<template>
	<div 
	class="container vh-100 position-relative"
	:class=" isLogin == true ? 'active' : '' "
	>
		<div class="row">
			<div class="col-12">
				<div class="logo-wrap text-white align-items-center d-flex flex-column">
					<p class="text-18 fw-bold mb-2">여행, 다시 새롭게!</p>
					<img src="../assets/logo.svg" width="245" height="68" alt="트루버 로고">
				</div>
				<div class="btn-wrap d-flex flex-column align-items-center text-white">
					<div v-if="isLogin == false">
						<button type="button" class="btn" @click="isLogin = true">여행시작</button>
					</div>
					<div v-else>
						<p class="text-18 text-center mb-4">여행, 다시 새롭게!<br/>로그인하고 성향에 맞는 맞춤 여행을 즐기세요!</p>
						<button type="button" class="btn btn-kakao">카카오 로그인</button>
						<button type="button" class="btn btn-google">구글 로그인</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MainView',
	data(){
		return {
			isLogin: false,
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	background: url(../assets/images/main_bg.png) no-repeat;
	background-size: cover;
	&.active::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.17) 0%, rgba(0, 0, 0, 0.595) 47.92%, rgba(0, 0, 0, 0.765) 100%);
		position: absolute;
		top: 0;
		left: 0;
	}
	.logo-wrap {
		margin-top: 122px;
		position: relative;
		z-index: 1;
	}
	.btn-wrap {
		width: 100%;
		padding-left: 36px;
		padding-right: 36px;
		position: absolute;
		bottom: 100px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		.btn {
			font-size: 1.8rem;
			font-weight: 500;
			color: #000;
			border-radius: 30px;
			width: 158px;
			background: #fff;
			border-radius: 30px;
			height: 52px;
			&-kakao {
				font-weight: 700;
				width: 100%;
				border-radius: 6px;
				background: #FEE500;
			}
			&-google {
				font-weight: 700;
				width: 100%;
				margin-top: 8px;
				color: #4285F4;
				border-radius: 6px;
			}
		}
	}
}
</style>