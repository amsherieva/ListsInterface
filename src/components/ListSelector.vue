<template>
<div class="m-2 d-flex justify-content-evenly">
    <div class="accordion" id="accordionPanelsListSelector">
        <div class="accordion-item">
        <h2 class="accordion-header" id="panelsListSelector-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsListSelector-collapseOne" aria-expanded="false" aria-controls="panelsListSelector-collapseOne">
            Accordion Item #1
            </button>
        </h2>
        <div id="panelsListSelector-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsListSelector-headingOne">
            <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>

        <div class="accordion-item">
        <h2 class="accordion-header" id="panelsListSelector-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsListSelector-collapseTwo" aria-expanded="false" aria-controls="panelsListSelector-collapseTwo">
            Accordion Item #2
            </button>
        </h2>
        <div id="panelsListSelector-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsListSelector-headingTwo">
            <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>

        <div class="accordion-item">
        <h2 class="accordion-header" id="panelsListSelector-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsListSelector-collapseThree" aria-expanded="false" aria-controls="panelsListSelector-collapseThree">
            Accordion Item #3
            </button>
        </h2>
        <div id="panelsListSelector-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsListSelector-headingThree">
            <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
    </div> 
</div>
</template>
  
<script>
export default {};
</script>
  
<style scoped>

.accordion {
	--bs-accordion-btn-bg: white;
	--bs-accordion-active-bg: white;
}

.accordion-button button:active, .accordion-button button:focus, .accordion-button button:hover, .accordion-button:active, .accordion-button:focus, .accordion-button:hover {
    background-color: #e8eff7;
    box-shadow: 0 0 0 4px #c2d6e8;
    color: #0152a3;
}
</style>
  