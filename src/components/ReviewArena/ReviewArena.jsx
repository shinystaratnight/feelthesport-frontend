import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import StarRating from "react-rating";
import Input from "../Input";
import StarFilled from "../../assets/images/star-filled.svg";
import StarEmpty from "../../assets/images/star-empty.svg";
// import StarRadioButtons from "../StarRadioButtons";
import "./ReviewArena.css";

const ReviewSchema = Yup.object().shape({
  rating: Yup.number()
    .integer()
    .min(1, "Rating field is required")
    .required("Rating field is required."),
  body: Yup.string()
    .min(10, "Review is too short.")
    .max(250, "Review is too long.")
    .optional("Review field is required.")
});

export default function ReviewArena({ submitReview }) {
  return (
    <Formik
      initialValues={{
        rating: 0,
        body: ""
      }}
      validationSchema={ReviewSchema}
      onSubmit={values => {
        submitReview(values);
      }}
      render={renderProps => (
        <form
          className="ReviewArena--container"
          onSubmit={renderProps.handleSubmit}
        >
          <p className="fnt-subtitle4 fgc-black">Rate product</p>

          <div className="ReviewArena--errors">
            {renderProps.errors.rating && renderProps.touched.rating && (
              <p className="fnt-text2 fgc-red fnt-bold">
                {renderProps.errors.rating}
              </p>
            )}
            {renderProps.errors.body && renderProps.touched.body && (
              <p className="fnt-text2 fgc-red fnt-bold">
                {renderProps.errors.body}
              </p>
            )}
          </div>
          <div>
            <StarRating
              initialRating={renderProps.values.rating}
              onChange={r => {
                renderProps.values.rating = r;
              }}
              name="rating"
              emptySymbol={
                <img
                  src={StarEmpty}
                  alt="empty star"
                  className="ReviewArena--star"
                />
              }
              fullSymbol={
                <img
                  src={StarFilled}
                  alt="filled star"
                  className="ReviewArena--star"
                />
              }
            />
          </div>
          <Input
            onChange={renderProps.handleChange}
            onBlur={renderProps.handleBlur}
            value={renderProps.values.body}
            name="body"
            labelPosition="top"
            maxLength="250"
            type="textarea"
          >
            Write your review here
          </Input>
          <button
            type="submit"
            className="btn btn6 fnt-text1 fnt-bold bgc-lightOrange fgc-black"
          >
            Submit
          </button>
        </form>
      )}
    />
  );
}
