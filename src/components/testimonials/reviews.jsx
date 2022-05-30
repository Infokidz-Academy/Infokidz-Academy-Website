import "../../styling/testimonials/reviews.css";

function Reviews() {
  return (
    <div id="reviews">
      <h1 id="reviews-title">Don't just take our word for it:</h1>
      <div id="reviews-container">
        <h2 className="review-description" id="testimonials-one">
          “Highly recommend this establishment.{" "}
          <strong>Good quality and at reasonable prices!</strong> Tutors are
          caring and supportive. We especially like Erin, who has been teaching
          Language Arts for our child.” - Maulet
        </h2>
        <h2 className="review-description" id="testimonials-two">
          “Great program for kids who are facing challenges in studies and want
          to improve their skills.{" "}
          <strong>Tutors are encouraging, patient and kind.</strong>” - Rakesh
        </h2>
        <h2 className="review-description" id="testimonials-three">
          “I put my daughter in tutoring as she was struggling in her Math and
          Language [arts]. I called this business along with many other
          businesses and private tutoring. This company has been the most
          accommodating to my schedule and the most bang for my buck.{" "}
          <strong>
            My daughter is doing great in her subjects and she loves going to
            the tutor.
          </strong>{" "}
          I highly recommend this business.” - Elaine
        </h2>
        <h2 className="review-description" id="testimonials-four">
          “Infokidz Academy has helped my daughter a lot.{" "}
          <strong>My daughter shows more interest in her studies now</strong>,
          especially in Mathematics.” - Judith
        </h2>
        <h2 className="review-description" id="testimonials-five">
          “[Francisco]'s great, we are{" "}
          <strong>very impressed over how he has helped my son</strong> for
          Mathematics.” - Ifrah
        </h2>
      </div>
    </div>
  );
}

export default Reviews;
