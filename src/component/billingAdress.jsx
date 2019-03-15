import React, { Component } from "react";

class BillingAdress extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Billing adress</h4>
        <form action="" className="need-validation" noValidate>
          <div className="form-row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Username"
                required
              />
              <div class="invalid-feedback" style={{ width: "100%" }}>
                Your username is required.
              </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input type="email" className="form-control" id="email" />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" required />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address2">
              Address 2 <span className="text-muted">(Optional)</span>
            </label>
            <input type="text" className="form-control" id="address2" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 mb-3">
              <label htmlFor="country">Country</label>
              <select
                name="countries"
                id="country"
                className="form-control"
                required
              >
                <option value="" className="selected">
                  Choose...
                </option>
                <option value="Swizerland">Swizerland</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Belgium">Belgium</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>
            <div className="form-group col-md-4 mb-3">
              <label htmlFor="state">State</label>
              <select
                name="states"
                id="state"
                className="form-control"
                required
              >
                <option value="" className="selected">
                  Choose...
                </option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div className="form-group col-md-4 mb-3">
              <label htmlFor="zip">Zip</label>
              <input type="text" className="form-control" id="zip" required />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <div className="dropdown-divider mb-4" />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkchippingadress"
            />
            <label htmlFor="checkchippingadress" className="form-check-label">
              Shiping address is the same as my billing address
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="saveinfo" />
            <label htmlFor="saveinfo" className="form-input-label">
              Save the informations for next time
            </label>
          </div>
          <h4 className="mb-3">Payment</h4>
          <div className="dropdown-divider mb-4" />
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id="creditCard"
              checked
              required
            />
            <label htmlFor="creditCard" className="form-check-label">
              Credit card
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="debitCard"
              required
            />
            <label htmlFor="debitCard" className="form-check-label">
              Debit card
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              id="paypal"
              required
            />
            <label htmlFor="paypal" className="form-check-label">
              PayPal
            </label>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="cardName">Name on card</label>
              <input
                type="text"
                className="form-control"
                id="cardName"
                aria-describedby="cardNameHelp"
                required
              />
              <small id="cardNameHelp" className="form-text text-muted">
                Full name as display in card.
              </small>
              <div class="invalid-feedback">Name on card is required</div>
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="cardNumber">Credit card number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                required
              />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3 mb-3">
              <label htmlFor="expiration">Expiration</label>
              <input
                type="text"
                className="form-control"
                id="expiration"
                required
              />
              <div class="invalid-feedback">Expiration date required</div>
            </div>
            <div className="form-group col-md-3 mb-3">
              <label htmlFor="cvv">CVV</label>
              <input type="text" className="form-control" id="cvv" required />
              <div class="invalid-feedback">Security code required</div>
            </div>
          </div>
          <div className="dropdown-divider mb-4" />

          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Continue to checkout
          </button>
        </form>
      </div>
    );
  }
}

export default BillingAdress;
