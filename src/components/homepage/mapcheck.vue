<template>
<div class="mapcheck-box shadow mx-auto p-3" style="width:500px">
    <div class="row">
        <div class="col-12">
            <div class="mg-err p-2 bg-danger mt-3 fs-4">
                <p>{{err}}</p>
            </div>
        </div>
        <div class="col-12">
            <div class="get-ifno p-3">
                <div class="input-field position-relative">
                    <input type="text" class="form-control" placeholder="Enter Your Adress" v-model="userinfo">
                    <i class="bi bi-circle-fill fs-3 position-absolute" @click="getlocation"></i>
                </div>
                <div class="btn-box mt-3 text-start">
                    <button class="btn py-2 px-4  btn-main-bg" >Go</button>
                </div>
                
            </div>
            
        </div>
    </div>
</div>

</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            userinfo:'',
            err:""
        }
    },
    methods:{
        getlocation(){
            this.err= ''
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((p)=>{
                    this.getadressform(p.coords.latitude,p.coords.longitude)
                },
                error => {
                    this.err = error.message
                })
            }else{
                console.log("your browser dont't support ")
            }
        },
        getadressform(lat,long){
            axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat + "," +long + "&key=AIzaSyB9moLDCr0EMjrv9KW5xkULezgDupB8YZA").then(
                response =>{
                    if(response.data.error_message){
                        console.log(response.data.error_message)
                    }else{
                        console.log(response.data.result[0].formatted_address)
                    }
                }
            ).catch(
                err =>{
                    console.log(err)
                }
            )
        }
    }
}
</script>

<style>
.bi-circle-fill{
    top:5px;
    cursor: pointer;
    right: 10px;
}
</style>