<template>
  <div
    class="accordion accordion-flush bg-light text-start"
    id="accordionFlushExample"
  >
    <h2 class="fs-2 mb-4">User Guide</h2>
    <div class="accordion-boxes">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            What is My Booking Section?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            List of post you are already booked and include(fromCity, toCity,
            Description, Status, Button to Delete this book)
            <br />
            <b>Status</b> value is <b>waiting</b> when post owner still leaving
            it Or he rejected your book <br />
            <br />
            <b>Status</b> value is <b>accepting</b> when post owner accept your
            book and We will leave his number to you in the post table
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            What is My Post Request Section?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            A list of posts containing requests from users to share your trips
            with you(fromCity, toCity, Passenger name, Number of passengers with
            the user, Button to Delete this book or accept)
            <br />
            <br />
            <b>Accept</b> button to accept user book <br />

            <b>Ignore</b> button to refuse user book and <b>delete</b> this
            request
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            What Is Filtering Cities ?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <h5>
              To choose the start city and end city instead of browsing in all
              the posts First input to insert start city
            </h5>
            <p>
              Button All => to show all posts after you make filter and want to
              display all posts
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-collapseFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            * This post has expired *
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="flush-collapseFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <b
              >This means that the time for the trip has ended, and it is no
              longer available to deal with this post now</b
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
