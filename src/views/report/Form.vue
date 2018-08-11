<template>
  <div class="container">
    <section
      class="section">
      <h1 class="title">集会人数登録</h1>
      <hr>
      <div class="columns">
        <div class="column form-column">
          <div class="field">
            <label class="label">Name</label>
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Username</label>
            <p class="control has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma">
              <span class="icon is-small is-left">
                <i class="fa fa-user"/>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"/>
              </span>
            </p>
            <p class="help is-success">This username is available</p>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="text"
                placeholder="Email input"
                value="hello@">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"/>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-warning"/>
              </span>
            </p>
            <p class="help is-danger">This email is invalid</p>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <p class="control">
              <span class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <p class="control">
              <textarea
                class="textarea"
                placeholder="Textarea"/>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="checkbox">
                <input type="checkbox"> I agree to the
                <a href="#">terms and conditions</a>
              </label>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="radio">
                <input
                  type="radio"
                  name="question"> Yes
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="question"> No
              </label>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">Submit</button>
            </p>
            <p class="control">
              <button class="button is-link">Cancel</button>
            </p>
          </div>
          <br>
          <h4 class="subtitle"> Disabled </h4>
          <hr>
          <div class="field">
            <p class="control">
              <input
                class="input"
                disabled=""
                placeholder="Disabled input"
                type="text">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <textarea
                class="textarea"
                disabled=""
                placeholder="Disabled textarea"/>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="checkbox is-disabled">
                <input
                  disabled=""
                  type="checkbox"> Remember me
              </label>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="radio is-disabled">
                <input
                  disabled=""
                  name="question"
                  type="radio"> Yes
              </label>
              <label class="radio is-disabled">
                <input
                  disabled=""
                  name="question"
                  type="radio"> No
              </label>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button
                class="button is-primary"
                disabled=""> Submit
              </button>
            </p>
            <p class="control">
              <button
                class="button"
                disabled=""> Cancel
              </button>
            </p>
          </div>
          <br>
          <h3 class="title"> Horizontal Form </h3>
          <hr>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">From</label>
            </div>
            <div class="field-body">
              <div class="field is-grouped">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    placeholder="Name">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"/>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input
                    class="input is-success"
                    type="email"
                    placeholder="Email"
                    value="alex@smith.com">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"/>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fa fa-check"/>
                  </span>
                </p>
                <p class="help is-success">This email is correct</p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Department</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Business development</option>
                      <option>Marketing</option>
                      <option>Sales</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Already a member?</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="radio">
                    <input
                      type="radio"
                      name="member"> Yes
                  </label>
                  <label class="radio">
                    <input
                      type="radio"
                      name="member"> No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-danger"
                    type="text"
                    placeholder="e.g. Partnership opportunity">
                </div>
                <p class="help is-danger">
                  This field is required
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Question</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Explain how we can help you"/>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br>
          <h3 class="title">File</h3>
          <hr>
          <div class="field">
            <div class="file">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload"/>
                  </span>
                  <span class="file-label">
                    Choose a file…
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="field">
            <div class="file has-name">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload"/>
                  </span>
                  <span class="file-label">
                    Choose a file…
                  </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>
          <div class="field">
            <div class="file is-primary">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload"/>
                  </span>
                  <span class="file-label">
                    Primary file…
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="file is-info has-name">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload"/>
                  </span>
                  <span class="file-label">
                    Info file…
                  </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="file is-warning is-boxed">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-cloud-upload"/>
                  </span>
                  <span class="file-label">
                    Warning file…
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="file is-danger has-name is-boxed">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-cloud-upload"/>
                  </span>
                  <span class="file-label">
                    Danger file…
                  </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ReportForm'
  }
</script>

<style lang="scss" scoped>
  .form-column {
    max-width: 700px;
  }
</style>
