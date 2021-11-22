<template>
    <section>
        <p>Coach Info Component {{cid}}</p>
    </section>
</template>

<script>
export default {
    props:['cid'],
    data(){
        return{
            coachArr: []
        };
    },
    computed:{
        idInt(){
            return parseInt(this.cid)
        }
    },
    created(){
        console.log(this.idInt)
        this.coachArr = this.$store.getters['coaches/coaches'];
         const selected = this.coachArr.filter(coach =>
         coach.id == this.cid
         )
        console.log(this.coachArr)
        console.log(selected)
    }
}
</script>