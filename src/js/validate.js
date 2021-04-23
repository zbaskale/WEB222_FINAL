function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  var latitude = document.querySelector("#latitude").value;
  var longitude = document.querySelector("#longitude").value;
  var latitude_isValid = false;
  var longitude_isValid = false;

  if (
    !isNaN(latitude) &&
    parseInt(latitude) >= -90 &&
    parseInt(latitude) <= 90
  ) {
    document.querySelector("#error_latitude").style.display = "none";
    latitude_isValid = true;
  } else {
    document.querySelector("#error_latitude").style.display = "inline-block";
  }

  if (
    !isNaN(longitude) &&
    parseInt(longitude) >= -180 &&
    parseInt(longitude) <= 180
  ) {
    document.querySelector("#error_longitude").style.display = "none";
    longitude_isValid = true;
  } else {
    document.querySelector("#error_longitude").style.display = "inline-block";
  }

  if (!latitude_isValid || !longitude_isValid) {
    event.preventDefault();
  }

  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
