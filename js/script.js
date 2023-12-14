document.addEventListener('DOMContentLoaded', function(){
    let images = [
        {img: "https://img.freepik.com/free-vector/hand-drawn-collage-background_23-2149590537.jpg?t=st=1702496789~exp=1702497389~hmac=05ae813dadab00c95e9cbede9ab823b30cc669c1900e3bc0eb52759e8ac5fb01"},
        {img: "https://img.freepik.com/free-photo/environmental-engineers-working-together_23-2149352243.jpg?t=st=1702497459~exp=1702498059~hmac=f6a2e532f6c4845651330a965d11d171bb5b9aed259d63779036ed914dfc478e"},
        {img: "https://img.freepik.com/premium-photo/portrait-two-business-people-discussing-work-during-meeting-luxurious-hotel-lobby-copy-space_236854-32175.jpg?t=st=1702487686~exp=1702488286~hmac=a10ecb2d15a989162eeeac912e58e19451b16ebb019bc716c5208dbb19d3e527&w=826"},
        {img: "https://img.freepik.com/free-photo/factory-workers-white-lab-suits-black-latex-gloves-working-with-some-modern-equipment-very-clean-room-panoramic-picture_645730-766.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/business-people-are-brainstorming_53876-137640.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/mirror-panoramic-photo-automobile-production-line-welding-car-body-modern-car-assembly-plant_645730-4.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/full-shot-woman-with-bicycle-outdoors_23-2149413735.jpg?t=st=1702476137~exp=1702476737~hmac=15b110490633cb35e30d9af28491f7c9d88cbb7d708a3fcfcc54acd17d116c90"},
        {img: "https://img.freepik.com/free-photo/full-shot-woman-posing-romantic-garden_23-2150316914.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406"},
        {img: "https://img.freepik.com/free-photo/sea-turtle-water-natural-sea-life-with-corals-1_1562-735.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/sea-turtle-water-natural-sea-life-with-corals-4_1562-737.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img: "https://img.freepik.com/free-photo/analog-portrait-beautiful-woman-posing-artistically-indoors_23-2149630182.jpg?t=st=1702477781~exp=1702478381~hmac=fa9a65e06d97c2989f8d4393f61a932fa77377af77f06f211518db7bd888b73e"},
        {img: "https://img.freepik.com/free-photo/beautiful-shot-corals-orange-fish-clear-blue-ocean_181624-14471.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/colorful-clown-fish-swim-african-reef-generated-by-ai_188544-36607.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/beautiful-endangered-american-jaguar-nature-habitat-panthera-onca-wild-brasil-brasilian-wildlife-pantanal-green-jungle-big-cats_475641-2191.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img: "https://img.freepik.com/free-photo/low-angle-man-sitting-truck_23-2149426506.jpg?t=st=1702475826~exp=1702476426~hmac=924831c3969fdf9ff709afbfa9e5ee55d93e0f4d9faf30e8a67c550fab9b78ae"},
        {img: "https://img.freepik.com/free-photo/person-enjoying-warm-nostalgic-sunset_52683-100695.jpg?t=st=1702477781~exp=1702478381~hmac=8d4c358c547b98168251ed5e28419dec728842919ab9c2aad852daa0b8ecf13d"},
        {img: "https://img.freepik.com/free-photo/close-up-construction-site-excavator_1112-1223.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/premium-photo/jaguar-stalking-grass-close-up-jaguar_372999-10619.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/animal-wild-nature-undomesticated-cat-close-up-portrait-generative-ai_188544-8150.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.2.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/premium-photo/yellow-flower-garden-plant-herb-vegetable-nature-photography-natural-flora-botanical-theme_409989-15057.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img: "https://img.freepik.com/free-photo/beautiful-snowy-landscape-with-mountains_181624-26450.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img: "https://img.freepik.com/free-photo/autum-treees-fog_463209-57.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img:"https://img.freepik.com/free-photo/still-life-cookies-ice-cream_23-2149637125.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406"},
        {img: "https://img.freepik.com/free-photo/elite-unit-special-forces-soldier-camouflage-uniform-holding-gun-with-flashlight-looking-sideways-studio-photo-against-dark-textured-wall_613910-20267.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/elite-unit-special-forces-soldier-camouflage-uniform-holding-gun-with-flashlight-looking-sideways-studio-photo-against-dark-textured-wall_613910-20267.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/war-conflict-landscape-with-tank_23-2149766322.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/still-life-cookies-ice-cream_23-2149637125.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406"},
        {img:"https://img.freepik.com/free-photo/woman-take-photo-with-her-smartphone-goreme-cappadocia-turkey_335224-562.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.2.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/top-view-animal-figurines-with-camera-photos-animal-day_23-2148668901.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.2.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/happy-black-parents-with-kids-making-video-call-smart-phone-home_637285-11501.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/hand-holding-coffee-cup-with-may-photograph-table_53876-16136.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/young-woman-white-evening-dress-light-green-with-bright-pink-makeup_343596-7389.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img:"https://img.freepik.com/free-photo/mockup-poster-frame-modern-interior-background-with-armchair-accessories-room_41470-5126.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.2.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/taking-picture_181624-36854.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/young-woman-white-evening-dress-light-green-with-bright-pink-makeup_343596-7389.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=ais"},
        {img:"https://img.freepik.com/free-photo/taking-picture_181624-36854.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.1.108780528.1699827406&semt=sph"},
        {img:"https://img.freepik.com/free-photo/woman-take-photo-with-her-smartphone-goreme-cappadocia-turkey_335224-562.jpg?size=626&ext=jpg&uid=R126321127&ga=GA1.2.108780528.1699827406&semt=sph"}
    ]

    let counter = 0;
    const container = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const gallery_img = document.querySelectorAll('.Gallery-Container img');
    const img_slideshow = document.querySelector('.slideshow img');

    container.addEventListener('click', function(event){
        let back = container.querySelector(".back"),
        next = container.querySelector(".next"),
        img = container.querySelector("img"),
        tgt = event.target;

        if(tgt == back){
            if(counter > 0){
                img.src = images[counter - 1].img
                counter--
            }else{
                img.src = images[images.length -1].img
                counter = images.length - 1
            }
        }else if(tgt == next){
            if(counter < images.length - 1){
                img.src = images[counter + 1].img
                counter++
            }else{
                img.src = images[0].img
                counter = 0
            }
        }
    })

    Array.from(gallery_img).forEach(img =>{
        img.addEventListener('click', event =>{
            const selected_image = +event.target.dataset.imgMostrar;
            // El +, es para convertir el string a entero
            
            img_slideshow.src = images[selected_image].img

            counter = selected_image

            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector(".closeBtn").addEventListener('click', ()=>{
        overlay.style.opacity = 0
        overlay.style.visibility = "hidden"
    })
})

