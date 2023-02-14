<template>
  <router-view/>
  <fixed-footer
    v-if="this.$route.path != '/'"
    :menu="menus"
  />
</template>

<script>
import FixedFooter from './components/FixedFooter.vue'


export default {
  name: 'App',
  components: {
    FixedFooter,
  },
  data(){
    return {
      menus: [
        {
          'name': '홈',
          'url': 'home',
        },
        {
          'name': '여행일정',
          'url': 'plan',
        },
        {
          'name': '피드',
          'url': 'feed',
        },
        {
          'name': 'MY',
          'url': 'mypage',
        }
      ],
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>

</style>
