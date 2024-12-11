<template>
  <div class="container">
    <div class="navbar">
      <div class="header">
        <h3>Header</h3>
      </div>
      <div class="nav">
        <RouterLink class="link" active-class="active" to="/" @click="changeToNav('Page1')">Page1</RouterLink>
        <RouterLink class="link" active-class="active" to="/page2" @click="changeToNav('Page2')">Page2</RouterLink>
        <RouterLink class="link" active-class="active" to="/page3" @click="changeToNav('Page3')">Page3</RouterLink>
      </div>
    </div>

    <div class="section_body">
      <div class="left">
        <div @click="handleSect()" ><Menu /></div>
        <div @click="handleSect('Section1', cont)" ><Section1 /></div>
        <div @click="handleSect('Section2', cont)" ><Section2 /></div>
        <div @click="handleSect('Section3', cont)" ><Section3 /></div>
        <div @click="handleSect('Section4', cont)" ><Section4 /></div>
      </div>
      <div class="right">
        <div class="c1">
          <content /> {{ cont }}
        </div>
        <div class="c2">
          <span>{{ sect }}</span>
        </div>
      </div>
    </div>

    <div class="footer">Footer</div>

    <RouterView />
  </div>
</template>



<script>
import content from '@/components/Content.vue';
import Menu from '@/components/Menu.vue';
import Section1 from '@/components/Section1.vue';
import Section2 from '@/components/Section2.vue';
import Section3 from '@/components/Section3.vue';
import Section4 from '@/components/Section4.vue';

export default {
  components: {
    content,
    Section1,
    Section2,
    Section3,
    Section4,
    Menu
  },
  data() {
    return {
      cont: 'page1', // Keeps track of the current page (e.g., Page1, Page2)
      isNavbarActive: false, 
      sect: '', // Keeps track of the current section text
    };
  },
  methods: {
    changeToNav(page) {
      this.cont = page; // Update the current page name
      this.isNavbarActive = true; 
    },
    handleSect(sectionName, pageName) {
      this.sect = `This is ${sectionName} ${pageName}`; // Construct and update `sect`
    }
  }
};
</script>



<style scoped>
.container{
  width: 500px;
}
.link{
  color: #000;
}

.active {
  color: #1faf1f;
  font-weight: bold;
}

.navbar{
  display: flex;
  width: 100%;
  border: #000 1px solid;
  opacity: 1;
}
.nabar:not([v-if]){
  opacity: 0.5;
  pointer-events: none;
}
.header{
  width: 60%;
  display: flex;
  align-items: center;
}
.nav{
  width: 40%;
  display: flex;
  align-items: center;
}
.section_body{
  display: flex;
  width: 100%;
}
.left{
  display: flex;
  flex-direction: column;
  width: 30%;

}
.left div{
  border: #000 1px solid;
  padding: 5px;

}
.right{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  border: #000 1px solid;
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: #000 1px solid;
}
</style>