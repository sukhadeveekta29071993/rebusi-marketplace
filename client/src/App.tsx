import { useState } from "react";

import {
  Badge,
  Button,
  Card,
  Checkbox,
  EmptyState,
  ErrorMessage,
  Input,
  Loader,
  Radio,
  Select,
} from "./components/common";

const App = () => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="fw-bold">ReBusi Common Components</h1>

        <p className="text-muted">Common reusable components.</p>
      </div>

      <div className="row g-4">
        {/* Button */}
        <div className="col-12">
          <Card>
            <div className="p-4">
              <h5>Button</h5>

              <div className="d-flex gap-2 flex-wrap">
                <Button className="btn-primary">Primary</Button>

                <Button className="btn-secondary">Secondary</Button>

                <Button className="btn-outline-primary">Outline</Button>

                <Button className="btn-danger" loading>
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Input */}
        <div className="col-12 col-lg-6">
          <Card>
            <div className="p-4">
              <h5>Input</h5>

              <Input
                id="businessName"
                label="Business Name"
                placeholder="Enter business name"
                required
              />

              <Input
                id="email"
                label="Email"
                placeholder="Enter email"
                error="Please enter a valid email."
              />
            </div>
          </Card>
        </div>

        {/* Select */}
        <div className="col-12 col-lg-6">
          <Card>
            <div className="p-4">
              <h5>Select</h5>

              <Select id="industry" label="Industry">
                <option value="">Select Industry</option>

                <option value="restaurant">Restaurant</option>

                <option value="retail">Retail</option>

                <option value="manufacturing">Manufacturing</option>
              </Select>
            </div>
          </Card>
        </div>

        {/* Badge */}
        <div className="col-12">
          <Card>
            <div className="p-4">
              <h5>Badge</h5>

              <div className="d-flex gap-2">
                <Badge>Verified</Badge>

                <Badge variant="recover">Recovery</Badge>

                <Badge variant="distress">Distressed</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Checkbox / Radio */}
        <div className="col-12 col-lg-6">
          <Card>
            <div className="p-4">
              <h5>Checkbox</h5>

              <Checkbox id="terms" label="I agree to Terms & Conditions" />
            </div>
          </Card>
        </div>

        <div className="col-12 col-lg-6">
          <Card>
            <div className="p-4">
              <h5>Radio</h5>

              <div className="d-flex gap-4">
                <Radio
                  id="mobileOtp"
                  name="loginType"
                  value="otp"
                  label="Mobile OTP"
                />

                <Radio
                  id="emailLogin"
                  name="loginType"
                  value="email"
                  label="Email"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Loader */}
        <div className="col-12 col-lg-6">
          <Card>
            <div className="p-4">
              <h5>Loader</h5>

              <Button
                className="btn-primary"
                onClick={() => setShowLoader((previous) => !previous)}
              >
                Toggle Loader
              </Button>

              {showLoader && <Loader text="Loading businesses..." />}
            </div>
          </Card>
        </div>

        {/* Error */}
        <div className="col-12 col-lg-6">
          <Card>
            <div className="p-4">
              <h5>Error Message</h5>

              <ErrorMessage message="Unable to load businesses." />
            </div>
          </Card>
        </div>

        {/* Empty */}
        <div className="col-12">
          <Card>
            <EmptyState
              icon="bi-building"
              title="No businesses found"
              message="Try changing your filters."
              action={<Button className="btn-primary">Reset Filters</Button>}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
