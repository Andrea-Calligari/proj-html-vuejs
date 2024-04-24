<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: Object,
        
    }
}
</script>
<template>
    <div  v-for="image in item.images_path" class="col-3 p-3" >
        <div class="card_services ">
            <img :src="image.path" alt="">
            <div class="overlay">
                <div class="icon">
                    <i class="fa-solid fa-anchor"></i>
                </div>
                <h3 class="text-light">Express</h3>
            </div>
        </div>
    </div>

</template>
<style scoped lang="scss">

.card_services{
        border: 1px solid grey ;
        position: relative;
    }

    .overlay{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        .icon{
            font-size: 50px;
            color: var(--light-blue);
        }


    }
    .overlay:hover{
        opacity: 1;
        border: 10px solid var(--light-blue);
        transition: 500ms;
       
        
    }
</style>