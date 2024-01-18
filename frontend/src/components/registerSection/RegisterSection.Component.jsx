import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../services/auth.service";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  repeatPassword: Yup.string().required("Repeat password is required"),
  subscribeToNewsLetter: Yup.boolean(),
  gender: Yup.string().required("Gender is required"),
  status: Yup.boolean().required("Status is Required"),
  yearOfBirth: Yup.date().min(new Date().getFullYear()),
});

const RegisterSectionComponent = () => {
  const navigate = useNavigate();

  let date = new Date().getFullYear();

  return (
    <div className="row">
      <Formik
        initialValues={{
          username: "",
          password: "",
          repeatPassword: "",
          subscribeToNewsLetter: false,
          gender: "",
          status: false,
          yearOfBirth: date,
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log(values);
          registerUser(values)
            .then((res) => {
              console.log("Response register...", res);
              alert("Successfully registered. Redirection to account page.");
              navigate("/");
            })
            .catch((err) => {
              console.log("Error...", err);
            });
        }}
      >
        {({ error, touched }) => {
          return (
            <Form className="form-wrapper mt-3">
              <div className="col-3">
                <Field
                  className="form-control"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <ErrorMessage name="username" />

                <Field
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />

                <Field
                  className="form-control"
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat Password"
                />
                <ErrorMessage name="repeatPassword" />

                <div className="form-control">
                  <div
                    className="ms-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field type="checkbox" name="subscribeToNewsLetter" />
                    <label className="ms-3">Subscribe To News Letter</label>
                  </div>
                </div>

                <div className="custom-control custom-radio form-control">
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    className="ms-4"
                  >
                    <Field id="male" type="radio" name="gender" value="Male" />
                    <label className="ms-2" htmlFor="male">
                      Male
                    </label>
                    <Field
                      id="female"
                      type="radio"
                      name="gender"
                      value="Female"
                      className="ms-4"
                    />
                    <label htmlFor="female" className="ms-2">
                      Female
                    </label>
                    <Field
                      id="other"
                      type="radio"
                      name="gender"
                      value="Other"
                      className="ms-4"
                    />
                    <label htmlFor="other" className="ms-2">
                      Other
                    </label>
                  </div>
                  <ErrorMessage name="gender" />
                </div>

                <Field as="select" name="status" className="form-select">
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </Field>
                <ErrorMessage name="status" />

                <div className="form-control text-center">
                  <label className="ms-3" htmlFor="yearOfBirth">
                    Date of birth:{" "}
                  </label>
                  <Field className="ms-3" name="yearOfBirth">
                    {({ field, form }) => (
                      <DatePicker
                        id="yearOfBirth"
                        {...field}
                        selected={field.value}
                        onChange={(date) =>
                          form.setFieldValue(field.name, date)
                        }
                        placeholder="Date"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="date" component="div" />
                </div>

                <button className="btn btn-primary form-control" type="submit">
                  Register
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterSectionComponent;
