<script>
import { store } from '../store';
import AppYatchCard from './AppYatchCard.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppYatchCard,
    }
}

</script>

<template>
    <main>
        <section class="history">
            <div class="container-fluid">
                <div class=" d-flex justify-content-end ">
                    <div class="col-6 d-flex flex-column align-items-start gap-2 ">
                        <h1>Our History</h1>
                        <p class="bold">Founded by a world-widefamous yatch racer Alfred Tannenstrick, since its
                            inception back in
                            1977,
                            this company has been a wlcoming harbor for all yatching and sailing enthusiasts, from all
                            across the US!
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta beatae vero hic sint repellat
                            minus nulla pariatur. Quisquam omnis maiores sint, perferendis exercitationem asperiores
                            quis molestiae nisi totam a voluptatibus!</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore nobis cum
                            molestiae odio ipsa obcaecati tenetur quam, deleniti, tempora dolores quaerat corporis id,
                            possimus laboriosam culpa dignissimos. Ipsam, nemo?
                        </p>
                        <input type="submit" class="btn blue" value="Read More">
                    </div>

                </div>
            </div>
        </section>
        <section class="rip ">
            <div class="container">
                <div class="col-12 text-center  ">
                    <h1>Yatch Charters, Repairs <br> & Transportation, US-wide!</h1>
                    <input type="submit" class="btn blue " value="More Details">
                </div>
            </div>
        </section>
        <section class="services">
            <div class="container text-center ">
                <h1 class="pb-4">Services</h1>
                <hr>
                <div class="d-flex  flex-wrap  ">
                    <div class="col-4 ">
                        <div class="card_header d-flex justify-content-center align-items-center gap-3 p-3">
                            <div class="card_logo">
                                <i class="fa-solid fa-anchor"></i>
                            </div>
                            <h1>Yatch Rentals</h1>
                        </div>
                        <div class="card_body pt-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, modi. Consequuntur
                                doloremque beatae porro quasi alias optio nulla quam veniam necessitatibus impedit
                                sapiente atque, amet exercitationem obcaecati, rem cum autem.</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card_header d-flex justify-content-center align-items-center gap-3 p-3">
                            <div class="card_logo">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <h1>Management</h1>
                        </div>
                        <div class="card_body pt-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, modi. Consequuntur
                                doloremque beatae porro quasi alias optio nulla quam veniam necessitatibus impedit
                                sapiente atque, amet exercitationem obcaecati, rem cum autem.</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card_header d-flex justify-content-center align-items-center gap-3 p-3">
                            <div class="card_logo">
                                <i class="fa-solid fa-road"></i>
                            </div>
                            <h1>Transportation</h1>
                        </div>
                        <div class="card_body pt-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, modi. Consequuntur
                                doloremque beatae porro quasi alias optio nulla quam veniam necessitatibus impedit
                                sapiente atque, amet exercitationem obcaecati, rem cum autem.</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card_header d-flex justify-content-center align-items-center gap-3 p-3">
                            <div class="card_logo">
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <h1>Yatch Repair</h1>
                        </div>
                        <div class="card_body pt-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, modi. Consequuntur
                                doloremque beatae porro quasi alias optio nulla quam veniam necessitatibus impedit
                                sapiente atque, amet exercitationem obcaecati, rem cum autem.</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card_header d-flex justify-content-center align-items-center gap-3 p-3">
                            <div class="card_logo">
                                <i class="fa-solid fa-anchor"></i>
                            </div>
                            <h1>Yatch Upgrades</h1>
                        </div>
                        <div class="card_body pt-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, modi. Consequuntur
                                doloremque beatae porro quasi alias optio nulla quam veniam necessitatibus impedit
                                sapiente atque, amet exercitationem obcaecati, rem cum autem.</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card_header d-flex justify-content-center align-items-center gap-3 p-3">
                            <div class="card_logo">
                                <i class="fa-solid fa-anchor"></i>
                            </div>
                            <h1>Corporate Events</h1>
                        </div>
                        <div class="card_body pt-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, modi. Consequuntur
                                doloremque beatae porro quasi alias optio nulla quam veniam necessitatibus impedit
                                sapiente atque, amet exercitationem obcaecati, rem cum autem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="yatch">
            <div class="container-sm text-center ">
                <h1 class="text-light">Our Yatchs </h1>
                <hr>
                <div class="d-flex flex-wrap ">
                    <AppYatchCard :item="store" />
                </div>
                <button class=" btn btn-outline-light mt-3">View All</button>
            </div>

        </section>
        <section class="rally">
            <div class="container-lg">
                <div class="d-flex flex-column gap-3  align-items-start">
                    <div class="col-6">
                        <h1 class="title">Enjoy</h1>
                        <p class="paragraph">WORLD RALLY 2017-19</p>
                        <p> Explore some of the most beautiful regions of the world.Make your dreams <br> come true and
                            join the Yatchtec Rally 2017-19 
                        </p>
                        <button class="btn blue">Learn more</button>

                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<style lang="scss" scoped>
@use 'bootstrap';

.history {
    padding-top: 150px;
    background-image: url('/img/bg4.jpg');
    background-position: top;
    background-size: cover;

    h1 {
        padding-bottom: 24px;
        border-bottom: 1px solid grey;

        border-color: var(--light-blue);

    }

    p {
        max-width: 600px;
        font-size: 18px;
        padding-bottom: 10px;

    }

}

.bold {
    font-weight: bold;
}

.rip {
    background-image: url('/img/bg5.jpg');
    background-position: center;
    background-size: cover;
    position: relative;

    h1 {
        font-size: 90px;
        color: var(--white);
        // margin-top: 30px;
        margin-bottom: 30px;

    }

    .col-12 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }



}

.services {
    background-image: url('/img/bg6.jpg');
    background-position: top;
    background-size: cover;
    padding-top: 50px;

    .container {
        padding-top: 100px;
    }

    .card_logo {
        color: white;
        font-size: 24px;
        border: 1px solid black;
        padding: 8px;
        line-height: 14px;
        aspect-ratio: 1 / 1;
        border-radius: 999px;
        background-color: var(--light-blue);
    }
}

.yatch {
    background-color: var(--light-blue);
    height: 1080px;
    padding: 20px;
}

.rally {
    
    background-image: url('/img/bg7.jpg');
    background-position: center;
    background-size: cover;
    color: var(--white);
    padding-top: 350px;
    

    .rally_container {
        max-width: 1024px;
        margin: 0 auto;
        

    }
}
</style>