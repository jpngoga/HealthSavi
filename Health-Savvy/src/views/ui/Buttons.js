import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Forms = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Add new medecine
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="1">Medecine name</Label>
                <Input
                  id="1"
                  name="medecineName"
                  placeholder="name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="2">Medecine ID</Label>
                <Input id="2" name="medecineId" placeholder="ID" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="3">Number in store</Label>
                <Input
                  id="3"
                  name="quantity"
                  placeholder="quantity"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="4">Description</Label>
                <Input
                  id="4"
                  name="description"
                  placeholder="description"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="5">Disease</Label>
                <Input
                  id="5"
                  name="disease"
                  placeholder="disease"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="6">categorie</Label>
                <Input
                  id="6"
                  name="categories"
                  placeholder="medicine category"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Medicine Image</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>Make sure you upload the correct image</FormText>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" />{" "}
                <Label check>I am sure the above information are correct</Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
