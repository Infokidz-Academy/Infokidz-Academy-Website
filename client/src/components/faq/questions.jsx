import React, { Suspense } from "react";
import "../../styling/faq/questions.css";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const Question = React.lazy(() => import("./question"));

function Questions() {
  return (
    <div id="faq-container">
      <div id="faq-title">Frequently Asked Questions</div>
      <div id="accordion-container">
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="How do I sign-up for Infokidz Tutoring?">
            Register on our{" "}
            <Link to="/register" className="links">
              {" "}
              website
            </Link>
            . Infokidz will contact you for further details and availability of
            the start date.{" "}
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="How does it work?">
            <Link to="/how-infokidz-works" className="links">
              How it Works
            </Link>
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Do you provide any FREE try-out sessions?">
            Yes, please fill out the{" "}
            <Link to="/register" className="links">
              registration form
            </Link>{" "}
            and select a FREE try-out session for the preferred subject. We
            provide one free try-out class for each subject so that students and
            parents can experience the teaching process before committing.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="How do I sign up for regular classes after the free try-out class?">
            Please call{" "}
            <a href="tel:780-966-7700" className="links">
              +1 780-966-7700
            </a>{" "}
            or fill out the{" "}
            <Link to="/contact" className="links">
              contact
            </Link>{" "}
            form to let us know your preferences.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="What subjects do you offer?">
            Infokidz currently teaches Mathematics and English Language Arts for
            Grades 3 to 12. Learn more about it{" "}
            <Link to="/programs" className="links">
              here
            </Link>
            .
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Do you follow school curriculum?">
            Yes, Infokidz follows Canadian school curriculum. Tutors also help
            students with the current topics being taught at their school.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Where are the tutoring sessions held?">
            Online tutoring occurs through{" "}
            <a href="https://meet.google.com/" className="links">
              Google meet
            </a>
            .
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Does Infokidz provide homework or assignments for practice?">
            Infokidz provides homework for Math. For ELA, parents/students
            should ask their tutor.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Is there a drop-in class?">
            No, we do not provide drop-in classes.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Do we have to sign-up for both Math and ELA subjects for tutoring?">
            No, you can choose either of the subjects for tutoring.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Who are the tutors?">
            Most of our tutors are current students at university either
            pursuing their undergraduate, Master's, or PhD studies. They are
            enthusiastic and passionate about working with students, and love to
            create a fun, engaging classroom environment.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="How much does tutoring cost?">
            Our tutoring program includes 6 hours of Math and 6 hours of English
            LA tutoring per month. This is a total of 12 hours of tutoring for
            $120 per month. If you would like to opt for one subject, our fee is
            $75 per month, which consists of 6 hours (1.5 hours every week) of
            tutoring per month.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="How are payments made for tutoring?">
            Payments can be made by filling out the{" "}
            <Link to="/direct-deposit" className="links">
              direct deposit form
            </Link>{" "}
            or by e-transfer.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Do I need to sign a contract for tutoring?">
            There is no contract to sign, but a minimum two-month subscription
            is required for new registrations and a 30 days notice to cancel the
            service.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Will I get the same tutor every time?">
            Yes. In temporary instances where this is not feasible, we assign
            alternate tutors.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="What if a tutoring option is not listed on your website?">
            Please call{" "}
            <a href="tel:780-966-7700" className="links">
              +1 780-966-7700
            </a>{" "}
            or fill out the{" "}
            <Link to="/contact" className="links">
              contact
            </Link>{" "}
            form to let us know your preference and we will contact you to
            discuss your specific requirements.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title=" Do you provide alternate classes if students miss one?">
            We try to provide an alternate class but this is not always
            possible.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Do you provide an assessment?">
            Yes, at the start of each school year and when new students
            register, we complete an assessment.
          </Question>
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <Question title="Who do I contact if I have a question or concern?">
            Please call{" "}
            <a href="tel:780-966-7700" className="links">
              +1 780-966-7700
            </a>{" "}
            or fill out the{" "}
            <Link to="/contact" className="links">
              contact
            </Link>{" "}
            form.
          </Question>
        </Suspense>
      </div>
    </div>
  );
}

export default Questions;
