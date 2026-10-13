import Badge from "./components/common/Badge/Badge";
import Button from "./components/common/Button/Button";
import Card from "./components/common/Card/Card";
import Input from "./components/common/Input/Input";
import Loader from "./components/common/Loader/Loader";
import Select from "./components/common/Select/Select";
import TextArea from "./components/common/TextArea/TextArea";

const App = () => {
  return (
    <main className="min-vh-100 py-5">
      <div className="container">
        <div className="mb-5">
          <Badge variant="orange">ReBusi</Badge>

          <h1 className="mt-3">
            Common <span className="text-gradient">Components</span>
          </h1>

          <p>React + TypeScript reusable UI components.</p>
        </div>

        <Card className="mb-4">
          <h3>Buttons</h3>

          <div className="d-flex flex-wrap gap-3">
            <Button>Primary</Button>

            <Button variant="secondary">Secondary</Button>

            <Button variant="outline">Outline</Button>

            <Button loading>Saving</Button>
          </div>
        </Card>

        <Card className="mb-4">
          <h3>Form Components</h3>

          <div className="row g-4">
            <div className="col-md-6">
              <Input
                id="businessName"
                label="Business Name"
                placeholder="Enter business name"
              />
            </div>

            <div className="col-md-6">
              <Select
                id="industry"
                label="Industry"
                placeholder="Select Industry"
                options={[
                  {
                    label: "Restaurant",
                    value: "restaurant",
                  },
                  {
                    label: "Manufacturing",
                    value: "manufacturing",
                  },
                  {
                    label: "Technology",
                    value: "technology",
                  },
                ]}
              />
            </div>

            <div className="col-12">
              <TextArea
                id="description"
                label="Description"
                placeholder="Enter business description"
              />
            </div>
          </div>
        </Card>

        <Card className="mb-4">
          <h3>Business Status</h3>

          <div className="d-flex flex-wrap gap-2">
            <Badge variant="orange">Premium</Badge>

            <Badge variant="recover">Profitable</Badge>

            <Badge variant="distress">Distressed</Badge>

            <Badge variant="success">Verified</Badge>
          </div>
        </Card>

        <Card dark className="mb-4">
          <h3>ReDefine Business</h3>

          <p className="mb-0">ReClaim India.</p>
        </Card>

        <Card>
          <h3>Loader</h3>

          <Loader text="Loading businesses..." />
        </Card>
      </div>

    </main>
  );
};

export default App;
